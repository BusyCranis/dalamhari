<template>
  <div>
    <div>
      <div>
        <div>
          <br /><br /><br /><br /><br /><br /><br />
          <div id="edxn" class="edxn0 aligntext">
            1 특별상 <br />

            2 베스트 특수시각효과상 ​ <br />

            3 베스트 음악상 <br />

            4 베스트 음악상 <br />

            5 베스트 브랜드 시리즈 <br />

            6 베스트 브랜드 시리즈 <br />

            7 브레이브 뉴시리즈 - 특별상<br />

            8 브레이브 뉴시리즈 - 특별상<br />

            9 베스트 편집상<br />

            10 베스트 편집상<br />

            11 베스트 프로덕션 디자인상<br />

            12 베스트 프로덕션 디자인상<br />

            13 베스트 스크린플레이상<br />

            14 베스트 앙상블 캐스트<br />

            15 베스트 라이징스타<br />

            16 베스트 라이징스타<br />

            17 외국 게스트스타상<br />

            18 한국 게스트스타상​<br />

            19 베스트 촬영상<br />

            20 베스트 촬영상<br />

            21 베스트 컨셉<br />

            22 베스트 애니메이션<br />

            23 베스트 파일럿<br />

            24 베스트 호러<br />

            25 베스트다큐멘터리/리얼리티<br />

            26 베스트다큐멘터리/리얼리티<br />

            27 베스트 서스펜스스릴러<br />

            28 베스트 서스펜스스릴러<br />

            29 베스트 사이언스픽션 ​<br />

            30 베스트 사이언스픽션<br />

            31 베스트 액션<br />

            32 외국 스케치코미디상 ​ ​<br />

            33 한국 스케치코미디상<br />

            34 외국 베스트코미디상 ​<br />

            35 한국 베스트코미디상<br />

            36 외국 드라메디상 ​ ​<br />

            37 한국 드라메디상<br />

            38 외국 베스트드라마상 ​<br />

            39 한국 베스트드라마상<br />

            40 베스트 크리에이터상<br />

            41 베스트 크리에이터상<br />

            42 외국 남우조연상<br />

            43 한국 남우조연상<br />

            44 외국 여우조연상<br />

            45 한국 여우조연상<br />

            46 베스트 감독상<br />

            47 외국 남우주연상<br />

            48 한국 남우주연상<br />

            49 외국 여우주연상 ​<br />

            50 한국 여우주연상<br />

            51 대상<br />

            52 대상 <br />

            시상 내역은 2023년 코리아국제웹영화제 기준이며, 모든 시상내역과
            명칭은 영화제 사정에 따라 변경될 수 있습니다.
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
