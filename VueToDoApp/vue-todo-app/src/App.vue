<template>
  <div class="content mx-5">
    <h1>Todo App</h1>
    <form
      @submit.prevent="
        addTodo
      "
    >
      <div class="field">
        <div class="control">
          <input
            type="text"
            v-model="todo"
            class="input"
            placeholder="Enter a Todo Item"
          />
        </div>
      </div>
      <button type="submit" class="button is-warning">Add</button>
    </form>
    <div>
      <div v-for="todo in todoList" :key="todo.id" class="card my-5 mx-5">
        <div class="card-content">
          <div class="media">
            <div class="media-left"></div>
            <div class="media-content">
              <p class="title cursor" @click="doneClick(todo)" :class="{done:todo.done}">
                {{ todo.content }}
                <span><button class="button is-danger" @click="deleteTodo(todo)">Delete</button></span>
              </p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const todo = ref("");
    const todoList = ref([]);
    const addTodo = () => {
      todoList.value.push({
        done: false,
        content: todo.value,
        id: Date.now(),
      });
      todo.value = "";
    };

    const doneClick=(todo)=>{
      todo.done=!todo.done;
    }

    const deleteTodo=(todo)=>{
      todoList.value.splice(todoList.value.indexOf(todo),1);
    }

    return { todo, todoList, addTodo,doneClick,deleteTodo };
  },
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.done{
  text-decoration: line-through;
}

.cursor{
  cursor: pointer;
}
</style>
