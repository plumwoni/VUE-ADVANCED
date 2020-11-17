<template>
  <div>
    <canvas ref="barChart" id="barChart" width="400" height="400"></canvas>
  </div>
</template>

<script>
// import Chart from 'chart.js';

export default {
  // Props 사용
  props: {
    propsdata: Array,
  },
  mounted() {
    // 플러그인 사용
    const myChart = new this.$_Chart(this.$refs.barChart, {
        type: 'bar',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            // Props 사용
            datasets: this.propsdata
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        },
        onClick: function() {
            this.$emit('refresh:chart');
        }
    });
    console.log(myChart);
  },
}
</script>

<style>

</style>