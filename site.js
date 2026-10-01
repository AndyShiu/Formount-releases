// Formount 官網:深淺色、語言切換、範本填入、選單列面板縮放、複製連結。
// 文案來自設計稿(docs/claude-design/website/handoff/Formount Site.dc.html 的 COPY)。
// HTML 裡寫的是繁中;切到英文時依 data-i18n 的 key(可用 a.0.b 取陣列)換掉文字。

const COPY = {
  zh: {
    pageTitle: 'Formount — 把 NAS、伺服器和雲端硬碟放進 Finder',
    pageDesc: 'Formount 是免費的 macOS App,把 NAS、伺服器和雲端硬碟掛載到 Finder。支援 WebDAV、SMB、SFTP、FTP、S3、Google 雲端硬碟、OneDrive、Dropbox。',
    privacyTitle: '隱私權政策 — Formount',
    langLabel: 'EN', themeLabel: '切換深淺色',
    navFeatures: '功能', navServices: '支援服務', navFaq: '常見問題', navPrivacy: '隱私權', navDownload: '下載',
    download: '免費下載', req: 'macOS 15 以上 · Apple 晶片與 Intel 皆可',
    heroTitle: '把 NAS、伺服器和雲端硬碟放進 Finder。',
    heroSub: '裝好之後,遠端的檔案就出現在 Finder 側邊欄,用起來和本機資料夾一樣。不用開網頁、不用另外的同步程式,也不用把整個雲端硬碟下載到電腦裡。',
    mobileTitle: '在 Mac 上下載', mobileDesc: 'Formount 是 Mac App。用 Mac 打開 formount.andyshiu.com 就能下載。', copy: '複製連結', copied: '已複製',
    svcEyebrow: '支援的服務', svcTitle: '一個 App,連上所有空間', svcSub: '可以同時設定很多組連線,各自獨立暫停、恢復。雲端硬碟是在瀏覽器登入,Formount 不會看到你的密碼。',
    gNas: 'NAS 與伺服器', gCloud: '雲端硬碟', gObj: '物件儲存',
    dWebdav: 'Synology、QNAP、Nextcloud 等 NAS', nSmb: 'SMB(網路芳鄰)', dSmb: '區域網路內的 Windows 或 NAS 分享資料夾', dSftp: '透過 SSH 連到 Linux 或 macOS 伺服器', dFtp: '網站主機與較舊的設備',
    nGdrive: 'Google 雲端硬碟', dGdrive: '用 Google 帳號在瀏覽器登入', dOnedrive: '用 Microsoft 帳號在瀏覽器登入', dDropbox: '用 Dropbox 帳號在瀏覽器登入',
    nS3: 'S3 相容儲存', dS3: 'AWS S3、Cloudflare R2、Wasabi、MinIO',
    f1Title: '就在 Finder 裡', f1Body: '連線會出現在 Finder 側邊欄的「位置」下方,名稱是「Formount - 你取的名字」。打開、拖放、存檔、用 Photoshop 或 Final Cut 直接編輯,全都和本機資料夾一樣。不用學新介面。',
    f3Title: '不佔硬碟空間', f3Body: '檔案打開時才下載,Finder 裡看得到全部檔案,但電腦只存你用過的。一段時間沒用的檔案會自動清掉(預設 7 天、總量 10 GB,都可以調整),檔案仍然留在 Finder,下次打開時再下載。',
    f4Title: '斷線也不怕', f4List: ['網路中斷時不會卡住 Finder,恢復後自動重新連線', '開機後在背景自動掛載所有連線', '別人在遠端新增、修改、刪除的檔案,幾十秒內就會出現在 Finder', '兩邊同時改到同一個檔案時,兩份都保留,不會互相覆蓋'],
    panelTitle: '隨時知道狀況', panelBody: '選單列圖示會顯示目前狀態。點開可以看到每組連線的狀態、正在傳輸的檔案和進度、最近的衝突。斷線或登入過期時會用通知告訴你。',
    st0: '一般', st1: '同步中', st2: '需要處理', st3: '已暫停',
    stepsTitle: '三個步驟開始使用',
    steps: [{ title: '新增連線', body: '選擇類型(NAS、雲端硬碟…),填網址與帳號,或在瀏覽器登入。' }, { title: '在系統設定打開 Formount', body: 'macOS 規定要由使用者親自打開一次,首次使用的引導會帶著你做。' }, { title: '在 Finder 開始使用', body: '側邊欄出現「Formount - 名稱」,點一下就好。' }],
    capAdd: '新增連線:依類型選擇服務', capOb: '開始使用:首次使用引導',
    secTitle: '安全、私密',
    sec: [{ title: '登入資料只在你的 Mac', body: '密碼與登入資料只存在你自己的 Mac(加密設定檔與鑰匙圈),不經過任何 Formount 伺服器。' }, { title: '直接連到你的儲存空間', body: 'Formount 直接連到你的儲存空間,檔案不經過第三方。' }, { title: '經過 Apple 公證', body: 'App 經過 Apple 公證(notarized),更新套件有簽章驗證。' }],
    faqTitle: '常見問題',
    faq: [
      { q: '會把我的雲端硬碟整個下載到電腦嗎?', a: '不會。檔案打開時才下載,沒用的會自動清理。' },
      { q: '需要安裝 macFUSE 或降低系統安全性嗎?', a: '不用。Formount 使用 Apple 官方的 File Provider,和 iCloud 雲碟相同。' },
      { q: '為什麼要在系統設定裡打開 Formount?', a: '這是 macOS 的規定,所有使用 File Provider 的 App(包括 Dropbox、OneDrive 官方 App)第一次都要由使用者打開。' },
      { q: '斷線時會怎樣?', a: 'Finder 不會卡住;已下載的檔案照常能開,網路恢復後自動連回來。' },
      { q: '兩個人同時改同一個檔案呢?', a: '兩份都會保留,你的版本會另存成「衝突複本」,不會覆蓋別人的修改。' },
      { q: '我的密碼安全嗎?', a: '只存在你的 Mac 上,不會傳給 Formount 或任何第三方。' },
      { q: 'Synology 要怎麼設定?', a: '在 DSM 開啟 WebDAV Server,Formount 選 WebDAV,填 https://你的 NAS 位址:5006。' },
      { q: '收費嗎?', a: '不收費,Formount 可以免費下載使用。' }
    ],
    ctaTitle: '下載 Formount', ctaBody: '打開 dmg 後,把 Formount 拖到「應用程式」資料夾。App 內建自動更新,裝一次就好。',
    footBy: '台灣獨立開發者 AndyShiu 製作', footName: '名字來自 Formosa(福爾摩沙)+ mount(掛載)', footPrivacy: '隱私權政策', footRel: '版本紀錄(GitHub)',
    fd: {
      fav: '個人收藏', loc: '位置', nas: 'Formount - 家裡的 NAS', gd: 'Formount - Google 雲端硬碟', title: '家裡的 NAS',
      hName: '名稱', hDate: '修改日期', hSize: '大小', status: '7 個項目 · 已下載 2 個',
      favs: ['最近項目', '應用程式', '桌面', '文件', '下載'],
      rows: ['照片 2026', '專案提案', '封面設計.psd', '會議記錄 0930.pdf', '2026 年度預算.numbers', '婚禮影片 4K.mov', '合約掃描.pdf'],
      dates: ['今天 09:12', '昨天 18:40', '今天 10:21', '9月30日 16:05', '9月28日 11:30', '9月14日 20:02', '8月2日 14:47']
    },
    mb: {
      title: '同步中 2 個檔案 · 2.1 MB/s', sub: '4 組連線都正常', conns: '連線', connected: '已連線', paused: '已暫停',
      names: ['家裡的 NAS', '工作室共用', '個人雲端', '客戶交付'],
      transfers: '傳輸中', t0: '2026 品牌提案_final_v3.key', t0meta: '家裡的 NAS · 45% · 3.2 MB / 7.1 MB · 1.2 MB/s · 剩 3 秒',
      t1meta: '個人雲端 · 80% · 2.4 MB / 3.0 MB · 0.9 MB/s · 剩 1 秒',
      recent: '最近完成', r0: '會議記錄 10-01.md', r0meta: '家裡的 NAS · 10:28', r1meta: '個人雲端 · 10:25', r2: '素材包_v2.zip', r2meta: '工作室共用 · 10:12',
      cache: '本機複本 2.4 GB', open: '打開 Formount', quit: '結束'
    },
    pv: {
      back: '回到首頁', title: '隱私權政策', updated: '最後更新:2026 年 10 月 1 日',
      summary: 'Formount 不收集、不上傳任何個人資料或檔案內容。你的檔案與登入資料只存在你的 Mac 和你自己的儲存空間之間。',
      sections: [
        { h: '概要', b: "Formount 是在你的 Mac 上執行的 App,把你自己的 NAS、伺服器和雲端硬碟掛載到 Finder。Formount 沒有伺服器、沒有帳號系統,也不收集、不上傳任何個人資料或檔案內容。" },
        { h: 'Formount 存取的資料', b: "你新增連線後,Formount 會存取那個儲存空間裡的檔案與資料夾:名稱、大小、修改時間等資訊,以及你在 Finder 中打開或儲存的檔案內容。使用 Google 雲端硬碟時,Formount 透過 Google Drive API 存取你雲端硬碟中的檔案與資料夾(範圍:https://www.googleapis.com/auth/drive)。" },
        { h: '資料的用途', b: "這些資料只用來在 Finder 中顯示你的檔案,並在你打開、儲存、新增、重新命名、移動或刪除檔案時,與你的儲存空間同步。Formount 不會把資料用於廣告、分析、建立使用者輪廓、訓練 AI 模型,或任何與上述功能無關的用途。" },
        { h: '資料的儲存', b: "登入資料(密碼、存取金鑰、OAuth token)只存在你 Mac 上的加密設定檔與 macOS 鑰匙圈。打開過的檔案會在你的 Mac 上保留一份本機複本,方便下次快速開啟;一段時間沒用的複本會依你的設定自動清除。這些資料都不會離開你的 Mac,除非是直接傳送給你自己設定的儲存服務。" },
        { h: '資料的分享與傳輸', b: "Formount 直接透過加密連線(HTTPS 或你設定的協定)連到你自己的儲存服務,檔案不經過 Formount 或任何第三方的伺服器。我們不會出售、出租、分享或轉移你的資料給任何人,也沒有任何人(包括開發者)能讀取你的資料。" },
        { h: '刪除資料與撤銷存取', b: "在 Formount 中刪除一組連線,會一併移除這台 Mac 上該連線的登入資料與本機複本;遠端的檔案不受影響。使用 Google 帳號登入的連線,也可以隨時到 Google 帳戶的「第三方應用程式與服務」(https://myaccount.google.com/permissions)撤銷 Formount 的存取權。" },
        { h: 'Google API 服務使用者資料政策', b: "Formount 對 Google 使用者資料的使用與轉移,遵守 Google API Services User Data Policy,包括「有限使用」(Limited Use)的規定。" },
        { h: '檢查更新', b: "檢查更新時會連到 GitHub 下載更新資訊,只包含 App 版本,不含個人資料。" }
      ],
      contactH: '聯絡方式', contactB: '對這份政策有任何問題,請到 GitHub 開議題:', contactLink: 'Formount 議題回報'
    }
  },
  en: {
    pageTitle: 'Formount — Your NAS, servers and cloud drives, right in Finder',
    pageDesc: 'Formount is a free macOS app that mounts your NAS, servers and cloud drives in Finder. WebDAV, SMB, SFTP, FTP, S3, Google Drive, OneDrive and Dropbox.',
    privacyTitle: 'Privacy Policy — Formount',
    langLabel: '中文', themeLabel: 'Toggle dark mode',
    navFeatures: 'Features', navServices: 'Services', navFaq: 'FAQ', navPrivacy: 'Privacy', navDownload: 'Download',
    download: 'Download for free', req: 'macOS 15 or later · Apple silicon and Intel',
    heroTitle: 'Your NAS, servers and cloud drives, right in Finder.',
    heroSub: 'Remote files show up in the Finder sidebar and work just like local folders. No web interface, no separate sync client, and no downloading your whole cloud drive.',
    mobileTitle: 'Download on your Mac', mobileDesc: 'Formount is a Mac app. Open formount.andyshiu.com on your Mac to download it.', copy: 'Copy link', copied: 'Copied',
    svcEyebrow: 'Supported services', svcTitle: 'One app for all your storage', svcSub: 'Set up as many connections as you like and pause or resume each one on its own. Cloud drives sign in through your browser, so Formount never sees your password.',
    gNas: 'NAS & servers', gCloud: 'Cloud drives', gObj: 'Object storage',
    dWebdav: 'Synology, QNAP, Nextcloud and other NAS', nSmb: 'SMB', dSmb: 'Windows or NAS shared folders on your network', dSftp: 'Linux or macOS servers over SSH', dFtp: 'Web hosts and older devices',
    nGdrive: 'Google Drive', dGdrive: 'Sign in with Google in your browser', dOnedrive: 'Sign in with Microsoft in your browser', dDropbox: 'Sign in with Dropbox in your browser',
    nS3: 'S3-compatible', dS3: 'AWS S3, Cloudflare R2, Wasabi, MinIO',
    f1Title: 'Right in Finder', f1Body: 'Each connection appears under Locations in the Finder sidebar as “Formount - your name for it”. Open, drag, save, or edit in Photoshop or Final Cut, just like a local folder. Nothing new to learn.',
    f3Title: 'Saves disk space', f3Body: 'Files download only when you open them. Finder shows everything, but your Mac only keeps what you’ve used. Files you haven’t touched in a while are cleared automatically (7 days and 10 GB by default, both adjustable) and stay in Finder, ready to download again.',
    f4Title: 'Handles drops gracefully', f4List: ['Finder never freezes when the network drops, and reconnects on its own', 'Mounts every connection in the background at login', 'Files others add, change or delete show up in Finder within seconds', 'When both sides edit the same file, both versions are kept'],
    panelTitle: 'Always know what’s happening', panelBody: 'The menu bar icon shows the current status. Click it to see each connection, files in transfer and their progress, and recent conflicts. You’ll get a notification if a connection drops or a sign-in expires.',
    st0: 'Normal', st1: 'Syncing', st2: 'Needs attention', st3: 'Paused',
    stepsTitle: 'Get started in three steps',
    steps: [{ title: 'Add a connection', body: 'Pick a type (NAS, cloud drive…), enter the address and account, or sign in through your browser.' }, { title: 'Enable Formount in System Settings', body: 'macOS requires you to turn it on once yourself. The first-run guide walks you through it.' }, { title: 'Use it in Finder', body: '“Formount - name” appears in the sidebar. Click and go.' }],
    capAdd: 'Add a connection: choose by type', capOb: 'Getting started: first-run guide',
    secTitle: 'Secure and private',
    sec: [{ title: 'Credentials stay on your Mac', body: 'Passwords and sign-ins are stored only on your Mac (encrypted config and Keychain), never on a Formount server.' }, { title: 'Direct to your storage', body: 'Formount connects straight to your storage. Your files never pass through a third party.' }, { title: 'Notarized by Apple', body: 'The app is notarized by Apple, and updates are signature-verified.' }],
    faqTitle: 'FAQ',
    faq: [
      { q: 'Will it download my whole cloud drive?', a: 'No. Files download when you open them, and unused ones are cleaned up automatically.' },
      { q: 'Do I need macFUSE or reduced security settings?', a: 'No. Formount uses Apple’s File Provider, the same technology behind iCloud Drive.' },
      { q: 'Why do I have to enable Formount in System Settings?', a: 'macOS requires it. Every File Provider app, including the official Dropbox and OneDrive apps, must be enabled by the user the first time.' },
      { q: 'What happens when I go offline?', a: 'Finder won’t freeze. Downloaded files still open, and Formount reconnects when the network is back.' },
      { q: 'What if two people edit the same file?', a: 'Both are kept. Your version is saved as a “conflicted copy” so nobody’s changes are overwritten.' },
      { q: 'Is my password safe?', a: 'It’s stored only on your Mac and never sent to Formount or any third party.' },
      { q: 'How do I set up a Synology NAS?', a: 'Turn on WebDAV Server in DSM, choose WebDAV in Formount, and enter https://your-nas-address:5006.' },
      { q: 'Does it cost anything?', a: 'No. Formount is free to download and use.' }
    ],
    ctaTitle: 'Download Formount', ctaBody: 'Open the dmg and drag Formount into Applications. It updates itself, so you only install once.',
    footBy: 'Made by AndyShiu, an independent developer in Taiwan', footName: 'The name: Formosa (Taiwan) + mount', footPrivacy: 'Privacy Policy', footRel: 'Releases (GitHub)',
    fd: {
      fav: 'Favorites', loc: 'Locations', nas: 'Formount - Home NAS', gd: 'Formount - Google Drive', title: 'Home NAS',
      hName: 'Name', hDate: 'Date Modified', hSize: 'Size', status: '7 items · 2 downloaded',
      favs: ['Recents', 'Applications', 'Desktop', 'Documents', 'Downloads'],
      rows: ['Photos 2026', 'Proposals', 'Cover design.psd', 'Meeting notes 0930.pdf', 'Budget 2026.numbers', 'Wedding film 4K.mov', 'Contract scan.pdf'],
      dates: ['Today 09:12', 'Yesterday 18:40', 'Today 10:21', 'Sep 30 16:05', 'Sep 28 11:30', 'Sep 14 20:02', 'Aug 2 14:47']
    },
    mb: {
      title: 'Syncing 2 files · 2.1 MB/s', sub: 'All 4 connections are working', conns: 'Connections', connected: 'Connected', paused: 'Paused',
      names: ['Home NAS', 'Studio Share', 'Personal Cloud', 'Client Delivery'],
      transfers: 'Transferring', t0: '2026 Brand Pitch_final_v3.key', t0meta: 'Home NAS · 45% · 3.2 MB / 7.1 MB · 1.2 MB/s · 3 s left',
      t1meta: 'Personal Cloud · 80% · 2.4 MB / 3.0 MB · 0.9 MB/s · 1 s left',
      recent: 'Recently Completed', r0: 'Meeting notes 10-01.md', r0meta: 'Home NAS · 10:28', r1meta: 'Personal Cloud · 10:25', r2: 'Assets_v2.zip', r2meta: 'Studio Share · 10:12',
      cache: 'Local copies 2.4 GB', open: 'Open Formount', quit: 'Quit'
    },
    pv: {
      back: 'Back to home', title: 'Privacy Policy', updated: 'Last updated: October 1, 2026',
      summary: 'Formount does not collect or upload any personal data or file contents. Your files and credentials stay between your Mac and your own storage.',
      sections: [
        { h: 'Overview', b: "Formount is an app that runs on your Mac and mounts your own NAS, servers and cloud drives in Finder. Formount has no servers and no account system, and does not collect or upload any personal data or file contents." },
        { h: 'Data Formount accesses', b: "When you add a connection, Formount accesses the files and folders in that storage: their names, sizes, modification dates and other metadata, and the contents of files you open or save in Finder. For Google Drive, Formount uses the Google Drive API to access the files and folders in your Drive (scope: https://www.googleapis.com/auth/drive)." },
        { h: 'How the data is used', b: "This data is used only to show your files in Finder and to keep them in sync with your storage when you open, save, create, rename, move or delete files. Formount does not use the data for advertising, analytics, profiling, training AI models, or anything unrelated to this functionality." },
        { h: 'How data is stored', b: "Credentials (passwords, access keys, OAuth tokens) are kept only in an encrypted configuration file and the macOS Keychain on your Mac. Files you open are kept as a local copy on your Mac so they open quickly next time; copies you haven't used for a while are removed automatically according to your settings. None of this data leaves your Mac except when it is sent directly to the storage service you set up." },
        { h: 'Sharing and transfer', b: "Formount connects directly to your own storage service over encrypted connections (HTTPS or the protocol you configure). Your files never pass through servers operated by Formount or any third party. We do not sell, rent, share or transfer your data to anyone, and no one, including the developer, can read your data." },
        { h: 'Deleting data and revoking access', b: "Deleting a connection in Formount removes that connection's credentials and local copies from your Mac; files on the server are not affected. For connections that use your Google account, you can also revoke Formount's access at any time under Third-party apps & services in your Google Account (https://myaccount.google.com/permissions)." },
        // OAuth 審核要求逐字保留這段英文
        { h: 'Google API Services User Data Policy', b: "Formount’s use and transfer of information received from Google APIs will adhere to the Google API Services User Data Policy, including the Limited Use requirements." },
        { h: 'Update checks', b: "When checking for updates, Formount downloads update information from GitHub. This contains only the app version and no personal data." }
      ],
      contactH: 'Contact', contactB: 'Questions about this policy? Open an issue on GitHub:', contactLink: 'Formount issues'
    }
  }
};

