<template>
  <div>
    <div class="post">
      <div class="actions">
        <h3 @click="showDetail = !showDetail">{{ post.title }}</h3>
        <div>
          <span class="material-icons" @click="deletingPost"> delete </span>
          <router-link :to="{ name: 'EditPost', params: { title: post.title } }"
            ><span class="material-icons"> edit </span></router-link
          >
        </div>
      </div>
      <div v-if="showDetail" class="details">
        <p>{{ post.content }}</p>
      </div>
    </div>
  </div>
</template>
  
  <script>
import { ref } from "vue";
import {delPost} from '../composables/getPosts';
import { useRouter } from 'vue-router';

export default {
  props: ["post"],
  setup(props) {
    const showDetail = ref(false);
    const router = useRouter();

    async function deletingPost() {
      await delPost(props.post);
      router.go("/");
    }

    return { showDetail ,deletingPost};
  },
};
</script>
  
  <style>
.post {
  margin: 20px auto;
  background-color: blanchedalmond;
  padding: 10px 20px;
  border-radius: 4px;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.05);
  border-left: 4px solid #e90074;
}
h3 {
  cursor: pointer;
}
.actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.material-icons {
  font-size: 24px;
  margin-left: 10px;
  color: #e90074;
  cursor: pointer;
}
.material-icons:hover {
  color: black;
}

.material-icons.completed {
  color: greenyellow;
}
</style>