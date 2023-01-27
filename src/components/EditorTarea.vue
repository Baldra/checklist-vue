<template>
  
    <form @submit.prevent="editItem(this.item, this.editItemText)"
        >
      <input v-model="editItemText" />
      <button
        class="btn btn-primary btn-sm" 
        type="submit"
        style="margin-left: 5px">
        <i class="fa fa-floppy-disk"></i>
      </button>
    </form>
  
  
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

   /* .form {
    display: flex;  
    align-items: center;  
    margin-top: 0.5rem;
    margin-left: 15%; 
    margin-right: 15%; 
    margin-bottom: 5px;  
  }  */

  form{
    display:flex;
  }


    input {
    width: 100%;
    align-content: center;
    display: flex;
  } 

</style>