/**
 * Testing for play operations
 */

import test from 'ava';
import { Plays } from '../modules/plays.js';

const dbName = 'website.db';

test('   GETALL   : retrieve all plays on the database', async (test) => {
  test.plan(1);
  const plays = await new Plays(dbName); // no database specified so runs in-memory
  const getAll = await plays.all();
  test.is(getAll[1], true, 'unable to get all plays');
  plays.close();
});

test('   GETBYID  : retrieve a single play on the database', async (test) => {
  test.plan(1);
  const plays = await new Plays(dbName);
  const getById = await plays.getById(1);
  test.is(getById[1], true, 'unable to get play ID: 1');
  plays.close();
});

test('   GETBYID  : error if invalid play ID', async (test) => {
  test.plan(1);
  const plays = await new Plays(dbName);
  const getById = await plays.getById(999);
  test.is(getById[1], !true, 'play still returns successful');
  plays.close();
});
