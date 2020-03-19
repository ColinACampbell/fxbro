<template>
  <div>
    <div>
      <vue-frappe
        id="test"
        :labels="this.labels"
        title="Forex History"
        type="line"
        :height="350"
        :colors="['purple', '#ffa3ef', 'light-blue']"
        :dataSets="this.data"
      v-if="isDataLoaded"></vue-frappe>

      <div class="currency-form">
        <div class="row" style="margin-top:30px;">
          <div class="form-group col-md-6">
            <label for="inputEmail4">From Currency</label>
            <input
              type="text"
              placeholder="Enter Currency Symbol, eg. EUR, CAD"
              class="form-control col-lg-12"
              id="inputEmail4"
            />
          </div>
          <div class="form-group col-md-6">
            <label for="inputPassword4">To Currency</label>
            <input
              type="text"
              placeholder="Enter Currency Symbol, eg. JPY, USD"
              class="form-control"
              id="inputPassword4"
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
      let times = new TimeSeries();
      times.getDailyTimeSeries("JPY", "USD",this.fxFunction).then(result => {
        this.data[0].values = result.values;
        this.labels = result.labels;
        this.isDataLoaded = true;
        console.log(this.fxFunction);
      });
    }
  },
  data() {
    return {
      fxFunction: '',
      isDataLoaded: false,
      labels: [],
      data: [
        {
          name: "Details",
          chartType: "line",
          values: []
        }
      ]
    };
  }
};
</script>