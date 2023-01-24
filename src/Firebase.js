import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore, getDocs, collection, query, where, doc, getDoc, orderBy, setDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD4GKSRRRjvHtNw_cbRf_s3JMr-j4tsun0",
    projectId: "polimensa-c6632",
};

const foods = 'foods';
const users = 'users';
const times = 'times';

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

export const getUser = async (id) => {
    const d = await getDoc( doc(getDb(), users, id) );
    return d.data();
}

export const getTimes = async (type) => {
    const collection_ref = collection(getDb(), times);
    const q = query(collection_ref, where("type", "==", type), orderBy('order'));
    const doc_refs = await getDocs(q);

    const res = []

    doc_refs.forEach(time => {
        res.push({
            id: time.id,
            ...time.data()
        })
    })

    return res
}

export const saveOrder = async (user, timeId) => {

    const time = await getDoc( doc(getDb(), times, timeId) );
    // return d.data();

    if (time.data() !== undefined) {
        return await setDoc(doc(getDb(), users, user.id), {
            email: user.email,
            name: user.name,
            phone: user.phone,
            studentId: user.studentId,
            surname: user.surname,
            money: user.money,
            order: {
                time: timeId,
                timeSlot: time.data().time_slot,
                orderNumber: 35,
                orderAhead: 34,
            }
        });
    } else
        return undefined;
}

export const cancelOrder = async (user) => {
    return await setDoc(doc(getDb(), users, user.id), {
        email: user.email,
        name: user.name,
        phone: user.phone,
        studentId: user.studentId,
        surname: user.surname,
        money: user.money,
        order: {}
    });
}

export const pay = async (user, amount) => {
    return await setDoc(doc(getDb(), users, user.id), {
        email: user.email,
        name: user.name,
        phone: user.phone,
        studentId: user.studentId,
        surname: user.surname,
        money: user.money + amount,
        order: user.order,
    });
}

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;