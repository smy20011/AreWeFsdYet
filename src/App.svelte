<script lang="ts">
  import cdf from "@stdlib/stats-base-dists-chisquare-cdf";
  import * as _ from 'lodash';

  let data = $state([]);
  const WAYMO_CDE_MILES = 18000;

  async function loadData() {
    const response = await fetch("https://raw.githubusercontent.com/smy20011/ScrapingFsd/refs/heads/main/extracted/latest.json");
    const json = await response.json();
    data = json;
  }

  let fsdProb = $derived.by(() => {
    if (data.length == 0) {
      return {};
    }

    const majorVersionData = data.map(d => ({
      miles: d['city_miles'] as number,
      failure: Math.round(d['runs'] * (1 - d['success_rate'])),
      version: (d['version'] as string).split('.').slice(0, 2).join(".")
    }));

    const grouped = _.groupBy(majorVersionData, 'version');
    const mapped = _.mapValues(grouped, (value) => {
      const totalMiles = value.map(i => i.miles).reduce((a, b) => a + b);
      const totalFailure = value.map(i => i.failure).reduce((a, b) => a + b);
      return {miles: totalMiles, failure: totalFailure};
    });

    const latestMajorVersion = _.max(_.keys(mapped));
    if (!latestMajorVersion) {
      return {};
    }
    const verionData = mapped[latestMajorVersion];

    return {
      version: latestMajorVersion,
      prob: cdf(verionData.miles / WAYMO_CDE_MILES, verionData.failure)
    };
  });

  $effect(() => {
    loadData();
  });

</script>

<main>
  <h1>The latest version of FSD is {fsdProb.version}</h1>
  <h2>The probability of FSD achieving 18,000 miles per critical disengagement is {(fsdProb.prob ?? 0) * 100} %</h2>
</main>

<style>
</style>
