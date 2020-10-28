<template >
  <option
        
        v-bind:data-id='filter.id'
        v-bind:value="filter.name"
        >
        {{filter.name}} {{filter.active }}
  </option>
</template>

<script>
export default {
    props: {
        filter: {
            type: Object,
            required: true
        }
    }
}
</script>

<style>

</style>
