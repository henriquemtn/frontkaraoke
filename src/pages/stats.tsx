import StatsExemple from "../components/StatsExemple";
import Sidebar from "../layouts/sidebar";
import SituationBar from "../layouts/situationBar";

export default function Stats() {
    return (
        <div className="flex">
            <SituationBar label="Seu pagamento expira em 4 dias!" />
            <Sidebar Sum="#000" Sta="#5B00CF" Tra="#000" Con="#000" />
            <div className="bg-[#F0F0FA] w-full min-h-full">
                <div className="pt-24 pl-20 w-2/3">
                    <h1 className="text-xl font-medium">Relátorio de Clientes</h1>
                    <StatsExemple />
                </div>
            </div>
        </div>
    )
}
