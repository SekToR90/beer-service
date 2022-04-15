<template>
  <div class="user-data__box">
    <InputData name="Имя" :data="fullName" uniqueId="name" />
    <InputData name="Количество полных лет" :data="fullYears()" uniqueId="age" />
    <InputData name="Должность" :data="checkingEmployment" uniqueId="employment" />
  </div>
</template>

<script>
import InputData from '../blocks/InputData.vue';

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
      const now = new Date();
      if (this.user.date_of_birth !== undefined) {
        const year = this.user.date_of_birth.slice(0, 4);
        const month = this.user.date_of_birth.slice(5, 7);
        const day = this.user.date_of_birth.slice(8, 10);

        let age = now.getFullYear() - year;
        const differenceMonth = now.getMonth() - month + 1;
        const differenceDay = now.getDate() - day;

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

@media screen and (max-width: 740px) {
  .user-data__box {
    width: 250px;
    margin: 20px 0 0;
  }
}
</style>
