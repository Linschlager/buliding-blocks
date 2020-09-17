/**
 * Simple helper function to use an event listener in a useEffect
 * @param {String} event
 * @param {function(Event)} callback
 */
const attachListener = (event, callback) => {
  window.addEventListener(event, callback); // Attaches the given listener to the event
  return () => window.removeEventListener(event, callback); // returns the cleanup function
};

export default attachListener;