const store = {
  get(key) { try { return localStorage.getItem(key); } catch (e) { return null; } },
  set(key, value) { try { localStorage.setItem(key, value); } catch (e) {} }
};

// ---------- 範本:下載按鈕、Finder 示意視窗、選單列面板 ----------
function fillTemplates() {
  for (const [selector, id] of [['[data-download]', 'tpl-download'], ['[data-finder]', 'tpl-finder'], ['[data-panel]', 'tpl-panel']]) {
    const tpl = document.getElementById(id);
    if (!tpl) continue;
    document.querySelectorAll(selector).forEach(slot => slot.replaceChildren(tpl.content.cloneNode(true)));
  }
}

// ---------- 語言 ----------
let lang = 'zh';

function lookup(table, path) {
  return path.split('.').reduce((value, key) => (value == null ? value : value[key]), table);
}

function applyLang(next) {
  lang = next;
  const t = COPY[lang];
  document.documentElement.lang = lang === 'zh' ? 'zh-Hant-TW' : 'en';
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const text = lookup(t, el.dataset.i18n);
    if (typeof text === 'string') el.textContent = text;
  });
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const text = lookup(t, el.dataset.i18nAria);
    if (typeof text === 'string') el.setAttribute('aria-label', text);
  });
  const isPrivacy = document.body.dataset.page === 'privacy';
  document.title = isPrivacy ? t.privacyTitle : t.pageTitle;
  const desc = document.querySelector('meta[name="description"]');
  if (desc && !isPrivacy) desc.content = t.pageDesc;
  // 選單列面板的開關狀態文字跟著語言
  document.querySelectorAll('.mb-conn').forEach(updateMountLabel);
}

