<template>
  <div>
    <form @submit.prevent="addItem">
      <input v-model="newItemText" placeholder="Ingrese una tarea..." />
      <button class="btn btn-primary" type="submit" style="margin-left: 12px">Crear</button>
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
        },  

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
    margin-bottom: 11px;

  }
  /*

  input {
    padding: 0.5rem;
    flex-grow: 1;
    margin-right: 1rem;
    margin-bottom: 5px;
  } */

    input {
    width: 45%;
  } 
</style>