<template>
  <md-avatar class="md-primary avatar" v-bind:class="name">
    <img class="avatar-img" :src="user.avatar" alt="Avatar" />
  </md-avatar>
</template>

<script>
export default {
  name: "AvatarBlock",
  props: {
    user: {
      type: Object,
      default: () => ({}),
    },
    name: String,
  },
};
</script>

<style scoped lang="scss">
.avatar {
  margin: 0;

  &-img {
    text-align: center;
  }
}

.main-avatar {
  width: 250px;
  height: 250px;
  border-radius: 50%;
}
</style>
