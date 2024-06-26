const TemplateCard = ({ title, description, textButton, directionReverse, imgUrl, id }) => {



    return (
        <div id={id} className="py-[80px] bg-[#0f0f0f] text-white flex justify-center items-center">
            <div className={`w-[80%] h-[auto] min-h-[400px] flex flex-col  xl:flex-row ${directionReverse ? "xl:flex-row-reverse" : "flex"} border-solid border-red-800 border-[2px] rounded-tl-[50px] rounded-br-[50px]`}>
                <div style={{
                    backgroundImage: `url('${imgUrl}')`,
                }} className="w-[100%] xl:w-[45%] rounded-tl-[48px] xl:h-auto h-[400px] rounded-br-[48px] bg-cover bg-center bg-no-repeat ">
                </div>
                <div className="w-[100%] xl:w-[55%]">
                    <div className=" flex flex-col px-8 py-20 gap-4">
                        <h3 className="text-[35px] font-bold">{title ? title : "My Title"}</h3>
                        <p>{description ? description : "description lorem ipsum "}</p>
                        <button className="bg-red-800 hover:bg-red-600 text-white font-bold text-gray-950 rounded-full cursor pointer py-4">{textButton}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TemplateCard