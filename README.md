# ⚖️ 台灣律師考試第一試｜智慧研讀學習平台 (公開上線指引)

本專案已完整設定 **GitHub Actions 自動部署工作流程 (`.github/workflows/deploy.yml`)** 與 **Next.js 靜態輸出 (`output: 'export'`)**，支援免費發布為公開網站。

---

## 🚀 方式一：使用 GitHub Pages 發布（官方免費）

### 步驟 1：在 GitHub 建立新儲存庫 (Repository)
1. 開啟 [GitHub.com](https://github.com) 並登入帳號。
2. 點擊右上角 **「+」 ➔ 「New repository」**。
3. Repository name 填寫：`taiwan-bar-exam`（或您喜歡的名稱）。
4. 選擇 **Public**（公開），其餘選項勿勾選，點擊 **Create repository**。

### 步驟 2：將本機專案推送到 GitHub
開啟終端機（PowerShell），執行以下指令（請將 `<你的GitHub帳號>` 替換為您的帳號）：

```bash
git remote add origin https://github.com/<你的GitHub帳號>/taiwan-bar-exam.git
git branch -M main
git push -u origin main
```

### 步驟 3：開啟 GitHub Pages 權限
1. 進入您剛建立的 GitHub 專案頁面 ➔ 點擊 **Settings**。
2. 左側選單點擊 **Pages**。
3. 在 **Build and deployment ➔ Source** 下拉選單中，選擇 **GitHub Actions**。
4. 系統將自動執行部署，約 1~2 分鐘後即可在該頁面獲得公開網址：
   👉 **`https://<你的GitHub帳號>.github.io/taiwan-bar-exam/`**

---

## ⚡ 方式二：使用 Vercel 一鍵發布（最推薦、最快）

1. 開啟 [Vercel.com](https://vercel.com) 並以 GitHub 帳號登入。
2. 點擊 **「Add New...」 ➔ 「Project」**。
3. 選擇您剛才推送的 `taiwan-bar-exam` 儲存庫，點擊 **Import**。
4. 無須修改任何設定，直接點擊 **Deploy**。
5. 30 秒內即可獲得專屬公開網址（例如：`https://taiwan-bar-exam.vercel.app`），全網所有人皆可直接存取！