// ---------- 深淺色 ----------
// 預設淺色,不跟隨系統;只有按過切換才是深色
function isDark() {
  return document.documentElement.dataset.theme === 'dark';
}

function toggleTheme() {
  const next = isDark() ? 'light' : 'dark';
  document.documentElement.dataset.theme = next;
  store.set('formount-theme', next);
}

// ---------- 選單列面板 ----------
// 面板原生寬 360px,依外層寬度等比縮放(CSS zoom,版面高度會跟著縮)
function fitPanels() {
  document.querySelectorAll('.panel-slot').forEach(slot => {
    const inner = slot.querySelector('.panel-scale');
    if (!inner) return;
    const zoom = Math.min(slot.clientWidth / 360, 1.2);
    inner.style.zoom = zoom > 0 ? zoom : 1;
  });
}

function updateMountLabel(row) {
  const on = row.querySelector('.mb-switch')?.getAttribute('aria-checked') !== 'false';
  row.classList.toggle('paused', !on);
  const label = row.querySelector('.mb-st span');
  if (label) label.textContent = COPY[lang].mb[on ? 'connected' : 'paused'];
}

// ---------- 事件 ----------
document.addEventListener('click', event => {
  const target = event.target.closest('[data-action]');
  if (!target) return;
  switch (target.dataset.action) {
    case 'lang':
      applyLang(lang === 'zh' ? 'en' : 'zh');
      store.set('formount-lang', lang);
      break;
    case 'theme':
      toggleTheme();
      break;
    case 'copy': {
      const done = () => {
        target.textContent = COPY[lang].copied;
        setTimeout(() => { target.textContent = COPY[lang].copy; }, 1600);
      };
      if (navigator.clipboard) navigator.clipboard.writeText('https://formount.andyshiu.com').then(done, done);
      else done();
      break;
    }
    case 'mount': {
      const on = target.getAttribute('aria-checked') !== 'false';
      target.setAttribute('aria-checked', on ? 'false' : 'true');
      updateMountLabel(target.closest('.mb-conn'));
      break;
    }
  }
});

