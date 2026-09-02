"use strict";

const COMMITS = {
  duplicateGuard: { hash: "02f1a14", date: "2026-08-28 14:44", short: "08/28 14:44", summary: "同日重複排班守衛" },
  breakFinal: { hash: "ee648d8", date: "2026-08-28 11:20", short: "08/28 11:20", summary: "休息確認防呆收尾三項" },
  importLayout: { hash: "a7e74c1", date: "2026-08-26 21:41", short: "08/26 21:41", summary: "班表匯入支援日期格表頭與上班時間＋工時版型" },
  breakGate: { hash: "e960c3e", date: "2026-08-26 19:26", short: "08/26 19:26", summary: "打卡未結束或無打卡不得完成休息雙簽" },
  ciSeed: { hash: "5c8f144", date: "2026-08-20 11:31", short: "08/20 11:31", summary: "CI 測試加入合成種子資料" },
  ci: { hash: "668a7ec", date: "2026-08-20 11:10", short: "08/20 11:10", summary: "GitHub Actions 執行完整回歸測試" },
  locationAudit: { hash: "aa70c03", date: "2026-08-20 10:53", short: "08/20 10:53", summary: "定位缺失的稽核警示分類" },
  shiftNames: { hash: "58adeb4", date: "2026-08-19 21:40", short: "08/19 21:40", summary: "排班編輯器保留自訂班別名稱" },
  locationBanner: { hash: "bc3bca2", date: "2026-08-19 21:38", short: "08/19 21:38", summary: "定位失敗提示優先顯示" },
  shiftLabels: { hash: "a746957", date: "2026-08-19 21:37", short: "08/19 21:37", summary: "排班畫面避免重複顯示班別時間" },
  locationKinds: { hash: "1cd2bc3", date: "2026-08-19 20:19", short: "08/19 20:19", summary: "區分拒絕定位、逾時與訊號不佳" },
  weeklyEntry: { hash: "94a89d0", date: "2026-08-19 20:17", short: "08/19 20:17", summary: "週班表可直接輸入上下班時間" },
  weeklyCompact: { hash: "9ab68d0", date: "2026-08-19 20:14", short: "08/19 20:14", summary: "週班表格線精簡" },
  attendanceReview: { hash: "c449d0f", date: "2026-08-18 23:26", short: "08/18 23:26", summary: "出勤 UX 複檢修正 R1–R4" },
  punchSafety: { hash: "2a005ed", date: "2026-08-18 18:01", short: "08/18 18:01", summary: "打卡確認卡、送出鎖、冷卻與定位前置" },
  punchEdit: { hash: "ec117e0", date: "2026-08-17 15:15", short: "08/17 15:15", summary: "值班主管打卡補登與修正 API" },
  weekTimeline: { hash: "d916a58", date: "2026-08-17 15:00", short: "08/17 15:00", summary: "週格線與每日時間軸" },
  attendanceViews: { hash: "6a04580", date: "2026-08-17 14:45", short: "08/17 14:45", summary: "出勤日檢視與月檢視" },
  paidBreak: { hash: "191eb20", date: "2026-08-17 14:41", short: "08/17 14:41", summary: "計薪休息與打卡事件分離" },
  breakValidation: { hash: "d9ed0a3", date: "2026-08-17 14:30", short: "08/17 14:30", summary: "只驗證本次變更的休息確認" },
  importFix: { hash: "38250ad", date: "2026-08-16 13:54", short: "08/16 13:54", summary: "匯入年月、換人與錯誤列修正" },
  importAudit: { hash: "74d2b6d", date: "2026-08-15 16:52", short: "08/15 16:52", summary: "班表匯入驗證與稽核長期保存" },
  minorFix: { hash: "b83877a", date: "2026-08-15 16:49", short: "08/15 16:49", summary: "未成年同意書驗證與回歸測試" },
  auditQuery: { hash: "9c679e0", date: "2026-08-15 11:00", short: "08/15 11:00", summary: "班表匯入與稽核長期保存" },
  minorUi: { hash: "9d8534b", date: "2026-08-14 23:34", short: "08/14 23:34", summary: "未成年同意書操作介面" },
  minorGuard: { hash: "786ca17", date: "2026-08-14 23:34", short: "08/14 23:34", summary: "未成年同意書排班守衛" },
  punchBlockers: { hash: "de55323", date: "2026-08-14 22:31", short: "08/14 22:31", summary: "下班卡與休息選填阻塞修正" },
  security: { hash: "d9504ca", date: "2026-08-13 09:44", short: "08/13 09:44", summary: "資安掃描 15 項強化" },
  auditServer: { hash: "3cecd83", date: "2026-08-12 14:21", short: "08/12 14:21", summary: "稽核日誌改由伺服器寫入並涵蓋全員" },
  roster: { hash: "956db7c", date: "2026-08-07 16:33", short: "08/07 16:33", summary: "2026 人事名單全量重建精靈與 API" },
  backupTools: { hash: "edb2a0b", date: "2026-08-07 17:59", short: "08/07 17:59", summary: "應用狀態備份與重建驗收工具" },
  myProfile: { hash: "6ebee1d", date: "2026-07-26 19:09", short: "07/26 19:09", summary: "我的資料頁與登入首頁規則" },
  employeeScope: { hash: "f330a27", date: "2026-07-26 12:57", short: "07/26 12:57", summary: "員工範圍、門店與離職查詢強化" },
  salaryPrivacy: { hash: "239fcf3", date: "2026-07-25 14:43", short: "07/25 14:43", summary: "員工名單薪資欄位依角色隱藏" },
  employeeSelects: { hash: "1e47283", date: "2026-07-25 14:21", short: "07/25 14:21", summary: "員工建檔品牌與門市改用選單" },
  permissionScope: { hash: "0649664", date: "2026-07-17 21:02", short: "07/17 21:02", summary: "排班權限、員工唯讀班表與薪資授權" },
  mobile: { hash: "7a0bfe3", date: "2026-07-17 18:24", short: "07/17 18:24", summary: "行動裝置優先版面" },
  release: { hash: "258e8ca", date: "2026-07-15 11:09", short: "07/15 11:09", summary: "v1.1.0 權限與手機版修正" },
  lifecycle: { hash: "8bc82e0", date: "2026-07-14 13:21", short: "07/14 13:21", summary: "管理者到離職流程完成覆核" },
  permissionCore: { hash: "72118b6", date: "2026-07-13 23:46", short: "07/13 23:46", summary: "品牌範圍、薪資遮罩、門店與排班合規" },
  punchSchedule: { hash: "41020e6", date: "2026-07-11 20:41", short: "07/11 20:41", summary: "排班驅動打卡與全員打卡帳號" },
  salaryFlow: { hash: "566cb21", date: "2026-07-11 19:27", short: "07/11 19:27", summary: "薪資三階審核、自由月份與免打卡" },
  navFlow: { hash: "1fdef12", date: "2026-07-11 14:34", short: "07/11 14:34", summary: "依 HR 工作重組選單與月結動線" },
  deploy: { hash: "4fdfa1f", date: "2026-07-05 23:06", short: "07/05 23:06", summary: "Railway 部署操作手冊" },
  initial: { hash: "55349d6", date: "2026-07-05 23:05", short: "07/05 23:05", summary: "員工打卡入口與 PostgreSQL 持久化" }
};

const AUTO_COMMIT_DATA = window.SYSTEM_MAP_COMMIT_DATA || { files: {} };

function latestCommitForFiles(files, fallback) {
  const paths = (Array.isArray(files) ? files : String(files || "").split(/\s*·\s*/))
    .map((path) => String(path).trim())
    .filter(Boolean);
  const latest = paths
    .map((path) => AUTO_COMMIT_DATA.files?.[path])
    .filter(Boolean)
    .sort((left, right) => right.timestamp - left.timestamp)[0];
  return latest ? { ...fallback, ...latest, summary: fallback.summary } : fallback;
}

