<template>
  <div class="events">
    <div class="events__title">
        <p>Events</p>
    </div>
    <div class="events__filter">
      <EventFilters 
        :allFilters="allFilters"
        @filterValue="filterValue"
      />
    </div>
    
    <div class="events__table ">
      <TableData 
        :tablecolumns="tablecolumns"
        :rows="allRows"
        :meta="allMeta"
        :placeholder="'Filters Name-1'"
        
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
        {name: 'user_name', label: 'User name'},
        {name: 'src_ip', label: 'Source IP'},
        {name: 'dest_ip', label: 'Dest ip'},
        {name: 'dest_port', label: 'Dest port'},
        {name: 'program', label: 'Program'},
      ],
      rows: [],
      req:{}
    };
  },
  computed: mapGetters(["allRows", "allFilters", "allMeta"]),
  // computed: {
  //   allRows() {
  //     return this.$store.getters.allRows
  //   }
  // },
  methods: {
    ...mapActions(["fetchData"]),
    async filterValue(activeFilters) {
      console.log('Events', activeFilters)
      this.req = {}
      activeFilters.forEach(element => {
        this.req[element.atr] = element.name
      });
      this.fetchData(this.req);
      console.log('req', this.req)
      
    },
    
  },
  async mounted() {
    this.fetchData();
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
    box-shadow: 0 5px 10px rgba(0,0,0,0.25), 0 10px 24px rgba(0,0,0,0.22);
    border-radius: 15px;
  }
}
</style>
