

## vue-waterfall2 
* 1.不需知道元素宽高，可宽高自适应
* 2.支持无图/视频/banner等,内容自定义程度高
* 3.支持懒加载(lazy-src)
* 4.提供Event:loadmore (pc/android端滑动到底部触发，ios端需要上拉触发) 
* 5.使用极为简便, 适用于PC/ios/android


有问题欢迎提issues、suggestions;Thank you for your Star !   
[welcome to my blog(JS/前端工程化/Python/算法)  ！！！](https://github.com/AwesomeDevin/blog)

![移动端效果](https://raw.githubusercontent.com/AwesomeDevin/vue-waterfall2/master/src/assets/gifhome_240x514_17s.gif)

## Demo
[Common Demo](http://175.24.232.69:8080/vue-waterfall/index.html#/)  
[Lazyload Demo](http://175.24.232.69:8080/vue-waterfall/index.html#/lazy)   
[Code Demo](https://codesandbox.io/embed/vue-template-99ps6)



[GITHUB](https://github.com/Rise-Devin/vue-waterfall2)
```
npm i 
npm run dev
```

## Installation
```
 npm i vue-waterfall2@latest --save
```

## <waterfall> 属性
Name | Default | Type | Desc | Necessary
-------- | -------- | -------- | -------- | -------
height | - | String | 容器高度(height为空监听的是window的滚动事件，不为空则监听容器滚动，loadmore无法触发时，可尝试设置容器高度) | false
col | 2  | Number |  列数 | false
width | - | Number | 宽度 | false
gutterWidth | 10 | Number | 间隔的宽度 | false
data | [] | Array | 数据 | true
isTransition | true | Boolean | 加载图片是否使用过渡动画 | false
lazyDistance | 300 | Number | 触发图片懒加载的距离  | false
loadDistance | 300 | Number | 触发上拉加载更多的距离 | false
  
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
loadmore | - | 滚动到底部触发
scroll | info | 获取滚动时的event对象
finish | - | 完成元素渲染
  
## $waterfall API
```
this.$waterfall.forceUpdate()   //forceUpdate
```

## Usage
注意:
 1.  使用`rem`布局时，需先计算出自适应后的宽度再传值
 2.  使用了`waterfall`的父组件,如果样式存在问题，可去掉css `scoped`尝试一下
##### main.js
```javascript
import waterfall from 'vue-waterfall2'
Vue.use(waterfall)
```
##### app.vue
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
  1. 使用`rem`布局时，需先计算出自适应后的宽度再传值
  2. 使用了`waterfall`的父组件,如果样式存在问题，可去掉css `scoped`尝试一下
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

## 如果你有任何研发问题，可以加入此群进行技术交流 📖.
<img src="https://github.com/AwesomeDevin/AwesomeDevin/assets/22369504/d02c922a-1b3c-49ea-99de-d4891ff525d9" width="250" />
