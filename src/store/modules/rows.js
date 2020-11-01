export default {
  actions: {
    async fetchRows(ctx) {
      const res = await fetch(
          'http://127.0.0.1:8000/api/events/list/'
      );
      const rows = await res.json();
      
      ctx.commit('updateRows', rows)
    }
  },
  mutations: {
    updateRows(state, rows) {
      state.rows = rows.content.data;
    },
  },
  state: {
    rows: [],
  },
  getters: {
    allRows(state) {
      return state.rows
    },
  }
}
  