<template>
  <md-field>
    <!--eslint-disable-next-line-->
    <label :for="`${id}_input`"
      >{{ name }}
      <md-input type="text" :id="`${id}_input`" :value="data" readonly />
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
