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
global.regeneratorRuntime = require("babel-runtime/regenerator");
import bus from './bus'

	export default{
		props:{
			col:{
				type:Number,
				default:2
			},
			width:Number,
			data:{
				type:Array,
				default:[]
			},
			gutterWidth:{
				type:Number,
				default:10
			}

		},
		data(){
			return{
				root:null,
				columns:[],
				loadmore:true,
				timeout:null,
				lastScrollTop:0,
				max: 200,
				timer:null,
				oldIndex:0
			}
		},
		watch:{
			col(val){
				this.$nextTick(()=>{
					setTimeout(()=>{
						this.init()
					},300)
				})
			},
			data(newVal,oldVal){
				// console.log(newVal.length,this.oldIndex)
				this.$nextTick(()=>{
					setTimeout(()=>{
						if(newVal.length>this.oldIndex)
						{
							this.resize(this.oldIndex>0?this.oldIndex:null)
							this.oldIndex = newVal.length
						}
						else{
							// this.oldIndex = 0
							this.resize(null)
							this.oldIndex = newVal.length
						}
					},300)
				})
			}
		},
		methods:{
			init(){
				this.root = this.$refs.vueWaterfall
				this.clearColumn()
				var col = parseInt(this.col)
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
				this.resize()
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
			checkImg(dom){
				if(dom.getElementsByTagName("img").length)
				{
					return true
				}
				else{
					return false
				}
			},
			resize(index,elements){
				// console.log('>>>',index,this.$slots.default.length)
				var self = this
				if(!this.$slots.default){
					return
				}
				if(!index&&index!=0&&!elements)
				{
					elements = this.$slots.default
					this.clear()
				}
				else if(!elements){
					elements = this.$slots.default.splice(index)
				}
				for(var i=0;i<elements.length;i++){
					(async function(j){
						if(self.checkImg(elements[j].elm))
						{
							var imgs = elements[j].elm.getElementsByTagName('img')
							var newImg = new Image()
							newImg.src = imgs[0].src
							if(newImg.complete)
							{
					         	self.append(elements[j].elm)
							}
							else{
								await new Promise((resolve)=>{
									newImg.onload = function(){
										resolve()
									}
								})
								self.append(elements[j].elm)
							}
						}
						else{
							self.append(elements[j].elm)
						}
					})(i)
				}
				
			},
			clearColumn(){
				this.columns.forEach((item)=>{
					item.remove()
				})
				this.columns=[]
			},
			clear(){
				this.columns.forEach((item)=>{
					item.innerHTML = ''
				})
			},
			mix(){
				var elements = this.$slots.default
				elements.sort(()=>{return Math.random()-0.5})
				this.resize(0,elements)
			}
		},
		mounted(){
			// this.$watch('data',(newVal,oldVal)=>{
			// 	console.log('$watch',newVal.length,oldVal.length)
			// })
			this.$nextTick(()=>{
				setTimeout(()=>{
					this.init()
				},300)
				var self = this;
				window.onscroll=function(e){
					const scrollTop =  document.documentElement.scrollTop  || document.body.scrollTop
					const clientHeight = document.documentElement.clientHeight || document.body.clientHeight
					// const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight
					const scrollHeight = document.documentElement.offsetHeight
					var diff = scrollHeight - scrollTop - clientHeight
					self.$emit('scroll',{scrollHeight:scrollHeight,scrollTop:scrollTop,clientHeight:clientHeight,diff:diff,time:Date.now()})
					if(diff <self.max&&self.loadmore&&scrollHeight>clientHeight){
						self.lastScrollTop =  scrollTop
						self.loadmore = false
						self.$emit('loadmore')
					}
					else if(diff>=self.max){
						self.loadmore = true
					}
				}
				document.addEventListener('touchmove',function(){
					const scrollTop =  document.documentElement.scrollTop  || document.body.scrollTop
					const clientHeight = document.documentElement.clientHeight || document.body.clientHeight
					// const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight
					const scrollHeight = document.documentElement.offsetHeight
					var diff = scrollHeight - scrollTop - clientHeight
					self.$emit('scroll',{scrollHeight:scrollHeight,scrollTop:scrollTop,clientHeight:clientHeight,diff:diff,time:Date.now()})
					if(diff <self.max&&self.loadmore&&scrollHeight>clientHeight){
						self.lastScrollTop =  scrollTop
						self.loadmore = false
						self.$emit('loadmore')
					}
					else if(diff>=self.max){
						self.loadmore = true
					}
				})
			})
		},
		created(){
			bus.$on('resize',()=>{this.resize()})
			bus.$on('mix',()=>{this.mix()})
		},
	}

	function getHeight(dom){
		return dom.offsetHeight
	}

	function co(fn){  //执行器
		var execute = fn()
		var r = execute.next()
		r.value.then((data)=>{
		    execute.next(data)
		})
	}




</script>