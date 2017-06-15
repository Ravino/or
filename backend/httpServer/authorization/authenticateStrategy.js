'use strict';

module.exports={
 local: require("./local/localAuth.js"),
 jwtGeneration: require("./jwt/jwtGeneration.js"),
 logout: require("./logout/logout.js")
};
