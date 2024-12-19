<script lang="ts">
import katex from "katex";

let {math} = $props();
const mathHtml = $derived.by(() => katex.renderToString(math, {displayMode: false}));

</script>

{@html mathHtml}