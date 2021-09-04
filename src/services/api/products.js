import api from '.'

export const getProducts = async () => {
  const { data } = await api.get('products')

  return data.products
}
