/**
 * Functions relating to currency operations
 * @module utilities/currency.js
 * @author Joe Standring
 */

/**
 * Converts a number to GBP
 */
const toPounds = new Intl.NumberFormat('en-GB', {
  style: 'currency',
  currency: 'GBP',
  minimumFractionDigits: 2,
});

export default toPounds;
