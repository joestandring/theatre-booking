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

/**
 * Inject HTML to list items in cart
 */
function showItems() {
  let html = ''
  for (let i = 0; i < localStorage.length; i++) {
    html += `
      <h2>${localStorage.key(i)}</h2>
      <h3 class="tickets">${localStorage.getItem(localStorage.key(i))}</h3>
      <form class="valuebutton" onsubmit="remove('${localStorage.key(i)}')">
        <p><input type="submit" value="Remove ticket"></p>
      </form>
      <form class="valuebutton" onsubmit="add('${localStorage.key(i)}')">
        <p><input type="submit" value="Add ticket"></p>
      </form>
    `
  }
  
  document.getElementById('cart').innerHTML = html
}
