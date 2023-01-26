import { createStore } from 'vuex'

export default createStore({
  state: {
    tareas: []
  },

  getters: {
    tareas: state => state.tareas,

    isSelected: state => indx => {
      return state.tareas[indx].isSelected
    },

    isEditing: state => indx => {
      return state.tareas[indx].isEditing
    }

  },

  mutations: {
    addItem(state, item) {
      if(!item) return
      state.tareas.push({ id: Date.now(), text: item, taskState: 0, isSelected: false, isEditing: false })
    },
    
    removeItem(state, item) {
      if(!item) return
      state.tareas = state.tareas.filter(i => i.id !== item.id)
    },
    chageTaskState(state, item) {
      item.taskState >= 2 ? item.taskState = 0 : item.taskState += 1
      
    },
    changeSelected(state, item) {
      item.isSelected = !item.isSelected
    },

    changeToEditing(state, item){
      item.isEditing = !item.isEditing
    },
    editItem(state, valu){
      console.log(valu)
      const newText = valu.text
      const item = valu.item
      
      let i = state.tareas.findIndex(i => i.id === item.id)
      state.tareas[i].text = newText
    }

  },

  actions: {

  },

  modules: {
  }

})
