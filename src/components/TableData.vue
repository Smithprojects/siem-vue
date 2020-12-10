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
          <li><span>{{i+1}}</span></li>
          <li
            v-for="(row_value,i) of row"
            :key="i"
          >
            <span
            :style="{'background-color':getColor(row_value)}"
            >
              {{row_value}}
            </span>
          </li>
        </ul>
      </div>
    </div>
    <div class="table__pagination pagination">
      <div class="pagination__arrow"
        @click="checkPage(meta.prev_page)"
      >
        <i class="fa fa-chevron-left" aria-hidden="true"></i>
      </div>
      <div class="pagination__number"
        v-for="(i) of meta.total_pages"
        :key="i"
        :class="{active: isActivePage(i)}"
        @click="checkPage(i)"
      >
        {{i}}
      </div>
      <div class="pagination__arrow"
        @click="checkPage(meta.next_page)"
      >
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
    },
    activeFilters: {
      type: Array,
      required: false,
      default:()=>{
        return []
      }
    }
  },
  methods: {
    isActivePage(page) {
      return !!(this.meta.page === page) 
    },
    checkPage(numpage) {
      console.log('num', numpage)
      if(numpage==null) {
        return
      } else {
        this.$emit('checkPage', numpage)
      }
    },
    getColor(value) {
      if (this.activeFilters.find(filter => filter.name == value)) {
        let test = this.activeFilters.find(filter => filter.name == value)
        return test.color
      }
    }
  }
}
</script>

<style lang="scss">

  .table {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
    width: 100%;
    margin-top: 10px;
    border-radius: 20px;
    // background: #0000005d;
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
          // animation: neon-4 1.5s ease-in-out infinite alternate;
                   
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
        align-items: center;
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
        background: rgba(9, 1, 12, 0.1);
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
        // border-bottom: 2px solid rgb(19, 18, 19);
      }

      ul li {
        //  animation: neon-2 .1s ease-in-out infinite alternate;
        //  animation: neon-2 1.5s ease-in-out infinite alternate;
        // animation: neon-3 1.5s ease-in-out infinite alternate;
      }

      ul li span {
        border-radius: 5px;
        padding: 4px 4px;
        word-wrap: break-word;
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
          color: #1a87a8;
        }

        &:active {
          color: #06303d;
        }
        
      }

      &__number {
        border: 1px solid white;
        border-radius: 3px;
        padding: 5px 10px;
        margin: 0 5px;
        cursor: pointer;
        

        &:hover {
          background-color: #1a87a8;
          box-shadow: inset 2px 2px 5px rgba(154, 147, 140, 0.5), 1px 1px 5px rgba(255, 255, 255, 1);
        }

        &:active {
          background-color: #06303d;
        }

        &.active {
          border: 3px solid white;
        }
      }
    }
  }

   @keyframes neon-1 {
    from {
      text-shadow:  0 0 6px rgba(202, 228, 225, 0.92), 
                    0 0 30px rgba(202, 228, 225, 0.34), 
                    0 0 12px rgba(191, 226, 255, 0.52), 
                    0 0 21px rgba(191, 226, 255, 0.92), 
                    0 0 34px rgba(191, 226, 255, 0.78), 
                    0 0 54px rgba(191, 226, 255, 0.92);
    }
    to {
      text-shadow:  0 0 6px rgba(202, 228, 225, 0.98), 
                    0 0 30px rgba(202, 228, 225, 0.42), 
                    0 0 12px rgba(191, 226, 255, 0.58), 
                    0 0 22px rgba(191, 226, 255, 0.84), 
                    0 0 38px rgba(191, 226, 255, 0.88), 
                    0 0 60px #FFF;
    }
  }

  @keyframes neon-2 {
    0% {
      text-shadow:  0 0 10px #fff, 
                    0 0 20px #fff, 
                    0 0 30px #fff, 
                    0 0 40px #228DFF, 
                    0 0 70px #228DFF, 
                    0 0 80px #228DFF, 
                    0 0 100px #228DFF, 
                    0 0 150px #228DFF;
    }
    100% {
      text-shadow:  0 0 5px #fff, 
                    0 0 10px #fff, 
                    0 0 15px #fff, 
                    0 0 20px #228DFF, 
                    0 0 35px #228DFF, 
                    0 0 40px #228DFF, 
                    0 0 50px #228DFF, 
                    0 0 75px #228DFF;
    }
  }

  @keyframes neon-3 {
    0% {
      text-shadow:  0 0 10px #fff, 
                    0 0 20px #fff, 
                    0 0 30px #fff, 
                    0 0 40px #FFDD1B, 
                    0 0 70px #FFDD1B, 
                    0 0 80px #FFDD1B, 
                    0 0 100px #FFDD1B, 
                    0 0 150px #FFDD1B;
    }

    100% {
      text-shadow:  0 0 5px #fff, 
                    0 0 10px #fff, 
                    0 0 15px #fff, 
                    0 0 20px #FFDD1B, 
                    0 0 35px #FFDD1B, 
                    0 0 40px #FFDD1B, 
                    0 0 50px #FFDD1B, 
                    0 0 75px #FFDD1B;
    }
  }

  @keyframes neon-4 {
    0% {
      text-shadow:  0 0 10px #fff, 
                    0 0 20px #fff, 
                    0 0 30px #fff, 
                    0 0 40px #ff00de, 
                    0 0 70px #ff00de, 
                    0 0 80px #ff00de, 
                    0 0 100px #ff00de, 
                    0 0 150px #ff00de;
    }
    100% {
      text-shadow:  0 0 5px #fff, 
                    0 0 10px #fff, 
                    0 0 15px #fff, 
                    0 0 20px #ff00de, 
                    0 0 35px #ff00de, 
                    0 0 40px #ff00de, 
                    0 0 50px #ff00de, 
                    0 0 75px #ff00de;
    }
  }

  ::-webkit-scrollbar {
    width: 0px;
  }
</style>