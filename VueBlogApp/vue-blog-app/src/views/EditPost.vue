<template>
  <div>
    <h3>Edit Project</h3>
    <form>
      <label>Title</label>
      <input type="text" required v-model="title" />
      <label>Content</label>
      <textarea required v-model="content"></textarea>
      <button>Update Post</button>
    </form>
  </div>
</template>
  
  <script>
import {getPosts} from "../composables/getPosts";
import { ref } from "vue";
export default {
  props: ["title"],
  setup(props) {
    const title=ref("");
    const content=ref("");
    getPosts().then((data) => {
      return data.find((data)=>data.title===props.title);
    })
    .then((data)=>{
        title.value=data.title;
        content.value=data.content;
    })

    return { title,content };
  },
};
</script>
  
  <style>
form {
  background-color: aliceblue;
  padding: 20px;
  border-radius: 10px;
  margin: 20px;
}
label {
  display: block;
  color: blueviolet;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 1px;
  margin: 20px 0 10px 0;
}

input {
  padding: 10px;
  border: 0;
  border-bottom: 8px solid #ddd;
  width: 100%;
  box-sizing: border-box;
}

textarea {
  width: 100%;
  border-bottom: 8px solid #ddd;
  padding: 10px;
  box-sizing: border-box;
}

form button {
  display: block;
  margin: 20px auto 0;
  background-color: aquamarine;
  color: blue;
  padding: 10px;
  border-radius: 7px;
  font-size: 16px;
}
</style>