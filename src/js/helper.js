import axios from '@/axios';
var router;
var helper = {

    init: function (_router) {
        router = _router;
    },
    // 获得字符串中某个字符的数量
    getCharNum:function(str1,str2){
        if(!str1 || !str2){
            console.error('getCharNum params is not allowed undefined or null');
        }
        var count = 0;
        var reg = new RegExp(str2,'g');

        str1.replace(reg,()=>{
            count++
        })
        return count;
    },

    // 清除数组中的重复项
    clearRepeate:function(arr,callback){
         if(this.getDataType(arr)!="Array"){
             console.error('the type of arg must be Array!');
             return; 
         }

         var a = new Set(arr);
         a = Array.from(a);
         callback && callback(a);
         return a;
    },

    // 数组中如果是对象的话的去重
    clearRepeateObj:function (arr, id, i,callback){       
        if(this.getDataType(arr)!="Array"){
            console.error('the type of arg must be Array!');
            return; 
        }
        var i = i || 0,
            id = id || 0,
            template = arr[i][id],
            len = arr.length,
            repeateArr = [];
    
        for (var j = i + 1; j < len; j++) {
            if (arr[j][id] == template) {
                repeateArr.push(j)
            }
        }
    
        repeateArr.forEach(function(vaule,index){
            index == 0 ? arr.splice(vaule,1):arr.splice(vaule-1,1);
        });
    
        if (i<=arr.length-2){
            i++;
            clear(arr,id,i,callback)
        } else{
            callback(arr);
        }
    },

    // 利用reduce的数组去重
 
    reduceClearRepeate(arr,id){
        if(this.getDataType(arr)!="Array"){
            console.error('the type of arg must be Array!');
            return; 
        }
  
        var obj = {};

        arr = arr.reduce((cur,next)=>{
            obj[next[id]] ? "" : obj[next[id]] = true && cur.push(next);
            return cur; 
        },[])

        return arr;
    }, 
    
    // 获取数据类型
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


