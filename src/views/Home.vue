<template>
  <div>
    <section id="hero">
      <v-parallax height="560" class="parallaximage">
        <v-row align="center" justify="center">
          <v-col cols="12">
            <v-row align="center" justify="center">
              <v-col cols="12">
                <!-- md="6" xl="8" -->
                <br /><br /><br /><br />
                <h1 class="display-2 font-weight-bold mb-4 hhe1">
                
                </h1>
                <br /><br />
                <h4 class="font-weight-light hhe1 hhe2">
           
                </h4>
                <br /><br /><br />
                <v-btn class="frontpage" @click="agree"    outlined>
                  <h4 class="btncolor"> 가입하기 </h4>
                </v-btn>
       
              </v-col>
          
            </v-row>
          </v-col>
        </v-row>
        <div class="svg-border-waves text-white">
          <v-img src="@/assets/img/borderWaves.svg" />
        </div>
      </v-parallax>
      <v-container fluid id="features" class="mt-2">
        <v-row align="center" justify="center">
          <v-col cols="12">
            <v-row align="center" justify="space-around">
         
              <v-col
                cols="12"
                sm="4"
                class="text-center"
                v-for="(feature, i) in features"
                :key="i"
              >
                <v-hover v-slot:default="{ hover }">
                  <v-card
                    class="card"
                    shaped
                    :elevation="hover ? 10 : 4"
                    :class="{ up: hover }"
                  >
                    <v-img
                      :src="feature.img"
                      max-width="100px"
                      class="d-block ml-auto mr-auto"
                      :class="{ 'zoom-efect': hover }"
                    ></v-img>
                    <h1 class="font-weight-regular">{{ feature.title }}</h1>
                    <h4 class="font-weight-regular subtitle-1">
                      {{ feature.text }}
                    </h4>
                  </v-card>
                </v-hover>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
      <v-dialog v-model="dialog" max-width="640px">
        <v-card>
          <youtube
            :video-id="videoId"
            @ready="ready"
            @playing="playing"
          ></youtube>
        </v-card>
      </v-dialog>
      <div class="svg-border-waves">
        <img src="~@/assets/img/wave2.svg" />
      </div>
    </section>
  </div>
</template>

<script>
// import axios from "axios";
import { ValidationProvider } from "vee-validate";

export default {
  name: "Home",
  components: {
    ValidationProvider,
  },

  data() {
    return {
      dialog: false,
      videoId: "i8IvvHJssWE",
    
    };
  },

  watch: {
    dialog(value) {
      if (!value) {
        this.pause();
      }
    },
  },

  methods: {
    agree() {
      this.$router.push({ name: "primarypage" });
    },

    ready(event) {
      this.player = event.target;
    },
    playing(event) {
     
    },
    change() {
     
      this.videoId = "another video id";
    },
    stop() {
      this.player.stopVideo();
    },
    pause() {
      this.player.pauseVideo();
    },
  },
};
</script>

<style lang="scss">
.circle {
  stroke: white;
  stroke-dasharray: 650;
  stroke-dashoffset: 650;
  -webkit-transition: all 0.5s ease-in-out;
  opacity: 0.3;
}

.playBut {
  /*  border: 1px solid red;*/
  display: inline-block;
  -webkit-transition: all 0.5s ease;

  .triangle {
    -webkit-transition: all 0.7s ease-in-out;
    stroke-dasharray: 240;
    stroke-dashoffset: 480;
    stroke: white;
    transform: translateY(0);
  }

  &:hover {
    .triangle {
      stroke-dashoffset: 0;
      opacity: 1;
      stroke: white;
      animation: nudge 0.7s ease-in-out;

      @keyframes nudge {
        0% {
          transform: translateX(0);
        }
        30% {
          transform: translateX(-5px);
        }
        50% {
          transform: translateX(5px);
        }
        70% {
          transform: translateX(-2px);
        }
        100% {
          transform: translateX(0);
        }
      }
    }

    .circle {
      stroke-dashoffset: 0;
      opacity: 1;
    }
  }
}
</style>

<style>
.hhe1 {
  /* color: rgb(96, 29, 0) */

  color: black;
}

.hhe2 {
  font-weight: 550;
}

.parallaximage {
  transform: none;
  /* background: transparent; */
  background-image: url(../assets/img/Frame22.png);
  background-size: cover;
  width: 100%;
}

.frontpage {
  /* background-color: transparent; */
  /* color: rgb(215, 0, 64) */
  border: medium solid rgb(255, 35, 64);
  /* border: rgb(215, 0, 64) */
}

.btncolor {
  /* color: thin solid red; */
  color: rgb(255, 0, 76);
  /* font-weight: 550 */
}

.btn-play {
  transition: 0.2s;
}

.svg-border-waves .v-image {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3rem;
  width: 100%;
  overflow: hidden;
}

#hero {
  z-index: 0;
}
.svg-border-waves img {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  margin-bottom: -2px;
  z-index: -1;
}

.card {
  min-height: 300px;
  padding: 10px;
  transition: 0.5s ease-out;
}

.card .v-image {
  margin-bottom: 15px;
  transition: 0.75s;
}

.card h1 {
  margin-bottom: 10px;
}

.zoom-efect {
  transform: scale(1.1);
}

.up {
  transform: translateY(-20px);
  transition: 0.5s ease-out;
}
</style>

<style>
section {
  position: relative;
}
</style>
