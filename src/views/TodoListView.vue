<template>
  <div>
    <h2 class="title">To-Do List</h2>

    <InputTarea /> 
    <TodoList /> 

  </div>
</template>

<script>
import TodoList from '@/components/TodoList.vue'
import InputTarea from '@/components/InputTarea.vue'

export default {
  name: 'TodoListView',
  components: {
    TodoList,
    InputTarea,
  }
}
</script>

<style scoped>

  .title {
    font-weight: bold;
    font-size: 36px;
    color: #333;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}

</style>
