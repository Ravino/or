'use strict';

module.exports={
 namespaced: true,
 state: {
  namePage: "",
  user: {},
  posts: null
 },


 mutations: {
  updateUser: function(state, data){
   state.user=data;
   state.namePage=data.name+" "+data.lastname;
  },

  updatePosts: function(state, data){
   state.posts=data;
  },

  addBeginPost: function(state, data){
   state.posts.unshift(data);
  }
 }
};
