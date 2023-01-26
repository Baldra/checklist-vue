<template>
  <div>
    <h2 class="text-center mt-5">Todo List</h2>

    <form @submit.prevent="addItem">
      <input v-model="newItemText" placeholder="Ingrese una tarea..." />
      <button class="btn btn-primary" type="submit">Enviar</button>
    </form>
  
  </div>
</template>

<script>

export default {
    name: 'InputTarea',

    data() {
        return {
            newItemText: ''

        }
    },
    methods: {
        addItem(){
            this.$store.commit('addItem', this.newItemText)
            this.newItemText = ''
        }   

    }
}
</script>

<style lang ="scss" scoped>

  .scrollarea {
    height: calc(100vh - 115px);
    overflow: scroll;
  }

  .pointer {
    cursor: pointer;
  }

  form {
    display: flex;
    align-items: center;
    margin-top: 1rem;
    margin-left: 20%;
    margin-right: 20%;
    margin-bottom: 5px;

  }

  input {
    padding: 0.5rem;
    flex-grow: 1;
    margin-right: 1rem;
    margin-bottom: 5px;
  }
</style>