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
 * Create an array of unique plays in the cart
 * @returns An array of titles in the cart
 */
function getPlayTitles() {
  const titles = []
  for (let i = 0; i < localStorage.length; i++) {
    title = localStorage.key(i).split(' - ')[0]
    if (!titles.includes(title)) {
      titles.push(title)
    }
  }

  return titles
}


/**
 * Inject HTML to list items in cart
 */
function showItems() {  
  const titles = getPlayTitles()
  let playTickets = []
  let html = ''
  
  // Sort tickets into their plays in a 2d array
  for (let i = 0; i < titles.length; i++) {
    // Create a new array for each title
    playTickets.push([])
    // Add play header to HTML
    html += `
      <h2>${titles[i]}</h2>
    `
    for (let j = 0; j < localStorage.length; j++) {
      if(localStorage.key(j).split(' - ')[0] === titles[i]) {
        console.log(localStorage.key(j) + ' is of play ' + titles[i])
        playTickets[i].push(localStorage.key(j))
        // Add the individual ticket and controls to html
        html += `
          <h3>${localStorage.key(j).split(' - ')[1]}
          <h3 class="tickets">${localStorage.getItem(localStorage.key(j))}</h3>
          <form class="valuebutton" onsubmit="remove('${localStorage.key(j)}')">
            <p><input type="submit" value="Remove ticket"></p>
          </form>
          <form class="valuebutton" onsubmit="add('${localStorage.key(j)}')">
            <p><input type="submit" value="Add ticket"></p>
          </form>
        `
      }
    }
  }
  
  document.getElementById('cart').innerHTML = html
}
