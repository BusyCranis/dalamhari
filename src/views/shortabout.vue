<template>
  <div>
    <div>
      <div>
        <div>
          <br /><br /><br /><br /><br /><br /><br />
          <div id="edxn" class="edxn0 aligntext">
            2023년 코리아국제웹영화제 프로젝트 <br />
            2023년 코리아국제웹영화제는 모든 웹시리즈 장르, 모든 포맷이 융합된
            영상콘텐츠를 지원한다. <br />
            웹시리즈 영화산업의 전문성을 확고히 하고 문화콘텐츠 산업의
            웹영화제의 정체성을 확고히 하고자 한다. <br />
            코리아국제웹영화제는 국내뿐만 아니라 우수한 해외영화가 국내에 배급될
            수 있는 기회를 확대하고 한국 영상콘텐츠가 해외에 진출하는 발판이
            되는 역할을 함께 수행한다. <br />
            이를 통해 독창적이고 기획력 있는 영상 프로젝트와 신진 작가를
            발굴하고 지원한다.
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
