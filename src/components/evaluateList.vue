<style lang="less" scoped>
    .merchant .merchant-body .merchant-body-rightsider{
        width: 1180px;
    }
    .actlist_wrap{
        background-color: #fff;
        margin-top: 24px;
        min-height:1000px;
        .actlist-nav{
            padding-top: 20px;
            .ivu-tabs-nav .ivu-tabs-tab:hover{
                color: #883bdf;
            }
        }
        .btn_color_883bdf{
            color: #883bdf;
            border: 1px solid #883bdf !important;
        }
    }
    .act_msg_wrap{
        padding: 20px;
        .search-wrap{
            padding: 20px;
            margin-bottom: 30px;
            background-color: #fafafa;
            .search-row{
                .search-title{
                    display: inline-block;
                    height: 32px;
                    width: 100%;
                    padding-right: 5px;
                    line-height: 32px;
                    text-align: right;
                    color: #101010;
                    font-size: 14px;
                }
            }
            .shop-list-wrap{
                margin:20px 0;
                .search-title{
                    display: inline-block;
                    height: 32px;
                    line-height: 32px;
                    color: #101010;
                    font-size: 14px;
                }
                .shopname{
                    color: #101010;
                    background-color: #fff;
                    margin-right:10px;
                    vertical-align: top;
                }
            }
        }
        .search-res{
            height: 100%;
            .res-header{
                padding: 10px 0;
                background-color: #f8f8f8;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-bottom: 10px;
                .head{
                    flex: 2;
                    text-align: center;
                    color: #333;
                    font-size: 14px;
                }
                .head-small{
                    flex: 1;
                    text-align: center;
                    font-size: 14px;
                    color: #333;
                }
            }
            .res-msg{
                border-radius: 4px;
                font-size: 14px;
                border: 1px solid #ddd;
                margin-bottom: 20px;
                .msg-body{
                    padding: 20px;
                    display: flex;
                    .detail-img{
                        width: 130px;
                        .img-wrap{
                            width: 130px;
                            height: 130px;
                            overflow:hidden;
                            margin-bottom: 10px;
                            img{
                                width: 100%;
                            }
                        }
                        p{
                            text-align: center;
                            color: #101010;
                            font-size: 14px;
                        }
                        .detail-shopname{
                            color: #333;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                        }
                        .detail-shoplink{
                            color: #1E9FFF;
                            font-size: 12px;
                        }
                    }
                    .detail-item{
                        flex: 1;
                        display: flex;
                        align-items: start;
                        justify-content: space-around;
                        .item{
                            height: 180px;
                            padding-bottom: 40px;
                            display: flex;
                            flex-flow: column;
                            justify-content: center;
                            align-items: center;
                            border-right: 1px solid rgba(204,204,204,.2);
                            .order-item-left{
                                width:190px;
                                padding-left:10px;
                            }
                            .item-left{
                                width:220px;
                            }
                            .item-center{
                                width:200px;
                                padding-left:20px;
                            }
                            .item-right{
                                width:200px;
                                padding-left: 30px;
                                .title{
                                    width:30px;
                                }
                            }
                            .type-promote{
                                width:240px;
                                padding-left:10px;
                                span:first-child{
                                    width:80px;
                                }
                                span:last-child{
                                    width:150px;
                                }
                            }
                            p{
                                line-height: 1.8;
                                span:first-child{
                                    text-align: right;
                                }
                                span:last-child{
                                    text-align: left;
                                    padding-left: 4px;
                                }
                            }
                            span{
                                display: inline-block;
                                width: 50%;
                                color: #666;
                                font-size: 14px;
                            }
                            .act-color-333{
                                color: #333;
                                vertical-align: top;
                            }
                            .act-color-883bdf{
                                color: #883bdf;
                            }
                            .act-color-ff4456{
                                color: #ff4456;
                            }
                            .w-group-l{
                                width: 65%;
                            }
                            .w-group-r{
                                width: 30%;
                            }
                            .first-title{
                                width:40%;
                            }
                            .first-value{
                                width:50%;
                            }
                        }
                        .overview-item{
                            height: 100%;
                            padding-bottom: 20px;
                            display: flex;
                            flex:1;
                            flex-flow: column;
                            justify-content: center;
                            align-items: center;
                            color: #101010;
                            .title{
                                text-align: right;
                                display: inline-block;
                                color:#666;
                                line-height: 1.8;
                            }
                            .item-gender{
                                width:100%;
                                line-height:1.8;
                                .title{
                                    width: 50px;
                                }
                            }
                            .item-age{
                                width: 130px;
                                line-height:1.8;
                                .title{
                                    width: 80px;
                                }
                            }
                        }
                    }
                    .detail-btn{
                        padding-bottom: 20px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        flex-flow: column;

                        .bottom-btn{
                            width: 95px;
                            margin: 0px 0px 20px 20px;
                            color: #883bdf;
                            border: 1px solid #883bdf;
                            background-color: #fff;
                        }
                    }
                }
                .msg-bottom{
                    min-height: 40px;
                    padding: 10px 0;
                    margin: 0 20px;
                    text-align: right;
                    border-top: 1px solid #ddd;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    .bottom-left{
                        display: inline-block;
                        text-align: left;
                    }
                    .bottom-right{
                        display: inline-block;
                        text-align: right;
                    }
                    .bottom-time-tip{
                        color: #101010;
                        font-size: 12px;
                        margin-left: 10px;
                        .ivu-icon{
                            margin-right: 2px;
                            font-size:16px;
                            vertical-align: sub;
                        }
                    }
                    .orderid-wrap{
                        .orderid-line{
                            text-align: left;
                            line-height: 2;
                        }
                        .orderid-title{
                            display: inline-block;
                            margin: 0 10px;
                            color: #999;
                        }
                        .orderid-value{
                            display: inline-block;
                            width: 700px;
                            vertical-align: top;
                            word-break: break-all;
                        }
                        .question-img{
                            width: 375px;
                        }
                    }
                    .tkl-wrap{
                        width: 100%;
                        text-align: left;
                        .tkl-title{
                            display: inline-block;
                            width: 126px;
                            margin: 0 10px;
                            color: #999;
                            vertical-align: middle;
                        }
                        .tkl-value{
                            display: inline-block;
                            width: 71%;
                            vertical-align: middle;
                            color:#333;
                        }
                    }
                }
            }
            .res-noresult{
                height: 500px;
                display: flex;
                justify-content: center;
                align-items: center;
                span{
                    font-size:30px;
                    color: #ccc;
                }
            }
            .res-pagenation{
                text-align: center;
                padding: 60px 0 30px;
            }
        }
    }
    .card{
        position:relative;
        font-size: 14px;
        text-align: center;
        margin-bottom: 10px;
        border-radius: 12px;
        border:1px solid #BBB;
        img{
            cursor: pointer;
            -moz-border-radius: 12px;
            -webkit-border-radius: 12px;
            border-radius:12px 12px 0 0;
        }
        .label{
            width: 82px;
            height: 28px;
            position: absolute;
            right: 0;
            line-height: 28px;
            color: #FFF;
            background: #883BDF;
            z-index: 1;
        }
        .content{
            text-align: left;
            font-size: 12px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp:2;
        }
        .clear{
            clear:both;
        }
        .but{
            line-height: 40px;
            border-top: 1px solid #BBB;
            clear:both;
            height: 40px;
        }
        .but:hover{
            color: #FFF;
            background: #883BDF;
            border-radius: 0 0 12px 12px;
        }
        .fix{
            zoom:1;
            .left{
                width: 50%;
                height: 40px;
                line-height: 40px;
                float: left;
                text-align: center;
                border-right: 1px solid #BBB;
                border-top: 1px solid #BBB;
            }
            .left:hover{
                color: #FFF;
                background: #883BDF;
                border-radius: 0 0 0 12px;
            }
            .right{
                width: 50%;
                height: 40px;
                line-height: 40px;
                float: right;
                text-align: center;
                border-top: 1px solid #BBB;
                border-left: 1px solid #BBB;
            }
            .right:hover{
                color: #FFF;
                background: #883BDF;
                border-radius: 0 0 12px 0 ;
            }
        }
        .fix:after{
            display:block;
            content:'clear';
            clear:both;
            line-height:0;
            visibility:hidden;
        }
    }

    .vue-waterfall .vue-waterfall-column{
        border: 1px solid #666;
    }
