<style>
	.vue-waterfall{
		width:100%;
		overflow: hidden;
		position: relative;
	}
	.vue-waterfall .slot-box{
		position: absolute;
		top: 100%;
		left: 100%;
	}
	.vue-waterfall .vue-waterfall-column{
		float: left;
	}
</style>
<template>
	<div class="vue-waterfall" ref="vueWaterfall" >
		<div class="slot-box">
			<slot ></slot>	
		</div>
	</div>
</template>

<script>
import bus from './bus'

	export default{
		props:{
			col:{
				type:String,
				default:'2'
			},
			width:String,
			data:{
				type:Array,
				default:[]
			},
			gutterWidth:{
				type:String,
				default:'10'
			}

		},
		data(){
			return{
				root:null,
				columns:[],
				loadmore:true,
				timeout:null,
				lastScrollTop:0,
				max: 200 * 0.5 * ( document.documentElement.offsetWidth/375)
			}
		},
		watch:{

		},
		methods:{
			
		},
		mounted(){

		},
		created(){
			// alert(1)
			bus.$on('resize',()=>{this.resize()})
			bus.$on('mix',()=>{this.mix()})

		}
	}

	function getHeight(dom){
		return dom.offsetHeight
	}
</script>