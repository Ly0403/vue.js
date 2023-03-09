import { ref } from 'vue';
import { fb } from '../firebase/config';
import { addDoc, collection, deleteDoc, doc, getDocs, getFirestore, query, setDoc, where } from 'firebase/firestore/lite';
import { async } from '@firebase/util';

const getPosts = async () => {
    const db = getFirestore();
    const fbRef = collection(db, 'posts');
    const fbDocs = await getDocs(fbRef);
    const data = fbDocs.docs.map((doc) => doc.data());
    return data;
}

const addPost = async (post) => {
    const db = getFirestore();
    const fbRef = collection(db, 'posts');
    await addDoc(fbRef, post);
}

const delPost = async (post) => {
    const db = getFirestore();
    const q = query(collection(db, 'posts'), where("title", "==", post.title));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((docum) => {
        deleteDoc(doc(db, "posts", docum.id));
    });
}

export { getPosts, addPost, delPost };