<template>
  <div id="why0bartool" class="set101color" transparent @click.self="checkStuff">
    <!-- <input id="nameinput" style="display: none" />
    <input id="emailinput" style="display: none" />
    <br />
    <input id="passwordinput" style="display: none" />
    <br />
    <div id="identityinput" style="display: none" class="somerate">
    </div>
    <input id="activebox" style="display: none" type="checkbox" /> -->
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
    return {
      nameinput: null,
      emailinput: null,
      passwordinput: null,
      identityinput: null,
      specselection: null,
      innermenu: null,
      innertemplate: null,
      innerlist: null,
      activebox: null,
      why0bartool: null
    };
  },

  methods: {

    setAllElement(callback) {
      this.why0bartool = document.getElementById("why0bartool")

      console.log(this.why0bartool);

      this.nameinput = document.getElementById("nameinput");
      console.log(this.nameinput);

      this.emailinput = document.getElementById("emailinput");
      console.log(this.emailinput);

      this.passwordinput = document.getElementById("passwordinput");
      console.log(this.passwordinput);

      this.identityinput = document.getElementById("identityinput");
      console.log(this.identityinput);

      this.specselection = document.getElementById("specselection");

      console.log(this.specselection);
      console.log(this.specselection.textContent);

      this.innermenu = document.getElementById("innermenu")

      console.log(this.innermenu);

      this.activebox = document.getElementById("activebox")

      console.log(this.activebox);


      callback()
    },



    getDetection(callback) {
      console.log(this.why0bartool);
      console.log(this.identityinput);

      this.nameinput.style.transform = `translate3d( ${this.why0bartool.clientWidth * 0.2975609756
        }px, ${this.why0bartool.clientHeight * 0.298}px, 0 )`;

      this.emailinput.style.transform = `translate3d( ${this.why0bartool.clientWidth * 0.2975609756 - 167
        }px, ${this.why0bartool.clientHeight * 0.3605416666}px, 0 )`;

      this.passwordinput.style.transform = `translate3d( ${this.why0bartool.clientWidth * 0.2975609756
        }px, ${this.why0bartool.clientHeight * 0.3981666666}px, 0 )`;

      this.identityinput.style.transform = `translate3d( ${this.why0bartool.clientWidth * 0.2975609756}px, ${this.why0bartool.clientHeight * 0.43935365853658536}px, 0 )`;

      this.activebox.style.transform = `translate3d( ${this.why0bartool.clientWidth * 0.2910609756}px, ${this.why0bartool.clientHeight * 0.5975}px, 0 )`


      this.nameinput.style.display = "";
      this.emailinput.style.display = "";
      this.passwordinput.style.display = "";
      this.identityinput.style.display = "";
      this.activebox.style.display = "";


      console.log(this.passwordinput);


      if (typeof callback == "function") {
        callback()
      }


    },

    detectAction(event) {
      event.stopPropagation();

      console.log(event.target);
      let posXrate = event.offsetX / event.target.clientWidth;
      let posYrate = event.offsetY / event.target.clientHeight;

      console.log("너비비율= " + posXrate + ",  높이비율= " + posYrate);

      console.log(this.identityinput);

      // if(posXrate > 0.8512195 && posYrate > 0.2340425 && posXrate < 0.9536585 && posYrate < 0.7234042) {
      //   console.log("클릭")
      // }
      // "너비비율= 0.2951219512195122,  높이비율= 0.6773255813953488"

      this.nameinput.style.transform = `translate3d( ${event.target.clientWidth * 0.2975609756
        }px, ${event.target.clientHeight * 0.298}px, 0 )`;

      this.emailinput.style.transform = `translate3d( ${event.target.clientWidth * 0.2975609756 - 167
        }px, ${event.target.clientHeight * 0.3605416666}px, 0 )`;

      this.passwordinput.style.transform = `translate3d( ${event.target.clientWidth * 0.2975609756
        }px, ${event.target.clientHeight * 0.3981666666}px, 0 )`;

      this.identityinput.style.transform = `translate3d( ${event.target.clientWidth * 0.2975609756}px, ${event.target.clientHeight * 0.43935365853658536}px, 0 )`;

      this.activebox.style.transform = `translate3d( ${event.target.clientWidth * 0.2910609756}px, ${event.target.clientHeight * 0.5975}px, 0 )`

      this.nameinput.style.display = "";
      this.emailinput.style.display = "";
      this.passwordinput.style.display = "";
      this.identityinput.style.display = "";
      this.activebox.style.display = "";

      console.log(this.passwordinput);
    },



    selectValue(event) {
      event.stopPropagation();

      console.log(event.target);
      console.dir(event.target);
      console.log(event.target.innerText);

      this.specselection.textContent = event.target.innerText;
    },

    checkStuff(event) {
      event.stopPropagation();

      console.log(event.target);
      let posXrate = event.offsetX / event.target.clientWidth;
      let posYrate = event.offsetY / event.target.clientHeight;

      console.log("너비비율= " + posXrate + ",  높이비율= " + posYrate);

      // "너비비율= 0.43658536585365854,  높이비율= 0.5711382113821138"

      // "너비비율= 0.5463414634146342,  높이비율= 0.608739837398374"


      if (posXrate > 0.43658536585365854 && posYrate > 0.5711382113821138 && posXrate < 0.5463414634146342 && posYrate < 0.608739837398374) {
        console.log("클릭")
        this.$router.push({ name: "moviemarket" });
      }

      // if (posXrate > 0.5707317073170731 && posYrate > 0.7723577235772358 && posXrate < 0.6121951219512195 && posYrate < 0.782520325203252) {
      //   console.log("클릭")
      //   this.$router.push({ name: "shortabout" });
      // }




    },

    basicstudy() {
      let basic = document.getElementById("edxn");

      basic.style.textAlign = "";
    },
  },

  mounted() {
    this.setAllElement(() => {
      this.getDetection(() => {
        setTimeout(this.getDetection(() => {
          setInterval(
            this.getDetection, 100)
        }), 50);
      })
    })






  },
};
</script>
<style scoped>
.set101color {
  background-image: url("/01-4 Home-logined.png");

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

.somerate {
  width: 37.5%;
}

.menusize {

  max-width: 100%;

}

.v-menu__content {


  max-width: 40%;



}


.spacetext {

  max-height: 25px;


}
</style>
