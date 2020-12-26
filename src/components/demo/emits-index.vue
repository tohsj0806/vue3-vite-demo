<template>
{{label}}<emits-component @emitClick="emitClick"></emits-component>
<testH />
</template>

<script lang='ts'>
import { reactive, onMounted, ref, toRefs, watch } from 'vue'
//import emitsComponent from './emits-component.vue'
export default {
  name: '',
  props: {
  },
  components:{
    //emitsComponent
  },
  // setup() { 
  //   const label = "请点击" 
  //   const emitClick = ()=> {
  //     window.alert('emitsComponent click！')
  //   }
  //   return { label, emitClick }
  // },

  // vue2写法也ok✌✌✌✌
  data(){
    return {
      label:"请点击:"
    }
  }, 
  methods:{
    emitClick() {
       window.alert('emitsComponent click！')
    }
  }
}
</script>

<style lang='sass' scoped>
</style>