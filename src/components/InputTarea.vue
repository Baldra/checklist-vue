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

    input {
     width: 45%;
     padding: 12px;
     border: none;
     border-radius: 4px;
     outline: none;
     box-shadow: 4px 4px 3px rgba(0, 0, 0, 0.25); 
     transition: all 0.3s ease-in-out; 
    }

    button {
      /* background: linear-gradient(to bottom, #4CAF50, #3e8e41); */
      box-shadow: 4px 4px 3px rgba(0, 0, 0, 0.25);
      font-family: 'Open Sans', sans-serif;
      transition: all 0.3s ease-out;
      border-radius: 15px;
      height: 45px;
    }

</style>