import bus from './bus';
import Waterfall from './waterfall.vue';


var Index = {
	install: function install(app) {
		if (this.installed) {
			return;
		}
		this.installed = true;
		app.component('waterfall', Waterfall);
		app.prototype.$waterfall = {
			forceUpdate: function forceUpdate() {
				bus.emit('forceUpdate');
			},
			mix: function mix() {
				bus.emit('mix');
			}
		};
	}
};

export default Index