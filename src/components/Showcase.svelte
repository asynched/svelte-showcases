<script>
  import { fly } from 'svelte/transition'
  import ShowcaseProduct from './ShowcaseProduct.svelte'

  export let products = []

  const NEXT_SHOWCASE_ANIMATION = {
    in: {
      x: window.innerWidth / 10,
      duration: 500,
    },
  }

  const PREVIOUS_SHOWCASE_ANIMATION = {
    in: {
      x: -(window.innerWidth / 10),
      duration: 500,
    },
  }

  let current = 0
  let animation = NEXT_SHOWCASE_ANIMATION

  const handleNextButtonClick = () => {
    if (current + 4 < products.length) {
      animation = NEXT_SHOWCASE_ANIMATION
      current += 4
    }
  }

  const handlePreviousButtonClick = () => {
    if (current - 4 >= 0) {
      animation = PREVIOUS_SHOWCASE_ANIMATION
      current -= 4
    }
  }
</script>

<div class="showcase-container">
  <button class="arrow-button previous" on:click={handlePreviousButtonClick}>
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
  {#key current}
    <div in:fly={animation.in} class="showcase">
      {#each products.slice(current, current + 4) as product (product.id)}
        <ShowcaseProduct {product} />
      {/each}
    </div>
  {/key}
  <button class="arrow-button next" on:click={handleNextButtonClick}>
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
</div>

<style lang="scss">
  .showcase-container {
    position: relative;

    .arrow-button {
      position: absolute;
      top: 50%;
      transform: translate(0, -50%);

      display: grid;
      place-items: center;

      width: 2rem;
      height: 2rem;

      background: transparent;

      border-radius: 100rem;
      border: 1px solid var(--primary);

      cursor: pointer;

      transition: 250ms ease-in-out;

      svg {
        color: var(--primary);
        width: 1rem;
        height: 1rem;
      }

      &:hover {
        background: var(--primary);

        svg {
          color: var(--white);
        }
      }
    }

    .previous {
      left: 0;
    }
    .next {
      right: 0;
    }

    .showcase {
      overflow: hidden;
      padding: 0 2.5rem;
      display: flex;
      gap: 1rem;
    }
  }
</style>
