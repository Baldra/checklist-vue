<template>

<div class="scrollarea">
    <ul>
      <li 
        v-for="(item, indx) in tareas" 
        :key="item.id"
        :class="{inProcessTask: item.taskState==1, completedTask: item.taskState==2}">
        <div :class="{lineInText: item.taskState==2}" class="textoTarea"
          @click="cambiarSelected(item)"
          v-if="!isEditing(indx)"
          >
        {{ item.text }}
        </div>
        
        <div v-if="isEditing(indx) && isSelected(indx)" class="componentEditor">
          <EditorTarea :textToEdit="item.text" :itemToEdit="item"/>
        </div>

        <!-- TODO: cambiar el color de los botones al cambia el estado de la tarea 
            Armar un texto en el about sobre la pagina
            Estilo mas moderno para los imput
            agregar swall alert para eliminar  -->

        <div style="display: flex">
          <button
            @click="cambiarEstadoTarea(item)"
            class="btn btn-primary buttonTaskState"
            v-if="!isEditing(indx) && !isSelected(indx)">
            {{estadosDisponibles[item.taskState]}}
          </button>
          <template v-if="isSelected(indx)">
            <button class="btn btn-warning buttonTaskState" @click="editTarea(item)">
              <i class="fa fa-pen"></i>
            </button>
            <button class="btn btn-danger buttonTaskState" @click="deleteItem(item)">
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
    overflow-y: auto;
  }

  .textoTarea {
    width: 88%;

    text-align:left;
  }

  .componentEditor{
    margin-right: 0px;
    padding-right: 0px;
    width: 80%;

  }

  @media only screen and (max-width: 1100px) {
  .textoTarea {
    width: 70%;
  }
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
  .buttonTaskState {
    margin-top: 5%;
    margin-bottom: 5%;
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
    padding: 0% 5% 0% 3%;
    margin-bottom: 0.5rem;
    background-color: rgba(241,241,241,0.75);
  }
   button {
    margin-left: 15px;
  } 
  span{
    margin-right: 50px;
  }

</style>
