<template>
  <div>
    <div>
      <div>
        <div>
          <br /><br /><br /><br /><br />
          <!-- <br /> -->
          <!-- <br /> -->

          <div id="edxn" class="edxn0 aligntext">
            클라우드 디지털 저작권 플랫폼은 콘텐츠 크리에이터가 디지털 권리를
            관리하고 지적 재산을 보호할 수 있는 안전하고 효율적인 방법을
            제공하는 온라인 서비스입니다.<br />

            클라우드 디지털 저작권 플랫폼은 다음과 같은 다양한 기능을
            제공합니다.<br />

            1, 저작권 등록<br />

            클라우드 디지털 저작권 플랫폼에 자신의 작품을 등록하여 소유권 및
            저작권 상태에 대한 기록을 저장합니다.<br />

            2, 모니터링 및 집행<br />

            플랫폼은 자동화된 도구를 사용하여 등록된 저작물의 무단 사용 사례를
            인터넷에서 모니터링합니다.<br />

            위반이 감지되면 플랫폼은 사용 중지 통지를 보내거나 게시 중단 요청을
            제출하는 등의 조치를 취합니다.<br />

            3, 라이선스 및 로열티<br />

            크리에이터는 플랫폼을 사용하여 다른 사람이 자신의 작품을 사용할 수
            있도록 라이선스를 부여하고 모든 사용에 대해 로열티를 받을 수
            있습니다.<br />

            3, 법률 지원<br />

            플랫폼은 저작권 침해자에 대해 법적 조치를 취해야 하는 크리에이터에게
            법률 지원을 제공합니다.<br />

            4, 교육 및 리소스<br />

            플랫폼은 크리에이터가 자신의 권리와 권리를 보호하는 방법을 이해하는
            데 도움이 되는 교육 리소스를 제공하며, 업계 뉴스와 모범 사례를
            제공합니다.<br />

            클라우드 디지털 저작권 플랫폼은 콘텐츠 제작자가 콘텐츠 사용을
            통제하기 어려운 디지털 세상에서 지적 재산을 보호하고 작품으로 수익을
            창출하는 데 도움을 줍니다.
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
