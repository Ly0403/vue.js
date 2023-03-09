<template>
  <div class="home">
    <h1>Home Page</h1>
  </div>
</template>

<script>

import {onMounted} from 'vue';
import {get, getFirestore,collection,getDocs, addDoc, deleteDoc,doc} from 'firebase/firestore/lite';
import {fb} from '../firebase/config';


export default {
  name: 'HomeView',
  components: {
  },
  data(){
    return{
      booksFromFB:[]
    }
  },
  setup(){
    onMounted(async()=>{
      const db=getFirestore(fb);
      const bookCollection=collection(db,"books");
      const booksSnap=await getDocs(bookCollection);
      const data=booksSnap.docs.map((doc)=>doc.data());
      const dataId=booksSnap.docs.map((doc)=>doc.id);
      // addDoc(bookCollection,{
      //   name:"ddd",
      //   author:"dd",
      //   numberofpage:200
      // });
      deleteDoc(doc(db,"books","0hwSIu8Zbip47Twt8qjv"));


      return data;
    })
  }
}
</script>
