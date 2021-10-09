import { initializeApp } from "firebase/app";
import { getDatabase} from "firebase/database";
import { getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCOY9YXFMYWnIVuLVRxtPH48_Pp0WQoX1g",
    authDomain: "course-market-9a291.firebaseapp.com",
    projectId: "course-market-9a291",
    storageBucket: "course-market-9a291.appspot.com",
    messagingSenderId: "175827376592",
    appId: "1:175827376592:web:dff42d993e828c06f101d5"
};

initializeApp(firebaseConfig);

const db = getDatabase();
const auth = getAuth();

export {auth, db};
