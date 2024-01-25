import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyDN_l8jUD-Sit1xAsA2PpZXSOdxP6ddjtw",
	authDomain: "notesapp-b6b94.firebaseapp.com",
	projectId: "notesapp-b6b94",
	storageBucket: "notesapp-b6b94.appspot.com",
	messagingSenderId: "547573798999",
	appId: "1:547573798999:web:3bb1d49342cb1d2cb5ab12",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const notesCollection = collection(db, "notes");
