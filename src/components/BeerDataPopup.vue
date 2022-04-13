<template>
  <div class="popup-background">
    <div class="popup-container">
      <md-button
        class="md-fab md-mini md-primary button-close"
        @click="closePopup"
      >
        <img src="../assets/baseline_close_black.png" alt="Close-icon" />
      </md-button>
      <InputData name="Алкоголь" :data="beer.alcohol" id="alcohol" />
      <InputData name="Blg" :data="beer.blg" id="blg" />
      <InputData name="Бренд" :data="beer.brand" id="brand" />
      <InputData name="Солод" :data="beer.malts" id="malts" />
      <InputData name="Стиль" :data="beer.style" id="style" />
      <InputData name="Дрожжи" :data="beer.yeast" id="yeast" />
    </div>
  </div>
</template>

<script>
import InputData from '../blocks/InputData.vue';

export default {
  name: 'BeerDataPopup',
  components: {
    InputData,
  },
  props: {
    beer: Object,
    onCloseBeerPopup: Function,
  },
  methods: {
    closePopup() {
      this.onCloseBeerPopup();
    },
  },
};
</script>

<style scoped lang="scss">
.popup-background {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  background: rgba($color: #000000, $alpha: 0.6);
  z-index: 10;
}

.popup-container {
  width: 29.9vw;
  height: 600px;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  box-shadow: -3px 4px 9px rgba(0, 0, 0, 0.25);
  padding: 10px;
}

.button-close {
  align-self: end;
}

@media screen and (max-width: 660px) {
  .popup-container {
    width: 70%;
  }
}
</style>
