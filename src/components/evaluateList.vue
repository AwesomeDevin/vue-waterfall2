<style  lang="less" scoped>
*{
  margin: 0;
}
  .container-water-fall{
    // padding: 0 28px;
    width: 100vw;
    box-sizing:border-box;
    h4{
        padding-top: 56px;
        padding-bottom:28px;
        font-family: PingFangSC-Medium;
      font-size: 36px;
      color: #000000;
      letter-spacing: 1px;
      text-align: justify;
    }
    button{
      background-color: #ff0;
      color: #24292e;
      border: 1px solid rgba(27,31,35,.2);
      border-radius: .25em;
      width: 100px;
      line-height: 26px;
      font-size: 13px;
      margin: 4px 0;
      margin-right: 4px;
      cursor: pointer;
      outline: none;
      &.blue-light{
        background: #27fbc2;
      }
    }
    button:hover{
      background-image: linear-gradient(-180deg,#fafbfc,#ccc 90%);
    }
    
    .cell-item{
            width: 100%;
            // margin-bottom: 18px;
            background: #ffffff;
            border: 2px solid #F0F0F0;
            border-radius: 12px 12px 12px 12px;
            overflow: hidden;
            box-sizing:border-box;
            img{
                // border-radius: 12px 12px 0 0;
                width: 100%;
                height: auto;
                display: block;
            }
            .item-body{
              // border: 1px solid #F0F0F0;
                padding: 12px;
                .item-desc{
                    font-size: 15px;
                    color: #333333;
                    line-height: 15px;
                    font-weight: bold;
                }
                .item-footer{
                    margin-top: 22px;
                    position: relative;
                    display: flex;
                    align-items: center;
                    .avatar{
                        width: 44px;
                        height: 44px;
                        border-radius: 50%;
                        background-repeat: no-repeat;
                        background-size: contain;
                    }
                    .name{
                        max-width: 150px;
                        margin-left: 10px;
                        font-size: 14px;
                        color: #999999;
                    }
                    .like{
                        position: absolute;
                        right: 0;
                        display: flex;
                        align-items: center;
                        &.active{
                          i{
                          }
                          .like-total{
                            color:#FF4479;
                          }
                        } 
                        i{
                            width: 28px;
                            display: block;
                            
                        }
                        .like-total{
                            margin-left: 10px;
                            font-size: 12px;
                            color: #999999;
                        }
                    }
            
                }
            }
        }
  }
  .githubdata{
    float: right;
    margin-right: 90px;
    img{
      width: 14px;
      // height: 16px;
    }
  }
</style>
<template>
  <div class="container-water-fall">
    <!-- <h1 style="position: fixed;left: 0;top: 100px;font-style: 15px;color:blue;z-index: 1000;">{{loadstatus}}</h1> -->
    <div class="btn-group"><button style="width:250px;"  class="blue-light"><router-link to="/">To Common Demo (前往普通Demo)</router-link></button><button @click="loadmore">LoadMore</button> <button @click="switchCol(5)">5column(列)</button> <button @click="switchCol(8)">8column(列)</button> <button @click="switchCol(10)">10column(列)</button> <button @click="reset">reset(重置)</button> <a style="color:red;" href="https://github.com/Rise-Devin/vue-waterfall2/blob/master/README.md" target="_blank" >GITHUB</a> <b style="color:blue">滚动至底部可触发loadmore</b>
    
    <div class="githubdata" @click="toGitHub"><button  class="blue-light"><img src="../assets/star.png"  /> Star <span>{{gitHubData.stargazers_count}}</span></button><button  class="blue-light"><img src="../assets/fork.png"  /> Fork <span>{{gitHubData.forks_count}}</span></button></div>  </div>
    <waterfall :col='col'   :data="data"  @loadmore="loadmore" :lazyDistance="50"  >
      <template >
        <div class="cell-item" v-for="(item,index) in data" :key="index"  >
          <img v-if="item.img"  :lazy-src="item.img" alt="加载错误"  />
          <div class="item-body">
              <div class="item-desc">{{item.title}}</div>
              <div class="item-footer">
                  <div v-if="item.avatar" class="avatar" :style="{backgroundImage : `url(${item.avatar})` }"></div>
                  <div class="name">{{item.user}}</div>
                  <div class="like" :class="item.liked?'active':''" >
                      <i ></i>
                      <div class="like-total">{{item.like}}</div>  
                  </div>
              </div>
          </div>
        </div>
      </template>
    </waterfall>
    <loading :show="loading" />
  </div>
</template>

<script>
/*
  注意:
  1.itemWidth需要与gutterWidth一起使用才会生效，否则会进行自适应宽度
  2.使用了waterfall的组件不允许使用scoped,否则样式会有问题
*/
// import Vue from 'vue'
import loading from './loading'
import json from './data.json'

// import  routerLink  from 'vue-router'
  export default{
    props:{
      title:String
    },
    components:{
      loading
    },
    data(){
      return{
        data:[],
        col:5,
        loading:false,
        gitHubData:{},
        originData:json
      }
    },
    computed:{
      itemWidth(){ 
        return (133*0.5*(document.documentElement.clientWidth/375))
      },
      gutterWidth(){
        return (10*0.5*(document.documentElement.clientWidth/375))
      }
    },
    methods:{
      toGitHub(){
        window.open("https://github.com/Rise-Devin/vue-waterfall2/blob/master/README.md",'_blank')
      },
      reset(){
        this.data = []
      },

      switchCol(col){
        this.col = col
        // console.log(this.col)
      },
      getGitHub(){
        fetch('https://api.github.com/repos/AwesomeDevin/vue-waterfall2').then((data)=>{
          data.json().then((res)=>{
            // console.log(res)
            this.gitHubData = res
          })
        })
      },

      loadmore(num){
        console.log('loadmore')
        this.loading = true
        setTimeout(()=>{
          this.data = this.data.concat(this.originData,this.originData)
          this.loading = false
        },1000)
      },

    },
    mounted(){
      var self = this;
      this.data = this.originData
      this.getGitHub()
    }
  }
</script>