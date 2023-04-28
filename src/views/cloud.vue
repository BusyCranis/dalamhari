<template>
  <div>
    <div>
      <div>
        <div>
          <br /><br /><br /><br /><br />
          <!-- <br /> -->
          <!-- <br /> -->

          <div id="edxn" class="edxn0 aligntext">
        
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },

  methods: {
    basicstudy() {
      let basic = document.getElementById("edxn");

      basic.style.textAlign = "";
    },
  },

  mounted() {
    let basic = document.getElementById("edxn");

    basic.style.inheritAttrs = false;

    basic.classList.remove("wrapapp");

    basic.style.textAlign = "justify";

    console.log(basic.style);

    console.dir(basic.style);

    console.log(basic);

    console.dir(basic);
  },
};
</script>
<style scoped>
.edxn0 {
  inherits: false;
}

.aligntext {
  text-align: "";
}
</style>
