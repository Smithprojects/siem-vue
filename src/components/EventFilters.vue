<template>
  <div class="filtering">
    
    <div class="filtering__search search">
      <form class="search__form form" action="" method="">
        <div class="form__wrapper">
          <input class="form__input" type="saerch" placeholder="search">
          <div class="form__search-btn"
            @click="onSubmit"
          >
            <i  class="fa fa-search"></i>
          </div>
        </div>
        <div class="form__open-filter-btn"
          v-on:click="hasOpenSelectBlock = !hasOpenSelectBlock"
        >
          <i  class="fa fa-sliders"></i>
        </div>
      </form>
    </div>
    
    <div v-if="hasOpenSelectBlock" class="filtering__filters ">
      
      <div class="filters__add filters">
        <div class="filters__head">
          <p class="filters__title">Add filter:</p>
        </div>
        <div class="filters__case">
         
          <select-filters
            :filters="allFilters"
            @input="clickOptions"
            v-model="selectedFilter"
          />
          <select-filters
            :filters="filtersValues"
            v-model="selectedFilterOption"
          />
          
        </div>
        <div class="filters__btn"
          :class="{filters__btn_disabled: !activeAddBtn}"
          @click="addFilter"
        >
          <i class="fa fa-plus" aria-hidden="true"></i>
        </div>
      </div>
              
      <div class="filters__show filters"
        v-show="showActiveFilters"
      >
        <div class="filters__head ">
            <p class="filters__title">Filter:</p>
        </div>

        <div class="filters__case">
          <div class="show" 
            v-for="filter of activeFilters" 
            :key="filter.id"
            :style="{'background-color':filter.color}"
          >
            <p class="show__text">{{filter.atr}} {{filter.value}}</p> 
            <div class="show__close-btn">
              <i class="fa fa-close"
                @click="deleteFilter(filter.atr)"
              >
              </i>
            </div>
          </div>
         
        </div>
        <div class="filters__btn"
          @click="deleteAllFilters"
        >
          <i class="fa fa-trash-o" aria-hidden="true"></i>
        </div>
      </div>
    
    </div>
  </div>
</template>

<script>
import SelectFilters from './SelectFilters';

export default {
  name : 'search',
  components : {
    SelectFilters
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
      selectedFilter: null,
      selectedFilterOption: null,
      hasOpenSelectBlock : false,
      showActiveFilters: false,
      activeAddBtn: false,
      filtersValues : [],
      activeFilters: [],
      colorsForFilters:['#5F9EA0', '#4682B4', '#B0C4DE', '#B0E0E6', '#87CEEB', '#87CEFA', '#6495ED', '#8FBC8F', '#20B2AA', '#A9A9A9', '#778899', '#808080']
    }
  },
  methods: {
    clickOptions(options) {
      
      console.log('clickOptions', options)
      this.filtersValues = options.filters.map(function(val){
        return {
          atr: options.atr,
          name: val
        }
      })
      this.selectedFilterOption = this.filtersValues[0]
      this.activeAddBtn = true
    
      console.log('clickOptions1', this.selectedFilterOption)
    },
    onSubmit() {
      // v-on:click="filter.active = !filter.active"
      console.log("onSubmit:")

    },
    addColor(value) {
      const colorId = this.getRandomInRange(0,11)
      const color = this.colorsForFilters[colorId]
      
      return {
        atr: value.atr,
        name: value.name,
        color: color
      }
    },

    addFilter() {
      
      if (this.activeFilters.find(filter => filter.name == this.selectedFilterOption.name)) {
        return this.activeFilters
      } else {
        this.activeFilters.push(this.addColor(this.selectedFilterOption))
      }
      this.showActiveFilters = true
      this.$emit('filterValue', this.activeFilters)
      console.log('test7', this.activeFilters)
    },
    deleteFilter(atr) {
      
      for (let filter of this.activeFilters) {
        if (filter.atr == atr) {
          this.activeFilters.splice(this.activeFilters.findIndex(item => item.atr === filter.atr), 1)
          
          if (!this.activeFilters.length) {
            this.showActiveFilters=false
          }
        }
      }
      this.$emit('filterValue', this.activeFilters)
      
    },
    deleteAllFilters() {
      this.activeFilters = []
      this.showActiveFilters=false
      this.$emit('filterValue', this.activeFilters)
    },
    getRandomInRange(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
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
      align-items: center;

      &__wrapper {
        position: relative;
      }

      &__input {
        border: 1px solid #0e4050;
        background-color: #0e4050;
        color: #1a87a8;
        border-radius: 5px;
        padding: 10px 20px;
        box-sizing: border-box;
        margin-right: 10px;
        
        &:hover {
          border: 1px solid #1a87a8;
          transition: all 0.5s ease;
          color: #1a87a8;
        }
      }

      &__search-btn {
        position: absolute;
        top: 0; 
        left: 180px;
        line-height: 37px;
        color: #1a87a8;
        cursor: pointer;

        &:hover {
          color: #34C6CD;
        }

        &:active {
          color: #06303d;
        }
      }

      &__open-filter-btn {
        font-size: 23px;
        color: #1a87a8;
        cursor: pointer;
 
        &:hover {
          color:#34C6CD;
        }

        &:active {
          color: #06303d;
        }
      }
    }
  }
}

.filters {
  display: flex;
  padding-top: 10px;
  transition:  all 0.5s ease;
 
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

    &:hover {
      color: #1a87a8;
    }

    &:active {
      color: #06303d;
    }

    &_disabled {
      color:#0e4050;
      pointer-events: none;
      
    }
  }
}

.show {
  display: flex;
  align-items: center;
  font-size: 14px;
  padding: 2px 10px;
  margin-right: 5px;
  background-color: #06303d;
  border-radius: 5px;
  border: 1px solid #06303d;

  &__text {
    margin-right: 10px;
  }

  &__close-btn {
    cursor: pointer;

    &:hover {
      color: #0000005d;
    }

    &:active {
      color: #06303d;
    }
  }

  &:hover {
    transition: all 1s ease;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25), 0 10px 24px rgba(0, 0, 0, 0.22);
  }

  &_purple:hover {
    /* box-shadow: 0 10px 30px rgba(233,48,161,0.3); */
    transition:  all 0.5s ease;
    background: transparent;
    border: 2px solid #6957b8;
  }
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
