<template>
  <div class="filtering">
    
    <div class="filtering__search search">
      <form class="search__form form" action="" method="">
        <div class="form__wrapper fa fa-search">
          <input class="form__input" type="saerch" placeholder="search">
          <i v-on:click="btn = !btn" class="search__wrapper__cursor form__fa-img form__fa-img_green fa fa-sliders"></i>
        </div>
      </form>
    </div>
    
    <div v-if="btn" class="filtering__filters ">
      
      <div class="filters__add filters">
        <div class="filters__head">
          <p class="filters__title">Add filter:</p>
        </div>
        <div class="filters__case">
          <Filters
          :filters="allFilters"
          
          @change="choceFilterName"
          />
          <Filters
          :filters="filtersTwo"
          :fil="false"
          @change="choceFilterValue"
          />
          
        </div>
        <div class="filters__btn"
          @click="addFilter"
        >
          <i class="fa fa-plus" aria-hidden="true"></i>
        </div>
      </div>
              
      <div class="filters__show filters">
        <div class="filters__head ">
            <p class="filters__title">Filter:</p>
        </div>

        <div class="filters__case">
          <div v-for="filter of requestFilter"
            :key="filter.id"
            :class="filter.active ? 'active':''"
            :style="{'background-color':filter.color}"
            class="show show_green"
          >
            <i class="form__fa-img fa fa-close"></i>
            {{filter.name}} {{filter.value}}
          </div>
        </div>
        <div class="filters__btn">
          <i class="fa fa-trash-o" aria-hidden="true"></i>
        </div>
      </div>
    
    </div>
  </div>
</template>

<script>
import Filters from './Filters';
// import FilterOptions from  './FilterOptions';
export default {
  name : 'search',
  components : {
      // FilterOptions,
      Filters
  },
  props: {
    allFilters: {
      type: [Object, Array],
      required: true
    }
  },
  computed: {
 
  },
  data(){
    return{
      btn : false,
      filterModel : [],
      filters : [
        {id: 1, name: "Host", atr: 'list_hosts', active: false, color: "#6957b8"},
        {id: 2, name: "Host name", atr: 'list_host_names', active: false, color: "#077233"},
        {id: 3, name: "User name", atr: 'list_user_name', active: false, color: "#6957b8"},
        {id: 3, name: "Program", atr: 'list_programs', active: false, color: "#6957b8"},
        {id: 4, name: "Source IP", atr: 'list_src_ips', active: false, color: "#077233"},
        {id: 5, name: "Dest IP", atr: 'list_dst_ips', active: false, color: "#ccc"},
        {id: 6, name: "Dest port", atr: 'list_dst_port', active: false, color: "#ccc"},
      ],
      filtersTwo : [
        {id: 1, name: "Russia 1", active: false},
        {id: 2, name: "Russia 2", active: false},
        {id: 3, name: "Russia 3", active: false},
        {id: 4, name: "Russia 4", active: false},
        {id: 5, name: "Russia 5", active: false},

      ],
      requestFilter : [],
      // placeholder: ""
    }
  },
  methods: {
    onSubmit() {
      // v-on:click="filter.active = !filter.active"
      console.log("filtre:")

    },
    choceFilterName(value) {

      const tryp = Object.values(this.allFilters)
      this.filtersTwo = tryp.forEach(function(filter) {
        if (filter.name==value) {
            filter.active = true
        }
        console.log('tre',  this.filtersTwo)
      })

      // const atrName = this.filters
      //   .filter(filter => filter.name==value)[0].atr
        
      // this.filtersTwo = this.allFilters[atrName]
        // .map(filter => {
        //   return {
        //     name: filter
        //   }
        // })

      // const atrName2 = atrName.replace(/^list_\//, '');
      // this.requestFilter.push({
      //   name: value, 
      //   atr: atrName.substr(5)
      // })

       
      // this.requestFilter.name = atrName.substr(5)
    
      

      console.log('test5', this.requestFilter)
    },
    choceFilterValue(value) {
        // this.requestFilter.value = value
        // this.requestFilter.active = false
        // this.requestFilter = this.requestFilter
        //   .map(filter => {
        //     return {
        //       value: value,
        //       active: false
        //     }
        //   })

        for (let filter of this.requestFilter) {
          filter.value = value
          
        }
        console.log('test6', this.requestFilter)
    },
    addFilter() {
      for (let filter of this.requestFilter) {
        filter.active = true
      }
      console.log('test7', this.requestFilter)
      
      
    }
  }
}

