<template>
  <div>
    <div>
      <div>
        <div>
          <br /><br /><br /><br /><br />
          <!-- <br /> -->
          <!-- <br /> -->

          <div id="edxn" class="edxn0 aligntext">
            디지털 자산 감정 플랫폼은 디지털 자산을 구매, 판매, 평가할 수 있는
            마켓플레이스를 제공하는 온라인 서비스입니다.<br />

            이러한 자산에는 암호화폐, 디지털 아트, 도메인 이름 및 기타 가치를
            지닌 디지털 아이템이 포함합니다.<br />

            디지털 자산 감정 플랫폼은 다음과 같은 다양한 기능을 제공합니다.<br />

            1, 가치 평가 도구<br />

            플랫폼은 사용자가 시장 동향과 과거 데이터를 기반으로 디지털 자산의
            가치를 평가하는 데 도움이 되는 도구와 알고리즘을 제공합니다.<br />

            2, 마켓플레이스<br />

            플랫폼은 사용자가 디지털 자산을 사고 팔 수 있는 마켓플레이스를
            제공합니다. 플랫폼은 안전한 거래를 보장하기 위해 중개자 역할을
            합니다.<br />

            3, 에스크로 서비스<br />

            플랫폼은 자산을 보관하고 있다가 거래 조건이 충족될때 에스크로
            서비스를 제공하여 구매자와 판매자를 보호합니다.<br />

            4, 보안<br />

            플랫폼은 사용자의 자산과 데이터를 보호하기 위해 암호화 및 여러 단계
            인증을 포함한 강력한 보안 기능을 갖추고 있어 사용자를 보호합니다.<br />

            5, 지원 및 교육<br />

            플랫폼은 사용자가 디지털 자산 시장을 이해하고 정보에 입각한 결정을
            내리는 데 도움이 되는 교육 리소스를 제공합니다.<br />

            전반적으로 디지털 자산 감정 플랫폼은 안전하고 효율적인 방식으로
            디지털 자산을 구매, 판매 또는 가치 평가하려는 사람들에게 가치 있는
            서비스를 제공합니다.<br />

            또한 사용자가 자산을 평가하고 거래 전반에 걸쳐 자산이 보호하여
            안심하게 구매, 판매할 수 있는 마켓플레이스에 접근할 수 있도록
            도와줍니다.
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
