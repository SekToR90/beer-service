<template>
  <div class="beer-container">
    <h2 class="title">Рекомендованное пиво:</h2>
    <div class="about-beer">
      <p class="about-beer__title">{{ beer.name }}</p>
      <md-button
        class="md-fab md-mini md-primary button-beer_about"
        @click="openBeerPopup"
      >
        <img src="../assets/baseline_summarize_black.png" alt="Menu" />
      </md-button>
    </div>
    <md-button
      class="md-raised md-primary button-beer"
      @click="onClickButtonBeer"
    >
      Выбрать еще раз
      <img src="../assets/baseline_casino_black.png" alt="Menu" />
    </md-button>
  </div>
</template>

<script>
export default {
  name: 'RecommendedBeer',
  props: {
    changingBeerVarietyApp: Function,
    onClickBeerData: Function,
    beer: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    onClickButtonBeer() {
      this.changingBeerVarietyApp();
    },
    openBeerPopup() {
      this.onClickBeerData();
    },
  },
};
</script>

<style scoped lang="scss">
.beer-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
}

.about-beer {
  display: flex;
  align-items: center;
}

.md-button {
  &.button-beer {
    margin: 20px 0 0;
    border-radius: 79px;
    text-transform: none;

    &_about {
      margin: 0 0 0 10px;
    }
  }
}

@media screen and (max-width: 915px) {
  .title {
    margin: 10px 0 10px;
  }

  .about-beer__title {
    margin: 0;
  }

  .md-button {
    &.button-beer_about {
      width: 30px;
      height: 30px;
    }
  }

  .md-button {
    &.button-beer {
      margin: 10px 0 0;
    }
  }
}

@media screen and (max-width: 740px) {
  .title {
    margin: 5px 0 5px;
  }
}
</style>
