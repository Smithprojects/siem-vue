<template>
  <div class="events">
    <div class="events__title">
        <p>Events</p>
    </div>
    <div class="events__content content">
      <div class="content__left">

        <EventFilters />

        <div class="table_div">
          <!-- <vue-good-table title="Demo Table"
            :columns="columns"
            :rows="rows"
            :paginate="true"
            :lineNumbers="true"
            :pagination-options="{enabled: true}"/> -->
          <TableData 
            :tablecolumns="tablecolumns"
            :rows="rows"
            :placeholder="'Filters Name-1'"
            @change="choceFilter"
          />

        </div>
      </div>
      <div class="content__right">
          <EventFilters />
      </div>
    </div>
  </div>
</template>

<script>
import EventFilters from  '../components/EventFilters';
import TableData from  '../components/TableData';
// import axios from "axios";
import Vue from "vue";
import VueGoodTable from 'vue-good-table';


Vue.use(VueGoodTable);

export default {
  name: "events",
  components: {
      EventFilters, TableData
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      posts: [],
      tablecolumns:[
        {name: 'time_stamp', label: 'Timestamp'},
        {name: 'event', label: 'Event'},
        {name: 'host', label: 'Host'},
        {name: 'host_name', label: 'Host name'},
        {name: 'src_ip', label: 'Source IP'},
        {name: 'user_name', label: 'User name'},
        {name: 'dest_ip', label: 'Dest ip'},
        {name: 'dest_port', label: 'Dest port'},
        {name: 'program', label: 'Program'},
      ],
      columns: [
      {
          label: 'Timestamp',
          field: 'time_stamp',
          filterOptions: {
            enabled: true, // enable filter for this column
            placeholder: 'Filter This Thing', // placeholder for filter input
            filterValue: '', // initial populated value for this filter
            filterDropdownItems: [], // dropdown (with selected values) instead of text input
            filterFn: this.columnFilterFn, //custom filter function that
            trigger: 'enter', //only trigger on enter not on keyup
          },

        },
        {
          label: 'Event',
          field: 'event',
          filterOptions: {
            enabled: false, // enable filter for this column
            placeholder: 'Filter This Thing', // placeholder for filter input
            filterValue: '', // initial populated value for this filter
            filterDropdownItems: ['test1', 'test2', 'test3', 'test4'], // dropdown (with selected values) instead of text input
            filterFn: this.columnFilterFn, //custom filter function that
            trigger: 'enter', //only trigger on enter not on keyup
          },

        },
        {
          label: 'Host',
          field: 'host',
          filterOptions: {
            enabled: false, // enable filter for this column
            placeholder: 'Filter This Thing', // placeholder for filter input
            filterValue: '', // initial populated value for this filter
            filterDropdownItems: ['John', 'Jane', 'Susan', 'Chris', 'Dan'], // dropdown (with selected values) instead of text input
            filterFn: this.columnFilterFn, //custom filter function that
            trigger: 'enter', //only trigger on enter not on keyup
          },

        },
        {
          label: 'Host name',
          field: 'host_name',
          filterOptions: {
            enabled: false, // enable filter for this column
            placeholder: 'Filter This Thing', // placeholder for filter input
            filterValue: '', // initial populated value for this filter
            filterDropdownItems: [], // dropdown (with selected values) instead of text input
            filterFn: this.columnFilterFn, //custom filter function that
            trigger: 'enter', //only trigger on enter not on keyup
          },

        },
        {
          label: 'Source IP',
          field: 'src_ip',
          filterOptions: {
            enabled: false, // enable filter for this column
            placeholder: 'Filter This Thing', // placeholder for filter input
            filterValue: '', // initial populated value for this filter
            filterDropdownItems: [], // dropdown (with selected values) instead of text input
            filterFn: this.columnFilterFn, //custom filter function that
            trigger: 'enter', //only trigger on enter not on keyup
          },

        },
        {
          label: 'User name',
          field: 'user_name',
          filterOptions: {
            enabled: false, // enable filter for this column
            placeholder: 'Filter This Thing', // placeholder for filter input
            filterValue: '', // initial populated value for this filter
            filterDropdownItems: [], // dropdown (with selected values) instead of text input
            filterFn: this.columnFilterFn, //custom filter function that
            trigger: 'enter', //only trigger on enter not on keyup
          },

        },
        {
          label: 'Dest ip',
          field: 'dst_ip',
          filterOptions: {
            enabled: false, // enable filter for this column
            placeholder: 'Filter This Thing', // placeholder for filter input
            filterValue: '', // initial populated value for this filter
            filterDropdownItems: [], // dropdown (with selected values) instead of text input
            filterFn: this.columnFilterFn, //custom filter function that
            trigger: 'enter', //only trigger on enter not on keyup
          },

        },

        {
          label: 'Dest port',
          field: 'dst_port',
          filterOptions: {
            enabled: false, // enable filter for this column
            placeholder: 'Filter This Thing', // placeholder for filter input
            filterValue: '', // initial populated value for this filter
            filterDropdownItems: [], // dropdown (with selected values) instead of text input
            filterFn: this.columnFilterFn, //custom filter function that
            trigger: 'enter', //only trigger on enter not on keyup
          },

        },
        {
          label: 'Program',
          field: 'program',
          filterOptions: {
            enabled: false, // enable filter for this column
            placeholder: 'Filter This Thing', // placeholder for filter input
            filterValue: '', // initial populated value for this filter
            filterDropdownItems: [], // dropdown (with selected values) instead of text input
            filterFn: this.columnFilterFn, //custom filter function that
            trigger: 'enter', //only trigger on enter not on keyup
          },

        },

      ],
      rows: [
        { id:1, time_stamp:"test", event:"test1", host:"John", src_ip: 20, user_name:"test", dest_ip: 3123, dest_port: 80, program: 0.03343 },
        { id:2, time_stamp:"test", event:"test2", host:"Jane", src_ip: 20, user_name:"test", dest_ip: 3123, dest_port: 80, program: 0.03343 },
        { id:3, time_stamp:"test", event:"test1", host:"Susan", src_ip: 20, user_name:"test", dest_ip: 3123, dest_port: 80, program: 0.03343 },
        { id:4, time_stamp:"test", event:"test2", host:"Chris", src_ip: 20, user_name:"test", dest_ip: 3123, dest_port: 80, program: 0.03343 },
        { id:5, time_stamp:"test", event:"test3", host:"Dan", src_ip: 20, user_name:"test", dest_ip: 3123, dest_port: 80, program: 0.03343 },
        { id:6, time_stamp:"test", event:"test4", host:"John", src_ip: 20, user_name:"test", dest_ip: 3123, dest_port: 80, program: 0.03343 },
        { id:1, time_stamp:"test", event:"test1", host:"John", src_ip: 20, user_name:"test", dest_ip: 3123, dest_port: 80, program: 0.03343 },
        { id:2, time_stamp:"test", event:"test2", host:"Jane", src_ip: 20, user_name:"test", dest_ip: 3123, dest_port: 80, program: 0.03343 },
        { id:3, time_stamp:"test", event:"test1", host:"Susan", src_ip: 20, user_name:"test", dest_ip: 3123, dest_port: 80, program: 0.03343 },
        { id:4, time_stamp:"test", event:"test2", host:"Chris", src_ip: 20, user_name:"test", dest_ip: 3123, dest_port: 80, program: 0.03343 },
        { id:5, time_stamp:"test", event:"test3", host:"Dan", src_ip: 20, user_name:"test", dest_ip: 3123, dest_port: 80, program: 0.03343 },
        { id:6, time_stamp:"test", event:"test4", host:"John", src_ip: 20, user_name:"test", dest_ip: 3123, dest_port: 80, program: 0.03343 },
        { id:1, time_stamp:"test", event:"test1", host:"John", src_ip: 20, user_name:"test", dest_ip: 3123, dest_port: 80, program: 0.03343 },
        { id:2, time_stamp:"test", event:"test2", host:"Jane", src_ip: 20, user_name:"test", dest_ip: 3123, dest_port: 80, program: 0.03343 },
        { id:3, time_stamp:"test", event:"test1", host:"Susan", src_ip: 20, user_name:"test", dest_ip: 3123, dest_port: 80, program: 0.03343 },
        { id:4, time_stamp:"test", event:"test2", host:"Chris", src_ip: 20, user_name:"test", dest_ip: 3123, dest_port: 80, program: 0.03343 },
        { id:5, time_stamp:"test", event:"test3", host:"Dan", src_ip: 20, user_name:"test", dest_ip: 3123, dest_port: 80, program: 0.03343 },
        { id:6, time_stamp:"test", event:"test4", host:"John", src_ip: 20, user_name:"test", dest_ip: 3123, dest_port: 80, program: 0.03343 },
        { id:1, time_stamp:"test", event:"test1", host:"John", src_ip: 20, user_name:"test", dest_ip: 3123, dest_port: 80, program: 0.03343 },
        { id:2, time_stamp:"test", event:"test2", host:"Jane", src_ip: 20, user_name:"test", dest_ip: 3123, dest_port: 80, program: 0.03343 },
        { id:3, time_stamp:"test", event:"test1", host:"Susan", src_ip: 20, user_name:"test", dest_ip: 3123, dest_port: 80, program: 0.03343 },
        { id:4, time_stamp:"test", event:"test2", host:"Chris", src_ip: 20, user_name:"test", dest_ip: 3123, dest_port: 80, program: 0.03343 },
        { id:5, time_stamp:"test", event:"test3", host:"Dan", src_ip: 20, user_name:"test", dest_ip: 3123, dest_port: 80, program: 0.03343 },
        { id:6, time_stamp:"test", event:"test4", host:"John", src_ip: 20, user_name:"test", dest_ip: 3123, dest_port: 80, program: 0.03343 },
        { id:1, time_stamp:"test", event:"test1", host:"John", src_ip: 20, user_name:"test", dest_ip: 3123, dest_port: 80, program: 0.03343 },
        { id:2, time_stamp:"test", event:"test2", host:"Jane", src_ip: 20, user_name:"test", dest_ip: 3123, dest_port: 80, program: 0.03343 },
        { id:3, time_stamp:"test", event:"test1", host:"Susan", src_ip: 20, user_name:"test", dest_ip: 3123, dest_port: 80, program: 0.03343 },
        { id:4, time_stamp:"test", event:"test2", host:"Chris", src_ip: 20, user_name:"test", dest_ip: 3123, dest_port: 80, program: 0.03343 },
        { id:5, time_stamp:"test", event:"test3", host:"Dan", src_ip: 20, user_name:"test", dest_ip: 3123, dest_port: 80, program: 0.03343 },
        { id:6, time_stamp:"test", event:"test4", host:"John", src_ip: 20, user_name:"test", dest_ip: 3123, dest_port: 80, program: 0.03343 },
        { id:1, time_stamp:"test", event:"test1", host:"John", src_ip: 20, user_name:"test", dest_ip: 3123, dest_port: 80, program: 0.03343 },
        { id:2, time_stamp:"test", event:"test2", host:"Jane", src_ip: 20, user_name:"test", dest_ip: 3123, dest_port: 80, program: 0.03343 },
        { id:3, time_stamp:"test", event:"test1", host:"Susan", src_ip: 20, user_name:"test", dest_ip: 3123, dest_port: 80, program: 0.03343 },
        { id:4, time_stamp:"test", event:"test2", host:"Chris", src_ip: 20, user_name:"test", dest_ip: 3123, dest_port: 80, program: 0.03343 },
        { id:5, time_stamp:"test", event:"test3", host:"Dan", src_ip: 20, user_name:"test", dest_ip: 3123, dest_port: 80, program: 0.03343 },
        { id:6, time_stamp:"test", event:"test4", host:"John", src_ip: 20, user_name:"test", dest_ip: 3123, dest_port: 80, program: 0.03343 },
        { id:1, time_stamp:"test", event:"test1", host:"John", src_ip: 20, user_name:"test", dest_ip: 3123, dest_port: 80, program: 0.03343 },
        { id:2, time_stamp:"test", event:"test2", host:"Jane", src_ip: 20, user_name:"test", dest_ip: 3123, dest_port: 80, program: 0.03343 },
        { id:3, time_stamp:"test", event:"test1", host:"Susan", src_ip: 20, user_name:"test", dest_ip: 3123, dest_port: 80, program: 0.03343 },
        { id:4, time_stamp:"test", event:"test2", host:"Chris", src_ip: 20, user_name:"test", dest_ip: 3123, dest_port: 80, program: 0.03343 },
        { id:5, time_stamp:"test", event:"test3", host:"Dan", src_ip: 20, user_name:"test", dest_ip: 3123, dest_port: 80, program: 0.03343 },
        { id:6, time_stamp:"test", event:"test4", host:"John", src_ip: 20, user_name:"test", dest_ip: 3123, dest_port: 80, program: 0.03343 },
        { id:1, time_stamp:"test", event:"test1", host:"John", src_ip: 20, user_name:"test", dest_ip: 3123, dest_port: 80, program: 0.03343 },
        { id:2, time_stamp:"test", event:"test2", host:"Jane", src_ip: 20, user_name:"test", dest_ip: 3123, dest_port: 80, program: 0.03343 },
        { id:3, time_stamp:"test", event:"test1", host:"Susan", src_ip: 20, user_name:"test", dest_ip: 3123, dest_port: 80, program: 0.03343 },
        { id:4, time_stamp:"test", event:"test2", host:"Chris", src_ip: 20, user_name:"test", dest_ip: 3123, dest_port: 80, program: 0.03343 },
        { id:5, time_stamp:"test", event:"test3", host:"Dan", src_ip: 20, user_name:"test", dest_ip: 3123, dest_port: 80, program: 0.03343 },
        { id:6, time_stamp:"test", event:"test4", host:"John", src_ip: 20, user_name:"test", dest_ip: 3123, dest_port: 80, program: 0.03343 },
        { id:1, time_stamp:"test", event:"test1", host:"John", src_ip: 20, user_name:"test", dest_ip: 3123, dest_port: 80, program: 0.03343 },
        { id:2, time_stamp:"test", event:"test2", host:"Jane", src_ip: 20, user_name:"test", dest_ip: 3123, dest_port: 80, program: 0.03343 },
        { id:3, time_stamp:"test", event:"test1", host:"Susan", src_ip: 20, user_name:"test", dest_ip: 3123, dest_port: 80, program: 0.03343 },
        { id:4, time_stamp:"test", event:"test2", host:"Chris", src_ip: 20, user_name:"test", dest_ip: 3123, dest_port: 80, program: 0.03343 },
        { id:5, time_stamp:"test", event:"test3", host:"Dan", src_ip: 20, user_name:"test", dest_ip: 3123, dest_port: 80, program: 0.03343 },
        { id:6, time_stamp:"test", event:"test4", host:"John", src_ip: 20, user_name:"test", dest_ip: 3123, dest_port: 80, program: 0.03343 },
      ]
    };
  },
  mounted() {
    // const res = await fetch('http://127.0.0.1:8000/api/events/list/');
    // const posts = await res.json();
    // this.posts = posts;
    // console.log("test", posts)

    // const vm = this;

    // axios
    //   .get("http://www.filltext.com/?rows=200&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}", {
    //     headers: {
    //       Authorization:
    //         "Token knRUKT7LKYofsnqBsUAmqUj0d0KEU5rZyHibpCPeJr91Ie3M6Rry16S6dwDain08"
    //     }
    //   })
    //   .then((response)=> {
    //     this.posts = response.data;
    //     vm.posts = response.data;
    //     console.log(this.posts);

    //   });

      fetch('http://127.0.0.1:8000/api/events/list/')
        .then(response => response.json())
          .then(json => {
              this.rows = json.content.data

          })
        .catch((err) => {
            alert(err.name)
        })
  }

};


