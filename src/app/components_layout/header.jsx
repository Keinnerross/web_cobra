"use client";
import { FaLanguage } from "react-icons/fa6";
import Image from 'next/image'
import { Fragment, useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";

const Header = ({ handleLanguage, language }) => {


    const [isActiveMenu, setIsActiveMenu] = useState(false)
    const handleMenuMobile = () => {
        setIsActiveMenu(!isActiveMenu)
    }




    return (
        <Fragment>
            <div className="w-full   hidden xl:flex items-center justify-center max-h-[100px] h-[100px] w-full bg-[#0f0f0f]">
                <div className="w-[80%] max-w-[1550px] h-full flex justify-between items-center ">
                    <nav className="w-full flex justify-between items-center text-white">
                        <ul className="flex w-[42%] font-bold ">
                            <a href="#nosotros" className="w-[33%] hover:bg-red-700 cursor-pointer h-[100px] flex transition items-center justify-center ">     <li >{language == "es" ? "Sobre Nosotros" : "About Us"}</li> </a>
                            <a href="#porqueelegirnos" className="w-[33%] hover:bg-red-700 cursor-pointer h-[100px] flex transition items-center justify-center ">     <li >{language == "es" ? "¿Por qué Elegirnos?" : "Why Choose Us? "}</li> </a>
                            <a href="#modelos" className="w-[33%] hover:bg-red-700 cursor-pointer h-[100px] flex transition items-center justify-center ">     <li >{language == "es" ? "Modelos" : "Models"}</li> </a>
                        </ul>
                        <div className="w-[8%]">
                            <Image className="cursor-pointer"
                                src="/assets/logo.png"
                                width={80}
                                height={250}
                                alt="Logotype" />
                        </div>
                        <ul className="font-bold flex  items-center w-[45%] ">
                            <a href="#caracteristicas   " className="w-[33%] hover:bg-red-700 cursor-pointer h-[100px] flex transition items-center justify-center ">     <li >{language == "es" ? "Características" : "Features"}</li> </a>
                            <a href="#galeria" className="w-[33%] hover:bg-red-700 cursor-pointer h-[100px] flex transition items-center justify-center ">    <li >{language == "es" ? "Galería" : "Gallery"}</li> </a>

                            <a className="w-[25%] cursor-pointer hover:bg-red-700 h-[100px] transition flex items-center justify-center">  <li >{language == "es" ? "Contáctanos" : "Contact Us"}</li></a>
                            <div className="w-[25%] flex justify-center">
                                <Image
                                    className="cursor-pointer "
                                    src={language == "es" ? "/assets/estados-unidos.png" : "/assets/espana.png"}
                                    width={40}
                                    height={40}
                                    alt="Logotype"
                                    onClick={() => handleLanguage()}
                                />
                            </div>

                        </ul>
                    </nav>
                </div>
            </div>
            <div className="flex xl:hidden w-full justify-center">
                <div className="flex justify-between w-[90%] py-4">
                    <Image className="cursor-pointer"
                        src="/assets/logo.png"
                        width={80}
                        height={250}
                        alt="Logotype" />

                    <div className="flex gap-8 justify-center items-center">
                        <Image
                            className="cursor-pointer "
                            src={language == "es" ? "/assets/estados-unidos.png" : "/assets/espana.png"}
                            width={50}
                            height={50}
                            alt="Logotype"
                            onClick={() => handleLanguage()}
                        />
                        <RiMenu3Fill
                            onClick={() => handleMenuMobile()}
                            fill="white" size={44} />
                    </div>
                </div>

            </div>

            <div className={`${isActiveMenu ? "flex" : "hidden"} w-[300px] absolute right-0 h-auto bg-[#0f0f0f]  rounded-bl-[20px]`} >
                <div>
                    <ul className="flex font-bold text-white flex-col gap-4 p-8">
                        <a href="#nosotros">     <li >{language == "es" ? "Sobre Nosotros" : "About Us"}</li> </a>
                        <a href="#porqueelegirnos">     <li >{language == "es" ? "¿Por qué Elegirnos?" : "Why Choose Us? "}</li> </a>
                        <a href="#modelos"> <li >{language == "es" ? "Modelos" : "Models"}</li> </a>

                        <a href="#caracteristicas">     <li >{language == "es" ? "Características" : "Features"}</li> </a>
                        <a href="#galeria">    <li >{language == "es" ? "Galería" : "Gallery"}</li> </a>

                        <a href="#contacto">  <li >{language == "es" ? "Contáctanos" : "Contact Us"}</li></a>
                    </ul>
                </div>
            </div>


        </Fragment>
    )
}


export default Header