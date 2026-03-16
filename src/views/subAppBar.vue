<template>
  <div>
    <router-link :to="parentPath" class="getflex">
      <img src="@/assets/뒤로가기.png" class="backbtn" />
    </router-link>
  </div>
</template>
<script>
export default {
  computed: {
    parentPath() {
      // "/introduce/detail/ledger" => "/introduce"
      // "/schedule/detail/info" => "/schedule"
      const segments = this.$route.path.split("/").filter(Boolean);
      if (segments.length >= 1) {
        return "/" + segments[0];
      }
      return "/";
    },
  },
};
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
