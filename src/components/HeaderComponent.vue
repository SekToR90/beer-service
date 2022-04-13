<template>
  <header class="header">
    <NavRouter />
    <AvatarBlock :user="user" :name="name" />
  </header>
</template>

<script>
import AvatarBlock from "../blocks/AvatarBlock.vue";
import NavRouter from "../blocks/NavRouter.vue";

export default {
  name: "HeaderComponent",
  components: {
    AvatarBlock,
    NavRouter,
  },
  props: {
    user: {
      type: Object,
      default: () => ({}),
    },
  },
  data: () => ({
    name: "header-avatar",
  }),
};
</script>

<style scoped lang="scss">
.header {
  width: 100%;
  height: 62px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 12px 0 66px;
}
</style>
