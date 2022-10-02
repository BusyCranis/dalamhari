<template>
  <div>
    <router-link :to="{ name: 'primarypage' }" class="getflex">
      <img src="@/assets/뒤로가기.png" class="backbtn" />
    </router-link>
  </div>
</template>
<script>
export default {};
</script>
<style>
.backbtn {
  max-height: 50px;

  max-width: 50px;
}

.getflex {
  display: flex;

  align-items: flex-start;
}
</style>