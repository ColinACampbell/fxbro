<template>
  <div>
    <div>
      <div id="loader" v-if="loading">
        <img width="400" src="./../assets/loader.gif" alt="loading-image">
      </div>
      <div> 
      </div>
      <vue-frappe
        id="test"
        :labels="this.labels"
        title="Forex History"
        type="line"
        :height="350"
        :colors="['purple', '#ffa3ef', 'light-blue']"
        :dataSets="this.data"
      v-if="isDataLoaded"></vue-frappe>
      <hr/>
      <div class="row" title="This is live loaded data">
        <div class="col-md-3">
          Last Update :
        </div>
        <div class="col-md-3">
          FX rate : 
        </div>
        <div class="col-md-3">
          Bid :
        </div>
        <div class="col-md-3">
          Ask :
        </div>
      </div>
      <hr/>
      <div class="currency-form">
        <div class="row" style="margin-top:30px;">
          <div class="form-group col-md-6">
            <label for="inputEmail4">From Currency</label>
            <input
              type="text"
              placeholder="Enter Currency Symbol, eg. EUR, CAD"
              class="form-control col-lg-12"
              v-model="from_currency"
            />
          </div>
          <div class="form-group col-md-6">
            <label>To Currency</label>
            <input
              type="text"
              placeholder="Enter Currency Symbol, eg. JPY, USD"
              class="form-control"
              v-model="to_currency"
            />
          </div>
        </div>
        <div>
          <select class="custom-select mr-sm-2" id="inlineFormCustomSelect" v-model="fxFunction">
            <option selected>Select Function ( Time )</option>
            <option value="Daily">DAILY</option>
            <option value="Weekly">WEEKLY</option>
            <option value="Monthly">MONTHLY</option>
          </select>
        </div>
        <div class="row text-center" style="margin:10px;">
          <button class="btn btn-primary" style="width:100%" v-on:click="search()">Search</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
<script>
import TimeSeries from "./../controller/TimeSeries";

export default {
  methods: {
    search: function() {
      this.loading = true;
      
      //this.isDataLoaded = this.isDataLoaded ? false : true;

      let times = new TimeSeries();
      if (this.fxFunction === "Select Function ( Time )")
      {
        alert("Please selected a function");
        this.loading = false;
        return;
      }

      times.getDailyTimeSeries(this.from_currency, this.to_currency,this.fxFunction).then(result => {
        this.data[0].values = result.values;
        this.labels = result.labels;
        this.loading = false;
        this.isDataLoaded = true;
      });

      this.$root.$emit("change_symbol",this.from_currency);
      //this.getRealTimeExchange();
      //setInterval(this.getRealTimeExchange,1000)

    },
    getRealTimeExchange : function()
    {
      let timeSeries = new TimeSeries();
      timeSeries.getRealTimeFX(this.from_currency,this.to_currency)
      .then((data)=>{
        console.log(data)
      })
    }
  },
  data() {
    return {
      loading : false,
      fxFunction: 'Select Function ( Time )',
      isDataLoaded: false,
      labels: [],
      data: [
        {
          to_currency : "",
          from_currency : "",
          name: "Details",
          chartType: "line",
          values: []
        }
      ]
    };
  }
};
</script>
<style scoped>
  #loader
  {
    margin: 0 auto;
    text-align: center;
  }
</style>