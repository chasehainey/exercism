// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  switch (name) {
    case 'Pure Strawberry Joy':
      return 0.5;
    case 'Energizer':
      return 1.5;
    case 'Green Garden':
      return 1.5;
    case 'Tropical Island':
      return 3;
    case 'All or Nothing':
      return 5;
    default:
      return 2.5;
  }
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  let total = 0;
  let needed = 0;
  if (wedgesNeeded == 0) {
    return 0;
  }
  for (let i = 0; i < limes.length; i++) {
    if (limes[i] == 'small') {
      needed += 1;
      total += 6;
    } else if (limes[i] == 'medium') {
      needed +=1;
      total += 8;
    } else if (limes[i] == 'large') {
      needed += 1;
      total += 10;
    }
    if (total >= wedgesNeeded) {
      return needed;
    }
  }
  return needed;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  let time = timeLeft;
  let ordersLeft = orders;
  for (let i = 0; i < orders.length; i++) {
    while (time > 0) {
      time -= timeToMixJuice(orders[i])
      ordersLeft.shift()
    }
  }
  return ordersLeft;
}
