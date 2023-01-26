import { createStore } from 'vuex'

export default createStore({
  state: {
    tareas: []
  },

  getters: {
    tareas: state => state.tareas,
    isSelected: state => indx => {
      return state.tareas[indx].isSelected
    }

  },

  mutations: {
    addItem(state, item) {
      if(!item) return
      state.tareas.push({ id: Date.now(), text: item, taskState: 0, isSelected: false })
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
    }

  },

  actions: {

  },

  modules: {
  }

})
