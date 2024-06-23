import Image from 'next/image'
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { MdPlace } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";



const Footer = () => {

    const iconSize = 20;

    return (
        <div className="w-full h-[400px] bg-[#0f0f0f] text-white flex items-center justify-center">
            <div className="w-[80%] flex flex-col max-w-[1550px]">
                <div className="flex gap-12 justify-beetween border-white border-b-[2px] pt-8 pb-14">
                    <div className="w-[50%]">
                        <Image className="cursor-pointer"
                            src="/assets/logo.png"
                            width={150}
                            height={400}
                            alt="Logotype" />
                        <p className='py-8'>Fabricante Automotríz</p>
                    </div>

                    <div className="w-[50%] flex flex-col gap-6">
                        <button className="w-[100%] bg-red-800  text-white rounded-full font-bold hover:bg-red-600 cursor-pointer py-4 ">Contáctenos</button>
                        <div className="flex">
                            <div className="flex flex-col gap-8 w-[50%] ">
                                <div className='flex items-center gap-2'>
                                    <FaPhoneAlt size={iconSize} fill='white' />
                                    <span>9 9123 4567</span>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <IoIosMail size={iconSize} fill='white' />
                                    <span>mail@cobra.com</span>
                                </div>
                            </div>
                            <div className="flex w-100% flex-col gap-8 w-[50%] ">
                                <div className='flex items-center gap-2'>
                                    <AiFillInstagram size={iconSize} fill='white' />

                                    <span>@mySocialMedia</span>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <MdPlace size={iconSize} fill='white' />
                                    <span>Mi dirección</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="icons"></div>
                    <span>copyright 2024 - all right reserved</span>
                </div>
            </div>
        </div>
    )
}

export default Footer;