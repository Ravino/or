webpackJsonp_name_([0],{

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(34),
  /* template */
  __webpack_require__(38),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/www/new/frontend/private/start/vue/template/news.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] news.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b29020b4", Component.options)
  } else {
    hotAPI.reload("data-v-b29020b4", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
	data: function data() {
		return {
			namePage: "News"
		};
	},

	components: {
		"header-page": __webpack_require__(8),
		"notification": __webpack_require__(10),
		"menu-page": __webpack_require__(9),
		"main-news": __webpack_require__(36)
	}
};

/***/ }),

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {};

/***/ }),

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(35),
  /* template */
  __webpack_require__(37),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/www/new/frontend/private/start/vue/template/news/mainNews.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] mainNews.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5775fdb6", Component.options)
  } else {
    hotAPI.reload("data-v-5775fdb6", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "role": "main"
    }
  }, [_vm._v("\nГлавные новости\n")])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5775fdb6", module.exports)
  }
}

/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "left"
  }), _vm._v(" "), _c('div', {
    staticClass: "center"
  }, [_c('header-page', {
    attrs: {
      "text": _vm.namePage
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "right"
  }, [_c('notification')], 1)]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "left"
  }), _vm._v(" "), _c('div', {
    staticClass: "center"
  }, [_c('main-news')], 1), _vm._v(" "), _c('div', {
    staticClass: "right"
  }, [_c('menu-page')], 1)])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-b29020b4", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=0.js.map