<template>
  <div>
    <h2 class="text-center">To Do List</h2>

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