fillTemplates();
const savedLang = store.get('formount-lang');
const initialLang = savedLang || ((navigator.language || '').toLowerCase().startsWith('zh') ? 'zh' : 'en');
if (initialLang !== 'zh') applyLang(initialLang); else applyLang('zh');
fitPanels();
if (window.ResizeObserver) {
  const observer = new ResizeObserver(fitPanels);
  document.querySelectorAll('.panel-slot').forEach(slot => observer.observe(slot));
} else {
  window.addEventListener('resize', fitPanels);
}

// =====================================================================
// 動畫:Hero 入場與捲動淡入、Finder 示範「打開才下載」、選單列面板的傳輸進度、狀態格切換面板狀態。
// 系統開啟「減少動態效果」時不播放(狀態格切換仍可用,只是沒有過場)。
// =====================================================================

const ANIM_COPY = {
  zh: {
    finderStatus: '7 個項目 · 已下載 {n} 個',
    left: '剩 {s} 秒',
    failed: '需要處理 · 存取金鑰無效',
    states: {
      normal: { title: '4 組連線都正常', sub: '全部已同步' },
      sync: { title: '同步中 2 個檔案 · 2.1 MB/s', sub: '4 組連線都正常' },
      alert: { title: '1 組連線需要處理', sub: '「客戶交付」無法登入' },
      pause: { title: '全部已暫停', sub: 'Finder 中暫時看不到連線' }
    }
  },
  en: {
    finderStatus: '7 items · {n} downloaded',
    left: '{s} s left',
    failed: 'Needs attention · Invalid access key',
    states: {
      normal: { title: 'All 4 connections are working', sub: 'Everything is synced' },
      sync: { title: 'Syncing 2 files · 2.1 MB/s', sub: 'All 4 connections are working' },
      alert: { title: '1 connection needs attention', sub: 'Can’t sign in to “Client Delivery”' },
      pause: { title: 'All paused', sub: 'Connections are hidden from Finder' }
    }
  }
};

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const fill = (text, values) => text.replace(/\{(\w+)\}/g, (_, k) => values[k]);
const pick = item => item.name || item[lang];
const icon = name => `<svg class="i"><use href="assets/icons.svg#i-${name}"/></svg>`;