</script>

<style lang="scss">

select {
    -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

.events {
  background: linear-gradient(#1a87a8, #0e4050);
  margin: 0px 30px;
  border-radius: 20px;
  height: 800px;

  &__content {
    display: flex;
    height: 90%;
  }

  &__title {
    font-size: 1.5em;
    padding: 10px 40px;
  }
}

.content {

  &__left {
    /* margin-top: 10px;
    margin-left: 10px; */
    display: flex;
    /* float: left; */
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    /* height: 100%; */
    margin: 0 10px;
  }

  &__right {
    background: #0000005d;
    /* overflow: hidden; */
    /* margin: 135px 10px 10px 10px; */
    /* display: flex;
    float: right;*/
    width: 18%;
    padding: 10px;
    margin: 0 10px 0px 0px;
    /* height: 730px; */
    border-radius: 15px;
    display: none;
  }
}

// #filter {
//   background: #0000005d;
//   display: flex;
//   float: left;
//   width: 50%;
//   height: 150px;
//   border-radius: 20px;
// }


// #number {
//   width: 2%;
// }

// #th_event {
//   width: 30%;
// }

// #time_stamp {
//   width: 10%;
// }

// .td_event {
//   text-align: left;
// }

// #filter-search {
//   width: 100%;
//   padding: 10px;
// }
// #filter-search span {
//   font-size: 20px;
// }
// #filter-search select {
//   background: #1a87a8;
//   color: #ffff;
//   margin: 10px;
//   width: 100px;
//   height: 30px;
//   border-radius: 3px;
// }

// #filter-search input {
//   background: #1a87a8;
//   color: #ffff;
//   margin: 10px;
//   width: 200px;
//   height: 27px;
//   border-radius: 3px;
//   border-color: #97e5fd;
//   font-size: 16px;
// }

// #button-filter {
//   width: 28%;
//   float: right;
//   padding: 10px;
// }
// #button-filter span {
//   background: #1a87a8;
//   padding: 10px 20px 10px 20px;
//   border-radius: 5px;
//   cursor: pointer;
//   font-size: 15px;
//   transition: all 0.3s ease;
// }
// #button-filter span:hover {
//   background: #01c0ff;
// }

// .vgt-input{
//   background: #7dc7dd;
//   /* width: 600px;
//   height: 20px; */
//   border-radius: 5px;
//   border-color:  #7dc7dd;
//   margin-top: 10px;
// }

// .vgt-select, .footer__row-count__select{
//   -webkit-appearance: none;
//   -moz-appearance: none;
//   appearance: none;
//   background: #7dc7dd;
//   /* width: 600px;
//   height: 20px; */
//   border-radius: 5px;
//   border-color:  #7dc7dd;
//   margin-top: 10px;
// }

// .vgt-responsive {
//   overflow-y: auto;
//   width: 100%;
// }

// .vgt-wrap__footer {
//     text-align: center;
// }

// .footer__navigation {
//     display: flex;
//     justify-content: center;
//     margin: 10px 0;
// }

// .footer__navigation__page-btn {
//     color: #0000005d;
//     padding: 0 10px;
//     text-transform: lowercase;
// }

// .footer__navigation__page-btn:hover {
//     color: #1a87a8;
// }

// .footer__row-count__select {
//     border: 1px solid #fff;
//     background-color: #0e4050;
//     color: #fff;
// }

// .footer__row-count__select:hover {
//     border: 1px solid #1a87a8;
//     transition: all 0.5s ease;

// }

</style>
