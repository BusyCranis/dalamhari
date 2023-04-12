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
            코리아국제웹영화제는 누구나 새로운 이야기를 실험할 수 있는 개방의
            장이다. <br />
            단순한 영화 콘텐츠를 넘어 크리에이터들에게 최적화된 작품을 만들고
            발표하고 즐기는 복합적인 개념의 영화제다. <br />
            코리아국제웹영화제는 허구적 인물과 플롯을 가지는 연재 형식의 영상
            콘텐츠영화제로 대중적인 이야기장 안에서 기업, 플랫폼 사업자, 개인 등
            다원적 창작 주체들의 참여하는 영화축제 공간이다. <br />
            모바일 미디어와 결합하여 지리적 이동성과 다양한 미디어 플랫폼을
            이동하며 콘텐츠를 향유하는 영화제이다. <br />
            일반적으로 영화제가 영화인만이 즐기는 영화제로 한정되지만
            코리아국제웹영화제는 크리에이터, 지역주민, 학생, 관광객이 참여하여
            능동적이고 역동적인 영화제로 방구석의 천재들이 헤엄쳐다니는 인재
            발굴의 장이다.
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

    basic.style.textAlign = "";

    console.log(basic.style);

    console.dir(basic.style);

    console.log(basic);

    console.dir(basic);
  },
};
</script>
<style>
.edxn0 {
  inherits: false;
}

.aligntext {
  text-align: "";
}
</style>
