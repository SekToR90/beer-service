<template>
  <div class="popup-background">
    <div class="popup-container">
      <md-button class="md-fab md-mini md-primary button-close" @click="closePopup">
        <img src="../assets/baseline_close_black.png" alt="Close-icon" />
      </md-button>
      <div class="beer__info-container">
        <InputData name="Алкоголь" :data="beer.alcohol" uniqueId="alcohol" />
        <InputData name="Blg" :data="beer.blg" uniqueId="blg" />
        <InputData name="Бренд" :data="beer.brand" uniqueId="brand" />
        <InputData name="Солод" :data="beer.malts" uniqueId="malts" />
        <InputData name="Стиль" :data="beer.style" uniqueId="style" />
        <InputData name="Дрожжи" :data="beer.yeast" uniqueId="yeast" />
      </div>
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
.popup {
  &-background {
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

  &-container {
    width: 29.9vw;
    height: 600px;
    display: flex;
    flex-direction: column;
    background: #ffffff;
    box-shadow: -3px 4px 9px rgba(0, 0, 0, 0.25);
    padding: 10px;
  }
}

.beer__info-container {
  display: flex;
  flex-direction: column;
}

.button-close {
  align-self: end;
}

@media screen and (max-width: 740px) {
  .popup-container {
    width: 90%;
    height: 92%;
  }

  .beer__info-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 20px;
  }
}

@media screen and (max-width: 380px) {
  .beer__info-container {
    display: flex;
    flex-direction: column;
  }
}
</style>