/** 只在畫面上看得到時執行(省電) */
function whileVisible(el, onChange) {
  if (!window.IntersectionObserver) { onChange(true); return; }
  new IntersectionObserver(([entry]) => onChange(entry.isIntersecting)).observe(el);
}

// ---------- Hero 入場與捲動淡入 ----------
function setupReveal() {
  if (reduceMotion || !window.IntersectionObserver) return;
  document.documentElement.classList.add('anim');
  const groups = [
    ['.hero-text > *', 90, 0],
    ['.hero-art > *:not(.dark-only):not(.light-only), .hero-art > .shot', 200, 180],
    ['.head', 0, 0], ['.svc', 90, 0], ['.feature-text', 0, 0], ['.feature-art', 0, 120],
    ['.panel-sec-text', 0, 0], ['.panel-sec .panel-slot', 0, 150], ['.h2.center', 0, 0],
    ['.step', 110, 0], ['.step-shots figure', 140, 0], ['.sec', 100, 0], ['.faq-list', 0, 80],
    ['.cta > *:not(.dark-only)', 80, 0]
  ];
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.add('in');
      observer.unobserve(entry.target);
    }
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });
  for (const [selector, step, base] of groups) {
    document.querySelectorAll(selector).forEach((el, i) => {
      // 同一組裡依序錯開;換列(網格)時重新計算,避免最後一張等太久
      const index = step ? i % 4 : 0;
      el.classList.add('reveal');
      el.style.setProperty('--d', `${base + index * step}ms`);
      observer.observe(el);
    });
  }
}

