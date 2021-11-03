<template>
  <!-- <v-container> -->
    <div>
      <div>Dashboard</div>
      <TableRequestMPP></TableRequestMPP>
      <HelloWorld msg="Hello World"></HelloWorld>
    </div>
  <!-- </v-container> -->
</template>

<script>
import TableRequestMPP from '../components/core/TableRequestMPP.vue'
import HelloWorld from '../components/HelloWorld.vue'

export default {
  name:"Dashboard",
  components:{
    TableRequestMPP,
    HelloWorld
  },
}
</script>

<style scoped>

</style>