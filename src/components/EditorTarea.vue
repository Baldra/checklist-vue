<template>
  <div>
    <form @submit.prevent="editItem(this.item, this.editItemText)">
      <input v-model="editItemText" />
      <button
        class="btn btn-primary btn-sm" 
        type="submit">
        <i class="fa fa-floppy-disk"></i>
      </button>
    </form>
  
  </div>
</template>

<script>

export default {
    name: 'InputTarea',

    data() {
        return {
            editItemText: this.textToEdit,
            item: this.itemToEdit 
        }
    },
    methods: {
        editItem(item, text){
            if(text){
            const valu = {item: item, text: text}
            this.$store.commit('editItem', valu)
            }
            this.$store.commit('changeToEditing', item)
        },  
    },

    props: {
        textToEdit: String,
        itemToEdit: {},
    },
}
</script>

<style lang ="scss" scoped>

 /*  .scrollarea {
    height: calc(100vh - 115px);
    overflow: scroll;
  }

  .pointer {
    cursor: pointer;
  } */

/*    form {
    display: flex;
    align-items: center; 
    margin-top: 1rem;
    margin-left: -65%;
    margin-right: 40%;
    margin-bottom: 5px;

  }

   input {
    padding: 0.5rem;
    flex-grow: 3;
    margin-right: 1rem;
    margin-bottom: 5px;
  }   */
</style>