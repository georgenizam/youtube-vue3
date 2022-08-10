<template>
  <div class="space-y-3 text-black text-sm mt-3">
    <div
        class="flex items-center"
        v-for="(label, index) in categories"
        :key="label"
    >
      <BaseRadio
          :id="`search-prediction-category-${index}`"
          :value="label"
          v-bind="$attrs"
          v-model="modelValue"
      >
        {{ label }}
      </BaseRadio>
    </div>
  </div>
</template>

<script>
import BaseRadio from './BaseRadio.vue'

export default {
  props: {
    categories: Array,
    modelValue: String
  },
  name: "TheSearchPredictionCategories",
  components: {
    BaseRadio
  }
}
</script>

<style scoped>

</style>