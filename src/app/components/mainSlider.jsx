const MainSlider = () => {
    return (
        <div className='h-[650px] bg-no-repeat bg-cover bg-[center_bottom_-130px]' style={{
            backgroundImage: `linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0)), url('/assets/bg.jpg')`,
            }}>
            <div className="flex justify-center py-[100px] h-full">
                <span className="text-white text-4xl">Pro Made Cobra</span>
            </div>
        </div>
    )
}

export default MainSlider;
