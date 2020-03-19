<template>
  <div>
    <div>

      <div class="header">
        <div>
            <h1 class="title"> FX<span class="bro">Bro</span> {{ symbol.toUpperCase() }} </h1>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
export default {
  mounted : function()
  {
    this.$root.$on('change_symbol',(data)=>{
      this.symbol = "- " + data;
    })
  },
  data : function()
  {
    return {
      symbol : ''
    }
  }
};
</script>
<style scoped>

    .header {
        background-color: #5d9cec;
        color: white;
        width: 100%;
        height: 70px;
    }

    .title
    {
        position: relative;
        left:50px;
        top:10px;
        width: 300px;
    }

    .bro
    {
        color:#48CFAD
    }
</style>