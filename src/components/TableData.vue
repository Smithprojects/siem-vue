<template>
  <div class="table">
    <div class="table__header">
      <ul>
        <li></li>
        <li 
          v-for="column in tablecolumns"
          :key="column.label"
          > {{column.label}}
        </li>
      </ul>
    </div>
    <div class="table__content">
      <ul
        v-for="(row, i) of rows"
        v-bind:key="i"
      >
        <li>{{i+1}}</li>
        <li>{{row.time_stamp}}</li>
        <li>{{row.event_discription}}</li>
        <li>{{row.host}}</li>
        <li>{{row.host_name}}</li>
        <li>{{row.user_name}}</li>
        <li>{{row.src_ip}}</li>
        <li>{{row.dst_ip}}</li>
        <li>{{row.dst_port}}</li>
        <li>{{row.program}}</li>
      </ul>
    </div>
    <div class="table__pagination pafination">
      <div class="pagination__arrow"></div>
      <div class="pagination__number">XX</div>
      <div class="pagination__arrow"></div>
    </div>

    <!-- <table class="table__wrapper" cellpadding="0" cellspacing="0" border="0">
       <thead>
          <tr class="table__head" >
            <th></th>
            <th 
              v-for="column in tablecolumns"
              :key="column.label"
              > {{column.label}}
              
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
    </table> -->
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

<style lang="scss">

  ::-webkit-scrollbar {
    width: 0px;
  }

  .table {
    /* margin: 0 20px 20px 20px; */
    overflow: hidden;
    height: 100%;
    width: 100%;
    text-align: center;

    &__header {

      ul {
        display: flex;
        justify-content: space-around;
        list-style-type: none;
        padding: 0;

        li {
          width: 10%;
        }
      }

    }

    &__content {
      overflow-y: auto;
      height: 100%;
      
      ul {
        display: flex;
        justify-content: space-around;
        list-style-type: none;
        padding: 0;
        border-bottom: 1px solid white;

        li {
          width: 10%;
        }
      }

    }

    &__pagination {

    }
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
    overflow-y: auto;
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
  /* font-weight: lighter; */
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