import { FaBed, FaUtensils, FaSwimmingPool, FaBicycle } from "react-icons/fa";
import { AiOutlineWifi } from "react-icons/ai";

export const Services = () => {
    return (
        <section id="services" className="px-8 py-24 mx-auto bg-orange-300">
            <h2 className="text-3xl font-bold text-center mb-8">Nuestros servicios</h2>
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                <div className="flex flex-col items-center">
                    <FaBed className="text-5xl mb-4" />
                    <h3 className="text-xl font-bold mb-2">Servicio de habitaciones</h3>
                    <p className="text-gray-700 text-center">
                        Ofrecemos limpieza diaria y cambio de sábanas y toallas bajo petición.
                    </p>
                </div>
                <div className="flex flex-col items-center">
                    <AiOutlineWifi className="text-5xl mb-4" />
                    <h3 className="text-xl font-bold mb-2">Conexión wifi gratuita</h3>
                    <p className="text-gray-700 text-center">
                        Ofrecemos conexión wifi gratuita en todas las habitaciones y áreas comunes del hotel.
                    </p>
                </div>
                <div className="flex flex-col items-center">
                    <FaUtensils className="text-5xl mb-4" />
                    <h3 className="text-xl font-bold mb-2">Desayuno incluido</h3>
                    <p className="text-gray-700 text-center">
                        Disfrute de un desayuno continental gratuito todas las mañanas en nuestro comedor.
                    </p>
                </div>
                <div className="flex flex-col items-center">
                    <FaSwimmingPool className="text-5xl mb-4" />
                    <h3 className="text-xl font-bold mb-2">Piscina al aire libre</h3>
                    <p className="text-gray-700 text-center">
                        Refrésquese en nuestra piscina al aire libre y disfrute del sol y el ambiente tropical.
                    </p>
                </div>
                <div className="flex flex-col items-center">
                    <FaBicycle className="text-5xl mb-4" />
                    <h3 className="text-xl font-bold mb-2">Alquiler de bicicletas</h3>
                    <p className="text-gray-700 text-center">
                        Explore los alrededores en bicicleta y disfrute del paisaje y la naturaleza de Yucatán.
                    </p>
                </div>
            </div>
        </section>
    );
};
