<template>
  <input
      class="h-5 w-5 cursor-pointer"
      type="checkbox"
      :id="id"
      v-model="modelValue"
      v-bind="$attrs"
  >
  <label
      class="pl-4 cursor-pointer flex-grow"
      v-if="$slots.default"
      :for="id"
  >
    <slot/>
  </label>
</template>

<script>
export default {
  props: {
    id: String,
    modelValue: Array
  },
  name: "BaseCheckbox"
}
</script>

<style scoped>

</style>