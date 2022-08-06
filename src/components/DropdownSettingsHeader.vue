<template>
  <section class="flex border-b border-gray-200 text-black">
    <button
        class="px-3 focus:outline-none"
        @click.stop="$emit('back')"
    >
      <BaseIcon name="arrowLeft"/>
    </button>
    <span class="py-3">{{ title }}</span>
  </section>
</template>

<script>
import BaseIcon from './BaseIcon.vue'

export default {
  name: "DropdownSettingsHeader",
  components: {
    BaseIcon
  },
  props: {
    title: String
  },
  emits: ['back']
}
</script>

<style scoped>

</style>