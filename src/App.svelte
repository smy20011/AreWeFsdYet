<script lang="ts">
  import cdf from "@stdlib/stats-base-dists-chisquare-cdf";
  import Katex from "./Katex.svelte";
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
      prob: cdf(2 * verionData.miles / WAYMO_CDE_MILES, 2 * verionData.failure),
      failure: verionData.failure,
      miles: verionData.miles,
    };
  });

  let headline = $derived.by(() => {
    let prob = fsdProb.prob ?? 0;
    if (prob < 1.0 / 1000000) {
      return "Practically Impossible";
    }
    if (prob < 1.0 / 100000) {
      return "Almost Impossible";
    }
    if (prob < 1.0 / 10000) {
      return "Extremely Unlikely";
    }
    if (prob < 1.0 / 1000) {
      return "Highly Unlikely";
    }
    if (prob < 1.0 / 100) {
      return "Very Unlikely";
    }
    if (prob < 1.0 / 10) {
      return "Unlikely, but have hope";
    }
    if (prob < 1.0 / 2) {
      return "Half Way";
    }
    return "Yes!"
  });

  $effect(() => {
    document.title = headline;
  });

  $effect(() => {
    loadData();
  });

</script>

<main>
  <h1>{headline}</h1>
  <h2>The probability of FSD {fsdProb.version} achieving 18,000 miles per critical disengagement is 1 in {Intl.NumberFormat().format(Math.round(1 / (fsdProb.prob ?? 1)))}.</h2>
  <h3>How does it works?</h3>
  <p>Math!!!</p>
  <p>
    <span>Random variable </span><Katex math={'V = \\frac{2 TestTime}{MTTF}'}></Katex><span>is distributed </span><Katex math={'\\chi^2'} /><span> with </span><Katex math={'2*Failure'} /><span>degrees of freedom</span>
  </p>
  <p>
    <span>If we want</span><Katex math={'MTTF > 18000'} />
  </p>
  <p>
    <span>Then </span><Katex math={'\\frac{1}{MTTF} < \\frac{1}{18000}'} />
  </p>
  <p>
    <span>Then </span><Katex math={'\\frac{2 TestTime}{MTTF} < \\frac{2 TestTime}{18000}'} />
  </p>
  <p>
    <span>Then </span><Katex math={'P(MTTF > 18000) = P(\\frac{2 TestTime}{MTTF} < \\frac{2 TestTime}{18000}) = ChiCdf(\\frac{2 TestTime}{18000}, 2*Failure)'} />
  </p>
  <p>
    <span>FSD version {fsdProb.version} failed {fsdProb.failure} times in {fsdProb.miles} miles.</span>
  </p>
  <p>
    <Katex math={`ChiCdf(\\frac{2*${fsdProb.miles}}{18000}, 2*${fsdProb.failure}) = ${fsdProb.prob}`} />
  </p>
</main>

<style>
</style>
