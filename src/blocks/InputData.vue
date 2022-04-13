<template>
  <md-field>
    <label :for="`${id}_input`"
      >{{ name }}:
      <input
        class="input"
        type="text"
        :id="`${id}_input`"
        :value="data"
        readonly
      />
    </label>
  </md-field>
</template>

<script>
export default {
  name: 'InputData',
  props: {
    name: String,
    data: [String, Number],
    id: String,
  },
};
</script>

<style scoped lang="scss">
.input {
  padding: 0;
  border: none;
  background: none;
  font-family: inherit;
  font-size: 16px;
  line-height: 32px;
}
</style>
