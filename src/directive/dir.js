/**
 * 定义的全局指令
 */
import $ from 'jquery';
import Vue from 'vue';
Vue.directive('center',{
   bind:function(el,binding,vnode){
      
   }
})

Vue.directive('insertHtml',{
   inserted:function(el,binding,vnode){
      var htmlStr = binding.value;
      console.log($(el).html(htmlStr));
   }
})