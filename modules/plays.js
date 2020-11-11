/**
 * Functions for user play management
 * @module modules/plays
 * @author Joe Standring
 * @see routes/public for where this module is imported
*/

import sqlite from 'sqlite-async'

// Array tused to get month names
const months = [
  'January',
  'Febuary',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

/**
 * Functions for play operations
 */
class Plays {
  /**
   * Create an account object
   * @param {string} [dbName=":memory:"] The name of the database to use
   */
	constructor(dbName = ':memory:') {
		return (async() => {
			this.db = await sqlite.open(dbName)
			// we need this table to store the user accounts
			const sql = 'CREATE TABLE IF NOT EXISTS plays(\
				id INTEGER PRIMARY KEY AUTOINCREMENT,\
        name VARCHAR(32) NOT NULL,\
        thumb VARCHAR(64) NOT NULL,\
        first DATETIME NOT NULL,\
        last DATETIME NOT NULL,\
        description TEXT NOT NULL,\
        actors TEXT NOT NULL,\
        ticketsLeft INT NOT NULL,\
        ticketPrice REAL NOT NULL\
      );'
			await this.db.run(sql)
			return this
		})()
	}

  /**
   * Retrieve the latest play in the system
   * @returns {Array} returns an array with all responses from the SQL query
   */
  async all() {
    const sql = 'SELECT * FROM plays;'
    const plays = await this.db.all(sql)
    // Use DD/MONTH date format for first and last performances
    for(const i in plays) {
      let dateTime = new Date(plays[i].first)
      let date = `${dateTime.getDate()} ${months[dateTime.getMonth()]}`
      plays[i].first = date
      dateTime = new Date(plays[i].last)
      date = `${dateTime.getDate()} ${months[dateTime.getMonth()]}`
      plays[i].last = date
    }
    return plays
  }

  async getById(id) {
    const sql = `SELECT * FROM plays WHERE id = ${id};`
    const play = await this.db.all(sql)
    return play
  }
}

/** Export for use in other modules */
export { Plays }
