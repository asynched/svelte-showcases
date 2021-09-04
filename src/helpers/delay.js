/**
 * A delay function that returns a promise that resolves in `n` milliseconds
 *
 * ```js
 * // Example
 * await delay(1000) // Sleeps for 1 second
 * ```
 *
 * @param {number} milliseconds
 * @returns {Promise<null>}
 */
export const delay = (milliseconds) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(null)
    }, milliseconds)
  })
