<template>
  <section class="personal-account">
    <div class="personal-account__container">
      <AvatarBlock :user="user" :name="name" />
      <RecommendedBeer
        :beer="beer"
        :changingBeerVarietyApp="changingBeerVarietyApp"
        :onClickBeerData="onClickBeerData"
      />
    </div>
    <AboutUser :user="user" />
  </section>
</template>

<script>
import AvatarBlock from '../blocks/AvatarBlock.vue';
import RecommendedBeer from '../blocks/RecommendedBeer.vue';
import AboutUser from './AboutUser.vue';

export default {
  name: 'PersonalAccount',
  components: {
    AvatarBlock,
    RecommendedBeer,
    AboutUser,
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
  data: () => ({
    name: 'main-avatar',
  }),
};
</script>

<style scoped lang="scss">
.personal-account {
  width: 83.2vw;
  height: 65.2vh;
  margin: 0 auto 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #ffffff;
  box-shadow: -3px 4px 9px rgba(0, 0, 0, 0.25);

  &__container {
    margin: 0 43px 0 103px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

@media screen and (max-width: 915px) {
  .personal-account {
    &__container {
      margin: 10px;
    }
  }
}

@media screen and (max-width: 667px) {
  .personal-account {
    flex-direction: row;
  }
}

@media screen and (max-width: 414px) {
  .personal-account {
    height: 95%;
    flex-direction: column;

    &__container {
      margin: 10px 0 0;
    }
  }
}
</style>
