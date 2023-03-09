<template>
  <form @submit.prevent="addingPost">
    <h1>Add Post</h1>
    <label>Title</label>
    <input type="text" required v-model="title" />
    <label>Content</label>
    <textarea required v-model="content"></textarea>
    <button>Add Post</button>
  </form>
</template>
  
  <script>
import { addPost } from "../composables/getPosts";
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const title = ref("");
    const content = ref("");
    const router = useRouter();

    function addingPost() {
      const post = {
        title: title.value,
        content: content.value,
      };
      addPost(post);
      router.push("/");
    }

    return { title, content, addingPost };
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
  