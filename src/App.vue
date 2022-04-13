<template>
  <div id="app">
    <HeaderComponent :user="user" />
    <MainComponent
      :user="user"
      :beer="beer"
      :changingBeerVarietyApp="changingBeerVarietyApp"
      :onClickBeerData="onClickBeerData"
    />
    <template v-if="openBeerDataPopup === true">
      <BeerDataPopup :beer="beer" :onCloseBeerPopup="onCloseBeerPopup" />
    </template>
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue';
import BeerDataPopup from './components/BeerDataPopup.vue';
import { getBeer, getUser } from './api';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    MainComponent,
    BeerDataPopup,
  },
  data: () => ({
    user: {},
    beer: {},
    openBeerDataPopup: false,
  }),
  methods: {
    async changingBeerVarietyApp() {
      this.beer = await getBeer();
    },
    onClickBeerData() {
      this.openBeerDataPopup = true;
    },
    onCloseBeerPopup() {
      this.openBeerDataPopup = false;
    },
  },
  async mounted() {
    this.user = await getUser();
    this.beer = await getBeer();
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
