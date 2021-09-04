<script>
  import Showcase from './components/Showcase.svelte'
  import ShowcaseLoading from './components/ShowcaseLoading.svelte'
  import { getProducts } from './services/api/products'

  const productsPromise = getProducts()
</script>

<main class="container">
  <h1>Novos produtos</h1>
  {#await productsPromise}
    <ShowcaseLoading />
  {:then products}
    <Showcase {products} />
  {/await}
</main>

<style lang="scss">
  :global(:root) {
    --white: #fff;
    --text: #777;
    --primary: #0033c6;
  }

  :global(*) {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Nunito', sans-serif;
  }

  .container {
    margin: 0 auto;
    width: 90%;
    max-width: 72rem;

    h1 {
      margin-bottom: 1rem;
      color: var(--primary);
    }
  }
</style>
