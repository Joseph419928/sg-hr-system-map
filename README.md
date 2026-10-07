# 新誥人事系統地圖

這是一個不含員工個資的靜態網站，用生活化方式說明新誥人事系統的功能、角色、資料流與近期 Git Commit。

## 內容

- 16 個主要功能畫面與 82 個細項功能
- 小學生、主管、工程三種解說模式
- 新人報到、每月薪資、員工打卡、離職封存工作流程
- Commit 時間線、API 與底層服務架構
- 響應式桌面及手機版面

## 本機開啟

直接以瀏覽器開啟 `index.html` 即可。網站不需要建置步驟，也不會向外部服務傳送資料。

## GitHub Pages

公開網站位於：<https://joseph419928.github.io/sg-hr-system-map/>

來源人事系統 Repository 維持私人；`main` 每次更新時，發布流程會：

1. 執行 `scripts/generate-system-map-commits.mjs`，依每項功能相關檔案產生最近 Commit 時間。
2. 只把 `system-map/` 同步到公開的 `Joseph419928/sg-hr-system-map`。
3. 由公開 Repository 的 GitHub Pages 自動發布。

功能說明是人工維護的系統盤點；Commit 時間由 Git 歷史自動產生。發布內容不包含員工資料、伺服器程式或環境密鑰。

除了每次 push 到 `main`，發布流程也會在每日 08:00（台北）補跑一次，作為安全網；沒有新 Commit 時輸出完全相同，不會在公開 Repository 留下空轉的 Commit。

### 改動時間線

「改動時間線」分頁由 `commit-data.js` 的 `timeline` 自動產生（最近 40 筆非 merge 的 Commit），依 Commit 的 type／scope（例如 `feat(auth)`）歸到對應功能區。`app.js` 的 `TIMELINE_ITEMS` 若寫有同一個 hash 的人工說明，會優先顯示人工說明；沒有的會標示「功能說明待人工補充」。

**發布資料不含任何 Commit 訊息文字。** 私有 Repository 的 Commit 內文含有員工編號與姓名，所以產生器只輸出 hash、時間、type／scope 代號，以及已經寫在 `app.js` 裡的檔案路徑，並在寫檔前逐欄位驗證；任何一欄不符就會中止，什麼都不會發布。要讓新功能出現有意義的說明，請在 `TIMELINE_ITEMS` 補一筆對應 hash 的人工說明。
