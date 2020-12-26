<template>
<!-- 动态组件-->
<div v-is="'hello1'"></div>
<component :is="hello2"></component> 
</template>

<script lang='ts'>
export default {
  name: '',
  props: {
    msg: String
  },
  components:{
    'hello1': {
      template:"<div>我是动态组件1</div>"
    },
    'hello2': {
      template:'<div>我是动态组件2</div>'
    }
  },
  setup() { 
    const hello2 = 'hello2'
    return { hello2 }
  },
}
</script>

<style lang='sass' scoped>
</style>