<style  lang="scss">
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
    .cell-item{
            width: 100%;
            // margin-bottom: 18px;
            background: #ffffff;
            border: 2px solid #F0F0F0;
            border-radius: 12px 12px 12px 12px;
            overflow: hidden;
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
                            font-size: 24px;
                            color: #999999;
                        }
                    }
            
                }
            }
        }
  }
</style>
<template>
  <div class="container-water-fall">
    <h1 style="position: fixed;left: 0;top: 20px;font-style: 15px;color:blue;z-index: 1000;">{{loadstatus}}</h1>
    <div><button  @click="loadmore">loadmore</button> <button @click="mix">mix</button> <button @click="switchCol('5')">5列</button> <button @click="switchCol('8')">8列</button> <button @click="switchCol('10')">10列</button> <a style="color:red;" href="https://github.com/Rise-Devin/vue-waterfall2/blob/master/README.md">GITHUB</a> <b style="color:blue">滚动至底部可触发loadmore</b> </div>
    <waterfall :col='col'  :gutterWidth="gutterWidth"  :data="data" @finish="finish" @loadmore="loadmore"  @scroll="scroll" >
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
        col:'5',
        loadstatus:null,
        originData:[{
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
        },]
      }
    },
    computed:{
      itemWidth(){ 
        return (138*0.5*(document.documentElement.clientWidth/375)).toString()
      },
      gutterWidth(){
        return (9*0.5*(document.documentElement.clientWidth/375)).toString()
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
    mounted(){
      var self = this;


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