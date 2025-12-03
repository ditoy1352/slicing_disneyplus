import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCdypAkJP8zeV6iW8goubIZfDWf2igNY_k",
  authDomain: "baca-buku-f805c.firebaseapp.com",
  projectId: "baca-buku-f805c",
  storageBucket: "baca-buku-f805c.firebasestorage.app",
  messagingSenderId: "908329619652",
  appId: "1:908329619652:web:920df5f55305afa972f991"
};

const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);

export default firebaseApp;