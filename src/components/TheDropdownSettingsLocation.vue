<template>
  <DropdownSettingsHeader
      title="Choose your location"
      @back="$emit('close')"
  />
  <section class="py-2">
    <ul class="max-h-96 overflow-auto">
      <DropdownSettingsListItem
          v-for="(locationName, locationId) in locations"
          :key="locationName"
          :label="locationName"
          :active="locationId === selectedOptions.location.id"
          @click="selectOption({id: locationId, text: locationName})"
      />
    </ul>
  </section>
</template>

<script>
import dropdownSubmenu from "../mixins/dropdownSubmenu"

export default {
  name: "TheDropdownSettingsLocation",
  mixins: [dropdownSubmenu],
  data() {
    return {
      optionName: 'location',
      locations: [
        'United States',
        'Russia',
      ]
    }
  }
}
</script>

<style scoped>

</style>