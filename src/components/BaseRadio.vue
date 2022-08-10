<template>
  <input
      class="w-5 h-5 cursor-pointer"
      type="radio"
      :id="id"
      v-bind="$attrs"
      v-model="modelValue"
  >
  <label
      v-if="$slots.default"
      class="pl-4 cursor-pointer flex-grow"
      :for="id"
  >
    <slot/>
  </label>
</template>

<script>
export default {
  props: {
    id: String,
    modelValue: String
  },
  name: "BaseRadio"
}
</script>

<style scoped>

</style>