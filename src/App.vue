<style  lang="scss">
*{
  margin: 0;
  font-size: 0.12rem;
}
  .container-water-fall{
    // padding: 0 28rem;
    max-width: 500px;
    padding-top: 0.66rem;
    width: 100%;
    margin: 0 auto;
    box-sizing:border-box;
    h4{
        padding-top: 0.56rem;
        padding-bottom:0.28rem;
        font-family: PingFangSC-Medium;
      font-size: 0.36rem;
      color: #000000;
      letter-spacing: 0.01rem;
      text-align: justify;
    }
    .cell-item{
            width: 100%;
            // margin-bottom: 18rem;
            background: #ffffff;
            border: .02rem solid #F0F0F0;
            border-radius: .12rem .12rem .12rem .12rem;
            overflow: hidden;
            img{
                // border-radius: 12rem 12rem 0 0;
                width: 100%;
                height: auto;
                display: block;
            }
            .item-body{
              // border: 1rem solid #F0F0F0;
                padding: .12rem;
                .item-desc{
                    font-size: .12rem;
                    color: #333333;
                    line-height: .15rem;
                    // font-weight: bold;
                }
                .item-footer{
                    margin-top: .22rem;
                    position: relative;
                    display: flex;
                    align-items: center;
                    .avatar{
                        width: .44rem;
                        height: .44rem;
                        border-radius: 50%;
                        background-repeat: no-repeat;
                        background-size: contain;
                    }
                    .name{
                        max-width: 0.8rem;
                        margin-left: .05rem;
                        font-size: .12rem;
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
                            width: .28rem;
                            display: block;
                            
                        }
                        .like-total{
                            margin-left: .10rem;
                            font-size: .24rem;
                            color: #999999;
                        }
                    }
            
                }
            }
        }
        .fixed-bar{
          text-align: center;
          width: 100%;
          padding:0.1rem;
          background: white;
          position: fixed;
          top: 0%;
          left: 50%;
          transform:translateX(-50%);
          z-index: 1;
          button{
            border:0;
            background: #1ABC9C;
            padding: 0rem 0.12rem;
            color:white;
            line-height: 0.3rem;
          }
        }
  }
</style>
<template>
  <div class="container-water-fall" id="container-water-fall">
    <!-- <h1 style="position: fixed;left: 0;top: 100rem;font-style: 15rem;color:blue;z-index: 1000;">{{loadstatus}}</h1> -->
    <div class="fixed-bar"><button  @click="loadmore">loadmore</button> <button @click="mix">mix</button> <button @click="switchCol(2)">2列</button> <button @click="switchCol(3)">3列</button> <button><a style="color:black;" href="https://github.com/Rise-Devin/vue-waterfall2/blob/master/README.md">GITHUB</a></button> <span style="color:blue">滚动至底部可触发loadmore</span> </div>
    <waterfall :col='col'   :gutterWidth="gutterWidth" :threshold-value="thresholdValue"  :data="data" @finish="finish" @loadmore="loadmore"  @scroll="scroll" >
      <template >
        <div class="cell-item" v-for="(item,index) in data" >
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

<script>
/*
  注意:
  1.itemWidth需要与gutterWidth一起使用才会生效，否则会进行自适应宽度
  2.使用了waterfall的组件不允许使用scoped,否则样式会有问题
*/

