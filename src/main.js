import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueScreen from 'vue-screen';

import '@/assets/sass/main.scss';

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
const firebaseConfig = {
  apiKey: 'AIzaSyDyiHrYB8s41Z0C-yxpYm1T5Yzow8wXtSE',
  authDomain: 'rosegold-jewelry.firebaseapp.com',
  projectId: 'rosegold-jewelry',
  storageBucket: 'rosegold-jewelry.appspot.com',
  messagingSenderId: '582893431078',
  appId: '1:582893431078:web:4b80b1470474fc5698b9e7',
  measurementId: 'G-P3K1DH64KL',
};
firebase.initializeApp(firebaseConfig);

let app;

// what if without auth()?
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App)
      .use(router)
      .use(store)
      .use(VueScreen)
      .mount('#app');
  }
});

// createApp(App)
//   .use(router)
//   .use(store)
//   .mount('#app');
