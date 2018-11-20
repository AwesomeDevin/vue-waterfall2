

## vue-waterfall2@1.0.8   
* 1.宽度自适应,数据绑定特效
* 2.自定义程度高
* 3.使用极为简便,适用于PC/移动端
* 4.提供Event:loadmore 适用于上拉加载更多
* 5.提供resize(强制刷新布局-适用于下拉刷新)/mix(扰乱布局) API，一般情况下不需要用到
* 6.后期将持续更新，提供animation（过渡动画）

## Demo
[Demo](http://47.105.188.15:3000/)

[GITHUB](https://github.com/libin1991/vue-waterfall2)
```
npm i 
npm run dev
```

## Installation
```
npm install --save vue-waterfall2
```

## Usage
注意:
  *  1.<font color=blue> itemWidth需要与gutterWidth一起使用才会生效，否则会进行自适应宽度(使用rem布局时，需先计算出高度再传值)</font>
  *  2.使用了<font color=red>waterfall</font>的<font color=red>父组件 style 不允许使用scoped</font>,否则样式会有问题 
##### main.js
```javascript
import waterfall from 'vue-waterfall2'
Vue.use(waterfall)
```
##### app.vue(此组件 style不使用 scoped)
```javascript
<template>
  <div class="container-water-fall">
    <div><button  @click="loadmore">loadmore</button> <button @click="mix">mix</button> <button @click="switchCol('5')">5列</button> <button @click="switchCol('8')">8列</button> <button @click="switchCol('10')">10列</button> </div>

    <waterfall :col='col'  :gutterWidth="gutterWidth"  :data="data"  @loadmore="loadmore"   >
      <template >
        <div class="cell-item" v-for="(item,index) in data">
          <img :src="item.img"  />
          <div class="item-body">
              <div class="item-desc">{{item.title}}</div>
              <div class="item-footer">
                  <div class="avatar" :style="{backgroundImage : `url(${item.avatar})` }"></div>
                  <div class="name">{{item.user}}</div>
                  <div class="like" :class="item.liked?'active':''" >
                      <i ></i>
                      <div class="like-total">{{item.liked}}</div>  
                  </div>
              </div>
          </div>
        </div>
      </template>
    </waterfall>
    
  </div>
</template>


/*
  注意:
  1.itemWidth需要与gutterWidth一起使用才会生效，否则会进行自适应宽度(使用rem布局时，需先计算出高度再传值)
  2.使用了waterfall的组件不允许使用scoped,否则样式会有问题
*/

import Vue from 'vue'
	export default{
	    data(){
	      return{
	        data:[],
	        col:'5',
	      }
	    },
	    computed:{
	      itemWidth(){  
	        return (138*0.5*(document.documentElement.clientWidth/375)).toString()   #rem布局 计算宽度
	      },
	      gutterWidth(){
	        return (9*0.5*(document.documentElement.clientWidth/375)).toString()	#rem布局 计算x轴方向margin(y轴方向的margin自定义在css中即可)
	      }
	    },
	    methods:{
	      mix(){
	        this.$waterfall.mix()
	      },
	      switchCol(col){
	        this.col = col
	        console.log(this.col)
	      },
	      loadmore(index){
	        this.data = this.data.concat(this.data)
	      },
	      finish(){
	        console.log('finish')
	    }
	},
```
## <waterfall> Props
Name | Default | Type | Desc
-------- | -------- | -------- | --------
col | '2'  | String |  the number of column
width | null | String | the value of width 
gutterWidth | 10 | String | the value of margin
data | [] | Array | data

## <waterfall> Events
Name |   Desc
-------- | -------- 
loadmore |  Sliding to the bottom to load more

  
## $waterfall API
```
this.$waterfall.resize()   
this.$waterfall.mix()   
```
## License
Released under the MIT License.
