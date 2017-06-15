'use strict';

module.exports={
 namespaced: true,
 state: {
  connect: "",
  notifications: ""
 },

 mutations: {
  updateConnect: function(state, data){
   state.connect=data;
  },

  updateNotifications: function(state, data){
   state.notifications=data;
  }
 }
};