// ---------- Finder:示範「打開才下載」 ----------
const finders = [];

function setupFinders() {
  document.querySelectorAll('[data-finder]').forEach(frame => {
    const rows = [...frame.querySelectorAll('.f-row')];
    const initial = rows.map(row => row.dataset.kind);
    const finder = { frame, rows, initial, kinds: [...initial], progress: 48, downloaded: 2, wait: 0 };
    finders.push(finder);
    renderFinder(finder);
    if (reduceMotion) return;
    let timer = null;
    whileVisible(frame, visible => {
      clearInterval(timer);
      if (visible) timer = setInterval(() => stepFinder(finder), 100);
    });
  });
}

function stepFinder(f) {
  if (f.wait > 0) { f.wait -= 1; return; }
  const loading = f.kinds.indexOf('loading');
  if (loading >= 0) {
    f.progress = Math.min(100, f.progress + 2.2);
    if (f.progress >= 100) {
      f.kinds[loading] = 'local';
      f.downloaded += 1;
      f.wait = 12;   // 下載完停 1.2 秒,讓人看到雲朵變成已下載
    }
  } else {
    const next = f.kinds.indexOf('cloud');
    if (next >= 0) {
      f.kinds[next] = 'loading';
      f.progress = 0;
    } else {
      // 全部下載完:停一下再從頭播放
      f.kinds = [...f.initial];
      f.progress = 48;
      f.downloaded = 2;
      f.wait = 30;
    }
  }
  renderFinder(f);
}

