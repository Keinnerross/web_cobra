


const Gallery = () => {

    const images = {
        one: "assets/galeria/car (1).jpg",
        dos: "assets/galeria/car (2).jpg",
        tres: "assets/galeria/car (3).jpg",
        cuatro: "assets/galeria/car (4).jpg",
        cinco: "assets/galeria/car (5).jpg",
        seis: "assets/galeria/car (6).jpg",

    }


    return (
        <div className="py-[80px] w-full flex  items-center bg-[#0f0f0f] justify-center mt-6">
            <div className="flex flex-col w-[80%] h-[100%] gap-4">
                <h3 className="text-white font-bold text-center text-[42px] ">Galería</h3>

                <div className="flex gap-8 justify-between">
                    <div style={{ backgroundImage: `url('${images.one}')` }} className="cursor-pointer hover:scale-[1.05] transition bg-no-repat bg-cover bg-center rounded-[25px] w-[33%] h-[300px] bg-gray-400"></div>
                    <div style={{ backgroundImage: `url('${images.dos}')` }} className="cursor-pointer hover:scale-[1.05] transition bg-no-repat bg-cover bg-center rounded-[25px] w-[33%] h-[300px] bg-gray-400"></div>
                    <div style={{ backgroundImage: `url('${images.tres}')` }} className="cursor-pointer hover:scale-[1.05] transition bg-no-repat bg-cover bg-center rounded-[25px] w-[33%] h-[300px] bg-gray-400"></div>

                </div>
                <div className="flex pt-4 gap-8 justify-between">
                <div style={{ backgroundImage: `url('${images.cuatro}')` }} className="cursor-pointer hover:scale-[1.05] transition bg-no-repat bg-cover bg-center rounded-[25px] w-[33%] h-[300px] bg-gray-400"></div>
                <div style={{ backgroundImage: `url('${images.cinco}')` }} className="cursor-pointer hover:scale-[1.05] transition bg-no-repat bg-cover bg-center rounded-[25px] w-[33%] h-[300px] bg-gray-400"></div>
                <div style={{ backgroundImage: `url('${images.seis}')` }} className="cursor-pointer hover:scale-[1.05] transition bg-no-repat bg-cover bg-center rounded-[25px] w-[33%] h-[300px] bg-gray-400"></div>


                </div>
                {/* <div className="h-[100%] bg-gray-400 rounded-t-[100px]">
                    img
                </div> */}
            </div>
        </div>
    )
}

export default Gallery