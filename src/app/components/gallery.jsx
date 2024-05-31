const Gallery = () => {
    return (
        <div className="w-full flex h-[650px] items-center bg-[#0f0f0f] justify-center mt-6">
            <div className="flex flex-col w-[80%] h-[100%] gap-4">
                <div className="flex gap-4 justify-between">
                    <div className="w-[33%] h-[300px] bg-gray-400">img</div>
                    <div className="w-[33%] h-[300px] bg-gray-400">img</div>
                    <div className="w-[33%] h-[300px] bg-gray-400">img</div>
                </div>
                <div className="h-[100%] bg-gray-400 rounded-t-[100px]">
                    img
                </div>
            </div>
        </div>
    )
}

export default Gallery