<template>
  <section class="py-2 border-b">
    <ul>
      <DropdownSettingsListItem
          v-for="menuItem in menuItems.slice(0, 8)"
          :key="menuItem.label"
          :icon="menuItem.icon"
          :label="menuItem.label"
          :with-sub-menu="menuItem.withSubMenu"
          @click.stop="selectMenu(menuItem)"
      />
    </ul>
  </section>
  <section class="py-2">
    <ul>
      <DropdownSettingsListItem
          :label="menuItems[8].label"
          :icon="menuItems[8].icon"
          :with-sub-menu="menuItems[8].withSubMenu"
          @click.stop="selectMenu(menuItems[8])"
      />
    </ul>
  </section>
</template>

<script>
import DropdownSettingsListItem from './DropdownSettingsListItem.vue'

export default {
  props: ['menuItems'],
  name: "TheDropdownSettingsMain",
  components: {
    DropdownSettingsListItem
  },
  emits: ['select-menu'],
  data() {
    return {

      isOpen: false
    }
  },
  methods: {
    selectMenu(menuItem) {
      menuItem.withSubMenu && this.$emit('select-menu', menuItem)
    }
  },
}
</script>

<style scoped>

</style>