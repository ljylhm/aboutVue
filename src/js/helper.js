import axios from '@/axios';
var router;
var helper = {

    init: function (_router) {
        router = _router;
    },

    getDataType: function (obj) {
        if (!obj) return;
        var _type = '',
            _type_str = '';

        _type = Object.prototype.toString.call(obj);
        _type_str = _type.substring(8, _type.length - 1);

        return _type_str;
    },
    // 路由传值 args需要为json格式 
    routerGo: function (url, args) {
        if (!url) return;
        if (!args) {
            router.push(url);
            return;
        }
        if (this.getDataType(args) != 'Object') {
            console.error('参数携带不符合格式要求....');
        } else {
            router.push({
                path: url,
                params: args
            })
        }
    },

    getTimeStamp: function (time) {
        if (!time) return Math.round(new Date().getTime() / 1000);
        else {
            if (this.getDataType(time) != 'Date') {
                return Math.round(new Date(time).getTime() / 1000);
            }
            return Math.round(time.getTime() / 1000)
        }
    },

    http: function (url, method, data, opt) {
        var met = method || 'get',
            data = data || {},
            opt = opt || {};
        if (!url) console.error('not found url.....');

        var params = {
            url: url,
            method: method,
            data: data,
            timeout: 2000,
        }

        params = Object.assign(params, opt);
        return axios(params);
    },

    httpGet: function (url, data, opt) {
        var method = 'get';
        return this.http(url,method,data,opt);
    },

    httpPost:function(url, data, opt){
        var method = 'post';
        return this.http(url,method,data,opt);
    },

    httpAll:function(arr,callback){
      if(this.getDataType(arr)!='Array'){
          console.error('The params type is not right');
          return;
      }
      axios.all(arr).then(axios.spread(callback));
    }

}

export default helper;