function renderFinder(f) {
  f.rows.forEach((row, i) => {
    const kind = f.kinds[i];
    if (row.dataset.kind === kind && kind !== 'loading') return;
    row.dataset.kind = kind;
    const state = row.querySelector('.f-state');
    if (kind === 'loading') {
      let ring = state.querySelector('.f-ring');
      if (!ring) { state.innerHTML = '<i class="f-ring"></i>'; ring = state.firstChild; }
      ring.style.setProperty('--p', f.progress.toFixed(1));
    } else {
      state.innerHTML = kind === 'cloud' ? icon('cloud-download') : '';
    }
  });
  const status = f.frame.querySelector('[data-finder-status]');
  if (status) status.textContent = fill(ANIM_COPY[lang].finderStatus, { n: f.downloaded });
}

// ---------- 選單列面板:傳輸進度與狀態 ----------
// 名稱只有一種語言的(照片檔名)用 name;其他用 zh/en。conn 是面板裡連線的索引
const POOL = [
  { zh: '客戶簡報_1001.pdf', en: 'Client deck_1001.pdf', conn: 3, dir: 'up', size: 4.6, speed: 1.1 },
  { zh: '活動花絮.mov', en: 'Event clips.mov', conn: 1, dir: 'down', size: 9.8, speed: 1.4 },
  { name: 'IMG_4822.HEIC', conn: 2, dir: 'down', size: 2.8, speed: 0.9 },
  { zh: '季度報表.numbers', en: 'Quarterly report.numbers', conn: 0, dir: 'up', size: 1.9, speed: 0.8 },
  { zh: '2026 品牌提案_final_v3.key', en: '2026 Brand Pitch_final_v3.key', conn: 0, dir: 'up', size: 7.1, speed: 1.2 },
  { name: 'IMG_4821.HEIC', conn: 2, dir: 'down', size: 3.0, speed: 0.9 }
];
const panels = [];

function setupPanels() {
  document.querySelectorAll('[data-panel]').forEach((slot, n) => {
    const panel = {
      root: slot,
      state: 'sync',
      next: n * 2,   // 兩個面板從清單不同位置開始,看起來不會一模一樣
      transfers: [
        { ...POOL[4], pct: 45 },
        { ...POOL[5], pct: 80 }
      ],
      recent: [
        { zh: '會議記錄 10-01.md', en: 'Meeting notes 10-01.md', conn: 0, time: '10:28' },
        { name: 'IMG_4820.HEIC', conn: 2, time: '10:25' },
        { zh: '素材包_v2.zip', en: 'Assets_v2.zip', conn: 1, time: '10:12' }
      ]
    };
    panels.push(panel);
    renderPanel(panel);
    if (reduceMotion) return;
    let timer = null;
    whileVisible(slot, visible => {
      clearInterval(timer);
      if (visible) timer = setInterval(() => stepPanel(panel), 1000);
    });
  });
}

function stepPanel(p) {
  if (p.state === 'pause' || p.state === 'normal') return;   // 這兩種狀態沒有傳輸
  let changed = false;
  p.transfers = p.transfers.map(t => {
    if (t.waiting) {
      t.waiting -= 1;
      return t;
    }
    const pct = Math.min(100, t.pct + (t.speed / t.size) * 100);
    if (pct < 100) return { ...t, pct };
    // 完成:移到「最近完成」,稍後換下一個檔案
    const now = new Date();
    p.recent = [{ ...t, time: `${now.getHours()}:${String(now.getMinutes()).padStart(2, '0')}`, fresh: true }, ...p.recent].slice(0, 3);
    changed = true;
    const next = POOL[p.next++ % POOL.length];
    return { ...next, pct: 0, waiting: 1, fresh: true };
  });
  renderPanel(p, changed);
}

function connName(index) { return COPY[lang].mb.names[index]; }

function formatMeta(t) {
  const done = (t.size * t.pct / 100).toFixed(1);
  const left = Math.max(1, Math.ceil((t.size * (100 - t.pct) / 100) / t.speed));
  return [connName(t.conn), `${Math.round(t.pct)}%`, `${done} MB / ${t.size.toFixed(1)} MB`, `${t.speed.toFixed(1)} MB/s`,
          fill(ANIM_COPY[lang].left, { s: left })].join(' · ');
}

