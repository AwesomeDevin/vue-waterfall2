


#### [中文版文档](https://github.com/AwesomeDevin/vue-waterfall2/blob/master/CHINESE-README.md)
# vue-waterfall2 
 1. Auto adaption for width and height
 2. High degree of customization
 3. Support lazy load(attribute with `lazy-src`)
 4. Apply to PC/mobile

![The demo on mobile device](https://raw.githubusercontent.com/AwesomeDevin/vue-waterfall2/master/src/assets/gifhome_240x514_17s.gif)


If you have some questions,welcome to describe issues、suggestions;Thank you for your Star !   
[Welcome to my blog  ！！！](https://github.com/AwesomeDevin/blog)


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

## <waterfall> Props
Name | Default | Type | Desc | Necessary
-------- | -------- | -------- | -------- | ------
height | - | String | Container height (null for window scrolling event, not null for container scrolling) | false
col | 2  | Number |  the number of column | false
width | - | Number | the value of width | false
gutterWidth | 10 | Number | the value of margin | false
data | [] | Array | data | true
isTransition | true | Boolean | load image with transition | false
lazyDistance | 300 | Number | the distance of image lazy loading | false
loadDistance | 300 | Number | the distance of loadmore | false
  
## Lazy Load
For images that need to be loaded lazily, the 'lazy-src' attribute needs to be used
```html
<waterfall :col='col'   :data="data"     >
  <template>
     <img v-if="item.img" :lazy-src="item.img" alt="load error"  />
  </template>
</waterfall>
```

## <waterfall> Events
Name | Data |   Desc
-------- | --- | -------- 
loadmore | - | Scroll to the bottom to trigger on PC /  pull up to trigger on Mobile  
scroll | info | Scroll to trigger and get the infomation of scroll
finish | - | finish render
  
## $waterfall API
```
this.$waterfall.forceUpdate()   //forceUpdate
```

## Usage
Notes:
  1. attribute `gutterWidth` needs to be used together with `width` to be effective, otherwise it will be adaptive width (when using `rem` to layout, calculate the width after adaptation before passing the value).
  2. Use the parent component of 'waterfall' if there is a problem with the style, remove CSS `scoped` and try it
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
  notes:
  1. attribute `gutterWidth` needs to be used together with `width` to be effective, otherwise it will be adaptive width (when using `rem` to layout, calculate the width after adaptation before passing the value).
  2. Use the parent component of 'waterfall' if there is a problem with the style, remove CSS 'scoped' and try it
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
	            return (138*0.5*(document.documentElement.clientWidth/375))  #rem to layout, Calculate the value of width 
	      },
	      gutterWidth(){
	            return (9*0.5*(document.documentElement.clientWidth/375)) #rem to layout, Calculate the value of margin 
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
