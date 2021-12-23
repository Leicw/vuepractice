// import one from './js/one'
// import two from './css/nomal.css'
// import three from './css/font.less'
// require('./css/nomal.css')
// one();

import Vue from 'vue'

// 第一版
/*new Vue({
  el: '#app',
  template: `
    <div>
    <h2>
      {{message}}
    </h2>
    </div>`,
  data: {
    message: "123"
  }
});*/
// 第二版

/*const app = {
  template: `
    <div>
    <h2>
      {{ message }}
    </h2>
    </div>`,
  data() {
    return {
      message: "123"
    }
  }
}

new Vue({
  el: '#app',
  template: '<app/>',
  components: {
    app
  }
});*/

// 第四版
/*
import cpn from './js/vue/app'

new Vue({
  el: '#app',
  template: '<cpn/>',
  components: {
    cpn
  }
})*/

// 最终版
import cpn from './js/vue/vueCpn.vue'

new Vue({
  el: '#app',
  template: '<cpn/>',
  components: {
    cpn
  }
})