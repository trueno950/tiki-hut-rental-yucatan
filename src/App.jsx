import React from "react";
import { Navbar } from "@/widgets/layout";
import routes from "@/routes";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
} from "@material-tailwind/react";
import { PageTitle } from "@/widgets/layout";
import {TeamCard } from "@/widgets/cards";
import { featuresData, teamData, contactData } from "@/data";
import { useTranslation, Trans } from "react-i18next";
import { Home, Gallery, Services, Contact, KnowUs } from "./pages";
function App() {
  const { t } = useTranslation()

  return (
    <>
      <div className="container absolute left-2/4 z-10 mx-auto -translate-x-2/4 p-4" style={{
        position: "fixed",
        top: "0",
        backgroundColor: "transparent",
        padding: "20px",
        width: "100%",
        zIndex: "100"
      }}>
        <Navbar routes={routes} />
      </div>
      <div className="bg-red-400">
        <Home />

        <Gallery/>

        <Services/>

        <Contact/>

        <KnowUs/>

        <section id="services" className="px-4 pt-20 pb-48">
          <div className="container mx-auto">
            <PageTitle heading="Here are our heroes">
              According to the National Oceanic and Atmospheric Administration,
              Ted, Scambos, NSIDClead scentist, puts the potentially record
              maximum.
            </PageTitle>
            <div className="mt-24 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-4">
              {teamData.map(({ img, name, position, socials }) => (
                <TeamCard
                  key={name}
                  img={img}
                  name={name}
                  position={position}
                  socials={
                    <div className="flex items-center gap-2">
                      {socials.map(({ color, name }) => (
                        <IconButton key={name} color={color} variant="text">
                          <i className={`fa-brands text-lg fa-${name}`} />
                        </IconButton>
                      ))}
                    </div>
                  }
                />
              ))}
            </div>
          </div>
        </section>

      </div>
    </>
  );
}

export default App;