const DISTRICTS = [
  { id: "daily", name: "日常人事區", icon: "🏫", kid: "每天照顧大家的辦公室", color: "#258362", soft: "#dff5e8" },
  { id: "payroll", name: "每月薪資區", icon: "🧮", kid: "把時間和薪水算清楚的計算中心", color: "#9a6800", soft: "#fff0bd" },
  { id: "self", name: "員工自助區", icon: "🎒", kid: "每個人自己的小書包", color: "#1675a3", soft: "#dff3ff" },
  { id: "admin", name: "系統管理區", icon: "🛡️", kid: "老師和管理員的控制室", color: "#6845b8", soft: "#eee7ff" }
];

function feature(name, kid, manager, commit, files, api = "") {
  return { name, kid, manager, commit, files: Array.isArray(files) ? files : [files], api };
}

const MODULES = [
  {
    id: "dash", district: "daily", name: "今日工作台", icon: "📋", fn: "viewDash()",
    kid: "像老師早上先看的黑板：哪些事今天一定要處理，一眼就知道。",
    manager: "彙整在職、本月到職、加退保、薪資草稿、請假待審與合規異常，提供跨模組入口。",
    roles: ["人資", "負責人", "系統管理員"], flow: ["員工、保險、請假、薪資", "計算 KPI 與待辦", "提醒與快捷入口"],
    dependencies: ["員工主檔", "勞健保", "請假", "薪資流程"], files: ["public/index.html"], apis: ["GET /api/state"], tests: ["test/regression.js"], commit: COMMITS.minorUi,
    features: [
      feature("五項營運 KPI", "把今天重要的五個數字寫在黑板最上面。", "統計在職、新進、保險待辦、薪資草稿與請假待審。", COMMITS.navFlow, "public/index.html"),
      feature("今日待辦", "還沒完成的作業會排在最前面。", "彙整加退保期限、未成年文件與生日待補事項。", COMMITS.minorUi, "public/index.html"),
      feature("人力分布", "看看每間教室有多少人。", "依品牌與門店顯示在職與試用人數。", COMMITS.employeeScope, "public/index.html"),
      feature("合規異常警示", "如果規則可能被打破，就亮紅燈提醒。", "呼叫工時與薪資異常檢查並連到報表中心。", COMMITS.permissionCore, "public/index.html"),
      feature("薪資月結進度", "看看算薪水的作業走到第幾關。", "依薪資狀態顯示各階段數量並導向月結流程。", COMMITS.salaryFlow, "public/index.html")
    ]
  },
  {
    id: "employees", district: "daily", name: "員工管理", icon: "👥", fn: "viewEmployees()",
    kid: "像全校名冊，可以找人、加新人，也能安全查看已離開的人。",
    manager: "管理在職清單、篩選、新增員工、薪資欄位遮罩、批次帳號、人事名單重建與離職調閱。",
    roles: ["人資", "負責人", "管理職", "系統管理員"], flow: ["員工主檔與帳號", "依角色與門店裁切", "名冊、建檔與調閱"],
    dependencies: ["門店設定", "權限範圍", "打卡帳號", "稽核日誌"], files: ["public/index.html", "server.js", "scripts/roster-import-lib.js"],
    apis: ["GET/POST /api/state", "POST /api/employees/archived", "POST /api/employee-accounts/bulk", "POST /api/roster-rebuild/*"], tests: ["test/regression.js", "test/seed-fixture.js"], commit: COMMITS.minorUi,
    features: [
      feature("在職員工名單與篩選", "用班級、分校和狀態快速找人。", "依狀態、公司、品牌、門店與資料範圍篩選員工。", COMMITS.employeeScope, "public/index.html"),
      feature("薪資欄位遮罩", "不是每位老師都能看同學的零用錢。", "只有人資、財務、負責人與管理員可看薪資欄。", COMMITS.salaryPrivacy, ["public/index.html", "server.js"]),
      feature("新增員工", "把新同學加入名冊，並替他準備需要的資料袋。", "配置員工編號、主檔、薪資結構與加保待辦。", COMMITS.employeeSelects, ["public/index.html", "server.js"], "POST /api/employee-id/allocate"),
      feature("批次建立打卡帳號", "一次幫很多同學做好門禁卡。", "為在職員工建立身分證字號帳號並要求首次改密。", COMMITS.punchSchedule, ["public/index.html", "server.js"], "POST /api/employee-accounts/bulk"),
      feature("離職員工查詢", "舊名冊鎖在櫃子裡，要登記才能看。", "離職資料不下發前端；每次查詢與明細調閱皆寫入稽核。", COMMITS.employeeScope, ["public/index.html", "server.js"], "POST /api/employees/archived"),
      feature("2026 人事名單重建", "把舊名冊先檢查，再整本換成新的。", "先預檢影響、備份，再由執行中的服務重建人員與引用關係。", COMMITS.roster, ["public/index.html", "server.js", "scripts/roster-import-lib.js"], "POST /api/roster-rebuild/*")
    ]
  },
  {
    id: "life", district: "daily", name: "員工檔案", icon: "🗂️", fn: "viewLife()",
    kid: "每個人的專屬資料袋，裡面分成基本資料、報到、薪資和文件。",
    manager: "隱藏於導覽的員工明細頁，涵蓋主檔、到離職、薪資、文件、門店、帳號與封存。",
    roles: ["人資", "負責人", "授權管理職"], flow: ["選定員工", "分頁維護與權限檢查", "主檔、文件、流程紀錄"],
    dependencies: ["員工管理", "門店設定", "帳號權限", "薪資結構"], files: ["public/index.html", "server.js"], apis: ["POST /api/lifecycle-completion", "POST /api/employees/archive", "POST /api/employee-accounts/*"], tests: ["test/regression.js"], commit: COMMITS.minorUi,
    features: [
      feature("主檔與所屬門店", "記下這個人是誰、在哪些地方上班。", "維護個資、任用、主要門店與跨店支援範圍。", COMMITS.employeeScope, "public/index.html"),
      feature("到職與離職流程", "像報到檢查表，一格一格確認都完成。", "追蹤報到、文件、保險、設備與離職清單。", COMMITS.lifecycle, ["public/index.html", "server.js"], "POST /api/lifecycle-completion"),
      feature("薪資結構", "記下每月固定會拿到哪些錢。", "維護底薪、津貼、伙食、投保級距等固定項。", COMMITS.release, "public/index.html"),
      feature("未成年文件", "未滿十八歲要先收好家長同意書。", "登錄家長同意書、年齡證明、收件日與紙本位置。", COMMITS.minorUi, "public/index.html"),
      feature("打卡帳號卡", "查看門禁卡有沒有做好，也能請管理員重做。", "顯示帳號狀態、重置密碼並標記管理職帳號。", COMMITS.punchSchedule, ["public/index.html", "server.js"], "POST /api/employee-accounts/reset"),
      feature("離職封存", "把資料袋放進上鎖的舊資料櫃。", "以封存 PIN 將員工轉離職並保留稽核與引用資料。", COMMITS.security, ["public/index.html", "server.js"], "POST /api/employees/archive")
    ]
  },
  {
    id: "attendance", district: "daily", name: "請假與特休", icon: "🗓️", fn: "viewAttendance()",
    kid: "交請假單、等老師批准，也能看看還剩多少假。",
    manager: "處理請假送審、核准與特休餘額；核准結果在月結時轉為對應扣款。",
    roles: ["員工", "人資", "主管"], flow: ["請假申請", "主管或人資審核", "出勤與薪資扣款"], dependencies: ["員工主檔", "出勤試算", "薪資 Key in"],
    files: ["public/index.html", "server.js"], apis: ["GET/POST /api/state"], tests: ["test/regression.js"], commit: COMMITS.navFlow,
    features: [
      feature("新增請假", "填好哪天不能來和原因。", "新增請假日期、時數、假別與說明。", COMMITS.navFlow, "public/index.html"),
      feature("請假核准與退回", "老師檢查後蓋同意或退回。", "變更請假狀態，支援單筆與批次核准。", COMMITS.navFlow, "public/index.html"),
      feature("特休餘額", "看看自己的假期存錢筒還剩幾小時。", "顯示員工特休餘額與提醒。", COMMITS.navFlow, "public/index.html"),
      feature("請假扣款銜接", "核准的請假會送到算薪水的那一站。", "依規則換算請假扣款並寫入當月調整。", COMMITS.salaryFlow, "public/index.html")
    ]
  },
  {
    id: "insurance", district: "daily", name: "勞健保加退保", icon: "☂️", fn: "viewInsurance()",
    kid: "新同學來要加入保護傘，離開時要辦好退出。",
    manager: "追蹤到職加保、離職退保、生效日、投保級距、佐證與完成狀態。",
    roles: ["人資", "負責人"], flow: ["到職或離職", "建立加退保待辦", "完成申報與佐證"], dependencies: ["員工建檔", "離職封存", "排班守衛"],
    files: ["public/index.html", "server.js"], apis: ["GET/POST /api/state"], tests: ["test/regression.js"], commit: COMMITS.security,
    features: [
      feature("自動建立待辦", "新人來了，保護傘作業會自動出現在清單。", "建檔與封存時建立加保或退保工作。", COMMITS.initial, ["public/index.html", "server.js"]),
      feature("完成、退回與佐證", "做完就打勾，發現錯誤還能退回。", "切換申報狀態並追蹤證明文件。", COMMITS.security, "public/index.html"),
      feature("未加保排班阻擋", "保護傘還沒辦好，先不能排進班表。", "前後端同時阻擋仍有加保待辦的員工被排班。", COMMITS.permissionCore, ["public/index.html", "server.js"])
    ]
  },
  {
    id: "scheduleFlow", district: "payroll", name: "出勤與試算", icon: "⏱️", fn: "viewScheduleFlow()",
    kid: "先排好誰何時上課，再把實際到校時間拿來對答案。",
    manager: "月結第一站，整合排班、匯入、打卡、休息雙簽、日月檢視、試算比對與規則參數。",
    roles: ["員工", "店長", "人資", "負責人"], flow: ["班表、打卡、請假", "比對工時與規則", "加班與扣款試算"],
    dependencies: ["門店圍籬", "未成年文件", "勞健保", "薪資 Key in"], files: ["public/index.html", "public/attendance-calc.js", "public/schedule-import.js", "server.js"],
    apis: ["GET/POST /api/state", "POST /api/punch-edit", "GET /api/my-schedule"], tests: ["test/attendance-calc.js", "test/schedule-import.js", "test/break-review-legacy.js", "test/regression.js"], commit: COMMITS.duplicateGuard,
    features: [
      feature("月曆與列表排班", "把每個人的上班時間放進月曆。", "以行事曆或列表建立、編輯與刪除多段排班。", COMMITS.shiftNames, ["public/index.html", "server.js"]),
      feature("週格線直接排班", "在一週課表格子裡直接填時間。", "支援週檢視、每日合計與格內起訖時間輸入。", COMMITS.weeklyEntry, ["public/index.html", "public/attendance-calc.js"]),
      feature("每日時間軸", "把一天每個人的上班時間排成一條線。", "依日期展示人員班段與出勤狀態。", COMMITS.weekTimeline, ["public/index.html", "public/attendance-calc.js"]),
      feature("Excel 班表匯入", "把老師做好的課表整張讀進來，先檢查再放進系統。", "辨識日期格、班別代碼、時間＋工時、門店、月份與錯誤列。", COMMITS.importLayout, ["public/index.html", "public/schedule-import.js", "test/schedule-import.js"]),
      feature("同日重複排班守衛", "同一天一模一樣的課不能排兩次；重疊時要先警告。", "完全相同時段前後端阻擋，匯入取代同時段手動列；不同分段班保留。", COMMITS.duplicateGuard, ["public/index.html", "public/attendance-calc.js", "public/schedule-import.js", "server.js"]),
      feature("未成年排班守衛", "未滿十八歲又缺家長同意書，就先不能排班。", "以排班日計算年齡，前後端及匯入路徑一致阻擋。", COMMITS.minorFix, ["public/index.html", "public/schedule-import.js", "server.js"]),
      feature("打卡日檢視與月檢視", "今天誰到了、整個月哪天缺卡，都能看。", "呈現完整、缺下班、無打卡、無排班等出勤狀態。", COMMITS.attendanceViews, ["public/index.html", "public/attendance-calc.js"]),
      feature("打卡匯入與手動補登", "機器的點名表可以匯入，錯漏也能由老師補。", "讀取 CSV/XLSX，預覽後合併；主管可使用專用補登 API。", COMMITS.punchEdit, ["public/index.html", "server.js"]),
      feature("計薪休息與雙簽", "休息多久要由現場老師和人資一起確認。", "值班主管確認事實、HR 覆核後才影響計薪，未結束打卡不得雙簽。", COMMITS.breakFinal, ["public/index.html", "public/attendance-calc.js", "server.js"]),
      feature("排班與打卡比對", "拿原本的課表和真正到校時間比一比。", "逐班段計算應到、實到、遲到、加班、休息與請假。", COMMITS.paidBreak, ["public/index.html", "public/attendance-calc.js"]),
      feature("規則與參數", "在規則簿寫下遲到、加班、休息和打卡範圍怎麼算。", "維護加班倍率、遲到規則、打卡段數、提前視窗、法定工時與圍籬。", COMMITS.security, ["public/index.html", "server.js"]),
      feature("套用到薪資 Key in", "把對完答案的加班與扣款送到下一站。", "將試算結果寫入指定月份 payrollInputs。", COMMITS.salaryFlow, "public/index.html")
    ]
  },
  {
    id: "salarySetup", district: "payroll", name: "調整 Key in", icon: "⌨️", fn: "viewSalarySetup()",
    kid: "機器先算基本答案，老師再補上獎金、支援或其他調整。",
    manager: "月結第二站，維護固定薪資結構、自由選擇月份、建立調整清單並產生薪資草稿。",
    roles: ["人資", "授權管理職", "負責人"], flow: ["試算結果與固定薪資", "補入每月增減項", "薪資草稿"], dependencies: ["出勤試算", "員工薪資結構", "覆核與發放"],
    files: ["public/index.html", "server.js"], apis: ["GET/POST /api/state"], tests: ["test/regression.js"], commit: COMMITS.release,
    features: [
      feature("自由選擇薪資月份", "可以翻到想處理的月份，不只看本月。", "以月份欄位建立與篩選薪資調整清單。", COMMITS.salaryFlow, "public/index.html"),
      feature("固定薪資結構", "先記好每個人固定會拿到的項目。", "維護底薪、津貼、伙食與保險等固定資料。", COMMITS.release, "public/index.html"),
      feature("每月增減項", "補上這個月特別的獎勵或扣款。", "調整績效、支援、加班、請假及其他增減項。", COMMITS.release, "public/index.html"),
      feature("管理職工時模式", "有些老師只能填時間，不能看到別人的錢。", "未授權薪資角色只取得與寫入工時相關欄位。", COMMITS.permissionScope, ["public/index.html", "server.js"]),
      feature("建立薪資草稿", "把填好的答案送去最後檢查。", "依薪資結構和 Key in 建立草稿列。", COMMITS.salaryFlow, "public/index.html")
    ]
  },
  {
    id: "payroll", district: "payroll", name: "覆核與發放", icon: "💰", fn: "viewPayroll()",
    kid: "算完後交給校長檢查、鎖好，再發出每個人的薪資單。",
    manager: "月結第三站，執行草稿、送 GM、GM 鎖定、薪資單與銀行匯款檔流程。",
    roles: ["人資", "負責人", "財務總監"], flow: ["薪資草稿", "GM 審核與鎖定", "薪資單與匯款檔"], dependencies: ["調整 Key in", "權限矩陣", "員工銀行資料"],
    files: ["public/index.html", "server.js"], apis: ["POST /api/payslip", "POST /api/payslips/batch", "POST /api/payroll/unlock"], tests: ["test/regression.js"], commit: COMMITS.salaryFlow,
    features: [
      feature("三階薪資狀態", "作業要先完成、再給校長看、最後鎖起來。", "草稿 → 待 GM 審核 → 已鎖定，角色與順序由伺服器強制。", COMMITS.salaryFlow, ["public/index.html", "server.js"]),
      feature("月份篩選與批次送審", "先選這個月，再一次把完成的作業交出去。", "依月份查看並批次推進可送審薪資。", COMMITS.salaryFlow, "public/index.html"),
      feature("退回與解鎖", "發現錯誤就退回重做；解鎖要有特別權限。", "記錄退回原因，授權角色可走專用解鎖 API。", COMMITS.security, ["public/index.html", "server.js"], "POST /api/payroll/unlock"),
      feature("加密薪資單 PDF", "每人的信封都有只有自己知道的密碼。", "鎖定後產生以身分證字號加密的單筆或批次 PDF。", COMMITS.security, ["public/index.html", "server.js"], "POST /api/payslip"),
      feature("銀行匯款檔", "把每個人要收到的錢整理成銀行清單。", "輸出銀行帳號、戶名與實發金額 CSV。", COMMITS.security, "public/index.html")
    ]
  },
  {
    id: "employeePunch", district: "self", name: "員工打卡", icon: "📍", fn: "viewEmployeePunch()",
    kid: "自己按下『我來了』和『我要回家了』，系統幫忙記住時間。",
    manager: "依當日排班產生打卡序列與時間窗，取得當下定位、執行稽核並提供主管補登。",
    roles: ["員工", "店長", "值班主管", "系統管理員"], flow: ["本人帳號、班表與定位", "時間窗與稽核檢查", "本人打卡紀錄"],
    dependencies: ["當日排班", "門店圍籬", "帳號綁定", "出勤試算"], files: ["public/index.html", "public/attendance-calc.js", "server.js"],
    apis: ["GET /api/me", "POST /api/my-punches", "GET /api/my-schedule", "POST /api/punch-edit"], tests: ["test/regression.js", "test/punch-diag-sim.js"], commit: COMMITS.locationAudit,
    features: [
      feature("排班驅動打卡序列", "今天排幾段課，就出現幾組上課和下課按鈕。", "依當日 schedule 段數產生 in、break、out 事件。", COMMITS.punchSchedule, ["public/index.html", "server.js"]),
      feature("上班提前與下班時間窗", "太早不能先簽到，剛上課也不能立刻簽退。", "伺服器依班段與 punchEarlyMinutes 驗證打卡時間。", COMMITS.punchBlockers, "server.js"),
      feature("二段確認與送出鎖", "先看清楚要按什麼，再確認；按完幾秒不能連點。", "確認卡、請求期間全按鈕鎖定與三秒冷卻。", COMMITS.punchSafety, "public/index.html"),
      feature("定位取得與說明", "只在按打卡時問一次位置，不會偷偷跟著走。", "預先取得定位並區分拒絕、逾時、低精度與超出圍籬。", COMMITS.locationAudit, ["public/index.html", "server.js"]),
      feature("本人近期紀錄與重新整理", "打完馬上看到剛才的時間，也能重新確認。", "以伺服器回傳結果合併本地並定時更新按鈕狀態。", COMMITS.attendanceReview, "public/index.html"),
      feature("主管門店打卡狀態", "老師只看自己班上的到校情況。", "管理職僅能查看所屬門店當日狀態與警示。", COMMITS.permissionScope, ["public/index.html", "server.js"]),
      feature("主管補登與逾期核准", "漏點名時由老師說明原因補上，太晚修改要再批准。", "保留原始紀錄、事由與核准軌跡的專用 API。", COMMITS.punchEdit, ["public/index.html", "server.js"])
    ]
  },
  {
    id: "myProfile", district: "self", name: "我的資料", icon: "🪪", fn: "viewMyProfile()",
    kid: "只看自己的資料卡，別人的不會跑進來。",
    manager: "透過員工專用資料通道顯示本人基本資料、門店、今日班表與近期打卡，完全唯讀。",
    roles: ["員工", "綁定員工的管理職"], flow: ["GET /api/me", "伺服器只挑本人資料", "本人資料卡"], dependencies: ["帳號綁定", "員工主檔", "當日排班"],
    files: ["public/index.html", "server.js"], apis: ["GET /api/me"], tests: ["test/regression.js"], commit: COMMITS.shiftLabels,
    features: [
      feature("本人基本資料", "看自己的姓名、門店、職稱和假期。", "顯示本人基本、聯絡、到職、試用與特休資料。", COMMITS.myProfile, ["public/index.html", "server.js"]),
      feature("今日排班", "今天幾點要到，一打開就知道。", "顯示今日多段排班、班別名稱與休息分鐘。", COMMITS.shiftLabels, "public/index.html"),
      feature("最近十筆打卡", "看看最近幾次點名有沒有記成功。", "顯示本人最近打卡時間、來源與稽核結果。", COMMITS.myProfile, "public/index.html")
    ]
  },
  {
    id: "mySalary", district: "self", name: "我的薪資", icon: "✉️", fn: "viewMySalary()",
    kid: "只打開自己的薪資信封，不會看到別人的。",
    manager: "以本人專用 API 提供薪資結構與最近 24 期薪資單，前端唯讀且不經管理端整包資料。",
    roles: ["員工"], flow: ["GET /api/me", "伺服器計算本人薪資", "本人薪資與各期明細"], dependencies: ["薪資結構", "已完成薪資", "帳號綁定"],
    files: ["public/index.html", "server.js"], apis: ["GET /api/me"], tests: ["test/regression.js"], commit: COMMITS.release,
    features: [
      feature("本人薪資結構", "看看自己的固定薪資怎麼組成。", "唯讀顯示底薪與各固定項。", COMMITS.release, "public/index.html"),
      feature("最近 24 期薪資單", "每個月份的信封都能分開打開。", "伺服器計算並回傳本人最近 24 期薪資明細。", COMMITS.release, ["public/index.html", "server.js"])
    ]
  },
  {
    id: "stores", district: "admin", name: "門店設定", icon: "🏪", fn: "viewStores()",
    kid: "告訴地圖每間分校在哪裡、叫什麼名字。",
    manager: "維護門店主檔、地址、座標、半徑與總公司例外，供人員範圍和打卡圍籬共用。",
    roles: ["人資", "負責人", "系統管理員"], flow: ["門店名稱與地址", "轉座標並設定圍籬", "排班範圍與打卡判定"], dependencies: ["員工所屬門店", "排班權限", "定位稽核"],
    files: ["public/index.html", "server.js"], apis: ["POST /api/geocode", "GET/POST /api/state"], tests: ["test/regression.js"], commit: COMMITS.employeeScope,
    features: [
      feature("門店主檔", "建立每間分校的正式名稱。", "新增、編輯與刪除門店，並列出尚未建檔的門店。", COMMITS.employeeScope, "public/index.html"),
      feature("總公司例外", "總辦公室不是打卡門市，不用畫圓圈。", "總公司保留人員範圍但不誤報缺少圍籬。", COMMITS.employeeScope, ["public/index.html", "server.js"]),
      feature("地址轉座標", "輸入地址，請地圖幫忙找經緯度。", "伺服器代理地理編碼並限制外部回應。", COMMITS.security, ["public/index.html", "server.js"], "POST /api/geocode"),
      feature("打卡電子圍籬", "在門店周圍畫一個可以打卡的圈。", "設定緯度、經度與半徑，供 punchAudit 判斷距離。", COMMITS.permissionCore, ["public/index.html", "server.js"])
    ]
  },
  {
    id: "reports", district: "admin", name: "報表中心", icon: "📊", fn: "viewReports()",
    kid: "把很多資料整理成看得懂的成績表。",
    manager: "提供人力、薪資、加退保、異常報告與 CSV 匯出；本頁唯讀，不回寫營運資料。",
    roles: ["人資", "負責人", "授權管理職"], flow: ["全域營運資料", "統計、合規檢查與遮罩", "報表與 CSV"], dependencies: ["員工", "薪資", "保險", "出勤規則"],
    files: ["public/index.html"], apis: ["GET /api/state"], tests: ["test/regression.js", "test/attendance-calc.js"], commit: COMMITS.importAudit,
    features: [
      feature("人力概況", "看看有多少人、新人和離開的人。", "依公司、品牌、門店計算在職、新進與離職。", COMMITS.employeeScope, "public/index.html"),
      feature("薪資清冊", "把每個人的應發、應扣和實發整理成表。", "依可見薪資範圍輸出清冊。", COMMITS.salaryPrivacy, "public/index.html"),
      feature("加退保追蹤", "看看保護傘的工作還有沒有漏掉。", "依日期與類型輸出申報及佐證狀態。", COMMITS.security, "public/index.html"),
      feature("人員異常報告", "規則可能出錯時，集中放在一張警示單。", "檢查工時、休息、加班、薪資與合規異常。", COMMITS.breakFinal, ["public/index.html", "public/attendance-calc.js"]),
      feature("安全 CSV 匯出", "下載的表格不讓奇怪文字偷偷變成指令。", "中和公式注入字元並依角色輸出可見資料。", COMMITS.security, "public/index.html")
    ]
  },
  {
    id: "integrations", district: "admin", name: "系統整合", icon: "🔌", fn: "viewIntegrations()",
    kid: "像安全的郵差，幫人事系統跟別台機器交換資料。",
    manager: "設定 POS、打卡機與排班系統端點，以 mock 或 HTTPS 同步 punches 與 schedules。",
    roles: ["系統管理員", "負責人"], flow: ["外部系統或 mock", "安全連線與格式驗證", "排班或打卡資料"], dependencies: ["資安守衛", "排班", "打卡", "稽核"],
    files: ["public/index.html", "server.js"], apis: ["POST /api/integrations/sync"], tests: ["test/regression.js"], commit: COMMITS.security,
    features: [
      feature("整合設定", "告訴郵差要去哪裡收資料。", "維護類型、端點、金鑰與最後同步狀態。", COMMITS.initial, ["public/index.html", "server.js"]),
      feature("Mock 驗證", "先用假的信件試跑，不會碰正式系統。", "端點填 mock 時使用內建資料驗證同步流程。", COMMITS.initial, "server.js"),
      feature("外部資料同步", "把收到的課表或點名表放到正確抽屜。", "解析外部回應並合併 schedules 或 punches。", COMMITS.security, "server.js"),
      feature("SSRF 與金鑰保護", "郵差不能跑去危險地址，也不能把鑰匙寫在明信片上。", "僅允許安全 HTTPS 目的地，封鎖內網位址並遮蔽 API key。", COMMITS.security, ["server.js", "test/regression.js"])
    ]
  },
  {
    id: "permissions", district: "admin", name: "帳號與權限", icon: "🔑", fn: "viewPermissions()",
    kid: "每把鑰匙只能開允許的門。",
    manager: "管理帳號、模組矩陣、門店範圍、薪資檢視與編輯、密碼及封存 PIN。",
    roles: ["系統管理員", "負責人"], flow: ["帳號與角色", "模組、範圍與薪資授權", "可見畫面與可寫資料"], dependencies: ["登入與 Session", "資料遮罩", "稽核日誌"],
    files: ["public/index.html", "server.js"], apis: ["POST /api/users*", "POST /api/system-pin"], tests: ["test/regression.js", "test/security-bootstrap.js"], commit: COMMITS.auditQuery,
    features: [
      feature("帳號清單", "查看每把鑰匙屬於誰，普通門禁卡平常先收起來。", "預設隱藏一般員工帳號，只顯示管理帳號與管理職。", COMMITS.punchSchedule, "public/index.html"),
      feature("模組權限矩陣", "勾選這把鑰匙可以開哪些房間。", "依帳號配置 dash、employees、scheduleFlow、salarySetup 等模組。", COMMITS.permissionScope, ["public/index.html", "server.js"]),
      feature("資料與門店範圍", "老師只能看自己負責的班級。", "以角色、品牌、門店與 viewStores 裁切人員資料。", COMMITS.employeeScope, ["public/index.html", "server.js"]),
      feature("薪資檢視與編輯授權", "看得到和改得到是兩把不同鑰匙。", "salaryView 與 salaryEdit 分開授權，範圍仍受門店限制。", COMMITS.permissionScope, ["public/index.html", "server.js"]),
      feature("密碼與首次改密", "新鑰匙第一次用，一定要換成自己的密碼。", "PBKDF2 雜湊、隨機正式密碼、首登改密與到期限制。", COMMITS.security, ["server.js", "test/security-bootstrap.js"]),
      feature("封存 PIN", "重要資料櫃還要再輸入一組密碼。", "設定、驗證與限速封存 PIN。", COMMITS.security, ["public/index.html", "server.js"])
    ]
  },
  {
    id: "audit", district: "admin", name: "稽核日誌", icon: "🔎", fn: "viewAudit()",
    kid: "像不能擦掉的值日紀錄，記下誰在什麼時候做了什麼。",
    manager: "查詢全員操作、敏感資料調閱與匯入紀錄；重要事件由伺服器直接寫入並長期保存。",
    roles: ["系統管理員", "負責人"], flow: ["全員操作與敏感調閱", "伺服器追加與篩選", "可追溯稽核紀錄"], dependencies: ["所有寫入操作", "帳號", "資料儲存層"],
    files: ["public/index.html", "server.js", "store.js"], apis: ["POST /api/audit", "GET /api/audit/query"], tests: ["test/regression.js"], commit: COMMITS.auditQuery,
    features: [
      feature("伺服器端全員紀錄", "不管誰做事，都由值日老師直接記下來。", "不依賴前端 addLog，重要操作由伺服器寫入。", COMMITS.auditServer, ["server.js", "store.js"]),
      feature("條件查詢", "可照日期、名字或做過的事情找紀錄。", "依日期、帳號、動作與關鍵字查詢，單次上限 5000 筆。", COMMITS.auditQuery, ["public/index.html", "server.js", "store.js"], "GET /api/audit/query"),
      feature("離職資料調閱紀錄", "打開舊資料櫃時一定留下簽名。", "查詢名單與開啟明細分別寫 accessLogs。", COMMITS.employeeScope, ["public/index.html", "server.js"]),
      feature("班表匯入稽核", "整張課表匯入時，記下來源、結果和略過原因。", "保存匯入批次、工作表、門店、筆數與錯誤摘要。", COMMITS.importAudit, ["public/index.html", "server.js", "store.js"]),
      feature("保存與查詢上限", "舊紀錄會保留，但一次不要搬出整座倉庫。", "預設保存 365 天並支援條件縮小查詢。", COMMITS.importAudit, ["server.js", "store.js"])
    ]
  }
];

