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

mix.js('resources/js/app.js', 'public/js')
   .sass('resources/sass/app.scss', 'public/css');
mix.scripts([
    'resources/template/js/core/jquery.3.2.1.min.js',
    'resources/template/js/core/popper.min.js',
    'resources/template/js/core/bootstrap.min.js',
    'resources/template/js/plugins/bootstrap-switch.js',
    'resources/template/js/plugins/chartist.min.js',
    'resources/template/js/plugins/bootstrap-notify.js',
    'resources/template/js/plugins/jquery.sharrre.js',
    'resources/template/js/plugins/jquery-jvectormap.js',
    'resources/template/js/plugins/moment.min.js',
    'resources/template/js/plugins/bootstrap-datetimepicker.js',
    'resources/template/js/plugins/sweetalert2.min.js',
    'resources/template/js/plugins/bootstrap-tagsinput.js',
    'resources/template/js/plugins/nouislider.js',
    'resources/template/js/plugins/bootstrap-selectpicker.js',
    'resources/template/js/plugins/jquery.validate.min.js',
    'resources/template/js/plugins/jquery.bootstrap-wizard.js',
    'resources/template/js/plugins/bootstrap-table.js',
    'resources/template/js/plugins/jquery.dataTables.min.js',
    'resources/template/js/plugins/fullcalendar.min.js',
    'resources/template/js/light-bootstrap-dashboard.js'
], 'public/js/admin/vendor.js')
.setPublicPath('public');
mix.styles([
    'resources/template/css/bootstrap.min.css',
    'resources/template/css/light-bootstrap-dashboard.css',
], 'public/css/admin/vendor.css')
.setPublicPath('public');
