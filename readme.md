# Site Name

This site uses the ZURB Template for use with [Foundation for Sites](http://foundation.zurb.com/sites). It has a Gulp-powered build system with these features:

- Handlebars HTML templates with Panini
- Sass compilation and prefixing
- JavaScript concatenation
- Built-in BrowserSync server
- For production builds:
  - CSS compression
  - JavaScript compression
  - Image compression

## System Requirements

  * [Node.js](http://nodejs.org/) (8.0+ recommended)
  * [bower](http://bower.io/): `npm install bower -g`
  * [gulp-cli](http://gulpjs.com/): `npm install gulp-cli -g`

## Project Set-Up

### Install project dependencies & Run the Application

From project root, run:

```
$ npm start
```

### Create production assets

To compress CSS, JS and Image for deploying to production, run:

```
$ npm run build
```

