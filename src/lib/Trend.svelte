<script lang="ts">
    import type { FsdVersionData } from "./fsd_data";
    import * as Plot from "@observablehq/plot";
    import * as chisquare from '@stdlib/stats-base-dists-chisquare';

    let { fsd_version_data, confidence }: { fsd_version_data : FsdVersionData[], confidence: number} = $props();
    let div: HTMLElement | undefined = $state();
    let data_with_ci = $derived.by(() => {
        return fsd_version_data.map(d => {
            let failure = Math.round((1 - d.success_rate) * d.runs)
            let low = 2 * d.city_miles / chisquare.quantile(confidence / 2, 2 * failure + 2);
            let high = 2 * d.city_miles / chisquare.quantile(1 - confidence / 2, 2 * failure);
            return {
                ...d,
                low,
                high,
                mttf: d.city_miles / failure,
            }
        });
    });

    $effect(() => {
        div?.firstChild?.remove(); // remove old chart, if any
        div?.append(Plot.plot({
            marks: [
                Plot.areaY(data_with_ci, {x: "min_date", y1: "low", y2: "high"}),
                Plot.line(data_with_ci, {x: "min_date", y: "mttf"})
            ]
        })); // add the new chart
    });
</script>

<div bind:this={div} role="img"></div>