const CallToActionView = ({ title, description, buttonTitle }) => {

    const images = {
        one: "assets/cobraUno.jpeg",
        dos: "assets/cobraDos.png"
    }


    return (

        <div id="nosotros" className="flex xl:flex-row flex-col items-center xl:items-stretch w-full bg-[#0f0f0f] pb-10 gap-8 xl:gap-0 ">
            <div style={{ backgroundImage: `url('${images.dos}')` }} className="hidden xl:flex bg-no-repeat bg-cover w-[28%] bg-white rounded-br-[80px]"></div>
            <div className="flex items-center px-6 justify-center xl:w-[44%]">
                <div className="flex flex-col gap-8 pt-8 text-white xl:text-center text-justify ">
                    <h3 className="text-[35px] font-bold">{title}</h3>
                    <p className=" ">{description}
                    </p>
                    <button className="cursor-pointer bg-red-800 hover:bg-red-600 font-bold text-white rounded-full py-4 w-[100%]">
                        {buttonTitle}
                    </button>
                </div>
            </div>
            <div style={{ backgroundImage: `url('${images.one}')` }} className="w-[90%] h-[400px] xl:h-auto bg-no-repeat bg-cover bg-bottom xl:w-[28%] bg-white xl:rounded-bl-[80px] rounded-[25px]"></div>
        </div>
    )
}

export default CallToActionView;