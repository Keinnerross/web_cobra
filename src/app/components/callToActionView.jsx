const CallToActionView = () => {
    return (

        <div className="flex w-full bg-[#0f0f0f] pb-10 h-[600px]">
            <div className="w-[28%] bg-white rounded-br-[80px]">img</div>
            <div className="flex items-center px-6 justify-center w-[44%]">
                <div className="flex flex-col gap-8 pt-8">
                    <h3 className="text-3xl text-center text-white">Lorem ipsum dolor sit, amet consectetu</h3>
                    <p className="text-center text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, iusto impedit commodi possimus.</p>
                    <button className="cursor-pointer bg-white rounded-full py-2 w-[100%]">
                        Conocer Trabajos
                    </button>
                </div>
            </div>
            <div className="w-[28%] bg-white rounded-bl-[80px]">img</div>
        </div>
    )
}

export default CallToActionView;