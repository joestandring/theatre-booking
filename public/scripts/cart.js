/**
 * Functions for cart management
 * @module public/scripts/cart.js
 * @author Joe Standring
 */

/**
 * Add a play to the cart
 * @param{string} play The name of the play to add
 */
function add(play) {
  if (localStorage.getItem(play) === null) {
    localStorage.setItem([play], 1)
  } else {
    const curAmount = parseInt(localStorage.getItem([play]))
    localStorage.setItem([play], curAmount + 1)
  }
}

/**
 * Remove a play from the cart
 * @param{string} play The name of the play to remove
 */
function remove(play) {
  if (localStorage.getItem(play) > 1) {
    const curAmount = parseInt(localStorage.getItem([play]))
    localStorage.setItem([play], curAmount - 1)
  } else {
    localStorage.removeItem(play)
  }
}