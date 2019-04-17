<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item>
        <i class="el-icon-date"></i>图表
      </el-breadcrumb-item>
      <el-breadcrumb-item>基础图表</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="chartBox">
      <div id="barChart" style="width: 500px;height: 400px;"></div>
      <div id="lineChart" style="width: 500px;height: 400px;"></div>
      <div id="pieChart" style="width: 500px;height: 400px;"></div>
      <div id="ringChart" style="width: 500px;height: 400px;"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data1: [1141, 1499, 2260, 1170, 970, 1450],
      data2: [
        { value: 1200, name: "短袖" },
        { value: 1222, name: "休闲裤" },
        { value: 1283, name: "连衣裙" },
        { value: 1314, name: "外套" },
        { value: 2314, name: "羽绒服" }
      ]
    };
  },
  methods: {
    initEchart() {
      let barChart = this.$echarts.init(document.getElementById("barChart"));
      let lineChart = this.$echarts.init(document.getElementById("lineChart"));
      let pieChart = this.$echarts.init(document.getElementById("pieChart"));
      let ringChart = this.$echarts.init(document.getElementById("ringChart"));
      let option1 = {
        title: {
          text: "某商店近年营业总额",
          x: "center"
        },
        tooltip: {
          trigger: "item"
        },
        xAxis: [
          {
            type: "category",
            data: ["2012", "2013", "2014", "2015", "2016", "2017"]
          }
        ],
        yAxis: [
          {
            type: "value"
          }
        ],
        series: [
          {
            type: "bar",
            data: this.data1
          }
        ]
      };
      let option2 = {
        title: {
          text: "某商店近年营业总额",
          x: "center"
        },
        xAxis: [
          {
            type: "category",
            data: ["2012", "2013", "2014", "2015", "2016", "2017"]
          }
        ],
        yAxis: [
          {
            type: "value"
          }
        ],
        series: [
          {
            type: "line",
            data: this.data1
          }
        ]
      };
      let option3 = {
        title: {
          text: "某商店各商品年度销量",
          x: "center"
        },
        legend: {
          orient: "vertical",
          left: "left",
          data: ["短袖", "休闲裤", "连衣裙", "外套", "羽绒服"]
        },
        series: [
          {
            type: "pie",
            center: ["53%", "50%"],
            data: this.data2
          }
        ]
      };
      let option4 = {
        title: {
          text: "某商店各商品年度销量",
          x: "center"
        },
        legend: {
          orient: "vertical",
          left: "left",
          data: ["短袖", "休闲裤", "连衣裙", "外套", "羽绒服"]
        },
        series: [
          {
            type: "pie",
            radius: ["50%", "70%"],
            center: ["53%", "50%"],
            avoidLabelOverlap: false,
            label: {
              narmal: {
                show: false,
                position: "center"
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: "30",
                  fontWeight: "bold"
                }
              }
            },
            data: this.data2
          }
        ]
      };
      barChart.setOption(option1);
      lineChart.setOption(option2);
      pieChart.setOption(option3);
      ringChart.setOption(option4);
    }
  },
  mounted() {
    this.initEchart();
  }
};
</script>
<style lang="scss" scoped>
.chartBox {
  display: flex;
  margin-top: 15px;
}
</style>

