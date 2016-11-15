# Site Name

This site uses the official ZURB Template for [Foundation for Sites](http://foundation.zurb.com/sites). It has a Gulp-powered build system with these features:

- Handlebars HTML templates with Panini
- Sass compilation and prefixing
- JavaScript concatenation
- Built-in BrowserSync server
- For production builds:
  - CSS compression
  - JavaScript compression
  - Image compression

## Requirements

  * [Node.js](http://nodejs.org/) (0.12 or greater)
  * [bower](http://bower.io/): `npm install bower -g`
  * [gulp](http://gulpjs.com/): `npm install gulp-cli -g`

## Set-up

Run `bower install` and `npm install` from the `/corp` directory to install the project dependencies.

### Local Development

From the project root, run `gulp` or `npm start` in the terminal to run Gulp tasks and start a local server.

### Production

To create compressed, production-ready assets, run `npm run build` or `gulp build --production`.

### Local Server

Run `gulp` or `npm start` from the project root. The finished site will be created in a folder called `dist`, viewable at this URL:

```
http://localhost:8000
```