function renderPanel(p, listChanged = true) {
  const root = p.root;
  // 標題列
  const head = ANIM_COPY[lang].states[p.state];
  const dot = root.querySelector('[data-head-dot]');
  if (dot) {
    const symbol = { normal: 'circle-check', sync: 'arrow-up-down', alert: 'circle-alert', pause: 'circle-pause' }[p.state];
    dot.className = `mb-dot ${p.state === 'alert' || p.state === 'pause' ? p.state : ''}`;
    dot.innerHTML = icon(symbol);
  }
  root.querySelector('[data-head-title]').textContent = head.title;
  root.querySelector('[data-head-sub]').textContent = head.sub;
  // 連線列:暫停時全部關掉,需要處理時「客戶交付」變紅
  root.querySelectorAll('.mb-conn').forEach((row, i) => {
    const failed = p.state === 'alert' && i === 3;
    row.classList.toggle('failed', failed);
    const sw = row.querySelector('.mb-switch');
    if (p.state === 'pause') sw.setAttribute('aria-checked', 'false');
    else if (p.state !== 'pause' && sw.dataset.userOff !== '1') sw.setAttribute('aria-checked', 'true');
    updateMountLabel(row);
    if (failed) {
      row.querySelector('.mb-st span').textContent = ANIM_COPY[lang].failed;
      row.querySelector('.mb-st svg use').setAttribute('href', 'assets/icons.svg#i-circle-alert');
    } else {
      row.querySelector('.mb-st svg use').setAttribute('href', 'assets/icons.svg#i-circle-check');
    }
  });
  // 傳輸中(一般、暫停時沒有傳輸)
  const transfers = root.querySelector('[data-transfers]');
  const hasTransfers = p.state === 'sync' || p.state === 'alert';
  transfers.previousElementSibling.hidden = !hasTransfers;
  transfers.hidden = !hasTransfers;
  if (listChanged || transfers.children.length !== p.transfers.length) {
    transfers.innerHTML = p.transfers.map(t => `
      <div class="mb-tr${t.fresh ? ' enter' : ''}">${icon(t.dir === 'up' ? 'arrow-up' : 'arrow-down')}<div class="mb-tr-b">
        <div class="mb-fn"></div><div class="mb-bar"><i></i></div><div class="mb-meta"></div></div></div>`).join('');
    p.transfers.forEach(t => { t.fresh = false; });
  }
  [...transfers.children].forEach((row, i) => {
    const t = p.transfers[i];
    row.querySelector('.mb-fn').textContent = pick(t);
    row.querySelector('.mb-bar i').style.width = `${t.pct}%`;
    row.querySelector('.mb-meta').textContent = t.waiting ? connName(t.conn) : formatMeta(t);
  });
  // 最近完成
  if (listChanged) {
    root.querySelector('[data-recent]').innerHTML = p.recent.map(r => `
      <div class="mb-done${r.fresh ? ' enter' : ''}">${icon('circle-check')}<div class="mb-fn"></div><div class="when"></div></div>`).join('');
    p.recent.forEach(r => { r.fresh = false; });
  }
  root.querySelectorAll('[data-recent] .mb-done').forEach((row, i) => {
    const r = p.recent[i];
    row.querySelector('.mb-fn').textContent = pick(r);
    row.querySelector('.when').textContent = `${connName(r.conn)} · ${r.time}`;
  });
}

// ---------- 狀態格:滑過(或點一下)時,同一區的面板切換成那個狀態 ----------
function setupStates() {
  document.querySelectorAll('.panel-sec').forEach(section => {
    const panel = panels.find(p => section.contains(p.root));
    if (!panel) return;
    const cells = [...section.querySelectorAll('.state')];
    // 「一般」「已暫停」沒有傳輸區,面板會變矮;區塊是垂直置中,左邊的狀態格會跟著移動,
    // 滑鼠因此離開而跳回「同步中」→ 閃爍。所以面板區固定用「同步中」時的高度
    const slot = panel.root.closest('.panel-slot');
    const lockHeight = () => {
      if (panel.state !== 'sync') return;
      slot.style.minHeight = '';
      slot.style.minHeight = `${slot.offsetHeight}px`;
    };
    lockHeight();
    window.addEventListener('resize', lockHeight);
    const show = state => {
      panel.state = state;
      cells.forEach(cell => cell.classList.toggle('active', cell.dataset.state === state));
      renderPanel(panel);
    };
    cells.forEach(cell => {
      cell.addEventListener('mouseenter', () => show(cell.dataset.state));
      cell.addEventListener('focus', () => show(cell.dataset.state));
      cell.addEventListener('click', () => show(cell.dataset.state));
    });
    section.querySelector('.states').addEventListener('mouseleave', () => show('sync'));
    cells[0].closest('.states').addEventListener('focusout', event => {
      if (!event.currentTarget.contains(event.relatedTarget)) show('sync');
    });
  });
}

// 使用者手動關掉的開關,狀態切換時要記得維持關閉
document.addEventListener('click', event => {
  const sw = event.target.closest('.mb-switch');
  if (sw) sw.dataset.userOff = sw.getAttribute('aria-checked') === 'false' ? '1' : '';
});

setupReveal();
setupFinders();
setupPanels();
setupStates();

// 切換語言時,動態內容也要重畫
const baseApplyLang = applyLang;
applyLang = next => {
  baseApplyLang(next);
  finders.forEach(renderFinder);
  panels.forEach(p => renderPanel(p));
};
