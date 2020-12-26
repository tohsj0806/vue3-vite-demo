<template>
    <button @click="$emit('emitClick')">点击Emit按钮</button>
</template>

<script lang='ts'>
export default {  
  emits: ['emitClick']
}
</script>

<style scoped>
</style>