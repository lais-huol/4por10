const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
let theme = 'node_modules/tabler-ui/';


mix
.babel([
    theme + 'dist/assets/js/vendors/jquery-3.2.1.min.js',
    theme + 'dist/assets/js/vendors/bootstrap.bundle.min.js',
    theme + 'dist/assets/js/vendors/circle-progress.min.js',
    theme + 'dist/assets/plugins/input-mask/js/jquery.mask.min.js',
    theme + 'dist/assets/js/vendors/selectize.min.js',
    theme + 'dist/assets/js/vendors/require.min.js',
//     'node_modules/sweetalert/dist/sweetalert.min.js',
//     'node_modules/autosize/dist/autosize.min.js',
//     'node_modules/anno.js/dist/anno.js',
//     'node_modules/highcharts/highcharts.js',
//     'node_modules/highcharts/modules/map.js',
//     // 'node_modules/highcharts/highcharts-more.js',
//     'node_modules/highcharts/modules/data.js',
//     'node_modules/highcharts/modules/exporting.js',
//     'node_modules/highcharts/modules/export-data.js',
//     'node_modules/highcharts/modules/drilldown.js',
    'resources/assets/js/app.js'
], 'public/js/all.js')
.sass('resources/sass/app.scss', 'public/css')
.styles([
    theme + 'dist/assets/css/dashboard.css',
    theme + 'dist/assets/css/tabler.css',
//     'node_modules/anno.js/dist/anno.css',
    'public/css/app.css'
], 'public/css/all.css')
.copyDirectory(theme + 'dist/assets/fonts', 'public/fonts/')
.copyDirectory(theme + 'dist/assets/images', 'public/images/');
