import { FaLanguage } from "react-icons/fa6";


const Header = () => {
    return (
        <div className="w-full flex items-center justify-center h-12 w-full bg-[#0f0f0f]">
            <div className="w-3/4">
                <nav className="flex justify-between text-white">
                    <ul className="flex gap-12">
                        <li className="cursor-pointer">Home</li>
                        <li className="cursor-pointer">Nuestro Trabajo</li>
                        <li className="cursor-pointer">Servicios</li>
                    </ul>
                    <span>LOGO</span>
                    <ul className="flex gap-12">

                        <li className="cursor-pointer">Trayectoria</li>
                        <li className="cursor-pointer">Sobre Nosotros</li>
                        <li className="cursor-pointer">Contáctanos</li>
                        <FaLanguage className="cursor-pointer" fill="white" size={24}/>
                    </ul>
                </nav>
            </div>
        </div>
    )
}


export default Header