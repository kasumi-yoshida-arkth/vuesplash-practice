const mix = require('laravel-mix')

// browserSyncはJavaScriptやPHPファイルが変更された時に自動的にブラウザがリロードされるようになる
mix.browserSync('vuesplash.test')
// 第一引数がコンパイル対象のファイル、第二引数がコンパイル結果の配置先
  .js('resources/js/app.js', 'public/js')
// ブラウザがキャッシュを読まないようにする
  .version()
