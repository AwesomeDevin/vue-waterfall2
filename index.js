import Vue from 'vue'
import bus from './bus'
import waterfall from './waterfall'

export default{
	install(Vue){
		if(this.installed){
			return
		}
		this.installed = true
		Vue.component('water-fall',waterfall)
		Vue.prototype.$resize = ()=>{
			bus.$emit('resize')
		}
	}
}