import Vue from 'vue'
  export default{
    props:{
      title:String
    },
    data(){
      return{
        data:[],
        col:2,
        loadstatus:null,
        mounted:false,
        originData:[
        
        {
          img:'https://ci.xiaohongshu.com/3bf640b3-6f2e-5f71-a05e-61a6e6402faf?imageView2/2/w/400/q/50/format/jpg',
          avatar:'https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg',
          title:'贵妇级好用的水乳有哪些呢？千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试',
          user:'迷人的小妖精迷人的小妖精',
          like:'953'
        },
        {
          img:'https://ci.xiaohongshu.com/551c1ed4-11b9-5ed8-be36-777e415c20e7?imageView2/2/w/400/q/50/format/jpg',
          avatar:'https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg',
          title:'贵妇级好用的水乳有哪些呢？千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试',
          user:'迷人的小妖精迷人的小妖精',
          like:'952'
        },
        {
          img:'https://ci.xiaohongshu.com/cbd291a0-2141-5937-8457-7e5e9e932338?imageView2/2/w/400/q/50/format/jpg',
          avatar:'https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg',
          title:'贵妇级好用的水乳有哪些呢？千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试',
          user:'迷人的小妖精迷人的小妖精',
          like:'953'
        },
        {
          img:'https://ci.xiaohongshu.com/eb971d00-05ab-5b2a-ba03-52d8f544c42b?imageView2/2/w/400/q/50/format/jpg',
          avatar:'https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg',
          title:'贵妇级好用的水乳有哪些呢？千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试',
          user:'迷人的小妖精迷人的小妖精',
          like:'953'
        },
        {
          img:'https://ci.xiaohongshu.com/68f6a729-ecd4-5419-bd97-98c157c0f30f?imageView2/2/w/400/q/50/format/jpg',
          avatar:'https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg',
          title:'贵妇级好用的水乳有哪些呢？千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试',
          user:'迷人的小妖精迷人的小妖精',
          like:'953'
        },
        {
          img:'https://ci.xiaohongshu.com/eb971d00-05ab-5b2a-ba03-52d8f544c42b?imageView2/2/w/400/q/50/format/jpg',
          avatar:'https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg',
          title:'贵妇级好用的水乳有哪些呢？千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试',
          user:'迷人的小妖精迷人的小妖精',
          like:'953'
        },
        {
          img:'https://ci.xiaohongshu.com/9d5d58d0-7f91-5792-b8e3-25b13b5c1807?imageView2/2/w/400/q/50/format/jpg',
          avatar:'https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg',
          title:'贵妇级好用的水乳有哪些呢？千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试',
          user:'迷人的小妖精迷人的小妖精',
          like:'953'
        },
        {
          img:'https://ci.xiaohongshu.com/97247d43-f7ab-5755-a6a6-c5e6c293442f?imageView2/2/w/400/q/50/format/jpg',
          avatar:'https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg',
          title:'贵妇级好用的水乳有哪些呢？千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试',
          user:'迷人的小妖精迷人的小妖精',
          like:'953'
        },
        {
          img:'https://ci.xiaohongshu.com/7e4df2f1-a364-59e7-b7a8-b165abbecd69?imageView2/2/w/400/q/50/format/jpg',
          avatar:'https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg',
          title:'贵妇级好用的水乳有哪些呢？千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试',
          user:'迷人的小妖精迷人的小妖精',
          like:'953'
        },
        {
          img:'https://ci.xiaohongshu.com/19216d62-09cd-5d00-8116-0d60c9fb9102?imageView2/2/w/400/q/50/format/jpg',
          avatar:'https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg',
          title:'贵妇级好用的水乳有哪些呢？千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试',
          user:'迷人的小妖精迷人的小妖精',
          like:'953'
        },
        {
          img:'https://ci.xiaohongshu.com/f2a37ec1-3228-3c8c-92b6-bef12cea92f7?imageView2/2/w/400/q/50/format/jpg',
          avatar:'https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg',
          title:'贵妇级好用的水乳有哪些呢？千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试',
          user:'迷人的小妖精迷人的小妖精',
          like:'953'
        },
        {
          img:'https://ci.xiaohongshu.com/7e4df2f1-a364-59e7-b7a8-b165abbecd69?imageView2/2/w/400/q/50/format/jpg',
          avatar:'https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg',
          title:'贵妇级好用的水乳有哪些呢？千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试',
          user:'迷人的小妖精迷人的小妖精',
          like:'953'
        },
        {
          img:'https://ci.xiaohongshu.com/9d5d58d0-7f91-5792-b8e3-25b13b5c1807?imageView2/2/w/400/q/50/format/jpg',
          avatar:'https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg',
          title:'贵妇级好用的水乳有哪些呢？千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试',
          user:'迷人的小妖精迷人的小妖精',
          like:'953'
        },
        {
          img:'https://ci.xiaohongshu.com/9d5d58d0-7f91-5792-b8e3-25b13b5c1807?imageView2/2/w/400/q/50/format/jpg',
          avatar:'https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg',
          title:'贵妇级好用的水乳有哪些呢？千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试',
          user:'迷人的小妖精迷人的小妖精',
          like:'953'
        },
        {
          img:'https://ci.xiaohongshu.com/9438582e-7ba9-53e9-8cdc-9df9e7c1eac7?imageView2/2/w/400/q/50/format/jpg',
          avatar:'https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg',
          title:'贵妇级好用的水乳有哪些呢？千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试',
          user:'迷人的小妖精迷人的小妖精',
          like:'953'
        },
        {
          img:'https://ci.xiaohongshu.com/ec2e961a-31e4-573f-953d-5f199858dc76?imageView2/2/w/400/q/50/format/jpg',
          avatar:'https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg',
          title:'贵妇级好用的水乳有哪些呢？千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试',
          user:'迷人的小妖精迷人的小妖精',
          like:'953'
        },
      ]
      }
    },
    computed:{
      itemWidth(){ 
        if(!this.mounted)
        {
          return
        }
        return (1.38*100*(document.getElementById('container-water-fall').offsetWidth/320))
      },
      gutterWidth(){
        if(!this.mounted)
        {
          return
        }
        return (0.18*100*(document.getElementById('container-water-fall').offsetWidth/320))
      },
      thresholdValue(){
        if(!this.mounted)
        {
          return
        }
        return (1 * 100 * (document.getElementById('container-water-fall').offsetWidth /320))
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
      scroll(data){
        this.loadstatus = data
      },
      loadmore(num){
        // Vue.set(this.data[index],'liked',true)
        console.log('loadmore')
        this.data = this.data.concat(this.originData)
        // this.$waterfall.resize()
      },
      
      loadMore(){

        this.$waterfall.loadmore(this.originData)
      },
      finish(){
        console.log('finish')
      }
    },
    created(){
     
    },
    mounted(){
      var self = this;

      this.mounted = true

      this.data=[
        
        {
          img:'https://ci.xiaohongshu.com/3bf640b3-6f2e-5f71-a05e-61a6e6402faf?imageView2/2/w/400/q/50/format/jpg',
          avatar:'https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg',
          title:'贵妇级好用的水乳有哪些呢？千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试',
          user:'迷人的小妖精迷人的小妖精',
          like:'953'
        },
        {
          img:'https://ci.xiaohongshu.com/551c1ed4-11b9-5ed8-be36-777e415c20e7?imageView2/2/w/400/q/50/format/jpg',
          avatar:'https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg',
          title:'贵妇级好用的水乳有哪些呢？千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试',
          user:'迷人的小妖精迷人的小妖精',
          like:'952'
        },
        {
          img:'https://ci.xiaohongshu.com/cbd291a0-2141-5937-8457-7e5e9e932338?imageView2/2/w/400/q/50/format/jpg',
          avatar:'https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg',
          title:'贵妇级好用的水乳有哪些呢？千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试',
          user:'迷人的小妖精迷人的小妖精',
          like:'953'
        },
        {
          img:'https://ci.xiaohongshu.com/eb971d00-05ab-5b2a-ba03-52d8f544c42b?imageView2/2/w/400/q/50/format/jpg',
          avatar:'https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg',
          title:'贵妇级好用的水乳有哪些呢？千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试',
          user:'迷人的小妖精迷人的小妖精',
          like:'953'
        },
        {
          img:'https://ci.xiaohongshu.com/68f6a729-ecd4-5419-bd97-98c157c0f30f?imageView2/2/w/400/q/50/format/jpg',
          avatar:'https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg',
          title:'贵妇级好用的水乳有哪些呢？千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试',
          user:'迷人的小妖精迷人的小妖精',
          like:'953'
        },
        {
          img:'https://ci.xiaohongshu.com/eb971d00-05ab-5b2a-ba03-52d8f544c42b?imageView2/2/w/400/q/50/format/jpg',
          avatar:'https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg',
          title:'贵妇级好用的水乳有哪些呢？千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试',
          user:'迷人的小妖精迷人的小妖精',
          like:'953'
        },
        {
          img:'https://ci.xiaohongshu.com/9d5d58d0-7f91-5792-b8e3-25b13b5c1807?imageView2/2/w/400/q/50/format/jpg',
          avatar:'https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg',
          title:'贵妇级好用的水乳有哪些呢？千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试',
          user:'迷人的小妖精迷人的小妖精',
          like:'953'
        },
        {
          img:'https://ci.xiaohongshu.com/97247d43-f7ab-5755-a6a6-c5e6c293442f?imageView2/2/w/400/q/50/format/jpg',
          avatar:'https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg',
          title:'贵妇级好用的水乳有哪些呢？千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试',
          user:'迷人的小妖精迷人的小妖精',
          like:'953'
        },
        {
          img:'https://ci.xiaohongshu.com/7e4df2f1-a364-59e7-b7a8-b165abbecd69?imageView2/2/w/400/q/50/format/jpg',
          avatar:'https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg',
          title:'贵妇级好用的水乳有哪些呢？千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试',
          user:'迷人的小妖精迷人的小妖精',
          like:'953'
        },
        {
          img:'https://ci.xiaohongshu.com/19216d62-09cd-5d00-8116-0d60c9fb9102?imageView2/2/w/400/q/50/format/jpg',
          avatar:'https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg',
          title:'贵妇级好用的水乳有哪些呢？千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试',
          user:'迷人的小妖精迷人的小妖精',
          like:'953'
        },
        {
          img:'https://ci.xiaohongshu.com/f2a37ec1-3228-3c8c-92b6-bef12cea92f7?imageView2/2/w/400/q/50/format/jpg',
          avatar:'https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg',
          title:'贵妇级好用的水乳有哪些呢？千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试',
          user:'迷人的小妖精迷人的小妖精',
          like:'953'
        },
        {
          img:'https://ci.xiaohongshu.com/7e4df2f1-a364-59e7-b7a8-b165abbecd69?imageView2/2/w/400/q/50/format/jpg',
          avatar:'https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg',
          title:'贵妇级好用的水乳有哪些呢？千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试',
          user:'迷人的小妖精迷人的小妖精',
          like:'953'
        },
        {
          img:'https://ci.xiaohongshu.com/9d5d58d0-7f91-5792-b8e3-25b13b5c1807?imageView2/2/w/400/q/50/format/jpg',
          avatar:'https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg',
          title:'贵妇级好用的水乳有哪些呢？千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试',
          user:'迷人的小妖精迷人的小妖精',
          like:'953'
        },
        {
          img:'https://ci.xiaohongshu.com/9d5d58d0-7f91-5792-b8e3-25b13b5c1807?imageView2/2/w/400/q/50/format/jpg',
          avatar:'https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg',
          title:'贵妇级好用的水乳有哪些呢？千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试',
          user:'迷人的小妖精迷人的小妖精',
          like:'953'
        },
        {
          img:'https://ci.xiaohongshu.com/9438582e-7ba9-53e9-8cdc-9df9e7c1eac7?imageView2/2/w/400/q/50/format/jpg',
          avatar:'https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg',
          title:'贵妇级好用的水乳有哪些呢？千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试',
          user:'迷人的小妖精迷人的小妖精',
          like:'953'
        },
        {
          img:'https://ci.xiaohongshu.com/ec2e961a-31e4-573f-953d-5f199858dc76?imageView2/2/w/400/q/50/format/jpg',
          avatar:'https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg',
          title:'贵妇级好用的水乳有哪些呢？千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试',
          user:'迷人的小妖精迷人的小妖精',
          like:'953'
        },
      ]
    }
  }
</script>