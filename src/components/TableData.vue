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
    <div class="table__wrapper">
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
    </div>
    <div class="table__pagination pagination">
      <div class="pagination__arrow">
        <i class="fa fa-chevron-left" aria-hidden="true"></i>
      </div>
      <div class="pagination__number">{{meta.page}}</div>
      <div class="pagination__arrow">
        <i class="fa fa-chevron-right" aria-hidden="true"></i>
      </div>
    </div>
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
      type: [Object, Array],
      required: true
    },
    meta: {
      type: [Object, Array],
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
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
    width: 100%;
    margin-top: 10px;
    border-radius: 20px;
    background: #0000005d;
    text-align: center;
    overflow: hidden;

    &__header {

      ul {
        display: flex;
        justify-content: space-around;
        padding: 20px 0;
        margin: 0px 3%;
        border-bottom: 1px solid rgba(255,255,255,0.5);

        li {
          width: 10%;
                   
          &:first-child {
            width: 3%;
          }

          &:nth-child(2) {
            width: 12%;
          }
        }
      }
    }

    &__wrapper {
      // overflow-y: auto;
      height: 80%;
      // scrollbar-width: none;
      
      ul {
        display: flex;
        justify-content: space-around;
        padding: 10px 0px;
        margin: 0 3%;
        border-bottom: 1px solid rgba(255,255,255,0.1);

        li {
          width: 10%;
          font-size: 14px;

          &:first-child {
            width: 3%;
          }

          &:nth-child(2) {
            width: 12%;
          }
        }
      }
    }

    &__content {
      scrollbar-width: none;
      overflow-y: auto;
      max-height: 100%;
      height: 100%;

      ul:hover {
        background: rgba(9, 1, 12, 0.589);
        border-bottom: 2px solid rgb(243, 17, 205);
      }
    }

    .pagination {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 5%;
      
      &__arrow {
        margin: 0 20px;
        cursor: pointer;

        &:hover {
          color: rgb(243, 17, 205);
        }
        
      }

      &__number {
        border: 1px solid white;
        border-radius: 3px;
        padding: 5px 10px;
        cursor: pointer;

        &:hover {
          background: rgba(9, 1, 12, 0.589);
          border: 2px solid rgb(243, 17, 205);
        }
      }
    }
  }


</style>