<template>
  <a href="#" :class="classes">{{ category }}</a>
</template>

<script>
export default {
  props: ['category', 'is-active'],
  name: 'CategoryItem',
  computed: {
    classes() {
      const classes = ['px-3', 'py-1', 'transition', 'rounded-full', 'border']
      const activeClasses = [
        'bg-gray-600',
        'border border-gray-700',
        'hover:bg-gray-500',
        'text-white',
      ]
      const notActiveClasses = [
        'border-gray-300',
        'bg-gray-100',
        'hover:bg-gray-200',
      ]

      return this.isActive
        ? [...classes, ...activeClasses]
        : [...classes, ...notActiveClasses]
    },
  },
}
</script>

<style scoped></style>
