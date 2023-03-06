import { useTranslation } from 'react-i18next';
import { BsGlobe } from "react-icons/bs";

export const LanguageSelector = () => {

    const { i18n } = useTranslation();
    console.log('i18', i18n)

    function handleLanguageChange(event) {
        i18n.changeLanguage(event.target.value);
    }

    return (
        <div className="relative inline-block">
            <select
                className="block appearance-none text-gray-800 bg-gray-200 border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                value={i18n.language}
                onChange={handleLanguageChange}
            >
                <option value="en">English</option>
                <option value="es">Español</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <BsGlobe className="text-gray-600" />
            </div>
        </div>
    );
};