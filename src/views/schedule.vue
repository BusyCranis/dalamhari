<template>
  <div>
    <div>
      <div>
        <div>
          <br /><br /><br /><br /><br /><br /><br />
          <div id="edxn" class="edxn0 aligntext">
            행사일정 <br />

            8월 17일(목) 12:00~21:00 <br />

            8월 18일(금) 08:30~18:30 (휴식시간: 12:00~13:00) <br />

            8월 19일(토) 08:30~19:30 (휴식시간: 12:00~13:00) <br />

            장소 <br />

            밀리토피아호텔 그랜드볼륨
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
