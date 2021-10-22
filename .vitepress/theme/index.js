import Layout from './Layout.vue'
import './custom.css'
import DefaultTheme from 'vitepress/theme'
//Override the default theme with our own custom layout
export default {
  ...DefaultTheme,
  Layout
}