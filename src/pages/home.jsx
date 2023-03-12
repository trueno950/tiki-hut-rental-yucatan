import React from "react";
import { Button, Typography } from "@material-tailwind/react";
import { useTranslation, Trans } from "react-i18next";

export function Home() {
  const { t } = useTranslation()

  return (
    <section id="home" className="grid relative flex h-screen content-center items-center justify-center">
      <div className="absolute top-0 h-full w-full bg-[url('../img/portada-home10.jpg')] bg-cover bg-center grid-cols-12">
        <div className="sm:px-4 sm:py-20 text-center">
          <Typography
            variant="h1"
            className="mb-6 font-black text-green-800"
          >
            {t('home.title')}
          </Typography>
          <div className="flex justify-around mt-0">
            <div className="flex flex-col items-center">
              <img src="../img/portada-home0.jpg" alt="Imagen del hotel" className="w-64 h-64 object-cover rounded-lg shadow-lg" />
              <h2 className="mt-4 mb-2 text-xl font-bold text-gray-900">Habitaciones cómodas y elegantes</h2>
              <p className="text-center text-gray-900">Disfruta de una estancia confortable en nuestras habitaciones equipadas con todas las comodidades que necesitas para relajarte y descansar.</p>
            </div>
            <div className="flex flex-col items-center">
              <img src="../img/portada-home5.jpg" alt="Imagen de la playa" className="w-64 h-64 object-cover rounded-lg shadow-lg" />
              <h2 className="mt-4 mb-2 text-xl font-bold text-gray-900">Ubicación privilegiada</h2>
              <p className="text-center text-gray-900">A pocos pasos de la playa, nuestro hotel se encuentra en una ubicación ideal para disfrutar de las vistas impresionantes y la belleza natural de la costa de Yucatán.</p>
            </div>
            <div className="flex flex-col items-center">
              <img src="../img/portada-home2.jpg" alt="Imagen de la piscina" className="w-64 h-64 object-cover rounded-lg shadow-lg" />
              <h2 className="mt-4 mb-2 text-xl font-bold text-gray-900">Actividades recreativas cercanas</h2>
              <p className="text-center text-gray-900">En los alrededores del hotel encontrarás una gran variedad de actividades para todos los gustos, como senderismo, buceo, paseos en bote, y mucho más.</p>
            </div>
          </div>
          <div className="flex justify-center mt-5">
            <Button className="px-8 py-4 text-xl font-bold text-white bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50" >
              <a href="/#contact">              Reserva ahora
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
