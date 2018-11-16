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
			col:String,
			width:String,
			data:Array,
			gutterWidth:{
				type:String,
				default:'10'
			}
		},
		data(){
			return{
				root:null,
				columns:[]
			}
		},
		watch:{
			data(){
				setTimeout(()=>{
					this.resize()
				},500)
			}
		},
		methods:{
			init(){
				this.root = this.$refs.vueWaterfall
				const col = parseInt(this.col)
				for(var i =0;i<col;i++){
					let odiv = document.createElement('div')
					odiv.className = 'vue-waterfall-column'
					if(this.width)
					{
						odiv.style.width = this.width + 'px'
						if(i != 0)
						{
							odiv.style.marginLeft = this.gutterWidth + 'px'
						}
					}
					else{
						odiv.style.width = 100/parseInt(col) +'%'
					}
					this.root.appendChild(odiv)
					this.columns.push(odiv)
				}
			},
			append(dom){
				if(this.columns.length>0)
				{
					let min = this.columns[0]
					for(var i=0;i<this.columns.length;i++){
						if(getHeight(min)>getHeight(this.columns[i])){
							min = this.columns[i]
						}
					}
					min.appendChild(dom)
				}
			},
			resize(){
				console.log(this.$slots.default)
				this.clear()
				const elements = this.$slots.default
				for(var i=0;i<elements.length;i++){
					this.append(elements[i].elm)
				}
				this.$emit('finish')
			},
			clear(){
				this.columns.forEach((item)=>{
					item.innerHTML = ''
				})
			},
			mix(){
				
				const elements = this.$slots.default
				elements.sort(()=>{return Math.random()-0.5>0.5})
				this.resize()
			}
		},
		mounted(){
			this.init()
			// setTimeout(()=>{
			// 	this.resize()
			// },500)
		},
		created(){
			bus.$on('resize',()=>{this.resize()})
		}
	}

	function getHeight(dom){
		return dom.offsetHeight
	}
</script>