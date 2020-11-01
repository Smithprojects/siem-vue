<template>
  <div class="events">
    <div class="events__title">
        <p>Events</p>
    </div>
    <div class="events__filter">
      <EventFilters />
    </div>
    
    <div class="events__table ">
      <TableData 
        :tablecolumns="tablecolumns"
        :rows="allRows"
        :placeholder="'Filters Name-1'"
        @change="choceFilter"
      />
    </div>
  </div>
</template>

<script>
import EventFilters from  '../components/EventFilters';
import TableData from  '../components/TableData';
import { mapGetters, mapActions } from "vuex";

export default {
  name: "events",
  components: {
      EventFilters, TableData
  },
  data() {
    return {
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
      rows: [
        { id:1, time_stamp:"test", event:"test1", host:"John", src_ip: 20, user_name:"test", dest_ip: 3123, dest_port: 80, program: 0.03343 },
        { id:2, time_stamp:"test", event:"test2", host:"Jane", src_ip: 20, user_name:"test", dest_ip: 3123, dest_port: 80, program: 0.03343 },
        { id:3, time_stamp:"test", event:"test1", host:"Susan", src_ip: 20, user_name:"test", dest_ip: 3123, dest_port: 80, program: 0.03343 },
        { id:4, time_stamp:"test", event:"test2", host:"Chris", src_ip: 20, user_name:"test", dest_ip: 3123, dest_port: 80, program: 0.03343 },
        { id:5, time_stamp:"test", event:"test3", host:"Dan", src_ip: 20, user_name:"test", dest_ip: 3123, dest_port: 80, program: 0.03343 },
      ]
    };
  },
  computed: mapGetters(["allRows"]),
  // computed: {
  //   allRows() {
  //     return this.$store.getters.allRows
  //   }
  // },
  methods: mapActions(["fetchRows"]),
  async mounted() {
    this.fetchRows();
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
  // height: 800px;
  margin: 0px 30px;
  padding: 10px;
  border-radius: 20px;
  background: linear-gradient(#1a87a8, #0e4050);
  
  &__table {
    height: 670px;
    // height: 85%;
  }

  &__title {
    font-size: 1.5em;
    padding: 10px 40px;
  }

  &__filter {

  }
}
</style>
