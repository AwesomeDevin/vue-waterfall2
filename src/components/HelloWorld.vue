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
            margin-bottom: 10px;
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
    <div class="btn-group"><button style="width:250px;"  class="blue-light"><router-link to="/lazy">To Lazy Demo (前往懒加载Demo)</router-link></button> <button @click="loadmore">LoadMore</button><button @click="switchCol(5)">5column(列)</button> <button @click="switchCol(8)">8column(列)</button> <button @click="switchCol(10)">10column(列)</button> <button @click="reset">reset(重置)</button> <a style="color:red;" href="https://github.com/Rise-Devin/vue-waterfall2/blob/master/README.md" target="_blank" >GITHUB</a> <b style="color:blue">滚动至底部可触发loadmore</b>
    
    <div class="githubdata" @click="toGitHub"><button  class="blue-light"><img src="../assets/star.png"  /> Star <span>{{gitHubData.stargazers_count}}</span></button><button  class="blue-light"><img src="../assets/fork.png"  /> Fork <span>{{gitHubData.forks_count}}</span></button></div>  </div>
    <waterfall :col='col'   :data="data"   @loadmore="loadmore" @scroll="scroll" @finish="finish"  >
      <template >
        <div class="cell-item" v-for="(item,index) in data" :key="index"  >
          <img v-if="item.img" :src="item.img" alt="加载错误"  />
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
        originData:[{
          img:'https://img13.360buyimg.com/mobilecms/s140x140_jfs/t1/82337/35/12286/110292/5d9c2403Ea23a00ce/c3722cdd731bf964.jpg.webp',
          avatar:'https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg',
          title:'最近浴室新宠，日系神仙好物了解一下～',
          user:'www',
          like:'953'
        },
        {
          img:'http://img1.imgtn.bdimg.com/it/u=3153915673,263987064&fm=26&gp=0.jpg',
          avatar:'https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg',
          title:'150元搞定全套护肤品，这些护肤好物必须交出来！',
          user:'迷人的小妖精迷人的小妖精',
          like:'952'
        },
        {
          img:'https://img14.360buyimg.com/pop/s590x470_jfs/t1/79097/37/11077/39353/5d8ad63dEf4db3726/a078845a0cbf09c1.jpg.webp',
          avatar:'https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg',
          title:'贵妇级好用的水乳有哪些呢？千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试',
          user:'迷人的小妖精迷人的小妖精',
          like:'953'
        },
        {
          img:'http://img3.imgtn.bdimg.com/it/u=587588302,561685727&fm=26&gp=0.jpg',
          avatar:'https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg',
          title:'贵妇级好用的水乳有哪些呢？千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试',
          user:'迷人的小妖精迷人的小妖精',
          like:'953'
        },
        {
          img:'https://img10.360buyimg.com/img/jfs/t1/56840/19/12953/216991/5d9bfc90Ea8897588/8f0aa267554fb972.png.webp',
          avatar:'https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg',
          title:'贵妇级好用的水乳有哪些呢？千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试',
          user:'迷人的小妖精迷人的小妖精',
          like:'953'
        },
        {
          img:'https://image.watsons.com.cn//upload/eb4fb58f.jpg?w=1080&h=1080&x-oss-process=image/resize,w_1080',
          avatar:'https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg',
          title:'贵妇级好用的水乳有哪些呢？千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试',
          user:'迷人的小妖精迷人的小妖精',
          like:'953'
        },
        {
          img:'https://image.watsons.com.cn//upload/71d19462.jpg?x-oss-process=image/resize,w_1080',
          avatar:'https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg',
          title:'贵妇级好用的水乳有哪些呢？千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试',
          user:'迷人的小妖精迷人的小妖精',
          like:'953'
        },
        {
          img:'https://image.watsons.com.cn//upload/415f984f.jpeg?w=828&h=1104&x-oss-process=image/resize,w_1080',
          avatar:'https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg',
          title:'贵妇级好用的水乳有哪些呢？千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试',
          user:'迷人的小妖精迷人的小妖精',
          like:'953'
        },
        {
          img:'https://image.watsons.com.cn//upload/5c3e51e4.jpg?w=720&h=960&x-oss-process=image/resize,w_1080',
          avatar:'https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg',
          title:'夏天用这款姨妈巾，让你体验真正的清爽',
          user:'迷人的小妖精迷人的小妖精',
          like:'953'
        },
        {
          img:'https://image.watsons.com.cn//upload/92761043.JPG?w=1000&h=999&x-oss-process=image/resize,w_1080',
          avatar:'https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg',
          title:'最近浴室新宠，日系神仙好物了解一下～',
          user:'迷人的小妖精迷人的小妖精123',
          like:'953'
        },{
          img:'https://image.watsons.com.cn//upload/da61c0f5.jpg?w=959&h=958&x-oss-process=image/resize,w_1080',
          avatar:'https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg',
          title:'贵妇级好用的水乳有哪些呢？千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试',
          user:'迷人的小妖精迷人的小妖精',
          like:'953'
        },
        {
          img:'https://image.watsons.com.cn//upload/fcd68df4.jpg?w=1080&h=1080&x-oss-process=image/resize,w_1080',
          avatar:'https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg',
          title:'贵妇级好用的水乳有哪些呢？千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试',
          user:'迷人的小妖精迷人的小妖精',
          like:'953'
        },
        {
          img:'https://image.watsons.com.cn//upload/bef41e67.JPG?w=712&h=534&x-oss-process=image/resize,w_1080',
          avatar:'https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg',
          title:'夏天用这款姨妈巾，让你体验真正的清爽',
          user:'迷人的小妖精迷人的小妖精',
          like:'953'
        },
        {
          img:'https://image.watsons.com.cn//upload/25ab20fe.JPG?w=1000&h=1200&x-oss-process=image/resize,w_1080',
          avatar:'https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg',
          title:'贵妇级好用的水乳有哪些呢？千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试1',
          user:'迷人的小妖精迷人的小妖精123',
          like:'953'
        },{
          img:'https://ci.xiaohongshu.com/eb971d00-05ab-5b2a-ba03-52d8f544c42b?imageView2/2/w/400/q/50/format/jpg',
          avatar:'https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg',
          title:'贵妇级好用的水乳有哪些呢？千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试',
          user:'迷人的小妖精迷人的小妖精',
          like:'953'
        },
        {
          img:'https://image.watsons.com.cn//upload/4a3c1788.jpg?w=823&h=1000&x-oss-process=image/resize,w_1080',
          avatar:'https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg',
          title:'夏天用这款姨妈巾，让你体验真正的清爽',
          user:'迷人的小妖精迷人的小妖精',
          like:'953'
        },
        {
          img:'https://image.watsons.com.cn//upload/0a89e6b7.jpg?w=1080&h=1920&x-oss-process=image/resize,w_1080',
          avatar:'https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg',
          title:'贵妇级好用的水乳有哪些呢？千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试',
          user:'迷人的小妖精迷人的小妖精',
          like:'953'
        },
        {
          img:'https://image.watsons.com.cn//upload/99253111.jpg?w=1080&h=1920&x-oss-process=image/resize,w_1080',
          avatar:'https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg',
          title:'贵妇级好用的水乳有哪些呢？千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试1',
          user:'迷人的小妖精迷人的小妖精123',
          like:'953'
        },{
          img:'https://image.watsons.com.cn//upload/13afe9a7.jpg?x-oss-process=image/resize,w_1080',
          avatar:'https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg',
          title:'贵妇级好用的水乳有哪些呢？千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试',
          user:'迷人的小妖精迷人的小妖精',
          like:'953'
        },
        {
          img:'https://image.watsons.com.cn//upload/98c7c4c3.jpg?w=1210&h=1210&x-oss-process=image/resize,w_1080',
          avatar:'https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg',
          title:'贵妇级好用的水乳有哪些呢？千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试',
          user:'迷人的小妖精迷人的小妖精',
          like:'953'
        },
        {
          img:'https://image.watsons.com.cn//upload/54c5d7b4.jpg?w=828&h=991&x-oss-process=image/resize,w_1080',
          avatar:'https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg',
          title:'贵妇级好用的水乳有哪些呢？千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试',
          user:'迷人的小妖精迷人的小妖精',
          like:'953'
        },
        {
          img:'https://image.watsons.com.cn//upload/71d19462.jpg?x-oss-process=image/resize,w_1080',
          avatar:'https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg',
          title:'贵妇级好用的水乳有哪些呢？千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试1',
          user:'迷人的小妖精迷人的小妖精123',
          like:'953'
        },{
          img:'https://image.watsons.com.cn//upload/642cb83c.jpeg?w=1080&h=1080&x-oss-process=image/resize,w_1080',
          avatar:'https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg',
          title:'贵妇级好用的水乳有哪些呢？千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试',
          user:'迷人的小妖精迷人的小妖精',
          like:'953'
        },
        {
          img:'https://image.watsons.com.cn//upload/31e42833.jpg?w=750&h=750&x-oss-process=image/resize,w_1080',
          avatar:'https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg',
          title:'贵妇级好用的水乳有哪些呢？千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试',
          user:'迷人的小妖精迷人的小妖精',
          like:'953'
        },
        {
          img:'https://image.watsons.com.cn//upload/92761043.JPG?w=1000&h=999&x-oss-process=image/resize,w_1080',
          avatar:'https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg',
          title:'贵妇级好用的水乳有哪些呢？千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试',
          user:'迷人的小妖精迷人的小妖精',
          like:'953'
        },
        {
          img:'https://image.watsons.com.cn//upload/60cc9b8e.jpg?w=991&h=744&x-oss-process=image/resize,w_1080',
          avatar:'https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg',
          title:'贵妇级好用的水乳有哪些呢？千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试1',
          user:'迷人的小妖精迷人的小妖精123',
          like:'953'
        },{
          img:'https://image.watsons.com.cn//upload/b709ed72.jpg?w=552&h=414&x-oss-process=image/resize,w_1080',
          avatar:'https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg',
          title:'贵妇级好用的水乳有哪些呢？千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试',
          user:'迷人的小妖精迷人的小妖精',
          like:'953'
        },
        {
          img:'https://image.watsons.com.cn//upload/137b50b0.jpg?x-oss-process=image/resize,w_1080',
          avatar:'https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg',
          title:'贵妇级好用的水乳有哪些呢？千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试',
          user:'迷人的小妖精迷人的小妖精',
          like:'952'
        },
        {
          img:'https://image.watsons.com.cn//upload/31e42833.jpg?w=750&h=750&x-oss-process=image/resize,w_1080',
          avatar:'https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg',
          title:'贵妇级好用的水乳有哪些呢？千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试',
          user:'迷人的小妖精迷人的小妖精',
          like:'953'
        },]
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
      finish(){
        console.error('finish')
      },
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
      scroll(data){
        // console.log(data)
      },

      loadmore(num){
        // Vue.set(this.data[index],'liked',true)
        // const obj = {c:123,d:456}
        // const {c:a,d:b} = obj
        // console.log('loadmore',num)
        this.loading = true
        setTimeout(()=>{
          this.data = this.data.concat(this.originData,this.originData)
          this.loading = false
          // console.log(this.data.length)
        },1000)
        // this.$waterfall.resize()
      },

    },
    mounted(){
      var self = this;
      this.data=this.originData
      this.getGitHub()
      // this.data = []
    }
  }
</script>