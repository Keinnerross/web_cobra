import { FaLanguage } from "react-icons/fa6";
import Image from 'next/image'


const Header = () => {
    return (
        <div className="w-full  flex items-center justify-center h-[75px] w-full bg-[#0f0f0f]">
            <div className="w-3/4 max-w-[1550px]">
                <nav className="flex justify-between items-center text-white">
                    <ul className="flex gap-20 w-[45%] ">
                        <li className="cursor-pointer">Home</li>
                        <li className="cursor-pointer">Nuestro Trabajo</li>
                        <li className="cursor-pointer">Servicios</li>
                    </ul>
                    <Image className="cursor-pointer"
                        src="/assets/logo.png"
                        width={60}
                        height={200}
                        alt="Logotype" />
                    <ul className="flex justify-end gap-12 w-[50%]">

                        <li className="cursor-pointer">Trayectoria</li>
                        <li className="cursor-pointer">Sobre Nosotros</li>
                        <li className="cursor-pointer">Contáctanos</li>
                        <FaLanguage className="cursor-pointer" fill="white" size={24} />
                    </ul>
                </nav>
            </div>
        </div>
    )
}


export default Header