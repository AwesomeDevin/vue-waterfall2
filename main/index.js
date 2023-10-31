import bus from './bus';
import Waterfall from './waterfall.vue';



var Index = {
	install: function install(Vue) {
		if (this.installed) {
			return;
		}
		this.installed = true;
		Vue.component('waterfall', Waterfall);
		Vue.prototype.$waterfall = {
			forceUpdate: function forceUpdate() {
				bus.$emit('forceUpdate');
			},
			mix: function mix() {
				bus.$emit('mix');
			}
		};
	}
};

export default Index