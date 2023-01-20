
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyDIRIVYgxFX_cpffF1pPIB49exLr6Fb6rY",
  authDomain: "newspaper-cc0f8.firebaseapp.com",
  projectId: "newspaper-cc0f8",
  storageBucket: "newspaper-cc0f8.appspot.com",
  messagingSenderId: "697445897615",
  appId: "1:697445897615:web:7b16e38267a6685abf27fa"
};




const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();

export {auth,provider};