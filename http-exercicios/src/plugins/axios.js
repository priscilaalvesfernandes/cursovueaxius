import Vue from 'vue'
import axios from 'axios'

// axios.defaults.baseURL ='https://curso-vue-ad78e-default-rtdb.firebaseio.com/'

Vue.use({
    install(Vue){
        //Vue.prototype.$http = axios,
        baseURL: 'https://curso-vue-ad78e-default-rtdb.firebaseio.com/'
    }
})