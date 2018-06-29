let mix = require('laravel-mix');
let tailwindcss = require('tailwindcss');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */

mix
  .sass('src/styles/main.scss', 'public/')
  .options({
    processCssUrls: false,
    postCss: [ tailwindcss('./tailwind.js') ],
  })
  .copy('src/images/**/*', 'public/images');
