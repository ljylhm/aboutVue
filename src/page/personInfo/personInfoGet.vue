<template>
    <div class="container">
        <v-display :isShowBtn="true" @displayBtnClick="displayBtnClick"></v-display>
        <div class="main">
            <div class="myEchart1"></div>
        </div>
    </div>
</template>

<script>
    import helper from '@/helper.js'
    var clearRepeate = function (arr) {

    }
    export default {
        getName: "个人信息>查看信息",
        data: function () {
            return {
                message: "info come from personInfoGet"
            }
        },
        methods: {
            displayBtnClick: function (val) {
                console.log("来到这里......");
                helper.httpPost("http://10.101.70.31:3000").then((res) => {
                    console.log(res);
                })
            }
        },
        mounted: function () {
            var myEchart = helper.echartsInit(".myEchart1");
            var obj = {
                title: {
                    text: '没有标题'
                },
                tooltip: {},
                xAxis: {
                    data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
                },
                yAxis: {},
                series: [{
                    name: '销量',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20]
                }]
            }
            var option = {
                title: {
                    text: '某站点用户访问来源',
                    subtext: '纯属虚构',
                    x: 'center'
                },
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
                },
                series: [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius: '55%',
                        center: ['50%', '60%'],
                        data: [
                            { value: 335, name: '直接访问' },
                            { value: 310, name: '邮件营销' },
                            { value: 234, name: '联盟广告' },
                            { value: 135, name: '视频广告' },
                            { value: 1548, name: '搜索引擎' }
                        ],
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            };
            myEchart.setOption(obj);
            window.onresize = function () {
                myEchart.resize();
            }

        }
    }
</script>

<style scoped>
    .container {
      width: 100%;
    }
    .main {
      width: 1500px;
      height: 300px;
      border: 1px solid #000;
    }
    .myEchart1 {
      width: auto;
      height: 300px;
    }
</style>