const JOURNEYS = [
  {
    id: "onboarding", name: "新人報到", icon: "🧑‍🤝‍🧑",
    kid: "新同學從報名、加入名冊，到拿到自己的門禁卡。",
    manager: "從員工建檔串接保險、文件、帳號與排班資格。",
    steps: [
      ["建立員工", "配置員工編號與主檔", "POST /api/employee-id/allocate"],
      ["準備資料袋", "建立薪資結構與報到清單", "state.salaryStructures"],
      ["加保與文件", "加保待辦；未成年收同意書", "state.insurance / documents"],
      ["建立帳號", "首登後強制改密", "POST /api/employee-accounts/bulk"],
      ["允許排班", "保險與同意書守衛通過", "POST /api/state" ]
    ]
  },
  {
    id: "payroll", name: "每月算薪", icon: "🧮",
    kid: "先排課、再點名、對答案、補調整，最後交給校長。",
    manager: "橫跨出勤試算、Key in、薪資狀態機與發放檔案。",
    steps: [
      ["排班", "月曆、週格線或 Excel 匯入", "state.schedules"],
      ["取得打卡", "員工自助、匯入或主管補登", "state.punches"],
      ["出勤試算", "比對班段、休息、請假與加班", "AttendanceCalc.dayCalc"],
      ["調整 Key in", "補獎金、支援與增減項", "state.payrollInputs"],
      ["GM 覆核", "草稿 → 待審 → 鎖定", "server stageRank guard"],
      ["發放", "加密薪資單與銀行檔", "POST /api/payslip" ]
    ]
  },
  {
    id: "punch", name: "員工打卡", icon: "📍",
    kid: "先登入、看今天課表、確認按鈕、取得位置，最後安全記下時間。",
    manager: "員工專用 API 與管理端 state 分流，避免整包存檔覆蓋即時打卡。",
    steps: [
      ["登入本人帳號", "Session 綁定員工", "POST /api/login"],
      ["讀取本人資料", "只回傳本人與今日班表", "GET /api/me"],
      ["產生打卡步驟", "依班段與時間窗決定按鈕", "allowedNextKinds"],
      ["定位與確認", "只取當下位置並二段確認", "navigator.geolocation"],
      ["伺服器守衛", "時間窗、重複、範圍與稽核", "POST /api/my-punches"],
      ["立即回顯", "合併伺服器結果後重繪", "employeePortal.punches" ]
    ]
  },
  {
    id: "archive", name: "離職封存與調閱", icon: "🗄️",
    kid: "離開的人不會被丟掉，而是放進上鎖資料櫃；每次打開都簽名。",
    manager: "敏感離職資料不經管理端整包下發，封存與調閱走 dedicated API。",
    steps: [
      ["輸入封存 PIN", "確認高敏感操作", "POST /api/system-pin/verify"],
      ["員工轉離職", "保留資料與引用", "POST /api/employees/archive"],
      ["建立退保待辦", "接續離職作業", "state.insurance"],
      ["離職名單查詢", "伺服器依條件回傳", "POST /api/employees/archived"],
      ["明細調閱", "再次記錄 accessLog", "server appendAccessLog" ]
    ]
  }
];

