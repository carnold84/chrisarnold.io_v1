<template>
  <div class="app-header">
    <div class="content">
      <div class="content-start">
        <AppLogo />
      </div>
      <div class="content-end">
        <app-nav/>
      </div>
    </div>
  </div>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue';
import AppNav from '~/components/AppNav.vue';

export default {
  name: 'AppHeader',
  components: {
    AppLogo,
    AppNav
  }
};
</script>

<style scoped lang="scss">
@import '@/assets/css/_breakpoint.scss';

.app-header {
  align-items: flex-start;
  display: flex;
  fill: var(--text-color1);
  flex-direction: row;
  flex-shrink: 0;
  margin: 0;
  padding: 60px 60px 0;
  position: fixed;
  width: 100%;
  z-index: 1;

  @include breakpoint('mobile') {
    padding: 40px 40px 0;
    position: relative;
  }
}

.content {
  align-items: center;
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
}

.content-start {
  display: block;
}

.content-end {
  display: block;
}
</style>
