/**
* @function
* Helper for adding unique meta tags based on page title
* @param {String} page - name of page
* @param {String} prop - equal to 'Title'
* @param {Object} options - object containing all data from data/locales/ja.yml file
*/
module.exports = function(page, prop, options) {
  // console.log(JSON.stringify(options));
  var pageMeta = options.data.root.ja.meta.pages[page];
  if (pageMeta && pageMeta[prop]) {
    return pageMeta[prop];
  } else  {
    return options.data.root.ja.meta.pages.default[prop];
  }
}
