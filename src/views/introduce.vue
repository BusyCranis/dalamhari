<template>
  <div 
    id="whybartool"
    class="set101color"
    transparent
    
  
    @click="detectAction"
  
  
  
  
  >
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />

    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    
   
    




    
   






  </div>
</template>
<script>
export default {
  data() {
    return {};
  },

  methods: {


    detectAction(event) {
      event.stopPropagation();

      console.log(event.target)      
      let posXrate = event.offsetX / event.target.clientWidth
      let posYrate = event.offsetY / event.target.clientHeight

      console.log("너비비율= " + posXrate + ",  높이비율= " + posYrate)

      // if(posXrate > 0.8512195 && posYrate > 0.2340425 && posXrate < 0.9536585 && posYrate < 0.7234042) {
      //   console.log("클릭")
      // }


    },





    basicstudy() {
      let basic = document.getElementById("edxn");

      basic.style.textAlign = "";
    },
  },

  mounted() {
    // let basic = document.getElementById("edxn");
    // basic.style.inheritAttrs = false;
    // basic.classList.remove("wrapapp");
    // basic.style.textAlign = "justify";
    // console.log(basic.style);
    // console.dir(basic.style);
    // console.log(basic);
    // console.dir(basic);
  },
};
</script>
<style scoped>


.set101color {
  background-image: url("/01-2 Home-Sign Up.png");

  /* background-size: contain; */

  /*  background-size: cover; */

  /* background-size: 100% 50%; */

  background-size: 100% 100%; 

  background-position: center;

  /* background-position: top; */
}











.edxn0 {
  inherits: false;
}

.aligntext {
  text-align: "";
}
</style>
