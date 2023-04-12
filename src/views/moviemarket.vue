<template>
  <div>
    <div>
      <div>
        <div>
          <br /><br /><br /><br /><br /><br /><br />
          <div id="edxn" class="edxn0 aligntext">

행사안내

 

8월 17일(목) 12:00~21:00

8월 18일(금) 08:30~18:30

8월 19일(토) 08:30~19:30

movie market

movie market는 웹시리즈 영화 중심의 산업 행사로 영화산업 관계자의 B2B 네트워킹을 강화한다.

프로젝트의 제작, 투자, 배급 나아가 해외 세일즈까지 가능할 수 있도록 다양한 산업 분야의 비즈니스 미팅을 지원

 

 

movie market 미팅 대상 프로젝트 및 작품

 

코리아국제웹영화제 2023 선정작

 

프로젝트: 넥스트 에디션 피칭 진출작

코리아국제웹영화제 경쟁 및 코리아국제웹영화제 선정작

영상위원회 대학교 영상학과와 협업 프로젝트

 

※ 참가 프로젝트는 변동될 수 있음







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
