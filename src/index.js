import 'element-ui/lib/theme-chalk/index.css';
import './css/index.css';
import "./js/common";
import ElementUI from 'element-ui';
import Vue from 'vue';
import VueRouter from 'vue-router'
import router from './routes';
import helper from './js/helper';
import VDisplay from './layout/VDisplay';
import './layout/ref';
import '@dir/dir'
import $ from 'jquery';

Vue.use(VueRouter);
Vue.use(ElementUI);

helper.init(router);
helper.routerGo('/index');

var getSize = () => {
    return {
        "_menu_height": window.innerHeight - $('#head').height(),
        "_route_width": window.innerWidth - $('#menu').width(),
        "_menu_width": $('#menu').width(),
        "_nav_height": $('#head').height()
    }
}

var resizeSquare = () => {
    $('#menu').height(getSize()._menu_height);
}

var resizeRouterView = () => {
    $('#router')[0].style.width = getSize()._route_width;
    $('#router').css({
        "min-height": getSize()._menu_height,
        "marginLeft": getSize()._menu_width,
        "marginTop": getSize()._nav_height,
        "padding-left": 15,
        "padding-right": 15,
        "box-sizing": "border-box"
    });
}

var mixin = {
    data:function(){
        return {
            message:'this is a message from mixin'
        }
    },
    created:function(){
       console.log(this.message);
    },
    methods:{
        intoMixin:function(){

        }
    } 
}

const app = new Vue({
    el: '#app',
    mixins:[mixin],
    data: function () {
        return {
            name: '学习管理系统',
        }
    },
    methods:{
        dialogClose:function(){
            console.log("打开关闭函数......");
            this.dialogVisiable = false;
        }
    },
    created:function(){
       var lastPath = helper.sessionGet('lastPath') ||　'/index';
       console.log("this is a message from original.....")
       console.log(this.$data);
       helper.routerGo(lastPath); 
    },
    mounted: function () {
        resizeSquare();
        resizeRouterView();
        window.onresize = () => {
            resizeSquare();
            resizeRouterView();
        }
    },
    router: router
})

// 路由守卫 进入路由前校验
router.beforeEach((to,from,next)=>{
    next();
})

// 离开路由时
router.afterEach((to,from,next) => {
    // 路由刷新时进入当前route
    helper.sessionSet('lastPath',to.path);
})