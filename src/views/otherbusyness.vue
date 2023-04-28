<template>
  <div>
    <div>
      <div>
        <div>
          <br /><br /><br /><br /><br />
          <!-- <br /> -->
          <!-- <br /> -->

          <div id="edxn" class="edxn0 aligntext">
            디지털저작권재단 설립 목적과 활동<br /><br />

            디지털저작권재단은 크리에이터의 권리를 보호하고 지적 재산의 가치를
            증진하는 것을 목적으로 설립되었다.<br />
            또한 개인이 표현의 자유, 개인정보 보호, 정보 접근에 대한 권리를
            행사할 수 있는 안전하고 개방적인 인터넷을 만드는 것을 목표로
            디지털저작권재단은 아래와 같은 활동을 한다.<br /><br />

            <!-- <br /> -->

            1. 저작권인식개선(Copyright Awareness )<br />
            디지털저작권재단은 저작권법과 창작자 권리 존중의 중요성에 대한
            인식개선을 위한 홍보, 교육활동을 한다.<br />
            저작권이 어떻게 작동하는지, 무엇이 저작권 침해에 해당하는지, 개인이
            저작권이 있는 저작물을 사용하려면 어떻게 해야 하는지에 대한 정보를
            제공한다.<br /><br />

            2. 크리에이터의 권리를 보호(Protecting creator rights)<br />
            디지털저작권재단은 저작권법을 집행하고 저작권을 침해하는 경우 법적
            조치를 취함으로써 창작자의 권리를 보호한다.<br />
            침해자에 대한 법적 조치를 취하고 권리를 침해당한 크리에이터에게 법률
            지원을 제공한다.<br /><br />

            3. 저작권 선도(Leading the way in copyright)<br />
            디지털저작권재단은 크리에이터의 요구와 변화하는 디지털 환경을
            반영하는 저작권 개혁을 능동적으로 대처한다.<br />
            저작권 보호 강화, 공정 사용권 옹호, 저작권 문제에 대한 국제 협력
            역할을 한다.<br /><br />

            4. 리소스 및 교육 프로그램 지원(Support resources and educational
            programs)<br />
            디지털저작권재단은 저작권 등록, 라이선스 및 집행에 관한 정보를
            포함하여 크리에이터에게 리소스를 지원한다.<br />
            크리에이터가 자신의 권리를 보호하고 저작권의 복잡한 법적 환경을
            탐색하는 데 도움이 되는 교육 자료와 교육 프로그램을 제공한다.
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
