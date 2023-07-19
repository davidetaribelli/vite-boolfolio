<script>
import AppHeader from './components/AppHeader.vue';

export default{
  data(){
    return{
    }
  },components:{
    AppHeader
  }
}
</script>

<template>

<header>
  <!-- importo AppHeader -->
  <AppHeader />
</header>
<!-- rotte -->
<router-view></router-view>

</template>

<style scoped>

</style>
