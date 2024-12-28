<script lang="ts">
  import cdf from "@stdlib/stats-base-dists-chisquare-cdf";
  import Katex from "./Katex.svelte";
  import * as _ from 'lodash';
    import Trend from "./lib/Trend.svelte";
    import { groupBySubVersion, type FsdVersionData } from "./lib/fsd_data";

  let data: FsdVersionData[] = $state([]);
  const WAYMO_CDE_MILES = 18000;

  async function loadData() {
    const response = await fetch("https://raw.githubusercontent.com/smy20011/ScrapingFsd/refs/heads/main/extracted/latest.json");
    const json = await response.json();
    let d = json.map((item: any) => ({...item, 'min_date': new Date(item['min_date'])}));
    data = groupBySubVersion(d);
  }

  let fsdProb = $derived.by(() => {
    if (data.length == 0) {
      return {};
    }

    const versionData = _.maxBy(data, d => d.version);
    if (!versionData) {
      return {};
    }

    let failure = Math.round(versionData.runs * (1 - versionData.success_rate))

    return {
      version: versionData.version,
      prob: cdf(2 * versionData.city_miles / WAYMO_CDE_MILES, 2 * failure),
      failure: failure,
      miles: versionData.city_miles,
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
  <h2>The probability of FSD {fsdProb.version} achieving RoboTaxi is 1 in {Intl.NumberFormat().format(Math.round(1 / (fsdProb.prob ?? 1)))}.</h2>
  <Trend fsd_version_data={data} confidence={0.9} />
  <h3>How does it works?</h3>
  <p>Math!!!</p>
  <p>Waymo have a safety score of 18,000 miles per critical disengagement in 2023.</p>
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
