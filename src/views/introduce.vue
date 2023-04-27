<template>
  <div>
    <div>
      <div>
        <div>
          <br /><br /><br /><br /><br /><br /><br />
          <!-- <br />
          <br />
          <br />
          <br /> -->

          <div id="edxn" class="edxn0 aligntext">
            "연극"으로 분류되는 저작권은 공연 예술의 한 분야로서, 연극 작품의
            제작자가 작품을 창작하고 발표하는 과정에서 발생하는 저작권을
            말합니다.<br />
            이에 따라 연극 작품은 국내외에서 상연되는 경우, 해당 작품의 저작권
            보호와 관리가 필요합니다.<br />

            연극 작품의 저작권은 저작물의 창작자가 보유하게 되며, 연극 작품의
            공연, 재생, 복제 등을 할 때에는 해당 저작물의 저작자로부터 사용
            허락을 받아야 합니다.<br />
            이때 연극 작품의 저작권자는 작품의 공연, 재생, 복제 등을 허락하거나
            제한하는 권리를 가지게 됩니다.<br />

            우리 기관은 국내 연극 작품의 발전과 발전 가능성을 높이기 위해, 연극
            작품의 저작권 보호와 관련된 다양한 프로그램을 계속적으로 제공하며,
            이를 통해 국내외에서 인정받는 연극 작품을 만들어나가는데
            앞장서겠습니다.
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