const PLATFORM = [
  { icon: "🚪", name: "登入、Session 與密碼", kid: "校門與鑰匙管理。", manager: "Cookie Session、PBKDF2 密碼、首登改密與限速。", commit: COMMITS.security, files: "server.js · test/security-bootstrap.js" },
  { icon: "🧍", name: "角色與資料範圍", kid: "每位老師只看自己負責的班。", manager: "依角色、品牌、門店與薪資授權裁切讀寫。", commit: COMMITS.employeeScope, files: "server.js · public/index.html" },
  { icon: "✂️", name: "資料遮罩與防竄改", kid: "不該看的字會先蓋住。", manager: "redactStateForUser 與 scoped merge 保留範圍外原值。", commit: COMMITS.security, files: "server.js" },
  { icon: "📦", name: "資料儲存", kid: "可以放在本機抽屜，也能放進大倉庫。", manager: "PostgreSQL JSONB 或 data/*.json，同一套 store 介面。", commit: COMMITS.initial, files: "store.js · server.js" },
  { icon: "📝", name: "稽核追加保存", kid: "重要紀錄由值日老師直接寫。", manager: "操作與敏感調閱分流保存，支援長期查詢。", commit: COMMITS.importAudit, files: "store.js · server.js" },
  { icon: "🧪", name: "回歸測試與 CI", kid: "每次改造後都把重要關卡重走一次。", manager: "7 支測試檔覆蓋出勤、匯入、資安、種子與診斷。", commit: COMMITS.ciSeed, files: "test/* · .github/workflows" },
  { icon: "🛟", name: "備份與重建工具", kid: "大改名冊前先準備還原點。", manager: "預檢、備份、還原、影響分析與重建驗收。", commit: COMMITS.backupTools, files: "scripts/dump-app-state.js · scripts/restore-app-state.js" },
  { icon: "🚀", name: "部署與正式資料庫", kid: "把系統搬到大家都能使用的地方。", manager: "Node 18+、Railway 與 DATABASE_URL 部署流程。", commit: COMMITS.deploy, files: "DEPLOY.md · server.js" }
];

