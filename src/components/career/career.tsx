export default function Career(){
    return (
        <div className="min-h-[70vh] max-md:min-h-[85vh] justify-center flex flex-col items-center overflow-hidden px-2 pb-20">
            <ul className="timeline timeline-vertical lg:timeline-horizontal w-full">
                <li className="flex-1">
                    <div className="timeline-end text-xl">2021 - 2024</div>
                    <div className="timeline-middle">
                        <div aria-label="info" className="status status-primary status-xl"></div>
                    </div>
                    <div className="timeline-start timeline-box text-center">
                        <h1 className="sm:text-xl text-lg font-poppins font-bold py-2">Baccalauréat Général</h1>
                        <p className="text-base py-1">Lycée Léonard de Vinci - Soissons</p>
                    </div>
                    <hr className="bg-gray-600"/>
                </li>
                <li className="flex-1">
                    <hr className="bg-gray-600"/>
                    <div className="timeline-start text-xl">2024 - ...</div>
                    <div className="timeline-middle">
                        <div aria-label="info" className="status status-primary status-xl"></div>
                    </div>
                    <div className="timeline-end timeline-box text-center">
                        <h1 className="sm:text-xl text-lg font-poppins font-bold py-2">BUT Informatique</h1>
                        <p className="text-base py-1">IUT RCC - Reims</p>
                    </div>
                    <hr className="bg-gray-600"/>
                </li>
                <li className="flex-1">
                    <hr className="bg-gray-600"/>
                    <div className="timeline-end text-xl">07/2025 - 08/2025</div>
                    <div className="timeline-middle">
                        <div aria-label="info" className="status status-primary status-xl"></div>
                    </div>
                    <div className="timeline-start timeline-box text-center">
                        <h1 className="sm:text-xl text-lg font-poppins font-bold py-2">Agent Pépiniériste</h1>
                        <p className="text-base py-1">Dalival - Villers-Cotterêts</p>
                    </div>
                    <hr className="bg-gray-600"/>
                </li>
                <li className="flex-1">
                    <hr className="bg-gray-600"/>
                    <div className="timeline-start text-xl">04/2026 - 05/2026</div>
                    <div className="timeline-middle">
                        <div aria-label="info" className="status status-primary status-xl"></div>
                    </div>
                    <div className="timeline-end timeline-box text-center">
                        <h1 className="sm:text-xl text-lg font-poppins font-bold py-2">Stage Symfony</h1>
                        <p className="text-base py-1">Olihost - Soissons</p>
                    </div>
                </li>
            </ul>
        </div>
    )
}