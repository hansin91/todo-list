var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
	mix.sass([ 'app.scss', './node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss' ], 'public/css');
	mix.scripts([ './node_modules/jquery/dist/jquery.min.js', './resources/assets/js/todolist.js' ], 'public/js');
	mix.browserSync({
		proxy: 'localhost:8000'
	});
});
