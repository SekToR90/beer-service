<template>
  <md-avatar class="md-primary avatar" :class="name">
    <img
      class="avatar-img"
      :src="user.avatar"
      alt="Avatar"
      @load="avatarImg()"
      @error="errorImg()"
      v-if="error === false"
    />
    <img
      class="avatar-img"
      src="../assets/sync_problem_black.svg"
      alt="Avatar-error"
      v-else-if="error === true"
    />
  </md-avatar>
</template>

<script>
export default {
  name: 'AvatarBlock',
  props: {
    user: {
      type: Object,
      default: () => ({}),
    },
    name: String,
  },
  data: () => ({
    error: false,
  }),
  methods: {
    errorImg() {
      this.error = true;
    },
    avatarImg() {
      this.error = false;
    },
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

@media screen and (max-width: 915px) {
  .main-avatar {
    width: 130px;
    height: 130px;
  }
}

@media screen and (max-width: 896px) {
  .main-avatar {
    width: 150px;
    height: 150px;
  }
}

@media screen and (max-width: 740px) {
  .main-avatar {
    width: 120px;
    height: 120px;
  }
}

@media screen and (max-width: 380px) {
  .main-avatar {
    width: 150px;
    height: 150px;
  }
}
</style>
