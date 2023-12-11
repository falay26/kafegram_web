import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBF2x6AHWFDipIEk42-__hkmgMcF-YRvRU",
  authDomain: "kafegram-60937.firebaseapp.com",
  projectId: "kafegram-60937",
  storageBucket: "kafegram-60937.appspot.com",
  messagingSenderId: "935360056993",
  appId: "1:935360056993:web:82f141c4bdaf41897f2ae0",
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
