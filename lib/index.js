
import bus from './bus.js'
import waterfall from './waterfall.vue'

const Index = {
	 install:function(Vue){
		if(this.installed){
			return
		}
		this.installed = true
		Vue.component('waterfall',waterfall)
		Vue.prototype.$waterfall = {
			resize:function(){
				bus.$emit('resize')
			},
			mix:function(){
				bus.$emit('mix')
			}
		}
	}
}
export default Index