const ARCHITECTURE_LAYERS = [
  ["使用者入口", ["HR／管理台", "員工自助入口", "手機與桌面瀏覽器"]],
  ["前端畫面", ["16 個 view 模組", "全域 state", "AttendanceCalc", "ScheduleImportParser"]],
  ["資料通道", ["A：GET/POST /api/state", "B：GET /api/me", "C：專用寫入 API"]],
  ["伺服器守衛", ["登入與角色", "資料範圍裁切", "薪資狀態機", "排班／打卡／封存驗證"]],
  ["儲存與外部服務", ["PostgreSQL JSONB", "本機 JSON", "PDFKit", "地理編碼", "POS／打卡機／排班 API"]]
];

const TIMELINE_ITEMS = [
  { commit: COMMITS.duplicateGuard, groups: ["payroll"], tags: ["同日重複排班", "匯入合併", "前後端守衛"], note: "完全相同時段由前後端阻擋，匯入會取代同時段手動列，合法分段班仍保留。" },
  { commit: COMMITS.breakFinal, groups: ["payroll", "admin"], tags: ["休息雙簽", "試算", "報表"], note: "完成休息確認防呆收尾，並讓未結束打卡不阻斷整月試算。" },
  { commit: COMMITS.importLayout, groups: ["payroll"], tags: ["Excel 匯入", "日期表頭", "工時版型"], note: "支援更多門店實際使用的班表格式。" },
  { commit: COMMITS.breakGate, groups: ["payroll"], tags: ["休息確認", "防呆"], note: "無打卡或打卡尚未結束時，不允許值班主管與 HR 完成雙簽。" },
  { commit: COMMITS.ciSeed, groups: ["platform"], tags: ["測試", "CI"], note: "沒有正式種子資料的 CI 環境，也能使用合成資料執行回歸測試。" },
  { commit: COMMITS.locationAudit, groups: ["self", "payroll"], tags: ["定位", "稽核"], note: "把拒絕定位、逾時與無定位分類為可理解的稽核警示。" },
  { commit: COMMITS.shiftNames, groups: ["payroll"], tags: ["排班", "班別名稱"], note: "編輯自訂班別時不再被時間字串取代。" },
  { commit: COMMITS.weeklyEntry, groups: ["payroll"], tags: ["週班表", "直接輸入"], note: "週格線可直接輸入班段時間，減少開啟表單的步驟。" },
  { commit: COMMITS.punchSafety, groups: ["self"], tags: ["打卡", "防誤觸", "定位"], note: "導入確認卡、送出鎖、三秒冷卻與定位權限前置。" },
  { commit: COMMITS.punchEdit, groups: ["self", "payroll"], tags: ["主管補登", "稽核"], note: "補登與修正保留原始紀錄、事由與核准流程。" },
  { commit: COMMITS.weekTimeline, groups: ["payroll"], tags: ["週格線", "日時間軸"], note: "新增排班週檢視與單日視覺化。" },
  { commit: COMMITS.paidBreak, groups: ["payroll"], tags: ["計薪休息", "打卡事件"], note: "休息是否計薪不再依賴員工一定要打休息卡。" },
  { commit: COMMITS.importAudit, groups: ["payroll", "admin"], tags: ["匯入", "稽核保存"], note: "班表匯入驗證結果與稽核紀錄可長期保存。" },
  { commit: COMMITS.minorFix, groups: ["daily", "payroll"], tags: ["未成年", "家長同意書"], note: "修正未成年同意書判定並補齊測試。" },
  { commit: COMMITS.security, groups: ["platform", "admin"], tags: ["資安", "權限", "輸出安全"], note: "完成登入、SSRF、CSV、CSP、密碼與資料遮罩等 15 項強化。" },
  { commit: COMMITS.auditServer, groups: ["admin", "platform"], tags: ["全員稽核", "伺服器寫入"], note: "重要稽核不再依賴前端，避免被舊畫面快照覆蓋。" },
  { commit: COMMITS.roster, groups: ["daily", "platform"], tags: ["人事名單", "重建"], note: "加入完整預檢、重建與引用修復流程。" },
  { commit: COMMITS.myProfile, groups: ["self", "daily"], tags: ["我的資料", "登入首頁"], note: "依是否需打卡與身分決定登入首頁，新增本人唯讀資料頁。" },
  { commit: COMMITS.employeeScope, groups: ["daily", "admin"], tags: ["門店範圍", "離職查詢"], note: "收斂管理職資料範圍並強化離職調閱稽核。" },
  { commit: COMMITS.permissionScope, groups: ["admin", "payroll", "self"], tags: ["排班權限", "薪資授權"], note: "區分排班編輯、員工唯讀與薪資檢視／編輯授權。" },
  { commit: COMMITS.punchSchedule, groups: ["self", "payroll", "daily"], tags: ["排班驅動打卡", "員工帳號"], note: "打卡按鈕改依當日排班產生，並支援全員建立帳號。" },
  { commit: COMMITS.salaryFlow, groups: ["payroll"], tags: ["薪資三階", "月份", "免打卡"], note: "建立 HR 送審與 GM 鎖定流程，支援自由月份。" },
  { commit: COMMITS.initial, groups: ["platform", "self"], tags: ["系統初版", "PostgreSQL"], note: "建立可部署的員工打卡入口與持久化資料層。" }
];

