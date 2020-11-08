<template>
  <div class="filters__wrapper ">
    <i class="filters__wrapper__cursor fa fa-caret-down"></i>
    <select class="filters__wrapper__select" @change="checkFilter(checkFilterName)" v-model="checkFilterName" name="" id="" >
      <option value="" disabled selected hidden>{{placeholder}}</option>
      <option
        v-for="(filter) in filters"
        :key="filter.name"
        :value="filter.name"
        :data-id='filter.id'
        :data-atr='filter.atr'
        :style="filter.active ? {'background-color':filter.color} : ''"
      >
        {{filter.name}}
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
        default: "Select a filters"
      }
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
    }
  }

}
</script>

<style>

</style>
