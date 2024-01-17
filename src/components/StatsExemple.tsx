import ChartExport from './Chart';

export default function StatsExemple() {

    const options = {
        chart: {
            type: 'bar', // Tipo de gráfico (barra, pois o ApexCharts trata as colunas como barras)
            height: 350, // Altura do gráfico
        },
        plotOptions: {
            bar: {
                horizontal: false, // Orientação das barras (true para barras horizontais)
            },
        },
        dataLabels: {
            enabled: false, // Desabilita rótulos nos pontos do gráfico
        },
        xaxis: {
            categories: ['01/01/2024', '02/01/2024', '03/01/2024', '04/01/2024', '05/01/2024', '06/01/2024', '07/01/2024', '08/01/2024', '08/01/2024', '08/01/2024', '08/01/2024', '08/01/2024', '08/01/2024'], // Categorias do eixo X
        },
        colors: ['#5B00CF'],
    };

    const series = [
        {
            name: 'Clientes',
            data: [44, 55, 41, 64, 22, 12, 44, 15, 64, 22, 12, 44, 15], // Dados para o gráfico de colunas
        },
    ];

    return (
        <ChartExport options={options} series={series} />
    )
}
