// コインの「使う」メニュー。コインアプリとコイン係（エックスサーバー）の両方がこのファイルを読みます。
// 書き方の決まり：JSON（キーも文字も " で囲む）。最後の ]; まで消さないでください。
window.USE_ITEMS = [
 { "id": "consult-30", "icon": "🤝", "name": "個別面談（30分）", "sub": "KUNIOと1対1", "prices": { "gold": 10000, "silver": 15000, "bronze": 20000 }},
 { "id": "consult-work", "icon": "🤝", "name": "個別面談＋一緒に作業（1時間）", "sub": "面談後に実作業もサポート", "prices": { "gold": 28000, "silver": 35000, "bronze": 50000 }},
 { "id": "dinner", "icon": "🍽️", "name": "KUNIOと高級ディナー", "sub": "1人2万〜4万の高級料理を無料でKUNIOと食べに行きます。時間はKUNIOと相談。", "prices": { "gold": 30000, "silver": 45000, "bronze": 60000 }},
 { "id": "manga", "icon": "🎨", "name": "漫画作成（10ページ程度）", "sub": "オリジナル漫画を制作", "prices": { "gold": 20000, "silver": 30000, "bronze": 50000 }},
 { "id": "rental-day", "icon": "👑", "name": "KUNIO一日レンタル", "sub": "内容・地域により要相談", "prices": null},
 { "id": "summon", "icon": "👑", "name": "KUNIO召喚 通常（6時間）", "sub": "KUNIOが直接手伝いに来る", "prices": { "gold": 30000, "silver": 45000, "bronze": 60000 }},
 { "id": "summon-truck", "icon": "🚛", "name": "KUNIO召喚 トラック（6時間）", "sub": "地域により要相談", "prices": null},
 { "id": "youtube", "icon": "▶️", "name": "YouTubeでKUNIOに無料作業員の募集を依頼", "sub": "作業員が0の場合は次回の告知無料", "prices": { "gold": 10000, "silver": 10000, "bronze": 20000 }},
 { "id": "real-estate", "icon": "🏠", "name": "不動産屋単体向けサイト", "sub": "1タッチ不動産会社営業用専用サイト", "prices": { "gold": 1000, "silver": 2000, "bronze": 3000 }},
 { "id": "lp-real-estate", "icon": "🏢", "name": "不動産会社向けLP・QRツール", "sub": "営業用ページとチラシ用QRコードを作成（初回のみコイン）", "prices": { "gold": 1000, "silver": 2000, "bronze": 3000 }, "type": "lp-tool"},
 { "id": "zoom-ebay-1101", "icon": "📹", "name": "ダイスケさんイーベイ勉強会（11/1）", "sub": "11/1(土) 20:00〜 Zoom参加", "prices": { "gold": 0, "silver": 1000, "bronze": 2000 }, "type": "zoom", "zoomEventId": "ebay-1101", "zoomExpiry": "2026-11-02"},
 { "id": "nijikai-1116", "icon": "🍻", "name": "11/16 二次会参加費", "sub": "11/16(日)｜ゼロコスト・リサイクラーズ: 2,200枚 ／ 卒業生: 4,400枚", "prices": { "gold": 2200, "silver": 2200, "bronze": 4400 }, "type": "event", "eventId": "nijikai-1116", "eventExpiry": "2026-11-16"}
];
