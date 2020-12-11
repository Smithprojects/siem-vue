<template>
  <div class="select-block" >
    
    <div class="select-block__select"
      v-if="filters"  
      @click="toogleShowChoices"
    >
      <span class="select-block__text" >{{getCurrentChoice}}</span>
      <i class="select-block__icon fa fa-caret-down"></i>
    </div>  
    <div class="select-block__options" 
      v-if="showChoices"
    >
      <div class="select-block__option"
        v-for="(filter) in filters"
        :key="filter.name"
        :style="filter.active ? {'background-color':filter.color} : ''"
        @click="clickOptions(filter)"
      >
      {{filter.name}} 
      </div>
    </div>
    <div class="select-block__close-area"
      v-if="showChoices"
      @click="toogleShowChoices"
    ></div>
  </div>
</template>

<script>
export default {
  data: () => ({
    checkSelectName: '',
    showChoices: false,
  }),
  props: {
    value: {
      type: [Object, String, Array],
      default: null,
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
    },
    selected: {
        type: String,
        required: false,
        default: ''
      },
   },
  computed: {
    getCurrentChoice: function () {
      if (!this.value) {
        return this.placeholder
      }
      return this.value.name 
    },
  },
  methods: {
    toogleShowChoices: function () {
      this.showChoices = !this.showChoices
    },
    clickOptions(filter) {
      this.$emit("input", filter)
      this.toogleShowChoices()
    }
  }
}
</script>

<style lang="scss" scoped>

.select-block {
  margin-right: 5px;
  position: relative;
  border-radius: 5px;
  min-width: 124px;
  font-size: 14px;

  &:hover {
    transition: all 1s ease;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25), 0 10px 24px rgba(0, 0, 0, 0.22);
  }

  &__select {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border: 1px solid #06303d;
    cursor: pointer;
    border-radius: 5px;
    background-color: #06303d;
    padding: 2px 35px 2px 10px;
  }

  &__close-area {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100%;
    height: 100%;
    cursor: default;
  }

  &__text {

  }

  &__icon {
    position:absolute;
    top: 0;
    bottom: 0;
    right: 8px;
    margin: auto;
    height: 50%;
    font-size: 13px;
    cursor: pointer;
  }

  &__options {
    position: absolute;
    background-color: #06303d;
    right: 0;
    top: 30px;
    width: 100%;
    z-index: 15;
  }

  &__option {
    padding: 2px 0px;
    cursor: pointer;

    &:hover {
      background-color: rgb(32, 178, 170);
    }
  }
}

</style>
