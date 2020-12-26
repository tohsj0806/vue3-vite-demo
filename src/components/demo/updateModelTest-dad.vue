<template>
<son v-model:counter='counter' ></son>
<!---等同于下面写法--->
<son :counter='counter' @update:counter="counter=$event" />
</template>

<script lang='ts'>
import { ref } from 'vue'
import son from './updateModelTest-son.vue'
export default {
  name: '',
  props: {
  },
  components:{
    son
  },
  setup() { 
    const counter = ref(1)
    return {counter}
  },
}
</script>

<style lang='sass' scoped>
</style>