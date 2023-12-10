/**
 * Regular tax calculation, do not use for VAT!
 * @param {number} amount total amount
 * @param {number} taxRate tax percentage
 * @param {string} [currency] currency symbol, default is £
 * @returns {string}
 * @example calculateTax(100, 0.2, '$');
 */
const calculateTax = (amount, taxRate, currency) => {
  return `${amount * taxRate}${currency || '£'}`;
}

calculateTax(100, 0.2);