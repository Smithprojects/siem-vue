import Vue from 'vue'
import Vuex from 'vuex'
import filters from './modules/filters'
import rows from './modules/data'

Vue.use(Vuex)

export default new Vuex.Store({
  actions: {},
  mutations: {},//функции напрямую меняют store
  state: {},//начальные данные
  getters: {},//трансформируем данные и получаем из stote

  modules: {
    filters,
    rows
  } //декомпозирует
})
