<template>
    <div class="search" >
        <div class="search__form">
            <form class="search__form__events" action="" method="">
                <div class="search__wrapper fa fa-search">
                <input class="search__wrapper__input" type="saerch" placeholder="search">
                <i v-on:click="btn = !btn" class="search__wrapper__cursor filters__wrapper__cursor filters__wrapper__cursor_green fa fa-sliders"></i>
                </div>
            </form>
        </div>
        <!-- блок выбора фильтров -->
        <div v-if="btn" class="search__filters filters">
          <div class="filters__head">
              <p class="filters__head_p">Add filter:</p>
          </div>
          <Filters
          :filters="filters"
          :placeholder="'Filters Name-1'"
          @change="choceFilter"
          />
          <Filters
          :filters="filtersTwo"
          :placeholder="'Filters Name-2'"
          />
        </div>
        <!-- конец блока выбора фильтров -->

        <!-- блок отображения активных фильтров -->
        <transition name="fade">
          <div  v-if="btn" class="show__filters filters__active filters">
              <div class="show__filters__head filters__head ">
                  <p class="filters__head_p">Filter:</p>
              </div>
              <div v-bind:class="{active: filtersTwo.active }" class="show__filters__wrapper show__filters__wrapper_purple">
                  <i class="filters__wrapper__cursor fa fa-close"></i>
                  Sorce ip:{{filtersTwo.name}}
              </div>
              <div v-for="filter of filters"
                    :key="filter.id"
                    :class="filter.active ? 'active':'blue'"
                    :style="{'background-color':filter.color}"
                    class="show__filters__wrapper show__filters__wrapper_green">
                  <i class="filters__wrapper__cursor fa fa-close"></i>
                  Sorce country: {{filter.name}} {{filter.color}}
              </div>
          </div>
        </transition>
        <!-- конец блок отображения активных фильтров -->
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
    data(){
        return{
            btn : false,
            filterModel : [],
            filters : [
              {id: 1, name: "Source country 1", active: false, color: "#6957b8"},
              {id: 2, name: "Source country 2", active: false, color: "#077233"},
              {id: 3, name: "Source country 3", active: false, color: "#6957b8"},
              {id: 4, name: "Source country 4", active: false, color: "#077233"},
              {id: 5, name: "Source country 5", active: false, color: "#ccc"},

            ],
            filtersTwo : [
              {id: 1, name: "Russia 1", active: false},
              {id: 2, name: "Russia 2", active: false},
              {id: 3, name: "Russia 3", active: false},
              {id: 4, name: "Russia 4", active: false},
              {id: 5, name: "Russia 5", active: false},

            ],
            // placeholder: ""
        }
    },
    methods: {
      onSubmit() {
        // v-on:click="filter.active = !filter.active"
        console.log("filtre:")

      },
      // choceFilter(value) {

      // }
    }

}

</script>

<style>

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}

.active {
  /* animation: filterOpacityOn 2s linear;
    /* animation: filterOpacityOn 2s linear;
    visibility: visible !important; */
    /* visibility: collapse; */
    /* transition: all 3s ease; */
    /* display: none !important;  */
    display: flex !important;

}
/* стили фильтра */
.search {
  background:#0000005d;
  border-radius: 15px;
  text-align: center;
  padding: 10px;
  max-height: 165px;
}

.search__form {
  text-align: right;
}

.search__form__events {

}

.search__wrapper {
position: relative;
}

.search__wrapper__input {
  border: 1px solid #0e4050;
  background-color: #0e4050;
  color: #1a87a8;
  border-radius: 5px;
  padding: 10px 20px;
  box-sizing: border-box;
  margin-right: 40px;

}

.search__wrapper__input:hover {
  border: 1px solid #1a87a8;
  transition: all 0.5s ease;
  color: #1a87a8;
}

.search__wrapper::before {
  content: '\f002';
  right: 55px;
  position: absolute;
  line-height: 37px;
  color: #1a87a8;

}

.search__wrapper__cursor:hover {
  color: #1a87a8;
}



.search__filters {

}

.filters {
  display: flex;
  padding-top: 10px;
  flex-wrap: wrap;
  /* animation: filterOpacityOff 2s linear; */
  /* opacity: 0; */
  /* transition: all 1s ease; */
  /* visibility: hidden; */
  /* animation: filterOpacityOn 2s linear; */
    /* visibility: visible !important;
    display: none; */
}

.filters__head {
  color: #1a87a8;
  font-size: 15px;
  padding-right: 20px;
  width: 100px;
  text-align: left;
}

.filters__head_p {
    padding: 5px 0;
}

.filters__wrapper {
  margin-right: 5px;
  position: relative;
  border-radius: 5px;
}

.filters__wrapper:hover {
   border: 1px solid white;
  transition: all 1s ease;
  border-radius: 5px;
}

.filters__wrapper__cursor {
  position:absolute;
  top: 0;
  bottom: 0;
  right: 8px;
  margin: auto;
  height: 50%;
  font-size: 13px;
  cursor: pointer;
}

.filters__wrapper__cursor_green {

  color: #0e4050;
  top: -9px;
  font-size: 23px;
}


/* .filters__wrapper__select:hover {
  border: 1px solid white;
  transition: all 1s ease;

} */

.filters__wrapper__select {
  border: 1px solid #06303d;
  cursor: pointer;
  border-radius: 5px;
  background-color: #06303d;
  color: rgba(255, 255, 255, 0.863);
  padding: 2px 35px 2px 10px;
  height: 100%;

}

.show__filters {
  padding-top: 10px;
}

.filters__active {

}

.show__filters__head {

}

.show__filters__wrapper {
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background-color: #06303d;
  color: white;
  padding: 2px 35px 2px 10px;
  margin: 5px 5px 5px 0;
  font-size: 14px;
  position: relative;
  display: none;
}

.show__filters__wrapper_green:hover {
  /* box-shadow: 0 10px 30px rgba(233,48,161,0.3); */
  transition:  all 0.5s ease;
  background: transparent;
  border: 2px solid #077233;
}

.show__filters__wrapper_purple:hover {
  /* box-shadow: 0 10px 30px rgba(233,48,161,0.3); */
  transition:  all 0.5s ease;
  background: transparent;
  border: 2px solid #6957b8;
}

/* .show__filters__wrapper_purple {
   background-color: #6957b8;
}

.show__filters__wrapper_green {
   background-color: #077233;
} */

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
