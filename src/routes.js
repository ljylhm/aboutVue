/**
 * @路由模块
 */
import VueRouter from 'vue-router';
var path = require('path');
var reg = /.vue$/g;
var routes = [];

// 获取page下的项目结构进行动态加载  只适用于当前版本webpack2.2.0
// 而且只能是固定的写法 
function importAll(r) {
    r.keys().map(function (t) {
        var k = t.replace(reg, ''),
        index = k.indexOf('./'),
        j = k.substring(index+1);
        routes.push({
            path: j,
            component: require('./page'+j+'.vue'),
            name:require('./page'+j+'.vue').getName 
        })
    });
}

importAll(require.context("./page/", true, /\.vue$/))

var router = new VueRouter({
    routes: routes
});

export default router;


