

const Footer = () => {
    return (
        <div className="w-full h-[400px] bg-[#0f0f0f] text-white flex items-center justify-center">
            <div className="w-[80%] flex flex-col max-w-[1550px]">
                <div className="flex gap-12 justify-beetween border-white border-b-[2px] pt-8 pb-14">
                    <div className="w-[50%]">
                        <div>logo</div>
                        <p>Lorem ipsum dolor sit amet consectetur</p>
                    </div>

                    <div className="w-[50%] flex flex-col gap-6">
                        <button className="w-[100%] bg-white text-gray-950 rounded-full  cursor-pointer py-4 ">press</button>
                        <div className="flex">
                            <div className="flex flex-col gap-8 w-[50%] ">
                                <div>icon
                                    <span>9 9123 4567</span>
                                </div>
                                <div>icon
                                    <span>mail@cobra.com</span>
                                </div>
                            </div>
                            <div className="flex w-100% flex-col gap-8 w-[50%] ">
                                <div>icon
                                    <span>other info</span>
                                </div>
                                <div>icon
                                    <span>address VE</span>
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