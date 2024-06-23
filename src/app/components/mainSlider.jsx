const MainSlider = ({ title, textButton }) => {
    return (
        <div className='h-[650px] bg-no-repeat bg-cover bg-center' style={{
            backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.23301820728291311) 0%, rgba(8,8,8,0.8016456582633054) 70%), url('/assets/bg.png')`,
        }}>
            <div className="flex flex-col items-center py-[160px] h-full gap-8">
                <span className="text-white text-[50px] xl:text-[72px] font-black w-[90%] xl:w-[50%] text-center leading-tight	">{title}</span>


                <a href="#modelos" className="flex justify-center "><button className="w-[90%] text-white text-[22px] font-bold rounded-full py-4 px-8 bg-red-800 hover:bg-red-600 cursor-pointer">{textButton}</button></a>
            </div>
        </div>
    )
}

export default MainSlider;
