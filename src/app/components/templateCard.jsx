const TemplateCard = ({ title, description, textButton, directionReverse }) => {



    return (
        <div className="h-[600px] bg-[#0f0f0f] text-white flex justify-center items-center">
            <div className={`w-[80%] h-[400px] flex  ${directionReverse ? "flex-row-reverse" : "flex"} border-solid border-white border-[2px] rounded-tl-[50px] rounded-br-[50px]`}>
                <div className="w-[45%] bg-white rounded-tl-[48px] rounded-br-[48px]">
                </div>
                <div className="w-[55%]">
                    <div className=" flex flex-col p-8 gap-4">
                        <h3 className="text-3xl">{title ? title : "My Title"}</h3>
                        <p>{description ? description : "description lorem ipsum "}</p>
                        <button className="bg-white text-gray-950 rounded-full cursor pointer py-2">{textButton ? textButton : "TextButton"}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TemplateCard