</style>
<style lang="less">
    .vue-waterfall.is-transition img {
        width: 100%;
    }
</style>
<template>
    <div class="merchant">
       
            <div v-for="(eva,index) in evaList.evaTabs" >
                <waterfall :col="col" :data="eva.imgsArr"  :width="itemWidth" :gutterWidth="gutterWidth" @loadmore="getData(eva,index)" >
                    <template >
                        <div class="cell-item card" v-for="(item,index) in eva.imgsArr" >
                            <div class="label">测试测试</div>
                            <a :href="'/evaluateDetails?id' + item.id" target="_blank">
                                <img  v-if="item.img" :src="item.img" alt="加载错误" @click="goDetails(item)"/>
                            </a>
                            <span class="content" style="-webkit-box-orient: vertical;">{{item.test}}</span>
                            <div>
                                <div style="width: 50%; float: left; text-align: center">
                                    测试测试
                                </div>
                                <div style="width: 50%;float: right;text-align: center">
                                    测试测试
                                </div>
                                <div style="width: 50%; float: left; text-align: center">
                                    {{item.name}}
                                </div>
                                <div style="width: 50%;float: right;text-align: center">
                                    {{item.id}}
                                </div>
                            </div>
                            <div class="but" v-if="item.state === 1 ">
                                测试测试
                            </div>
                            <div class="fix" v-else>
                                <div class="left">
                                    测试测试
                                </div>
                                <div class="right">
                                    测试测试
                                </div>
                            </div>
                        </div>
                    </template>
                </waterfall>
            </div>
                                               
    </div>
