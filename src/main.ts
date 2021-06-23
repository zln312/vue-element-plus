import { createApp } from 'vue'
import App from './App.vue'
import routers from './router'
import {ElButton,ElAside,ElMenu,
  ElMenuItem,ElMain,
  ElMenuItemGroup,ElFooter,ElHeader,ElContainer,ElSubmenu,ElSlider,} from 'element-plus'
import 'element-plus/packages/theme-chalk/src/base.scss' 

const app = createApp(App)

app.use(ElButton)
app.use(ElAside)
app.use(ElMenu)
app.use(ElMenuItem)
app.use(ElMenuItemGroup)
app.use(ElFooter)
app.use(ElMain)
app.use(ElHeader)
app.use(ElContainer)
app.use(ElSubmenu)
app.use(ElSlider)
app.use(routers)
app.mount('#app')