<template>
  <div class="relative">
    <img :src="`https://picsum.photos/seed/image${index}/720/404`" />
    <VideoItemThumbnailButton
        icon="clock"
        label="Watch later"
        class="top-0"
    />
    <VideoItemThumbnailButton
        icon="menuAlt3"
        label="6:35"
        class="top-8"
    />
  </div>
</template>

<script>
import BaseIcon from './BaseIcon.vue'
import VideoItemThumbnailButton from './VideoItemThumbnailButton.vue'

export default {
  name: 'VideoItemThumbnail',
  props: ['index'],
  components: {
    BaseIcon,
    VideoItemThumbnailButton
  },
}
</script>

<style scoped></style>