const state = {
  page: "map",
  mode: "kid",
  district: "all",
  query: "",
  selectedModule: "scheduleFlow",
  selectedJourney: "payroll",
  timelineFilter: "all"
};

const byId = (id) => document.getElementById(id);
const districtOf = (id) => DISTRICTS.find((district) => district.id === id);
const moduleOf = (id) => MODULES.find((module) => module.id === id);
const copyOf = (item) => state.mode === "kid" ? item.kid : item.manager;
const escapeHtml = (value) => String(value ?? "").replace(/[&<>'"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[char]);

function featureCount() {
  return MODULES.reduce((total, module) => total + module.features.length, 0);
}

function renderMetrics() {
  const values = [
    [MODULES.length, "功能畫面"],
    [featureCount(), "細項功能"],
    [37, "API 端點"],
    [0, "施工中功能"]
  ];
  byId("metrics").innerHTML = values.map(([value, label]) => `<div class="metric"><b>${value}</b><span>${label}</span></div>`).join("");
}

function renderSnapshot() {
  const commit = AUTO_COMMIT_DATA.latestRepositoryCommit;
  if (!commit) return;
  byId("snapshotCommit").textContent = `最新 Commit ${commit.hash}`;
  byId("snapshotDate").textContent = `${commit.date} · Asia/Taipei`;
}

function populateDistrictFilter() {
  const select = byId("districtFilter");
  DISTRICTS.forEach((district) => {
    const option = document.createElement("option");
    option.value = district.id;
    option.textContent = district.name;
    select.appendChild(option);
  });
}

function moduleMatches(module) {
  if (state.district !== "all" && module.district !== state.district) return false;
  const query = state.query.trim().toLowerCase();
  if (!query) return true;
  const text = [module.name, module.fn, module.kid, module.manager, module.roles.join(" "), module.dependencies.join(" "), module.files.join(" "), module.apis.join(" "), ...module.features.flatMap((item) => [item.name, item.kid, item.manager, item.api, ...item.files])].join(" ").toLowerCase();
  return text.includes(query);
}

function renderCity() {
  const visible = MODULES.filter(moduleMatches);
  const map = byId("cityMap");
  map.innerHTML = "";

  DISTRICTS.forEach((district) => {
    const modules = MODULES.filter((module) => module.district === district.id && visible.includes(module));
    if (!modules.length) return;
    const section = document.createElement("section");
    section.className = "district";
    section.style.setProperty("--district-color", district.color);
    section.style.setProperty("--district-soft", district.soft);
    section.innerHTML = `
      <div class="district-head">
        <span class="district-icon" aria-hidden="true">${district.icon}</span>
        <div><h3>${district.name}</h3><p>${district.kid} · ${modules.length} 棟</p></div>
      </div>
      <div class="building-grid"></div>`;
    const grid = section.querySelector(".building-grid");
    modules.forEach((module) => {
      const commit = latestCommitForFiles(module.files, module.commit);
      const button = document.createElement("button");
      button.type = "button";
      button.className = `building${state.selectedModule === module.id ? " is-selected" : ""}`;
      button.dataset.module = module.id;
      button.setAttribute("aria-pressed", String(state.selectedModule === module.id));
      button.innerHTML = `
        <span class="building-top"><span class="building-icon" aria-hidden="true">${module.icon}</span><span class="update-dot${module.working ? " working" : ""}" aria-hidden="true"></span></span>
        <b>${module.name}</b>
        <small>${escapeHtml(copyOf(module))}</small>
        <span class="building-meta"><span>${module.features.length} 項功能</span><time>${module.working ? "施工中" : commit.short}</time></span>`;
      button.addEventListener("click", () => selectModule(module.id));
      grid.appendChild(button);
    });
    map.appendChild(section);
  });

  if (!visible.length) {
    map.innerHTML = `<div class="empty-results"><b>沒有找到符合的建築</b><p>試著搜尋「打卡」、「薪資」或清除區域篩選。</p></div>`;
    renderDetail(null);
  } else {
    if (!visible.some((module) => module.id === state.selectedModule)) state.selectedModule = visible[0].id;
    renderDetail(moduleOf(state.selectedModule));
  }
  byId("statusStrip").textContent = `目前顯示 ${visible.length} / ${MODULES.length} 個模組，共 ${visible.reduce((sum, module) => sum + module.features.length, 0)} 項細部功能。`;
}

function selectModule(id) {
  state.selectedModule = id;
  document.querySelectorAll(".building").forEach((button) => {
    const selected = button.dataset.module === id;
    button.classList.toggle("is-selected", selected);
    button.setAttribute("aria-pressed", String(selected));
  });
  renderDetail(moduleOf(id));
  if (window.innerWidth < 1100) byId("moduleDetail").scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderDetail(module) {
  const panel = byId("moduleDetail");
  if (!module) {
    panel.innerHTML = `<div class="detail-empty"><div><span class="empty-icon" aria-hidden="true">🧭</span><b>先選一棟建築</b><p>功能說明、資料流與 Commit 會顯示在這裡。</p></div></div>`;
    return;
  }
  const district = districtOf(module.district);
  const commit = latestCommitForFiles(module.files, module.commit);
  panel.style.setProperty("--district-soft", district.soft);
  panel.innerHTML = `
    <div class="detail-hero">
      <div class="detail-kicker">
        <span class="eyebrow">${district.name}</span>
        <span class="commit-pill${module.working ? " working" : ""}">${module.working ? "● 施工中" : `${commit.hash} · ${commit.short}`}</span>
      </div>
      <div class="detail-title"><span aria-hidden="true">${module.icon}</span><div><h3>${module.name}</h3><code>${module.fn}</code></div></div>
      <p class="detail-summary">${escapeHtml(copyOf(module))}</p>
    </div>
    ${module.working ? `<div class="working-banner"><b>目前有尚未 Commit 的修改</b><br>最近已提交為 ${commit.hash}（${commit.date}）；施工中內容不能冒充正式 Commit 時間。</div>` : ""}
    <div class="detail-body">
      <section class="detail-section"><h4>誰會使用</h4><div class="role-list">${module.roles.map((role) => `<span class="role-pill">${role}</span>`).join("")}</div></section>
      <section class="detail-section"><h4>資料怎麼走</h4><div class="flow-mini"><span>${module.flow[0]}</span><span class="flow-arrow">→</span><span>${module.flow[1]}</span><span class="flow-arrow">→</span><span>${module.flow[2]}</span></div></section>
      <section class="detail-section"><h4>裡面的功能房間</h4><div class="feature-list">${module.features.map((item, index) => featureMarkup(item, index)).join("")}</div></section>
      <section class="detail-section"><h4>會牽動哪些地方</h4><div class="dependency-list">${module.dependencies.map((name) => `<span class="dependency-pill">${name}</span>`).join("")}</div></section>
      <section class="detail-section engineer-only"><h4>程式與 API 證據</h4><div class="file-list">${module.files.map((file) => `<code>${file}</code>`).join("")}${module.apis.map((api) => `<code>${api}</code>`).join("")}${module.tests.map((test) => `<code>${test}</code>`).join("")}</div></section>
    </div>`;

}

function featureMarkup(item, index) {
  const commit = latestCommitForFiles(item.files, item.commit);
  return `<details class="feature-item">
    <summary class="feature-button">
      <span class="feature-row"><b>${item.name}</b><time>${commit.working ? "尚未 Commit" : commit.short}</time></span>
    </summary>
    <div class="feature-detail">
      <p>${escapeHtml(copyOf(item))}</p>
      <div><span class="commit-pill${commit.working ? " working" : ""}">${commit.hash} · ${commit.date}</span></div>
      <p class="engineer-only"><code>${commit.summary}</code>${item.api ? `<br><code>${item.api}</code>` : ""}<br>${item.files.map((file) => `<code>${file}</code>`).join(" · ")}</p>
    </div>
  </details>`;
}

function renderJourneyPicker() {
  const picker = byId("journeyPicker");
  picker.innerHTML = JOURNEYS.map((journey) => `<button type="button" data-journey="${journey.id}" aria-pressed="${state.selectedJourney === journey.id}">${journey.icon} ${journey.name}</button>`).join("");
  picker.querySelectorAll("button").forEach((button) => button.addEventListener("click", () => {
    state.selectedJourney = button.dataset.journey;
    renderJourneyPicker();
    renderJourney();
  }));
}

function renderJourney() {
  const journey = JOURNEYS.find((item) => item.id === state.selectedJourney) || JOURNEYS[0];
  byId("journeyStage").innerHTML = `
    <div class="journey-intro"><div><p class="eyebrow">${journey.icon} ${journey.name}</p><h3>${escapeHtml(copyOf(journey))}</h3></div><p>${journey.steps.length} 個步驟，從左往右依序完成。</p></div>
    <div class="journey-steps" style="--step-count:${journey.steps.length}">${journey.steps.map(([name, description, code], index) => `<article class="journey-step"><span class="journey-number">${index + 1}</span><b>${name}</b><p>${description}</p><code class="engineer-only">${code}</code></article>`).join("")}</div>`;
}

function renderTimeline() {
  const rows = TIMELINE_ITEMS.filter((item) => state.timelineFilter === "all" || item.groups.includes(state.timelineFilter));
  byId("timelineCount").textContent = `顯示 ${rows.length} 筆紀錄`;
  byId("timeline").innerHTML = rows.map((item) => {
    const [date, time] = item.commit.date.split(" ");
    return `<li class="timeline-item">
      <time class="timeline-time"><b>${date.slice(5).replace("-", "/")}</b>${time || "施工中"}</time>
      <article class="timeline-card${item.commit.working ? " working" : ""}">
        <div class="timeline-title"><h3>${escapeHtml(item.commit.summary)}</h3><code>${item.commit.hash}</code></div>
        <p>${item.note}</p>
        <div class="timeline-tags">${item.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
      </article>
    </li>`;
  }).join("");
}

function renderArchitecture() {
  byId("architectureStack").innerHTML = ARCHITECTURE_LAYERS.map(([name, chips]) => `<section class="architecture-layer"><div class="layer-name">${name}</div><div class="layer-content">${chips.map((chip) => `<span class="layer-chip">${chip}</span>`).join("")}</div></section>`).join("");
  byId("platformGrid").innerHTML = PLATFORM.map((item) => {
    const commit = latestCommitForFiles(item.files, item.commit);
    return `<article class="platform-card"><span class="platform-icon" aria-hidden="true">${item.icon}</span><h3>${item.name}</h3><p>${escapeHtml(copyOf(item))}</p><code>${commit.hash} · ${commit.short}</code><p class="engineer-only">${item.files}</p></article>`;
  }).join("");
}

function setPage(page) {
  state.page = page;
  document.querySelectorAll(".page-tab").forEach((button) => {
    const active = button.dataset.page === page;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  document.querySelectorAll(".page-view").forEach((section) => {
    const active = section.id === `page-${page}`;
    section.classList.toggle("is-active", active);
    section.hidden = !active;
  });
}

function setMode(mode) {
  state.mode = mode;
  document.body.dataset.mode = mode;
  document.querySelectorAll("[data-mode]").forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.mode === mode)));
  renderCity();
  renderJourney();
  renderArchitecture();
}

function bindEvents() {
  document.querySelectorAll(".page-tab").forEach((button) => button.addEventListener("click", () => setPage(button.dataset.page)));
  document.querySelectorAll("[data-mode]").forEach((button) => button.addEventListener("click", () => setMode(button.dataset.mode)));
  byId("searchInput").addEventListener("input", (event) => {
    state.query = event.target.value;
    renderCity();
  });
  byId("districtFilter").addEventListener("change", (event) => {
    state.district = event.target.value;
    renderCity();
  });
  byId("timelineFilter").addEventListener("change", (event) => {
    state.timelineFilter = event.target.value;
    renderTimeline();
  });
}

function init() {
  document.body.dataset.mode = state.mode;
  renderSnapshot();
  renderMetrics();
  populateDistrictFilter();
  renderCity();
  renderJourneyPicker();
  renderJourney();
  renderTimeline();
  renderArchitecture();
  bindEvents();
}

init();
