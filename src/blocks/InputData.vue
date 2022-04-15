<template>
  <md-field>
    <!-- здесь eslint ругается, потому как используется <md-input> а не просто <input> -->
    <!--eslint-disable-next-line vuejs-accessibility/label-has-for-->
    <label :for="`${uniqueId}_input`"
      >{{ name }}
      <md-input type="text" :id="`${uniqueId}_input`" class="input-text" :value="data" readonly />
    </label>
  </md-field>
</template>

<script>
export default {
  name: 'InputData',
  props: {
    name: String,
    data: [String, Number],
    uniqueId: String,
  },
};
</script>

<style scoped lang="scss">
.input-text {
  width: 250px;
}
</style>
