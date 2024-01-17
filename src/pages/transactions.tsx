import SituationBar from '../layouts/situationBar'
import Sidebar from '../layouts/sidebar'
import Pagamentos from '../layouts/pagametos'

export default function Transactions() {
    return (
        <div className="flex">
            <SituationBar label="Seu pagamento expira em 4 dias!" />
            <Sidebar Sum="#000" Sta="#000" Tra="#5B00CF" Con="#000" />
            <div className='pt-24 w-1/3'>
                <Pagamentos />
            </div>
        </div>
    )
}
