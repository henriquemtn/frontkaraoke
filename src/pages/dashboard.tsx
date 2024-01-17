import OpenKaraokeModal from "../components/modals/OpenKaraoke";
import Sidebar from "../layouts/sidebar";
import SituationBar from "../layouts/situationBar";
import Summary from "../layouts/summary";

export default function Dashboard() {

  return (
    <div className="flex bg-[#F0F0FA]">
      <OpenKaraokeModal />
      <SituationBar label="Seu pagamento expira em 4 dias!" />
      <Sidebar
        Sum="#5B00CF"
        Sta="#000"
        Tra="#000"
        Con="#000"
      />
      <Summary />
    </div>
  );
}
