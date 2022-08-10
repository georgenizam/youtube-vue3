<template>
  <div class="space-y-3 text-black text-sm mt-5">
    <div
        class="flex items-center"
        v-for="(label, index) in searchPredictions"
        :key="label"
    >
      <BaseCheckbox
          :id="`search-prediction-${index}`"
          :value="label"
          v-bind="$attrs"
          v-model="modelValue"
      >
        {{ label }}
      </BaseCheckbox>
    </div>
  </div>
</template>

<script>
import BaseCheckbox from './BaseCheckbox.vue'

export default {
  props: {
    searchPredictions: Array,
    modelValue: Array
  },
  name: "TheSearchPredictionsList",
  components: {
    BaseCheckbox
  }
}
</script>

<style scoped>

</style>