import { FaLanguage } from "react-icons/fa6";
import Image from 'next/image'


const Header = () => {
    return (
        <div className="w-full  flex items-center justify-center max-h-[100px] h-[100px] w-full bg-[#0f0f0f]">
            <div className="w-[80%] max-w-[1550px] h-full flex justify-between items-center ">
                <nav className="w-full flex justify-between items-center text-white">
                    <ul className="flex w-[42%] font-bold ">
                        <a href="#nosotros" className="w-[33%] hover:bg-red-700 cursor-pointer h-[100px] flex transition items-center justify-center ">     <li >Sobre Nosotros</li> </a>
                        <a href="#porqueelegirnos" className="w-[33%] hover:bg-red-700 cursor-pointer h-[100px] flex transition items-center justify-center ">     <li >Por qué elegirnos</li> </a>
                        <a href="#modelos" className="w-[33%] hover:bg-red-700 cursor-pointer h-[100px] flex transition items-center justify-center ">     <li >Modelos</li> </a>



                      
                    </ul>
                    <div className="w-[8%]">
                        <Image className="cursor-pointer"
                            src="/assets/logo.png"
                            width={80}
                            height={250}
                            alt="Logotype" />
                    </div>
                    <ul className="font-bold flex  items-center w-[45%] ">

                        <li className="w-[28%] hover:bg-red-700 cursor-pointer transition h-[100px] flex items-center justify-center ">Carácteristicas</li>
                        <li className="w-[22%] cursor-pointer hover:bg-red-700 h-[100px] transition flex items-center justify-center ">Galería</li>
                        <li className="w-[25%] cursor-pointer hover:bg-red-700 h-[100px] transition flex items-center justify-center ">Contáctanos</li>
                        <FaLanguage className="w-[25%] cursor-pointer " fill="white" size={24} />
                    </ul>
                </nav>
            </div>
        </div>
    )
}


export default Header