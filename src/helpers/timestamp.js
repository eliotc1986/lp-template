/**
* @function
* Returns number of milliseconds elapsed since 1 January 1970 00:00:00 UTC.
* Used for adding a fingerprint through query parameters to CSS and JS assets on assets/layouts/default.html page
*/
module.exports = function() {
  return Date.now();
}
