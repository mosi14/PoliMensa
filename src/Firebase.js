import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore, getDocs, collection, query, where, doc, getDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD4GKSRRRjvHtNw_cbRf_s3JMr-j4tsun0",
    projectId: "polimensa-c6632",
};

const foods = 'foods';
const users = 'users';

let db = false;

const getDb = () => {
    if(!db){
        const app = initializeApp(firebaseConfig)
        db = getFirestore(app)
    }

    return db
}

export const getFoods = async (type) => {

    const collection_ref = collection(getDb(), foods);
    const q = query(collection_ref, where("type", "==", type));
    const doc_refs = await getDocs(q);

    const res = []

    doc_refs.forEach(food => {
        res.push({
            id: food.id,
            ...food.data()
        })
    })

    return res
}

export const getUserLogin = async (studentNumber, password) => {

    const docRef  = collection(getDb(), users);

    const q = query(docRef, where("studentNumber", "==", studentNumber),
                                    where("password", "==", password));

    const doc_refs = await getDocs(q);

    let user = null;

    doc_refs.forEach(food => {
        user = {
            id: food.id,
            ...food.data()
        };
    })

    return user;
}

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;