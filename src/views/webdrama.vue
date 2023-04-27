<template>
  <div>
    <div>
      <div>
        <div>
          <br /><br /><br /><br /><br /><br /><br />
          <div id="edxn" class="edxn0 aligntext">
            안녕하세요.<br />

            저희 기관은 대한민국 내 모든 디지털 저작물의 저작권을 관리하고,
            심사하는 역할을 맡고 있습니다.<br />

            이를 통해 저작권자들의 권리를 보호하고, 저작물 이용자들도 합법적인
            방법으로 이용할 수 있도록 지원하고 있습니다.<br />

            우리 기관은 저작권 관리에 있어서 엄격한 기준을 지키며, 저작물 사용에
            대한 심사를 신속하게 처리하고 있습니다.<br />

            따라서 저작물 이용자들은 합법적인 방법으로 이용할 수 있으며,
            저작권자들은 자신의 권리를 보호받을 수 있습니다.<br />

            또한, 저희 기관은 다양한 교육 및 정보 제공을 통해 저작권에 대한
            이해와 적법한 이용 방법에 대한 지식을 제공하고 있습니다.<br />

            이를 통해 저작물 이용자들과 저작권자들 모두가 서로의 권리와 의무를
            존중하며, 상호 협력적인 관계를 유지할 수 있도록 노력하고
            있습니다.<br />

            저희 기관은 대한민국의 디지털 저작권 관리와 보호를 위해 최선을
            다하겠습니다.<br />

            감사합니다.
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
<style></style>
