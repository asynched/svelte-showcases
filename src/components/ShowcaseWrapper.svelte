<script>
  import Showcase from './Showcase.svelte'
  import ShowcaseLoading from './ShowcaseLoading.svelte'

  export let showcaseTitle
  export let productsPromise
</script>

<div class="container">
  <div class="showcase-wrapper">
    <h1>{showcaseTitle}</h1>
    {#await productsPromise}
      <ShowcaseLoading />
    {:then products}
      <Showcase {products} />
    {/await}
  </div>
</div>

<style lang="scss">
  .showcase-wrapper {
    margin: 4rem 0;

    h1 {
      margin-bottom: 1rem;
      color: var(--primary);
    }
  }
</style>
