import api from '.'

export const getProducts = async () => {
  const { data } = await api.get('products', {
    params: {
      page: Math.floor(Math.random() * 100),
    },
  })

  return data.products
}
