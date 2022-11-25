<template>
  <div class='layout'>
    <Header :nav-list='navList'/>
    <div class='content'>
      <Nuxt/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Footer from '~/components/Footer/Footer'
import Header from '~/components/Header/Header'

export default {
  name: 'default',
  components: {Footer, Header},
  data: () => {
    return {
      navList: []
    }
  },
  async created() {
    const {data: navList} = await this.$axios.$get('nav-items')
    this.navList = navList
  }
}
</script>

<style lang='scss' scoped>
@import "assets/variables";

.layout {
  display: flex;
  flex-direction: column;
  min-height: 100%;
  background: $mainBackground;

  .content {
    flex: 1 0 auto;
  }
}
</style>
