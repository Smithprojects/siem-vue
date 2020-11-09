<template>
  <div class="filters__wrapper ">
    <i class="form__fa-img fa fa-caret-down"></i>
    <select class="filters__wrapper__select" @change="checkFilter(checkFilterName)" v-model="checkFilterName" name="" id="" >
      <!-- <option value="" v-show="placeholder" selected hidden>{{placeholder}}</option> -->
      <option
        v-for="(filter, index) in filters"
        :key="filter.name"
        :value="filter.name"
        :data-id='filter.id'
        :data-atr='filter.atr'
        :style="filter.active ? {'background-color':filter.color} : ''"
        
      >
        {{filter.name}} {{index}} {{checkFilterName}}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  data: () => ({
    checkFilterName: "",
  }),
  props: {
      filters: {
          type: Array,
          required: true
      },
      placeholder: {
        type: String,
        required: false,
      }
  },
  computed: {

  },
  methods: {
    checkFilter(value) {
      this.filters.forEach(function(filter) {
        if (filter.name==value) {
            filter.active = !filter.active
        }
      })

      this.$emit("change", value)
      console.log(this.filters)
      // this.filters[4].active = true
    },
    default() {
      // const d = this.filters.filter( i => i==0)
      console.log('teeee')
    }
  }

}
</script>

<style>

</style>
