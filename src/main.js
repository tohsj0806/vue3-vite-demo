import { createApp, h } from 'vue'
import App from './App.vue'
import './index.css'
import emitsComponent from './components/demo/emits-component.vue'
const app = createApp(App)

//全局定义组件
app.component('emitsComponent', emitsComponent)
app.component('testH', {
  render() {
    return h('div', {
      style: { color: '#2AA6FF',cursor:'pointer'},
      onClick() {
        window.alert('I am testH')
      }
    }, 'I am testH')
  }
})
app.mount('#app')
