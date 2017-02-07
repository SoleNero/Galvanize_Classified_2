(function(){
  'use strict';
  angular.module('app')
    .component('postsList', {
      tampleteUrl:'/js/posts-list/posts-list.template.html',
      controller: controller
    });

    controller.$inject = ['postsService'];

    function controller(postsService){
      const vm = this;
      console.log("you got to post-list.component");
    }
}());