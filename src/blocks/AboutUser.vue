<template>
  <div class="user-data__box">
    <InputData name="Имя" :data="fullName" id="name" />
    <InputData name="Количество полных лет" :data="fullYears()" id="age" />
    <InputData name="Должность" :data="checkingEmployment" id="employment" />
  </div>
</template>

<script>
import InputData from './InputData.vue';

export default {
  name: 'AboutUser',
  props: {
    user: {
      type: Object,
      default: () => ({}),
    },
  },
  components: {
    InputData,
  },
  data: () => ({
    name: 'main-avatar',
  }),
  methods: {
    fullYears() {
      const date = new Date();
      if (this.user.date_of_birth !== undefined) {
        const year = this.user.date_of_birth.slice(0, 4);
        const month = this.user.date_of_birth.slice(5, 7);
        const day = this.user.date_of_birth.slice(8, 10);

        let age = date.getFullYear() - year;
        const differenceMonth = date.getMonth() - month + 1;
        const differenceDay = date.getDate() - day;

        if (differenceMonth < 0) {
          age -= 1;
        }

        if (differenceMonth === 0) {
          if (differenceDay < 0) {
            age -= 1;
          }
          return age;
        }

        return age;
      }
      return '';
    },
  },
  computed: {
    fullName() {
      return `${this.user.first_name || ''} ${this.user.last_name || ''}`;
    },
    checkingEmployment() {
      return this.user.employment ? this.user.employment.title : '';
    },
  },
};
</script>

<style scoped lang="scss">
.user-data__box {
  margin-right: 130px;
  flex-basis: 50%;
}

@media screen and (max-width: 660px) {
  .user-data__box {
    margin: 20px 0 0;
  }
}
</style>
