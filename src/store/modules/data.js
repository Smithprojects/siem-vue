import { stringify } from 'query-string';

export default {
  actions: {
    /* eslint-disable no-unused-vars */
    async fetchData(ctx, params ) {
      const res = await fetch(
          `http://127.0.0.1:8000/api/events/list/?${stringify(params)}`
          // `host=${host}` +
          // `&host_name=${host_name}` +
          // `&user_name=${user_name}` +
          // `&program=${program}` +
          // `&src_ip=${src_ip}` +
          // `&dst_ip=${dst_ip}` +
          // `&dst_port=${dst_port}` +
          // `&event_discription=${event_discription}` 
      );
      const data = await res.json();
      
      ctx.commit('updateData', data)
    }
  },
  mutations: {
    updateData(state, data) {
      state.rows = data.content.data;
      state.filters = data.content.filters;
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
      console.log('getterallrows')
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
  