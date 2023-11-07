
import _bus from './bus.js';
import _waterfall from './waterfall.vue'


var Index = {
	install: function install(Vue) {
		if (this.installed) {
			return;
		}
		this.installed = true;
		Vue.component('waterfall', _waterfall);
		Vue.prototype.$waterfall = {
			forceUpdate: function forceUpdate() {
				_bus.emit('forceUpdate');
			},
			mix: function mix() {
				_bus.emit('mix');
			}
		};
	}
};
export default Index;