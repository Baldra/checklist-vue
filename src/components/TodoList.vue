<template>

<div class="scrollarea">
    <ul>
      <li 
        v-for="(item, indx) in tareas" 
        :key="item.id"
        :class="{inProcessTask: item.taskState==1, completedTask: item.taskState==2}">
        <div :class="{lineInText: item.taskState==2}"
          @click="cambiarSelected(item)"
          >
        {{ item.text }}
        </div>
        
        <div v-if="isEditing(indx) && isSelected(indx)">
          <EditorTarea :textToEdit="item.text" :itemToEdit="item"/>
        </div>

        <div>
          <span 
            @click="cambiarEstadoTarea(item)"
            class="pointer">
            {{estadosDisponibles[item.taskState]}}
          </span>
          <template v-if="isSelected(indx)">
            <button class="btn btn-warning" @click="editTarea(item)">
              <i class="fa fa-pen"></i>
            </button>
            <button class="btn btn-danger" @click="deleteItem(item)">
              <i class="fa fa-trash"></i>
            </button>
          </template>
          
        </div>
      </li>
    </ul>
  </div>
    
</template>

<script> 
import { mapGetters, mapState } from "vuex";
import EditorTarea from '@/components/EditorTarea'

export default {
  name: 'TodoList',
  components: {
    EditorTarea
  },

  data() {
    return {
      estadosDisponibles: ['To-Do','En progreso','Finalizada'],
    }
  },

 computed: {
  ...mapState(['tareas']),
  ...mapGetters(['isSelected', 'isEditing']),

 },


  methods: {
    editTarea(item) {
      this.$store.commit('changeToEditing', item)
    },

    deleteItem(item) {
      console.log('Tarea Eliminada', item.id)
      this.$store.commit('removeItem', item)

    },

    cambiarEstadoTarea(item) {
      this.$store.commit('chageTaskState', item)
    },

    cambiarSelected(item) {
      //console.log(this.isEditing(item))
      this.$store.commit('changeSelected', item)
    },
    
  },

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

  .lineInText {
    text-decoration:line-through;
    background-color: #dedcdc;
  }

  .completedTask {
    background-color: #dedcdc;
  }

  .inProcessTask {
    background-color: #f5e617;
  }

  ul {
    list-style: none;
    padding: 0;
    margin-left: 15%;
    margin-right: 15%;
  }

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 1rem;
    margin-bottom: 0.5rem;
    background-color: #f1f1f1;
  }
  button {
    margin-left: 15px;
  }
  span{
    margin-right: 50px;
  }

</style>
