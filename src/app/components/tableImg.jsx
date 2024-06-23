import { autopartsEN, autopartsES } from "../data/autoparts.js"

const TableImg = ({ id, headerTitle1, headerTitle2, language }) => {




    return (
        <div id={id} className="flex justify-center items-center">

            <div className="w-[80%] rounded-[40px] overflow-hidden">

                <div className="w-full  font-bold h-[90px] items-center bg-red-800 flex justify-center text-center text-[20px] ">
                    <span className="w-[50%] text-white">{headerTitle1}</span>
                    <span className="w-[50%] text-white">{headerTitle2}</span>
                </div>



                {language == "es" ? autopartsES.map((item) =>
                    <div className="flex">
                        <div className="w-[50%] h-[300px] bg-[99%] bg-white flex justify-center items-center">
                            <div style={{ backgroundImage: `url('${item.img}')` }} className="w-[100%] h-full bg-no-repeat !bg-center scale-[.7]  xl:scale-[1]"></div>
                        </div>
                        <div className="w-[50%] bg-white flex justify-center items-center text-center"><p className="text-[20px]">{item.description}</p></div>

                    </div>

                ) : autopartsEN.map((item) =>
                    <div className="flex">
                        <div className="w-[50%] h-[300px] bg-[99%] bg-white flex justify-center items-center">
                            <div style={{ backgroundImage: `url('${item.img}')` }} className="w-[100%] h-full bg-no-repeat !bg-center scale-[.7]  xl:scale-[1]"></div>
                        </div>
                        <div className="w-[50%] bg-white flex justify-center items-center text-center"><p className="text-[20px]">{item.description}</p></div>

                    </div>

                )}





            </div>


        </div>
    )
}

export default TableImg;