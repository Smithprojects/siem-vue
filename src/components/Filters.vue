<template>
  <div class="select-block ">
    <i class="form__fa-img fa fa-caret-down"></i>
    <select v-if="fil && filters" class="select-block__select" data-atr="trtrt" @change="checkFilter(checkFilterName)" v-model="checkFilterName" name="" id="" >
      <option value="" v-show="placeholder" selected hidden>{{placeholder}}</option>
      <option 
        v-for="(filter) in filters"
        :key="filter.name"
        :value="filter.atr"
        :data-id='filter.id'
        :data-atr='filter.atr'
        :style="filter.active ? {'background-color':filter.color} : ''"
        
      >
        {{filter.name}} 
      </option>
    </select>
    <select v-else-if="!fil && filters" class="select-block__select" @change="checkFilter(checkFilterName)" v-model="checkFilterName" name="" id="" >
      <option value="" v-show="placeholder" selected hidden>{{placeholder}}</option>
      <option 
        v-for="(filter, index) in filters"
        :key="index"
        :value="filter"
        :style="filter.active ? {'background-color':filter.color} : ''"
        
      >
        {{filter}}
      </option>
    </select>
    <select v-else class="select-block__select" @change="checkFilter(checkFilterName)" v-model="checkFilterName" name="" id="" >
      <option value="" v-show="placeholder" selected hidden>{{placeholder}}</option>
    </select>
  </div>
</template>

<script>
export default {
  data: () => ({
    checkFilterName: "",
  }),
  props: {
      fil: {
        type: Boolean,
        required: false,
        default: true
      },
      filters: {
          type: [Object, Array],
          required: false,
          default:()=>{
            return []
          }
      },
      placeholder: {
        type: String,
        required: false,
        default: 'Not to filters'
      }
  },
  computed: {
    // activeFilter: function () {
    //   return console.log( this.filters.filter(filter => filter.active) )
    // },
  },
  methods: {
    activeFilter: function () {
      // return this.filters.filter(filter => filter.active) 
    },
    checkFilter(value) {
    

      // const tryp = Object.values(this.filters)
      // this.filters = tryp.forEach(function(filter) {
      //   if (filter.name==value) {
      //       filter.active = !filter.active
      //   }
      //   // console.log('tre', filter)
      // })

      // getAttribute('data-atr')
      console.log(value)

      this.$emit("change", value)
      // console.log(this.filters)
      // this.filters[4].active = true
    },
    default() {
      // const d = this.filters.filter( i => i==0)
      console.log('teeee')

    }
  }

}
</script>

<style lang="scss">

.select-block {
  margin-right: 5px;
  position: relative;
  border-radius: 5px;
  min-width: 124px;

  &:hover {
    // border: 1px solid white;
    transition: all 1s ease;
    // border-radius: 5px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25), 0 10px 24px rgba(0, 0, 0, 0.22);
  }

  &__select {
    border: 1px solid #06303d;
    cursor: pointer;
    border-radius: 5px;
    background-color: #06303d;
    color: rgba(255, 255, 255, 0.863);
    padding: 2px 35px 2px 10px;
    height: 100%;
    width: 100%;
  }
}

</style>
