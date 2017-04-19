<template>
  <div id="app">
    <HeadNav></HeadNav>
    <Houses></Houses>
    <HouseForm></HouseForm>
  </div>
</template>

<script>
import HeadNav from './components/HeadNav.vue'
import Houses from './components/Houses.vue'
import HouseForm from './components/HouseForm.vue'

export default {
  components: {
    HeadNav,
    Houses,
    HouseForm,
    Map
  }
}
</script>
