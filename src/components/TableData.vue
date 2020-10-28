<template>
  <div class="table">
    <table class="table__wrapper">
       <thead>
          <tr class="table__head" >
            <th></th>
            <th 
              v-for="column in tablecolumns"
              :key="column.label"
              > {{column.label}}
              <!-- <span>{{column.label}}</span> -->
            </th>
          </tr>
      </thead>
      <tbody>
        <tr class="tr_hover" 
          v-for="(row, i) of rows"
          v-bind:key="i"
          v-on:click="$emit('enable-description', user.id)"
          >
          <td>{{i+1}}</td>
          <td>{{row.time_stamp}}</td>
          <td>{{row.event_discription}}</td>
          <td>{{row.host}}</td>
          <td>{{row.host_name}}</td>
          <td>{{row.user_name}}</td>
          <td>{{row.src_ip}}</td>
          <td>{{row.dst_ip}}</td>
          <td>{{row.dst_port}}</td>
          <td>{{row.program}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
   data: () => ({
    // checkFilterName: "",
  }),
  props: {
    tablecolumns: {
      type: Array,
      required: true
    },
    rows: {
      type: Object,
      required: true
    }
  },
  methods: {
    // checkFilter(value) {
    //   this.filters.forEach(function(filter) {
    //     if (filter.name==value) {
    //         filter.active = !filter.active
    //     }
    //   })

    //   this.$emit("change", value)
    //   console.log(this.filters)
    //   // this.filters[4].active = true
    // }
  }
}
</script>

<style>
  .table {
    /* margin: 0 20px 20px 20px; */
    overflow: hidden;
    height: 100%;
  }

  .table__wrapper {
    /* background: #0000005d; */
    padding: 40px;
    display: block;
    border-radius: 20px;
    border-collapse: collapse;
    overflow-y: auto;
    max-height: 100%;
    height: 100%;
  }

  .table__wrapper th {
    font-size: 16px;
    padding-bottom: 10px;
    text-align: center;
    border-bottom: 1px solid #ffffff49;
    width: 7%;
      
  }

  .table__wrapper tr {
    border-bottom: 1px solid #ffffff49;
    text-align: center;
    cursor: pointer;
  }

  .table__wrapper td {
    padding: 0px 0px;
  }

  .tr_hover:hover {
    background: rgba(148, 0, 211, 0.589);
    border-bottom: 2px solid rgb(243, 17, 205);
  }

  .table_div {
  background: #0000005d;
  margin-top: 10px;
  /* padding-top: 20px; */
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 20px;
}


.table_div table {
  border-collapse: collapse;
  /* margin: 10px auto; */
  font-size: 0.7em;
  /* width: 95%; */
}

.table_div th {
  padding-bottom: 10px;
  text-align: center;
  font-weight: lighter;
  border-bottom: 1px solid #ffffff49;
  width: 7%;
}

.table_div tr {
  border-bottom: 1px solid #ffffff49;
  text-align: center;
}

.tr_hover:hover {
  background: darkviolet;
}
</style>