<template>
  <div>
    <Header />
    <div class="container">
      <div class="nav-wrapper" v-if="false">
        <Nav />
      </div>
      <CurrencyPairTrend style="margin:0 auto"/>

    </div>
  </div>
</template>

<script>
    import Header from "./../components/MainHeader";
    import Nav from "./../components/Nav";
    import CurrencyPairTrend from "./../components/CurrencyPairTrend"

    export default {
    components: { Header, Nav,CurrencyPairTrend}
    };

</script>

<style scoped>
    .nav-wrapper {
        margin-top: 20px;
        overflow-x: scroll;
    }
</style>