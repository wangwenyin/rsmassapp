<template>
  <div>
    <svg t="1492500959545" @click="toggleClick" class="svg-icon hamburger" :class="{'is-active':isActive}" style="" viewBox="0 0 1024 1024"
      version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1691" xmlns:xlink="http://www.w3.org/1999/xlink" width="64" height="64">
      <path d="M884.363636 46.545455c51.2 0 93.090909 41.890909 93.090909 93.090909v256c0 51.2-41.890909 93.090909-93.090909 93.090909H628.363636c-51.2 0-93.090909-41.890909-93.090909-93.090909V139.636364c0-51.2 41.890909-93.090909 93.090909-93.090909h256zM395.636364 46.545455c51.2 0 93.090909 41.890909 93.090909 93.090909v256c0 51.2-41.890909 93.090909-93.090909 93.090909H139.636364c-51.2 0-93.090909-41.890909-93.090909-93.090909V139.636364c0-51.2 41.890909-93.090909 93.090909-93.090909h256z m488.727272 488.727272c51.2 0 93.090909 41.890909 93.090909 93.090909v256c0 51.2-41.890909 93.090909-93.090909 93.090909H628.363636c-51.2 0-93.090909-41.890909-93.090909-93.090909V628.363636c0-51.2 41.890909-93.090909 93.090909-93.090909h256z m-488.727272 0c51.2 0 93.090909 41.890909 93.090909 93.090909v256c0 51.2-41.890909 93.090909-93.090909 93.090909H139.636364c-51.2 0-93.090909-41.890909-93.090909-93.090909V628.363636c0-51.2 41.890909-93.090909 93.090909-93.090909h256z" fill="#515151" p-id="1464"></path>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'hamburger',
  props: {
    isActive: {
      type: Boolean,
      default: false
    },
    toggleClick: {
      type: Function,
      default: null
    }
  }
}
</script>

<style scoped>
.hamburger {
    display: inline-block;
    cursor: pointer;
    width: 20px;
    height: 20px;
    transform: rotate(0deg);
    transition: .38s;
    transform-origin: 50% 50%;
}

.hamburger.is-active {
    transform: rotate(90deg);
}
</style>
