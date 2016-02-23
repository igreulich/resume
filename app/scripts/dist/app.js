webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(51);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(52);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _Header = __webpack_require__(87);
	
	var _Header2 = _interopRequireDefault(_Header);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var App = _react2.default.createClass({
	  displayName: 'Resume',
	
	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      { id: 'content' },
	      _react2.default.createElement(_Header2.default, null)
	    );
	  }
	});
	
	_reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById('resumeApp'));

/***/ },

/***/ 87:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(51);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _react2.default.createClass({
	  displayName: 'Header',
	
	  render: function render() {
	    return _react2.default.createElement(
	      'header',
	      null,
	      _react2.default.createElement(
	        'div',
	        { className: 'name' },
	        'Ian Greulich'
	      ),
	      _react2.default.createElement(
	        'div',
	        { className: 'description' },
	        'Web Developer'
	      )
	    );
	  }
	});

/***/ }

});
//# sourceMappingURL=app.js.map