<template>
  <main class="main">
    <PersonalAccount
      :user="user"
      :beer="beer"
      :onClickBeerData="onClickBeerData"
      :changingBeerVarietyApp="changingBeerVarietyApp"
    />
  </main>
</template>

<script>
import PersonalAccount from './PersonalAccount.vue';

export default {
  name: 'MainComponent',
  components: {
    PersonalAccount,
  },
  props: {
    changingBeerVarietyApp: Function,
    onClickBeerData: Function,
    user: {
      type: Object,
      default: () => ({}),
    },
    beer: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style scoped lang="scss">
$headerHeight: 62px;
$mainHeight: calc(100vh - $headerHeight);

.main {
  width: 100%;
  height: $mainHeight;
  padding-top: 93px;
  background: linear-gradient(
    180deg,
    #dae3ed 0%,
    rgba(219, 219, 219, 0.83) 56.77%,
    rgba(247, 249, 252, 0.95) 100%
  );
}

@media screen and (max-width: 915px) {
  .main {
    padding-top: 50px;
  }
}
</style>
