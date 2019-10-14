'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _bus = require('./bus.js');

var _bus2 = _interopRequireDefault(_bus);

var _waterfall = require('./waterfall.vue');

var _waterfall2 = _interopRequireDefault(_waterfall);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Index = {
	install: function install(Vue) {
		if (this.installed) {
			return;
		}
		this.installed = true;
		Vue.component('waterfall', _waterfall2.default);
		Vue.prototype.$waterfall = {
			forceUpdate: function forceUpdate() {
				_bus2.default.$emit('forceUpdate');
			},
			mix: function mix() {
				_bus2.default.$emit('mix');
			}
		};
	}
};
exports.default = Index;