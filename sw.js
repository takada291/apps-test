const CACHE_NAME = 'tree-survey-v2.0'; // バージョンを一致させる
const urlsToCache = [
  './',
  'index.html',
  'manifest.json',
  'sw.js'
  // アイコンファイルはブラウザが個別にキャッシュするため、
  // 読み込みエラーを防ぐためにリストから外してもPWA動作に支障ありません
];

// 以下、メッセージ処理などはそのまま活用してOKです
