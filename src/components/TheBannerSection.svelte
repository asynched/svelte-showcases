<script>
  let current = 0
  const banners = [
    {
      alt: 'Casas nailha play',
      image:
        'https://www.casasbahia-imagens.com.br/criacao/01-home/bannertv/2021/08-ago/30/tv11-cbplay.png',
    },
    {
      alt: 'Promoção de TVs',
      image:
        'https://www.casasbahia-imagens.com.br/criacao/01-home/bannertv/2021/09-set/03/tv02-oferta-dia-v2.png',
    },
    {
      alt: 'Promoções',
      image:
        'https://www.casasbahia-imagens.com.br/criacao/01-home/bannertv/2021/08-ago/30/tv01-sortimento-gil.gif',
    },
  ]

  const hanldePreviousImageClick = () => (current <= 0 ? null : current--)
  const handleNextImageClick = () =>
    current >= banners.length - 1 ? null : current++
</script>

<section class="banner-section">
  <button class="banner-button previous" on:click={hanldePreviousImageClick}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M15 19l-7-7 7-7"
      />
    </svg>
  </button>
  <img
    class="banner-image"
    src={banners[current].image}
    alt={banners[current].alt}
  />
  <button class="banner-button next" on:click={handleNextImageClick}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M9 5l7 7-7 7"
      />
    </svg>
  </button>
</section>

<style lang="scss">
  .banner-section {
    position: relative;

    .banner-image {
      width: 100%;
    }

    .banner-button {
      position: absolute;
      top: 50%;
      transform: translate(0, -50%);

      display: grid;
      place-items: center;

      width: 3rem;
      height: 3rem;

      background: var(--white);

      border: none;
      border-radius: 100rem;

      box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.125);

      svg {
        color: var(--primary);
        width: 1.5rem;
        height: 1.5rem;
      }

      &.next {
        right: 20%;
      }

      &.previous {
        left: 20%;
      }
    }
  }
</style>
