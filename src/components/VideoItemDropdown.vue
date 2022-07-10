<template>
  <div class="relative -mt-1 ml-auto">
    <button
        @click="toggle"
        :class="buttonClasses"
    >
      <BaseIcon class="w-6 h-6" name="dotsVertical" />
    </button>
    <transition
        enter-active-class="transition ease-out duration-100"
        enter-from-class="transition opacity-0 scale-95"
        enter-to-class="transform opacity-100 scale-100"
        leave-active-class="transition ease-in duration-75"
        leave-from-class="transform opacity-100 scale-100"
        leave-to-class="transform opacity-0 scale-95"
    >
      <div
        @keydown.esc="isOpen = false"
        tabindex="-1"
        ref="dropdown"
        :class="dropdownClasses"
        v-show="isOpen"
    >
      <section class="py-2">
        <ul>
          <VideoItemDropdownListItem
              icon="menuAlt3"
              label="Add to queue"
          />
        </ul>
      </section>
    </div>
    </transition>
  </div>
</template>

<script>
import BaseIcon from './BaseIcon.vue'
import VideoItemDropdownListItem from './VideoItemDropdownListItem.vue'

export default {
  name: "VideoItemDropdown",
  components: {
    BaseIcon,
    VideoItemDropdownListItem
  },
  computed: {
    buttonClasses() {
      return [
        '-mt-1',
        'ml-auto',
        'p-1',
        'opacity-0',
        'group-hover:opacity-100',
        'text-gray-500',
        'hover:text-gray-700',
        'focus:outline-none'
      ]
    },
    dropdownClasses() {
      return [
        'z-10',
        'focus:outline-none',
        'absolute',
        'bg-white',
        'w-48',
        'rounded',
        'shadow',
        ...this.positionClasses
      ]
    }
  },
  data() {
    return {
      isOpen: false,
      positionClasses: []
    }
  },
  methods: {
    toggle(event) {
      this.isOpen = !this.isOpen
      if (this.isOpen) {
        this.$nextTick(() => {
          this.positionClasses = this.getPositionClasses(event)
        })
      }
    },
    getPositionClasses(event) {
      return [
        this.getTopClass(event),
        this.getLeftClass(event),
        this.getRightClass(event)
      ]
    },
    getTopClass(event) {
      const clickCoordY = event.clientY
      const buttonHeight = event.currentTarget.offsetHeight
      const dropdownHeight = this.$refs.dropdown.offsetHeight

      if (window.innerHeight - clickCoordY < dropdownHeight) {
        return '-top-14'
      }
      if (window.innerHeight - clickCoordY < dropdownHeight + buttonHeight) {
        return  'top-0'
      }
      return 'top-9'
    },
    getLeftClass(event) {
      const clickCoordX = event.clientX
      const clickCoordY = event.clientY
      const dropdownWidth = this.$refs.dropdown.offsetWidth
      const dropdownHeight = this.$refs.dropdown.offsetHeight
      const buttonHeight = event.currentTarget.offsetHeight

      if (window.innerWidth - clickCoordX < dropdownWidth) {
        return 'left-auto'
      }

      if (window.innerHeight - clickCoordY < dropdownHeight) {
        return 'left-auto'
      }

      if (window.innerHeight - clickCoordY > dropdownHeight + buttonHeight) {
        return 'left-auto'
      }

      return 'left-8'
    },
    getRightClass(event) {
      const clickCoordX = event.clientX
      const clickCoordY = event.clientY
      const dropdownWidth = this.$refs.dropdown.offsetWidth
      const dropdownHeight = this.$refs.dropdown.offsetHeight
      const buttonHeight = event.currentTarget.offsetHeight

      if (window.innerWidth - clickCoordX > dropdownWidth) {
        return 'right-auto'
      }

      if (window.innerHeight - clickCoordY > dropdownHeight + buttonHeight) {
        return 'right-0'
      }

      if (window.innerHeight - clickCoordY > dropdownHeight) {
        return 'right-8'
      }

      return 'right-0'
    }
  },
  watch: {
    isOpen() {
      this.$nextTick(() => this.isOpen && this.$refs.dropdown.focus())
    },
  },
  mounted() {
    window.addEventListener('click', event => {
      if (!this.$el.contains(event.target)) {
        this.isOpen = false
      }
    })
  }
}
</script>

<style scoped>

</style>