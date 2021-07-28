import { createApp } from 'vue'
import App from './App.vue'

import store from './store/index';
import router from './router/index';

import authConfig from '../auth_config.json'
import { setupAuth } from './auth/index';

const app = createApp(App);


app.use(store);
app.use(router);

function callbackRedirect(appState) {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : '/'
    );
  }

  setupAuth(authConfig, callbackRedirect).then((auth) => {
    app.use(auth).mount('#app')
  })