</template>
<script>
    // import myHeader from '../common/header.vue';
    import test1 from '../assets/star.png';
    import test2 from '../assets/fork.png';
    // import vueWaterfallEasy from 'vue-waterfall-easy'
    export default {
        name:'evaluateList',
        components: {
            // myHeader,
            // vueWaterfallEasy,
        },
        data () {
            return{
                col:4,
                value:0,
                evaList:{
                    evaTabs:[
                        {
                            evaTab:'全部',
                            value:0,
                            imgsArr:[
                                {
                                    img:test1,
                                    test:'昂昂就开始你大概卡莎被更恐怖萨克昂昂就开始你大概卡莎被更恐怖萨克昂昂就开始你大概卡莎被更恐怖萨克昂昂就开始你大概卡莎被更恐怖萨克',
                                    name:'店铺名称1',
                                    id:'1234561',
                                    state:1,
                                },
                                {
                                    img:test2,
                                    test:'全部',
                                    name:'店铺名称2',
                                    id:'156762',
                                    state:2,
                                },{
                                    img:test1,
                                    test:'昂昂就开始你大概卡莎被更恐怖萨克',
                                    name:'店铺名称3',
                                    id:'456133',
                                    state:1,
                                },
                                {
                                    img:test2,
                                    test:'昂昂就开始你大概卡莎被更恐怖萨克',
                                    name:'店铺名称4',
                                    id:'商品id4',
                                    state:1,
                                },{
                                    img:test1,
                                    test:'昂昂就开始你大概卡莎被更恐怖萨克',
                                    name:'店铺名称5',
                                    id:'商品id5',
                                    state:1,
                                },
                                {
                                    img:test2,
                                    test:'昂昂就开始你大概卡莎被更恐怖萨克',
                                    name:'店铺名称6',
                                    id:'商品id6',
                                    state:1,
                                },{
                                    img:test1,
                                    test:'昂昂就开始你大概卡莎被更恐怖萨克',
                                    name:'店铺名称7',
                                    id:'商品id7',
                                    state:1,
                                },
                                {
                                    img:test2,
                                    test:'昂昂就开始你大概卡莎被更恐怖萨克',
                                    name:'店铺名称8',
                                    id:'商品id8',
                                    state:1,
                                },{
                                    img:test1,
                                    test:'昂昂就开始你大概卡莎被更恐怖萨克',
                                    name:'店铺名称5',
                                    id:'商品id5',
                                    state:1,
                                },
                                {
                                    img:test2,
                                    test:'昂昂就开始你大概卡莎被更恐怖萨克',
                                    name:'店铺名称6',
                                    id:'商品id6',
                                    state:1,
                                },{
                                    img:test1,
                                    test:'昂昂就开始你大概卡莎被更恐怖萨克',
                                    name:'店铺名称7',
                                    id:'商品id7',
                                    state:1,
                                },
                                {
                                    img:test2,
                                    test:'昂昂就开始你大概卡莎被更恐怖萨克',
                                    name:'店铺名称8',
                                    id:'商品id8',
                                    state:1,
                                },{
                                    img:test1,
                                    test:'昂昂就开始你大概卡莎被更恐怖萨克',
                                    name:'店铺名称5',
                                    id:'商品id5',
                                    state:1,
                                },
                                {
                                    img:test2,
                                    test:'昂昂就开始你大概卡莎被更恐怖萨克',
                                    name:'店铺名称6',
                                    id:'商品id6',
                                    state:1,
                                },{
                                    img:test1,
                                    test:'昂昂就开始你大概卡莎被更恐怖萨克',
                                    name:'店铺名称7',
                                    id:'商品id7',
                                    state:1,
                                },
                                {
                                    img:test2,
                                    test:'昂昂就开始你大概卡莎被更恐怖萨克',
                                    name:'店铺名称8',
                                    id:'商品id8',
                                    state:1,
                                },{
                                    img:test1,
                                    test:'昂昂就开始你大概卡莎被更恐怖萨克',
                                    name:'店铺名称5',
                                    id:'商品id5',
                                    state:1,
                                },
                                {
                                    img:test2,
                                    test:'昂昂就开始你大概卡莎被更恐怖萨克',
                                    name:'店铺名称6',
                                    id:'商品id6',
                                    state:1,
                                },{
                                    img:test1,
                                    test:'昂昂就开始你大概卡莎被更恐怖萨克',
                                    name:'店铺名称7',
                                    id:'商品id7',
                                    state:1,
                                },
                                {
                                    img:test2,
                                    test:'昂昂就开始你大概卡莎被更恐怖萨克',
                                    name:'店铺名称8',
                                    id:'商品id8',
                                    state:1,
                                }
                            ], //  列表数组
                        },
                        {
                            evaTab:'待邀请',
                            value:0,
                            imgsArr:[
                                {
                                    img:test1,
                                    test:'昂昂就开始你大概卡莎被更恐怖萨克昂昂就开始你大概卡莎被更恐怖萨克昂昂就开始你大概卡莎被更恐怖萨克昂昂就开始你大概卡莎被更恐怖萨克',
                                    name:'店铺名称1',
                                    id:'1234561',
                                    state:1,
                                },
                                {
                                    img:test2,
                                    test:'待邀请',
                                    name:'店铺名称2',
                                    id:'156762',
                                    state:2,
                                },
                                {
                                    img:test1,
                                    test:'昂昂就开始你大概卡莎被更恐怖萨克昂昂就开始你大概卡莎被更恐怖萨克昂昂就开始你大概卡莎被更恐怖萨克昂昂就开始你大概卡莎被更恐怖萨克',
                                    name:'店铺名称1',
                                    id:'1234561',
                                    state:1,
                                },
                                {
                                    img:test2,
                                    test:'待邀请',
                                    name:'店铺名称2',
                                    id:'156762',
                                    state:2,
                                },
                                {
                                    img:test1,
                                    test:'昂昂就开始你大概卡莎被更恐怖萨克昂昂就开始你大概卡莎被更恐怖萨克昂昂就开始你大概卡莎被更恐怖萨克昂昂就开始你大概卡莎被更恐怖萨克',
                                    name:'店铺名称1',
                                    id:'1234561',
                                    state:1,
                                },
                                {
                                    img:test2,
                                    test:'待邀请',
                                    name:'店铺名称2',
                                    id:'156762',
                                    state:2,
                                },{
                                    img:test1,
                                    test:'昂昂就开始你大概卡莎被更恐怖萨克昂昂就开始你大概卡莎被更恐怖萨克昂昂就开始你大概卡莎被更恐怖萨克昂昂就开始你大概卡莎被更恐怖萨克',
                                    name:'店铺名称1',
                                    id:'1234561',
                                    state:1,
                                },
                                {
                                    img:test2,
                                    test:'待邀请',
                                    name:'店铺名称2',
                                    id:'156762',
                                    state:2,
                                },{
                                    img:test1,
                                    test:'昂昂就开始你大概卡莎被更恐怖萨克昂昂就开始你大概卡莎被更恐怖萨克昂昂就开始你大概卡莎被更恐怖萨克昂昂就开始你大概卡莎被更恐怖萨克',
                                    name:'店铺名称1',
                                    id:'1234561',
                                    state:1,
                                },
                                {
                                    img:test2,
                                    test:'待邀请',
                                    name:'店铺名称2',
                                    id:'156762',
                                    state:2,
                                },

                            ], //  列表数组
                        },
                        {
                            evaTab:'待确认',
                            value:0,
                            imgsArr:[
                                {
                                    img:test1,
                                    test:'昂昂就开始你大概卡莎被更恐怖萨克昂昂就开始你大概卡莎被更恐怖萨克昂昂就开始你大概卡莎被更恐怖萨克昂昂就开始你大概卡莎被更恐怖萨克',
                                    name:'店铺名称1',
                                    id:'1234561',
                                    state:1,
                                },
                                {
                                    img:test2,
                                    test:'待确认',
                                    name:'店铺名称2',
                                    id:'156762',
                                    state:2,
                                },{
                                    img:test1,
                                    test:'昂昂就开始你大概卡莎被更恐怖萨克',
                                    name:'店铺名称3',
                                    id:'456133',
                                    state:1,
                                },
                                {
                                    img:test2,
                                    test:'昂昂就开始你大概卡莎被更恐怖萨克',
                                    name:'店铺名称4',
                                    id:'商品id4',
                                    state:1,
                                },{
                                    img:test1,
                                    test:'昂昂就开始你大概卡莎被更恐怖萨克',
                                    name:'店铺名称5',
                                    id:'商品id5',
                                    state:1,
                                },
                                {
                                    img:test2,
                                    test:'昂昂就开始你大概卡莎被更恐怖萨克',
                                    name:'店铺名称6',
                                    id:'商品id6',
                                    state:1,
                                },{
                                    img:test1,
                                    test:'昂昂就开始你大概卡莎被更恐怖萨克',
                                    name:'店铺名称7',
                                    id:'商品id7',
                                    state:1,
                                },
                                {
                                    img:test2,
                                    test:'昂昂就开始你大概卡莎被更恐怖萨克',
                                    name:'店铺名称8',
                                    id:'商品id8',
                                    state:1,
                                }
                            ], //  列表数组
                        },
                    ],
                    evaTab:[
                        {
                            evaTab:'全部',
                            value:0,
                            imgsArr:[
                                {
                                    src:test1,
                                    test:'昂昂就开始你大概卡莎被更恐怖萨克昂昂就开始你大概卡莎被更恐怖萨克昂昂就开始你大概卡莎被更恐怖萨克昂昂就开始你大概卡莎被更恐怖萨克',
                                    name:'店铺名称1',
                                    href:'1234561',
                                    state:1,
                                },
                                {
                                    src:test2,
                                    test:'全部',
                                    name:'店铺名称2',
                                    href:'156762',
                                    state:2,
                                },{
                                    src:test1,
                                    test:'昂昂就开始你大概卡莎被更恐怖萨克',
                                    name:'店铺名称3',
                                    href:'456133',
                                    state:1,
                                },
                                {
                                    src:test2,
                                    test:'昂昂就开始你大概卡莎被更恐怖萨克',
                                    name:'店铺名称4',
                                    href:'商品id4',
                                    state:1,
                                },{
                                    src:test1,
                                    test:'昂昂就开始你大概卡莎被更恐怖萨克',
                                    name:'店铺名称5',
                                    href:'商品id5',
                                    state:1,
                                },
                                {
                                    src:test2,
                                    test:'昂昂就开始你大概卡莎被更恐怖萨克',
                                    name:'店铺名称6',
                                    href:'商品id6',
                                    state:1,
                                },{
                                    src:test1,
                                    test:'昂昂就开始你大概卡莎被更恐怖萨克',
                                    name:'店铺名称7',
                                    href:'商品id7',
                                    state:1,
                                },
                                {
                                    src:test2,
                                    test:'昂昂就开始你大概卡莎被更恐怖萨克',
                                    name:'店铺名称8',
                                    href:'商品id8',
                                    state:1,
                                }
                            ], //  列表数组
                        },
                        {
                            evaTab:'待邀请',
                            value:0,
                            imgsArr:[
                                {
                                    src:test1,
                                    test:'昂昂就开始你大概卡莎被更恐怖萨克昂昂就开始你大概卡莎被更恐怖萨克昂昂就开始你大概卡莎被更恐怖萨克昂昂就开始你大概卡莎被更恐怖萨克',
                                    name:'店铺名称1',
                                    href:'1234561',
                                    state:1,
                                },
                                {
                                    src:test2,
                                    test:'待邀请',
                                    name:'店铺名称2',
                                    href:'156762',
                                    state:2,
                                },
                                {
                                    src:test1,
                                    test:'昂昂就开始你大概卡莎被更恐怖萨克昂昂就开始你大概卡莎被更恐怖萨克昂昂就开始你大概卡莎被更恐怖萨克昂昂就开始你大概卡莎被更恐怖萨克',
                                    name:'店铺名称1',
                                    href:'1234561',
                                    state:1,
                                },
                                {
                                    src:test2,
                                    test:'待邀请',
                                    name:'店铺名称2',
                                    href:'156762',
                                    state:2,
                                },
                                {
                                    src:test1,
                                    test:'昂昂就开始你大概卡莎被更恐怖萨克昂昂就开始你大概卡莎被更恐怖萨克昂昂就开始你大概卡莎被更恐怖萨克昂昂就开始你大概卡莎被更恐怖萨克',
                                    name:'店铺名称1',
                                    href:'1234561',
                                    state:1,
                                },
                                {
                                    src:test2,
                                    test:'待邀请',
                                    name:'店铺名称2',
                                    href:'156762',
                                    state:2,
                                },{
                                    src:test1,
                                    test:'昂昂就开始你大概卡莎被更恐怖萨克昂昂就开始你大概卡莎被更恐怖萨克昂昂就开始你大概卡莎被更恐怖萨克昂昂就开始你大概卡莎被更恐怖萨克',
                                    name:'店铺名称1',
                                    href:'1234561',
                                    state:1,
                                },
                                {
                                    src:test2,
                                    test:'待邀请',
                                    name:'店铺名称2',
                                    href:'156762',
                                    state:2,
                                },{
                                    src:test1,
                                    test:'昂昂就开始你大概卡莎被更恐怖萨克昂昂就开始你大概卡莎被更恐怖萨克昂昂就开始你大概卡莎被更恐怖萨克昂昂就开始你大概卡莎被更恐怖萨克',
                                    name:'店铺名称1',
                                    href:'1234561',
                                    state:1,
                                },
                                {
                                    src:test2,
                                    test:'待邀请',
                                    name:'店铺名称2',
                                    href:'156762',
                                    state:2,
                                },

                            ], //  列表数组
                        },
                        {
                            evaTab:'待确认',
                            value:0,
                            imgsArr:[
                                {
                                    src:test1,
                                    test:'昂昂就开始你大概卡莎被更恐怖萨克昂昂就开始你大概卡莎被更恐怖萨克昂昂就开始你大概卡莎被更恐怖萨克昂昂就开始你大概卡莎被更恐怖萨克',
                                    name:'店铺名称1',
                                    href:'1234561',
                                    state:1,
                                },
                                {
                                    src:test2,
                                    test:'待确认',
                                    name:'店铺名称2',
                                    href:'156762',
                                    state:2,
                                },{
                                    src:test1,
                                    test:'昂昂就开始你大概卡莎被更恐怖萨克',
                                    name:'店铺名称3',
                                    href:'456133',
                                    state:1,
                                },
                                {
                                    src:test2,
                                    test:'昂昂就开始你大概卡莎被更恐怖萨克',
                                    name:'店铺名称4',
                                    href:'商品id4',
                                    state:1,
                                },{
                                    src:test1,
                                    test:'昂昂就开始你大概卡莎被更恐怖萨克',
                                    name:'店铺名称5',
                                    href:'商品id5',
                                    state:1,
                                },
                                {
                                    src:test2,
                                    test:'昂昂就开始你大概卡莎被更恐怖萨克',
                                    name:'店铺名称6',
                                    href:'商品id6',
                                    state:1,
                                },{
                                    src:test1,
                                    test:'昂昂就开始你大概卡莎被更恐怖萨克',
                                    name:'店铺名称7',
                                    href:'商品id7',
                                    state:1,
                                },
                                {
                                    src:test2,
                                    test:'昂昂就开始你大概卡莎被更恐怖萨克',
                                    name:'店铺名称8',
                                    href:'商品id8',
                                    state:1,
                                }
                            ], //  列表数组
                        },
                    ],
                },

            }
        },
        computed:{
            itemWidth(){
                console.log('(138*0.5*(document.documentElement.clientWidth/375))',(138*0.5*(1180/375)));
                // (138*0.5*(document.documentElement.clientWidth/375))
                return 274
                // return (138*0.5*(1180/375)) // #rem布局 计算宽度
            },
            gutterWidth(){
                // console.log('document.documentElement.clientWidth---->',document.documentElement.clientWidth);
                console.log('(9*0.5*(document.documentElement.clientWidth/375))',(9*0.5*(document.documentElement.clientWidth/375)));
                return (9*0.5*(1180/375))	//#rem布局 计算x轴方向margin(y轴方向的margin自定义在css中即可)
            }
        },
        methods:{
            getData(eva,index){
                console.log('getData')
                let arr = eva.imgsArr;
                if(arr.length<100){
                    console.log('111111111111',this.evaList.evaTabs[index].imgsArr,arr);
                    this.evaList.evaTabs[index].imgsArr = this.evaList.evaTabs[index].imgsArr.concat(arr);
                }
                console.log(this.evaList.evaTabs[index].imgsArr.length,index)
                // let test ={
                //         img:test1,
                //         test:'测试测试',
                //         name:'测试测试',
                //         id:'测试测试',
                //         state:1,
                //     };
                // for (let i = 0; i<4;i++){
                //     this.evaList.evaTabs[index].imgsArr.push(test)
                // }
            },
            goDetails(val){
                this.$router.push({
                    name: 'evaluateDetails',
                    query: {
                        id: val.id
                    }
                })
            },
        },
        // filters:{
        //     /**
        //      * 解析活动列表tab
        //      * @param eva
        //      */
        //     parseEvaluateTabs(eva){
        //         // let num=act.pageTotal>99?'99+':act.pageTotal;
        //         // return act.evaTab+(typeof act.titleNum !== 'undefined' ?'('+num+')':'');
        //         return eva.evaTab
        //     },
        // }
    }
</script>
