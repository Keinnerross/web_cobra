import { autoparts } from "../data/autoparts.js"

const TableImg = () => {




    return (
        <div className="flex justify-center items-center">

            <div className="w-[80%] rounded-[40px] overflow-hidden">

                <div className="w-full  font-bold h-[90px] items-center bg-slate-800 flex justify-center text-center text-[20px] ">
                    <span className="w-[50%] text-white">Imagen</span>
                    <span className="w-[50%] text-white">Descripción</span>
                </div>






                {autoparts.map((item) =>
                    <div className="flex">
                        <div style={{backgroundImage: `url('${item.img}')`}} className="w-[50%] h-[300px] bg-[99%] bg-white !bg-center bg-no-repeat "></div>
                        <div className="w-[50%] bg-white flex justify-center items-center"><p className="text-[20px]">{item.description}</p></div>

                    </div>

                )}



            </div>


        </div>
    )
}

export default TableImg;