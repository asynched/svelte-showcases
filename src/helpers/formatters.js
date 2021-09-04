/**
 * Formats a price to 2 floating points after the number
 *
 * ```js
 * // Example
 * formatPrice(10.5) // "10,50"
 * ```
 *
 * @param {number} price Price to be formatted
 *
 * @returns {string} formatted price
 */
export const formatPrice = (price) => price.toFixed(2).replace('.', ',')
