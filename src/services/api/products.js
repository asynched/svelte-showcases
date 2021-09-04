import { delay } from '../../helpers/delay'
import api from '.'

export const getProducts = async () => {
  await delay(2000)
  const { data } = await api.get('products')

  return data.products
}
