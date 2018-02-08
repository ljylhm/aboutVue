import Vue from 'vue'

var components = {};
var reg = /.vue$/g;
// 定义全局组件 默认layout下的组件为全局组件
function importAll(r) {
    r.keys().map(function (t) {
        var k = t.replace(reg, ''),
        index = k.indexOf('./'),
        j = k.substring(index+2);
        components[j] = require('./'+ j +'.vue');
        Vue.component(j,components[j])
    });
}

importAll(require.context("../layout/", true, /\.vue$/))
