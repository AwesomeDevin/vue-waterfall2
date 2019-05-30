

## vue-waterfall2 
* 1.不需知道元素宽高，可宽高自适应
* 2.自定义程度高
* 3.支持懒加载(lazy-src)
* 4.提供Event:loadmore (pc/android端滑动到底部触发，ios端需要上拉触发) 
* 5.使用极为简便,适用于PC/ios/android


有问题欢迎提issues、suggestions;Thank you for your Star !   
[welcome to my blog(JS/前端工程化/Python/算法)  ！！！](https://github.com/AwesomeDevin/blog)

![移动端效果](https://raw.githubusercontent.com/AwesomeDevin/vue-waterfall2/master/src/assets/gifhome_240x514_17s.gif)

## Demo
[Demo](http://47.105.188.15:3001/index.html)


[GITHUB](https://github.com/Rise-Devin/vue-waterfall2)
```
npm i 
npm run dev
```

## Installation
```
 npm i vue-waterfall2@latest --save
```

## Usage
注意:
  *  1.`gutterWidth`需要与`width`一起使用才会生效，否则会进行自适应宽度(使用rem布局时，需先计算出自适应后的宽度再传值)</font>
  *  2.使用了`waterfall`的父组件, style标签 不允许使用`scoped`,否则样式会有问题 
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

    <waterfall :col='col' :width="itemWidth" :gutterWidth="gutterWidth"  :data="data"  @loadmore="loadmore"  @scroll="scroll"  >
      <template >
        <div class="cell-item" v-for="(item,index) in data">
          <img v-if="item.img" :src="item.img" alt="加载错误"  /> 
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
  1.gutterWidth需要与width一起使用才会生效，否则会进行自适应宽度(使用rem布局时，需先计算出自适应后的宽度再传值)
  2.使用了`waterfall`的父组件, style标签 不允许使用`scoped`,否则样式会有问题 
*/

import Vue from 'vue'
	export default{
	    data(){
	        return{
	            data:[],
	            col:5,
	        }
	    },
	    computed:{
	      itemWidth(){  
	            return (138*0.5*(document.documentElement.clientWidth/375))  #rem布局 计算宽度
	      },
	      gutterWidth(){
	            return (9*0.5*(document.documentElement.clientWidth/375))	#rem布局 计算x轴方向margin(y轴方向的margin自定义在css中即可)
	      }
	    },
	    methods:{
            scroll(scrollData){
                console.log(scrollData)
            },
	        switchCol(col){
	            this.col = col
	            console.log(this.col)
	      },
	      loadmore(index){
	            this.data = this.data.concat(this.data)
	      }
	    }
	}
```
## <waterfall> 属性
Name | Default | Type | Desc
-------- | -------- | -------- | --------
col | 2  | Number |  列数
width | null | Number | 宽度
gutterWidth | 10 | Number | 间隔的宽度
data | [] | Array | 数据
isTransition | true | Boolean | 加载图片是否使用过渡动画
  
  
## 懒加载
对于需要使用懒加载的图片，需要使用`lazy-src`属性
```html
<waterfall :col='col'   :data="data"     >
  <template>
     <img v-if="item.img" :lazy-src="item.img" alt="加载错误"  />
  </template>
</waterfall>
```

## <waterfall> Events
Name | Data |   Desc
-------- | --- | -------- 
loadmore | null | 滚动到底部触发
scroll | obj | 获取滚动时的event对象
  
## $waterfall API
```
this.$waterfall.forceUpdate()   //forceUpdate
```
