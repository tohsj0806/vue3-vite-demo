<template>
<div @click="$emit('update:counter', counter + 1)">
counter: {{counter}}
</div>
</template>

<script lang='ts'>
export default {
  name: '',
  props: {
    counter:{
      type: Number,
      default: 0
    }
  },
  components:{
  },
  setup() { 

    return {}
  },
}
</script>

<style lang='sass' scoped>
</style>