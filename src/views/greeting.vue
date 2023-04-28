<template>
  <div>
    <div>
      <div>
        <div>
          <br /><br /><br /><br /><br />
          <!-- <br /> -->
          <!-- <br /> -->

          <div id="edxn" class="edxn0 aligntext">
            안녕하세요.<br />

            반갑습니다.<br />

            우리는 디지털 시대를 살아가고 있습니다.<br />

            인터넷으로 음악, 영화 등 저작권자의 동의 없이 저각물들을 손쉽게
            이용하여 왔습니다.<br />

            디지털 세상으로 전환은 우리 삶에 양적, 질적 변화를
            주도하였습니다.<br />

            하지만 저작권자의 권리침해로 인하여 많은 문제가 제기되었습니다.<br />

            이런 문제를 해결하기 위해 삼진아웃제를 도입하여 인터넷에서
            불법적이용자의 계정을 정지시킬 수 있는 법규를 마련하였으나 기본권
            침해로 위헌 소지의 논쟁이 일기도 하였습니다.<br />

            디지털저작권재단 디지털 시대에서 다수가 폭넓게 이용할 수 있도록
            저작물의 활발한 유통을 통해 저작권자와 이용자를 고려한 법 규정, 제도
            또는 정책을 마련하는 목표로 설립되었습니다.<br />

            디지털 자산 감정 Platform, 클라우드 디지털 저작권 Platform, 복지
            디지털 자산 확장 서비스 Platform, 디자털 자산 연계 Platform을 통해
            빅데이터·AI 기반 공공 서비스 개발, 디지털 역량 강화 교육, 디지털
            약자와의 동행, 어르신 일대일 맞춤형 교육, 스마트 로봇을 활용한
            교육과 정서 케어, 디지털 혁신기업이 글로벌기업으로 성장에 이르기까지
            디지털 생태계를 선도해 나가겠습니다.
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
