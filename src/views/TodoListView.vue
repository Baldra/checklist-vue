<template>
  <div>

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
