import PagamentoLista from "../components/Pagamento";


export default function Pagamentos() {
    return (
        <div className='flex flex-col'>
            <div className='flex justify-between py-2'>
                <h1 className="font-medium">Pagamentos</h1>
                <h1 className='text-[#5B00CF] font-medium'>Ver todos</h1>
            </div>
            <div className='h-[1px] w-full bg-[#DFDFE7]' />
            <PagamentoLista />
        </div>
    )
}
