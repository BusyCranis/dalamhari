<template>
  <v-main
    class="ma-0   pa-0"
    
    style="margin-bottom: 0px"
  >



    <v-container
      class=" setcolor   fullhgt"
      fluid
      style="margin-bottom: 0px"
    >


    <router-view
    
         class="fullhgt   setzindex"
    
    
    > </router-view>

    </v-container>




  </v-main>
</template>
<script>
export default {};
</script>


<style   scoped >
.setcolor {
  background: yellow;
}

.setzindex {
  background: white;
}


.fullhgt {




height: 100%;










}





</style>