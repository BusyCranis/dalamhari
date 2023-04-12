<template>
  <div>
    <div>
      <div>
        <div>
          <br /><br /><br /><br /><br /><br /><br />
          <div id="edxn" class="edxn0 aligntext">


1 특별상

2 베스트 특수시각효과상 ​

3 베스트 음악상

4 베스트 음악상

5 베스트 브랜드 시리즈

6 베스트 브랜드 시리즈

7 브레이브 뉴시리즈 - 특별상

8 브레이브 뉴시리즈 - 특별상

9 베스트 편집상

10 베스트 편집상

11 베스트 프로덕션 디자인상

12 베스트 프로덕션 디자인상

13 베스트 스크린플레이상

14 베스트 앙상블 캐스트

15 베스트 라이징스타

16 베스트 라이징스타

17 외국 게스트스타상

18 한국 게스트스타상​

19 베스트 촬영상

20 베스트 촬영상

21 베스트 컨셉

22 베스트 애니메이션

23 베스트 파일럿

24 베스트 호러

25 베스트다큐멘터리/리얼리티

26 베스트다큐멘터리/리얼리티

27 베스트 서스펜스스릴러

28 베스트 서스펜스스릴러

29 베스트 사이언스픽션 ​

30 베스트 사이언스픽션

31 베스트 액션

32 외국 스케치코미디상 ​ ​

33 한국 스케치코미디상

34 외국 베스트코미디상 ​

35 한국 베스트코미디상

36 외국 드라메디상 ​ ​

37 한국 드라메디상

38 외국 베스트드라마상 ​

39 한국 베스트드라마상

40 베스트 크리에이터상

41 베스트 크리에이터상

42 외국 남우조연상

43 한국 남우조연상

44 외국 여우조연상

45 한국 여우조연상

46 베스트 감독상

47 외국 남우주연상

48 한국 남우주연상

49 외국 여우주연상 ​

50 한국 여우주연상

51 대상

52 대상

 

시상 내역은 2023년 코리아국제웹영화제 기준이며, 모든 시상내역과 명칭은 영화제 사정에 따라 변경될 수 있습니다.







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