</script>

<style lang="scss">

.filtering {
  background:#0000005d;
  border-radius: 15px;
  text-align: center;
  padding: 10px;
  max-height: 165px;

  .search {

    .form {
      display: flex;
      justify-content: flex-end;

      &__wrapper {
        position: relative;

        &::before {
          content: '\f002';
          right: 55px;
          position: absolute;
          line-height: 37px;
          color: #1a87a8;

        }
      }

      &__input {
        border: 1px solid #0e4050;
        background-color: #0e4050;
        color: #1a87a8;
        border-radius: 5px;
        padding: 10px 20px;
        box-sizing: border-box;
        margin-right: 40px;
        
        &:hover {
          border: 1px solid #1a87a8;
          transition: all 0.5s ease;
          color: #1a87a8;
        }
      }

      &__fa-img {
        position:absolute;
        top: 0;
        bottom: 0;
        right: 8px;
        margin: auto;
        height: 50%;
        font-size: 13px;
        cursor: pointer;

        &_green {
          color: #0e4050;
          top: -9px;
          font-size: 23px;
        }
      }
    }
  }
}

.filters {
  display: flex;
  padding-top: 10px;
  // flex-wrap: wrap;
  /* animation: filterOpacityOff 2s linear; */
  /* opacity: 0; */
  /* transition: all 1s ease; */
  /* visibility: hidden; */
  /* animation: filterOpacityOn 2s linear; */
    /* visibility: visible !important;
    display: none; */

  &__head {
    color: #1a87a8;
    font-size: 15px;
    padding-right: 20px;
    width: 100px;
    text-align: left;
  }

  &__title {
    padding: 5px 0;
  }

  &__case {
    display: flex;
    flex-wrap: wrap;
  
  }

  &__btn {
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-left: 10px;
  }
}

.show {
  cursor: pointer;
  border-radius: 5px;
  background-color: #06303d;
  padding: 2px 35px 2px 10px;
  margin: 5px 5px 5px 0;
  font-size: 14px;
  position: relative;
  display: none;
  border: 1px solid #06303d;

  &_green:hover {
    /* box-shadow: 0 10px 30px rgba(233,48,161,0.3); */
    transition:  all 0.5s ease;
    background: transparent;
    border: 2px solid #077233;
  }

  &_purple:hover {
    /* box-shadow: 0 10px 30px rgba(233,48,161,0.3); */
    transition:  all 0.5s ease;
    background: transparent;
    border: 2px solid #6957b8;
  }
}

.form__fa-img {
  position:absolute;
  top: 0;
  bottom: 0;
  right: 8px;
  margin: auto;
  height: 50%;
  font-size: 13px;
  cursor: pointer;

  &_green {
    color: #0e4050;
    top: -9px;
    font-size: 23px;
  }
}

.active {
  /* animation: filterOpacityOn 2s linear;
    /* animation: filterOpacityOn 2s linear;
    visibility: visible !important; */
    /* visibility: collapse; */
    /* transition: all 3s ease; */
    /* display: none !important;  */
    display: flex ;

}

@keyframes filterOpacityOn {
     /* 0%{
        opacity: 0;
    }
    50%{
        opacity: 0.5;
    }
    100%{
        opacity: 1;
    } */

    0%{
        transform: translateY(-50px);

    }
    100%{
         transform: translateX(0);
    }
}

@keyframes filterOpacityOff {
     /* 0%{
        opacity: 1;
    }
    50%{
        opacity: 0.5;
    }
    100%{
        opacity: 0;
    } */

    0%{
        transform: translateX(0);


    }
    100%{
         transform: translateX(-600px);
    }
}

/* стили фильтра конец*/
</style>
