let mix=require("laravel-mix")

// compile modern js into this source
mix.js("resources/js/app.js","public/js/app.js").sass("resources/scss/app.scss","public/css/app.css")

