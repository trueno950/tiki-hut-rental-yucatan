import { FaTrophy, FaUser, FaMapMarkerAlt } from "react-icons/fa";

export const KnowUs = () => {
    return (
        <section id="know-us" className="px-8 py-28 mx-auto bg-orange-300">
            <div className="max-w-7xl mx-auto">
                <div className="mb-12">
                    <h2 className="text-4xl font-bold mb-4">Conócenos</h2>
                    <p className="text-lg">
                        En nuestro hotel, nos enorgullecemos de nuestra historia, valores y
                        conexión con el entorno local. Desde nuestra fundación en 1990, nos
                        hemos comprometido a ofrecer una experiencia excepcional para cada
                        huésped.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                        <div className="flex items-center justify-center h-20 w-20 rounded-full bg-blue-500 text-white">
                            <FaTrophy size={32} />
                        </div>
                        <h3 className="text-2xl font-bold mt-4 mb-2">Premios y reconocimientos</h3>
                        <p className="text-lg">
                            Nos enorgullece haber sido galardonados con varios premios y
                            reconocimientos por nuestra excelencia en la industria turística,
                            incluido el premio "Mejor hotel de lujo" en los Premios de la
                            Asociación de Hoteles y Restaurantes del País.
                        </p>
                    </div>
                    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                        <div className="flex items-center justify-center h-20 w-20 rounded-full bg-blue-500 text-white">
                            <FaUser size={32} />
                        </div>
                        <h3 className="text-2xl font-bold mt-4 mb-2">Nuestro equipo</h3>
                        <p className="text-lg">
                            Nuestro equipo está compuesto por profesionales dedicados y
                            apasionados que se esfuerzan por brindar la mejor experiencia
                            posible para cada huésped. Desde el gerente general hasta el chef
                            y el conserje, cada miembro de nuestro equipo es esencial para
                            nuestro éxito.
                        </p>
                    </div>
                    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                        <div className="flex items-center justify-center h-20 w-20 rounded-full bg-blue-500 text-white">
                            <FaMapMarkerAlt size={32} />
                        </div>
                        <h3 className="text-2xl font-bold mt-4 mb-2">Nuestra ubicación</h3>
                        <p className="text-lg">
                            Estamos ubicados en el corazón del centro de la ciudad, a solo unos
                            minutos de los principales lugares de interés y atracciones
                            turísticas. Además, nuestra ubicación en el centro de la ciudad
                            nos permite ser parte activa de la vida y cultura local.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};