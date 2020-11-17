<template>
  <div>
    <h1>Chart.js</h1>
    <line-chart></line-chart>
    <bar-chart v-on:refresh:chart="refreshChart" v-bind:propsdata="chartDataSet"></bar-chart>
  </div>
</template>

<script>
import BarChart from './components/BarChart.vue';
import LineChart from './components/LineChart.vue';

export default {
    data() {
        return {
            chartDataSet: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        }
    },
    components: {
        BarChart,
        LineChart,
    },
    methods: {
        refreshChart() {
            this.chartDataSet = [10, 20];
        }
    },
    created() {
        console.log(this.chartDataSet);
        //... 여기서 데이터를 API를 통해서 얻어올 수 있음
    }

}
</script>

<style>

</style>