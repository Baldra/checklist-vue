<template>

<div
  style="margin-left: 15%; margin-right: 15%; margin-bottom: 48px">

  <span style="float: left; font-size: x-large; margin-left: 8%;"
    >Tareas</span>
  <span style="float: right; font-size: x-large;margin-right: 8%;"
    >Estado</span>

</div>

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

        <div style="display: flex">
          <button
            @click="cambiarEstadoTarea(item)"
            class="btn buttonTaskState"
            :class="{inProcessTask: item.taskState==1, completedTask: item.taskState==2}"
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
import Swal from "sweetalert2"


export default {
  name: 'TodoList',
  components: {
    EditorTarea
  },

  data() {
    return {
      estadosDisponibles: ['To-Do','Iniciada','Finalizada'],
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

    async deleteItem(item) {

      const {isConfirmed} = await Swal.fire({
        title: 'Seguro que quiere eliminar?',
        showDenyButton: true,
        confirmButtonText: 'Si'

      })
      if(isConfirmed){
        this.$store.commit('removeItem', item)
      }

    },

    cambiarEstadoTarea(item) {
      this.$store.commit('chageTaskState', item)
    },

    cambiarSelected(item) {
      this.$store.commit('changeSelected', item)
    },

  },

}
</script>


<style lang ="scss" scoped>

  $toDoTaskColor: rgba(241,241,241,0.75);
  $inProgresTaskkColor: rgb(245,230,23,0.75);
  $finTaskColor: rgb(177, 177, 177,0.75);


  .scrollarea {
    height: calc(100vh - 206px);
    overflow-y: auto;
    scroll-behavior: smooth; 
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
  }

  .completedTask {
    background-color: $finTaskColor;
  }

  .inProcessTask {
    background-color: $inProgresTaskkColor;
  }
  .buttonTaskState {
    margin-top: 5%;
    margin-bottom: 5%;
    border-color: black;
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
    background-color: $toDoTaskColor;
    border-radius: 11px;
  }

  .btn{
    --bs-btn-hover-border-color: black;
    display: flex;
  } 

</style>
