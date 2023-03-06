import { useState } from "react";
import GoogleMapReact from "google-map-react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import { Button } from "@material-tailwind/react";

export const Contact = () => {
    const [center, setCenter] = useState({ lat: 20.986408, lng: -89.616615 });
    const [zoom, setZoom] = useState(15);

    const AnyReactComponent = () => (
        <div className="text-red-600">
            <FaMapMarkerAlt className="text-3xl" />
        </div>
    );

    return (
        <section id="contact" className="px-8 py-28 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                    <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
                    <div className="flex items-center mb-2">
                        <FaMapMarkerAlt className="text-red-600 mr-2 text-xl" />
                        <p className="text-gray-800">
                            Calle 27 #54, Centro, 97000 Mérida, Yucatan, Mexico
                        </p>
                    </div>
                    <div className="flex items-center mb-2">
                        <MdEmail className="text-red-600 mr-2 text-xl" />
                        <p className="text-gray-800">info@tikihutrentalyucatan.com</p>
                    </div>
                    <div className="flex items-center mb-2">
                        <MdPhone className="text-red-600 mr-2 text-xl" />
                        <p className="text-gray-800">+52 (999) 123-4567</p>
                    </div>
                </div>
                <div>
                    <h2 className="text-3xl font-bold mb-4">Send us a message</h2>
                    <form className="grid grid-cols-1 gap-4">
                        <div>
                            <label className="text-gray-800 font-bold">Name</label>
                            <input
                                type="text"
                                className="border-gray-300 border rounded-md p-2 w-full"
                            />
                        </div>
                        <div>
                            <label className="text-gray-800 font-bold">Email</label>
                            <input
                                type="email"
                                className="border-gray-300 border rounded-md p-2 w-full"
                            />
                        </div>
                        <div>
                            <label className="text-gray-800 font-bold">Message</label>
                            <textarea className="border-gray-300 border rounded-md p-2 w-full" />
                        </div>
                        <Button
                            type="submit"
                            className="bg-blue-600 text-white rounded-md p-2"
                        >
                            Send
                        </Button>
                    </form>
                </div>
                <div>
                    <div style={{ height: "400px", width: "100%" }}>
                        <GoogleMapReact
                            bootstrapURLKeys={{
                                key: "AIzaSyC8dZCPV8mH-Q7w-RnUNlBIoVbv7vNl1Zk",
                            }}
                            defaultCenter={center}
                            defaultZoom={zoom}
                        >
                            <AnyReactComponent lat={center.lat} lng={center.lng} text="My Marker" />
                        </GoogleMapReact>
                    </div>
                </div>
            </div>
        </section>
    );
};