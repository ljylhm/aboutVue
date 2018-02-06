import './css/index.css';
import "./js/common";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Vue from 'vue';
import VueRouter from 'vue-router'
import router from './routes';
import helper from './js/helper';
import VHead from './layout/VHead';
import VMenu from './layout/VMenu';
import components from './layout/ref';
import $ from 'jquery';

Vue.use(VueRouter);
Vue.use(ElementUI);

helper.init(router);
helper.routerGo('/index');

var resizeSquare = function () {
    
    var _client_height = window.innerHeight,
        _nav_height = $('#head').height(),
        _menu_height = _client_height - _nav_height;

    $('#menu').height(_menu_height);
}

const app = new Vue({
    el: '#app',
    data: function () {
        return {
            message: 2313123,
            name:'学习管理系统'
        }
    },
    mounted: function () {
        resizeSquare();        
        window.onresize = resizeSquare;
    },
    components: components,
    router: router
})