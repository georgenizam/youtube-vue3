<template>
  <aside
    class="hidden xl:block w-64 max-h-screen overflow-auto fixed top-0 pt-12 bg-white z-20"
  >
    <SidebarSection>
      <ul>
        <SidebarNavItem icon="home" label="Home" is-active />
        <SidebarNavItem icon="fire" label="Trending" />
        <SidebarNavItem icon="collection" label="Subscriptions" />
      </ul>
    </SidebarSection>
    <SidebarSection>
      <ul>
        <SidebarNavItem icon="duplicate" label="Library" />
        <SidebarNavItem icon="clock" label="History" />
      </ul>
    </SidebarSection>
    <SidebarSection class="px-8 py-4 font-medium leading-5 border-b">
      <span class="text-sm">
        Sign in to like videos, comment, and subscribe.
      </span>
      <ButtonLogin
        class="focus:outline-none flex items-center px-2 py-0.5 mt-3 text-sm text-blue-700 uppercase border border-blue-700 rounded-sm"
      />
    </SidebarSection>
    <SidebarSection>
      <SidebarSectionHeading title="Best of YouTube" />
      <ul>
        <SidebarNavItem icon="musicNote" label="Music" />
        <SidebarNavItem icon="speakerphone" label="Sports" />
        <SidebarNavItem icon="puzzle" label="Gaming" />
        <SidebarNavItem icon="film" label="Movies" />
        <SidebarNavItem icon="newspaper" label="News" />
        <SidebarNavItem icon="statusOnline" label="Live" />
        <SidebarNavItem icon="eye" label="360&deg; Video" />
      </ul>
    </SidebarSection>
    <SidebarSection>
      <ul>
        <SidebarNavItem icon="plusCircle" label="Browse channels" />
      </ul>
    </SidebarSection>
    <SidebarSection>
      <SidebarSectionHeading title="More from YouTube" />
      <ul>
        <SidebarNavItem icon="plusCircle" label="YouTube Premium" />
        <SidebarNavItem icon="flag" label="Live" />
      </ul>
    </SidebarSection>
    <SidebarSection>
      <ul>
        <SidebarNavItem label="Settings" icon="cog" />
        <SidebarNavItem label="Report history" icon="flag" />
        <SidebarNavItem label="Help" icon="questionMarkCircle" />
        <SidebarNavItem label="Send feedback" icon="annotation" />
      </ul>
    </SidebarSection>
    <SidebarSection class="px-6 py-4 text-xs font-semibold space-y-4">
      <TheFooter />
    </SidebarSection>
  </aside>
</template>
<script>
import SidebarNavItem from './SidebarNavItem.vue'
import ButtonLogin from './ButtonLogin.vue'
import SidebarSectionHeading from './SidebarSectionHeading.vue'
import SidebarSection from './SidebarSection.vue'
import TheFooter from './TheFooter.vue'

export default {
  components: {
    SidebarNavItem,
    ButtonLogin,
    SidebarSectionHeading,
    SidebarSection,
    TheFooter,
  },
}
</script>
