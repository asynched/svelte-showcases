<script>
  import TheHeader from '../components/TheHeader.svelte'
  import TheCategorySection from '../components/TheCategorySection.svelte'
  import ShowcaseWrapper from '../components/ShowcaseWrapper.svelte'
  import TheBannerSection from '../components/TheBannerSection.svelte'
  import TheFooter from '../components/TheFooter.svelte'

  import { getProducts } from '../services/api/products'

  const mostSearchedProducts = getProducts()
  const recommendedForYouProducts = getProducts()
  const discountProducts = getProducts()
</script>

<main>
  <TheHeader />
  <TheCategorySection />
  <TheBannerSection />
  <ShowcaseWrapper
    showcaseTitle="Produtos mais buscados"
    productsPromise={mostSearchedProducts}
  />
  <ShowcaseWrapper
    showcaseTitle="Recomendados para você"
    productsPromise={recommendedForYouProducts}
  />
  <ShowcaseWrapper
    showcaseTitle="Produtos em promoção"
    productsPromise={discountProducts}
  />
  <TheFooter />
</main>
