'use strict';

module.exports={
 myProfile: {
  getBaseData: require("./myProfile/getBaseData.js"),
  publishPost: require("./myProfile/publishPost.js"),
  getTenPosts: require("./myProfile/getTenPosts.js")
 },

 auth: {
  logout: require("./authorization/logoutSocket.js")
 }
};
