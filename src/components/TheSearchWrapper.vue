<template>
  <div :class="classes">
    <BaseTooltip
        v-if="isSmallScreen"
        text="Back"
        right
    >
      <button
          @click="$emit('close')"
          class="mr-2 p-2 focus:outline-none"
      >
        <BaseIcon name="arrowLeft" class="w-5 h-5"/>
      </button>
    </BaseTooltip>
    <TheSearch/>
    <BaseTooltip
        text="Search with your voice"
        :left="isSmallScreen"
    >
      <button
          class="p-2 focus:outline-none"
          @click="$emit('open-voice-modal')"
      >
        <BaseIcon name="microphone" class="w-5 h-5" />
      </button>
    </BaseTooltip>
  </div>
</template>

<script>
import BaseTooltip from './BaseTooltip.vue'
import BaseIcon from './BaseIcon.vue'
import TheSearch from './TheSearch.vue'

export default {
  props: ['isSmallScreen'],
  emits: ['close', 'open-voice-modal'],
  name: "TheSearchWrapper",
  components: {
    BaseTooltip,
    BaseIcon,
    TheSearch
  },
  computed: {
    classes() {
      const mobileClasses = [
        'absolute',
        'w-full',
        'p-2',
        'z-10',
        'flex'
      ]
      const defaultClasses = [
        'hidden',
        'sm:flex',
        'items-center',
        'justify-end',
        'p-2.5',
        'pl-8',
        'md:pl-12',
        'md:px-8',
        'flex-1',
        'lg:px-0',
        'lg:w-1/2',
        'max-w-screen-md'
      ]

      return this.isSmallScreen
          ? mobileClasses
          : defaultClasses
    }
  },
  methods: {
    onClick(event) {
      if (!this.$el.contains(event.target)) {
        this.$emit('close')
      }
    }
  },
  mounted() {
    window.addEventListener('click', this.onClick)
  },
  beforeUnmount() {
    window.removeEventListener('click', this.onClick)
  }
}
</script>

<style scoped>

</style>