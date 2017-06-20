'use strict';

module.exports={
 namespaced: true,
 state: {
  namePage: "",
  user: {},
  posts: []
 },


 mutations: {
  updateUser: function(state, data){
   state.user=data;
   state.namePage=data.name+" "+data.lastname;
  },

  setGetTenPosts: function(state, data){
   state.posts=data;
  },

  addBeginPost: function(state, data){
   state.posts.unshift(data);
  },

  deletePost: function(state, data){
   state.posts.splice(data, 1);
  },
  updateContenteditablePost: function(state, data){
   state.posts[data.indexPost].contenteditable=data.checked;
  }
 }
};
