<template>
  <div class="flex justify-center items-center">
      <span
          v-show="isStatus('recording', 'listening')"
          :class="buttonAnimationClasses"
      />
    <button
        :class="buttonClasses"
        @click="toggleRecording"
    >
      <BaseIcon name="microphone"/>
    </button>
  </div>
  <div :class="buttonHintClasses">
    Tap the microphone to try again.
  </div>
</template>

<script>
import BaseIcon from './BaseIcon.vue'

const STATUS_IDLE = 'idle'
const STATUS_LISTENING = 'listening'
const STATUS_RECORDING = 'recording'
const STATUS_QUIET = 'quiet'

export default {
  name: "TheButtonSearchWithVoice",
  emits: ['change-text'],
  components: {
    BaseIcon
  },
  computed: {
    buttonClasses() {
      const bgColorClass = this.isStatus(STATUS_RECORDING, STATUS_LISTENING)
          ? 'bg-red-600'
          : 'bg-gray-300'

      const textColorClass = this.isStatus(STATUS_RECORDING, STATUS_LISTENING)
          ? 'text-white'
          : 'text-black'

      return [
        bgColorClass,
        textColorClass,
        'w-16',
        'h-16',
        'mx-auto',
        'rounded-full',
        'flex',
        'justify-center',
        'items-center',
        'relative',
        'focus:outline-none'
      ]
    },
    buttonHintClasses() {
      return [
        this.isStatus(STATUS_RECORDING, STATUS_LISTENING) ? 'invisible' : 'visible',
        'mt-4',
        'text-sm',
        'text-center',
        'text-gray-500'
      ]
    },
    buttonAnimationClasses() {
      return [
        this.isStatus(STATUS_RECORDING) ? 'bg-gray-300' : 'border border-gray-300',
        'w-14',
        'h-14',
        'absolute',
        'animate-ping',
        'rounded-full'
      ]
    }
  },
  data() {
    return {
      status: STATUS_LISTENING,
      recordingTimeout: null
    }
  },
  methods: {
    isStatus(...statuses) {
      return statuses.includes(this.status)
    },
    updateStatus(status) {
      if(status) {
        this.status = status
      } else if(this.isStatus(STATUS_RECORDING)) {
        this.status = STATUS_IDLE
      } else if (this.isStatus(STATUS_LISTENING)) {
        this.status = STATUS_RECORDING
      } else {
        this.status = STATUS_LISTENING
      }
    },
    toggleRecording() {
      clearTimeout(this.recordingTimeout)

      this.updateStatus()
      this.handleRecordingTimeout()
    },
    handleRecordingTimeout() {
      if (this.isStatus(STATUS_RECORDING, STATUS_LISTENING)) {
        this.recordingTimeout = setTimeout(() => {
          this.updateStatus(STATUS_QUIET)
        }, 5000)
      }
    }
  },
  watch: {
    status: {
      handler() {
        let text = 'Microphone off. Try again.'

        if (this.isStatus(STATUS_QUIET)) {
          text = "Didn't hear that. Try again."
        } else if (this.isStatus(STATUS_RECORDING, STATUS_LISTENING)) {
          text = 'Listening...'
        }

        this.$emit('change-text', text)
      },
      immediate: true
    }
  },
  mounted() {
    this.handleRecordingTimeout()
  },
  beforeUnmount() {
    clearTimeout(this.recordingTimeout)
  }
}
</script>

<style scoped>

</style>