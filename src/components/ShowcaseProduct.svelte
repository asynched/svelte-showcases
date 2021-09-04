<script>
  import { formatPrice } from '../helpers/formatters'

  export let product
</script>

<div class="showcase-product">
  <div class="product-image-wrapper">
    <img
      class="product-image"
      src={`https:${product.image}`}
      alt={product.name}
    />
  </div>
  <h2 class="product-title">{product.name}</h2>
  <p class="product-description">{product.description}</p>
  <p class="product-old-price">De: R${formatPrice(product.oldPrice)}</p>
  <p class="product-price">
    Por: <span class="price">R${formatPrice(product.price)}</span>
  </p>
  <p class="product-installments">
    Em até {product.installments.count}x de R${formatPrice(
      product.installments.value
    )} sem juros.
  </p>
</div>

<style lang="scss">
  .showcase-product {
    padding: 1rem;
    color: var(--text);
    border: 1px solid #ddd;

    .product-image-wrapper {
      padding: 1rem;
      display: grid;
      place-items: center;
      margin-bottom: 0.5rem;

      .product-image {
        width: 8rem;
        height: 8rem;
        object-fit: cover;
      }
    }

    .product-title {
      color: var(--primary);
      font-size: 1.125rem;
      margin-bottom: 0.5rem;
    }

    .product-description {
      font-size: 0.9rem;
      margin-bottom: 0.5rem;
    }

    .product-old-price {
      font-size: 0.875rem;
      text-decoration: line-through;
    }

    .product-price {
      margin-bottom: 0.25rem;

      font-size: 0.95rem;
      font-weight: bold;
      color: var(--primary);

      .price {
        font-size: 1.125rem;
      }
    }

    .product-installments {
      font-size: 0.8rem;
    }
  }
</style>
