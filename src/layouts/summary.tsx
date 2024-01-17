import Button from "../components/Button";
import { FaUsers } from "react-icons/fa";
import TocadasRecentemente from "./tocadasRecentemente";
import ChartExport from "../components/Chart";
import Pagamentos from "./pagametos";
import { useOpenKaraokeModal } from "../hooks/useOpenKaraoke";
import OpenKaraokeModal from "../components/modals/OpenKaraoke";
import Swal from 'sweetalert2';
import { closingHouse } from "../api/closingHouse";
import toast from "react-hot-toast";

export default function Summary() {
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

    const karaokeModal = useOpenKaraokeModal();

    const handleLoginClick = () => {
        karaokeModal.onOpen();
    };

    const handleFechamento = () => {
        Swal.fire({
            title: 'Você deseja realmente fechar o karaoke atual?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sim, fechar.',
            cancelButtonText: 'Cancelar',
            confirmButtonColor: '#dc3545', // Cor do botão Excluir
          })
        closingHouse();
        toast.success('Karaoke fechado com sucesso!');
    }


    return (
        <div className='bg-[#F0F0FA] w-2/3 min-h-screen'>
            <OpenKaraokeModal />
            <div className="p-20 pt-[103px]">
                <h1 className="text-2xl pb-10">Karaoke Dashboard</h1>
                <div className="flex gap-4 pb-10">
                    <Button outline color="roxo" onClick={handleLoginClick} label="Meu Karaoke" />
                    <Button outline color="roxo" onClick={handleFechamento} label="Fechamento" />
                    <Button icon={(FaUsers)} outline color="roxo" onClick={() => { }} label="Clientes" />
                </div>
                <TocadasRecentemente />
                <div className="flex">
                    <div className="w-1/2">
                        <ChartExport options={options} series={series} />
                    </div>
                    <div className="w-1/2">
                        <ChartExport options={options} series={series} />
                    </div>
                </div>
                <Pagamentos />
            </div>
        </div>
    )
}
