<template>
  <div class="relative w-full">
    <input
        ref="input"
        type="text"
        placeholder="Search"
        :class="classes"
        :value="query"
        @input="updateQuery($event.target.value)"
        @click.stop="setState(true)"
        @focus="setState(true)"
        @keyup.esc="handleEsc"
        @keydown.enter="handleEnter"
    />
    <button
        class="absolute top-0 right-0 h-full px-3 focus:outline-none"
        v-show="query"
        @click="clear"
    >
      <BaseIcon
          class="w-5 h-5"
          name="x"
      />
    </button>
  </div>
</template>

<script>
import BaseIcon from './BaseIcon.vue'

export default {
  props: ['query', 'hasResults'],
  emits: ['update:query', 'change-state', 'enter'],
  name: 'TheSearchInput',
  components: {
    BaseIcon
  },
  data () {
    return {
      classes: [
        'w-full',
        'h-full',
        'px-3',
        'shadow-inner',
        'rounded-bl-sm',
        'rounded-tl-sm',
        'border',
        'border-gray-300',
        'focus:border-blue-700',
        'focus:outline-none'
      ],
      isActive: false
    }
  },
  inject: ['isMobileSearchActive'],
  methods: {
    setState(isActive) {
      this.isActive = isActive
      this.$emit('change-state', isActive)
    },
    updateQuery(query) {
      this.$emit('update:query', query)
      this.setState(this.isActive)
    },
    handleEsc() {
      this.removeSelection()
      if (this.isActive && this.hasResults) {
        this.setState(false)
      } else {
        this.$refs.input.blur()
      }
    },
    removeSelection() {
      const end = this.$refs.input.value.length
      this.$refs.input.setSelectionRange(end, end)
    },
    clear() {
      this.$refs.input.focus()
      this.updateQuery('')
    },
    onKeydown(event) {
      const isInputFocused = this.$refs.input === document.activeElement
      if (event.code === 'Slash' && !isInputFocused) {
        event.preventDefault()
        this.$refs.input.focus()
      }
    },
    handleEnter() {
      this.setState(false)
      this.$refs.input.blur()
      this.$emit('enter')
    }
  },
  mounted() {
    if (window.innerWidth < 640) {
      this.$refs.input.focus()
    }

    document.addEventListener('keydown', this.onKeydown)
  },
  beforeUnmount() {
    document.removeEventListener('keydown', this.onKeydown)
  },
  watch: {
    'isMobileSearchActive.value'(isMobileSearchActive) {
      if (this.isMobileSearchActive) {
        this.$nextTick(() => this.$refs.input.focus())
      }
    }
  }
}
</script>

<style scoped></style>
