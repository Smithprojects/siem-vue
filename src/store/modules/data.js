export default {
  actions: {
    async fetchData(ctx) {
      const res = await fetch(
          'http://127.0.0.1:8000/api/events/list/'
      );
      const data = await res.json();
      
      ctx.commit('updateData', data)
    }
  },
  mutations: {
    updateData(state, data) {
      state.rows = data.content.data;
      state.filters = data.content.filter;
      state.meta = data.content.meta;

    },
  },
  state: {
    rows: [],
    filters: [],
    meta: []
  },
  getters: {
    allRows(state) {
      return state.rows
    },
    allFilters(state) {
      return state.filters
    },
    allMeta(state) {
      return state.meta
    },
  }
}
  