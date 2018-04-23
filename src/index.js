import Vue from 'vue'
import App from './app.vue'

import './assets/styles/test.css'
import './assets/styles/test-stylus.styl'
// import './assets/images'

const root = document.createElement('div')
document.body.appendChild(root)

new Vue({
    render: (h) => h(App)
    //通过它把App挂载到html中
}).$mount(root)