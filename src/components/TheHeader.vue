<template>
  <header :class="classes">
    <div :class="leftSideClasses">
      <div class="flex items-center xl:w-64 xl:bg-white pl-4">
        <button
            @click="$emit('toggleSidebar')"
            class="mr-3 sm:ml-2 sm:mr-6 focus:outline-none"
        >
          <BaseIcon name="menu" />
        </button>
        <LogoMain />
      </div>
    </div>
    <TheSearchWrapper
        v-show="isSearchShown"
        :is-small-screen="isSmallScreen"
        @close="closeMobileSearch"
        @open-voice-modal="isVoiceModalOpen = true"
    />
    <div :class="rightSideClasses">
      <BaseTooltip text="Search with your voice">
        <button
            class="sm:hidden p-2 focus:outline-none"
            @click="isVoiceModalOpen = true"
        >
          <BaseIcon name="microphone" class="w-5 h-5" />
        </button>
      </BaseTooltip>
      <BaseTooltip text="Search">
        <button
            @click.stop="isMobileSearchActive = true"
            class="sm:hidden p-2 focus:outline-none"
        >
          <BaseIcon name="search" class="w-5 h-5" />
        </button>
      </BaseTooltip>
      <TheDropdownApps />
      <TheDropdownSettings />
      <ButtonLogin />
    </div>
  </header>
  <teleport to="body">
    <TheModalSearchWithVoice
        v-if="isVoiceModalOpen"
        @close="isVoiceModalOpen = false"
    />
  </teleport>
</template>
<script>
import {computed} from "vue"
import LogoMain from './LogoMain.vue'
import ButtonLogin from './ButtonLogin.vue'
import TheDropdownApps from './TheDropdownApps.vue'
import TheDropdownSettings from './TheDropdownSettings.vue'
import BaseIcon from './BaseIcon.vue'
import BaseTooltip from './BaseTooltip.vue'
import TheSearchWrapper from "./TheSearchWrapper.vue"
import TheModalSearchWithVoice from "./TheModalSearchWithVoice.vue"

export default {
  components: {
    TheModalSearchWithVoice,
    LogoMain,
    ButtonLogin,
    TheDropdownApps,
    TheDropdownSettings,
    BaseIcon,
    BaseTooltip,
    TheSearchWrapper,
  },
  emits: {
    toggleSidebar: null
  },
  computed: {
    isSearchShown() {
      return this.isMobileSearchShown || !this.isSmallScreen
    },
    isMobileSearchShown() {
      return this.isSmallScreen && this.isMobileSearchActive
    },
    opacity() {
      return this.isMobileSearchShown
          ? 'opacity-0'
          : 'opacity-100'
    },
    leftSideClasses() {
      return [
        'lg:w-1/4',
        'flex',
        this.opacity
      ]
    },
    rightSideClasses() {
      return [
        'flex',
        'items-center',
        'justify-end',
        'lg:w-1/4',
        'sm:space-x-3',
        'p-2',
        'sm:px-4',
        this.opacity
      ]
    }
  },
  data() {
    return {
      isVoiceModalOpen: false,
      isSmallScreen: false,
      isMobileSearchActive: false,
      classes: [
        'flex',
        'justify-between',
        'w-full',
        'bg-white',
        'bg-opacity-95'
      ]
    }
  },
  methods: {
    onResize() {
      if (window.innerWidth < 640) {
        this.isSmallScreen = true
        return
      }

      this.isSmallScreen = false
      this.closeMobileSearch()
    },
    closeMobileSearch() {
      this.isMobileSearchActive = false
    }
  },
  provide() {
    return {
      isMobileSearchActive: computed(() => this.isMobileSearchActive)
    }
  },
  mounted() {
    this.onResize()
    window.addEventListener('resize', this.onResize)
  }
}
</script>
