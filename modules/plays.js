/**
 * Functions for user play management
 * @module modules/plays
 * @author Joe Standring
 * @see routes/public for where this module is imported
*/

import sqlite from 'sqlite-async'

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
    const play = await this.db.all(sql)
    return play
  }
}

/** Export for use in other modules */
export { Plays }
