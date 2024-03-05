// app程式啟動點

import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

const app = createApp(App);

//呼叫後端api用
// $base 變數名稱，可以自行取名
app.config.globalProperties.$base = "http://localhost:8000/api/";

//取得後端圖檔用
// 圖檔的路徑在跟目錄底下
app.config.globalProperties.$url = "http://localhost:8000/";

app.use(store).use(router).mount("#app");

//createApp(App).use(store).use(router).mount("#app");
