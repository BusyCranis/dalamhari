<template>
  <div>
    <div>
      <div>
        <div>
          <br /><br /><br /><br /><br /><br /><br />
          <div id="edxn" class="edxn0 aligntext">

웹드라마 전문 코리아국제웹영화제는 10분 내외의 짧은 에피소드로 구성된 동영상 시리즈로 스마트폰 등의 모바일 기기를 통해 이동하면서 감상하는 디지털 맞춤형 콘텐츠이다.

시청자들이 부담 없이 즐길 수 있고 유튜브 등의 SNS를 통해 빠르게 전파되는 특징을 가지 있다.

드라마, 영화, 코미디, 음악, 광고 등 다양한 장르의 웹시리즈를 방영되고 있다.

해외로 각 나라별 영화제를 개최하여 대중화 된 콘텐츠로 부상하고 있는 새로운 문화아이콘으로 자리잡고 있다.

 

출품 일정

2023년 04월 26일(수)부터 2023년 06월 16일(금) 17시까지 /

* 대한민국 시간 기준 [GMT +9:00]



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
