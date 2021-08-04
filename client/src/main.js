import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import express from 'express'

// const expressApp = express();
// expressApp.listen(5000, () => {
//   console.log("serer has started on port 5000");
// });

createApp(App).use(store).use(router).mount('#app')
