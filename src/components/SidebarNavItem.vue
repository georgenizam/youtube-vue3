<template>
  <li>
    <a href="#" :class="classes">
      <BaseIcon :name="icon" :class="iconClasses" />
      <span>{{ label }}</span>
    </a>
  </li>
</template>

<script>
import BaseIcon from './BaseIcon.vue'

export default {
  name: 'SidebarNavItem',
  props: {
    label: String,
    icon: String,
    isActive: Boolean,
  },
  components: {
    BaseIcon,
  },
  computed: {
    classes() {
      const classes = ['flex', 'items-center', 'px-6', 'py-2', 'text-sm']
      const activeClasses = [
        'font-medium',
        'text-gray-800',
        'bg-gray-200',
        'hover:bg-gray-300',
      ]
      const inActiveClasses = ['hover:bg-gray-100']

      return this.isActive
        ? [...classes, ...activeClasses]
        : [...classes, ...inActiveClasses]
    },
    iconClasses() {
      return this.isActive ? 'w-6 h-6 mr-6 text-red-500' : 'w-6 h-6 mr-6'
    },
  },
}
</script>

<style scoped></style>
