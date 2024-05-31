const MainSlider = () => {
    return (
        <div className='h-[650px] bg-no-repeat bg-cover bg-[left_bottom_-130px]' style={{
            backgroundImage: `linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0)), url('/assets/bg.png')`,
            }}>
            <div className="flex justify-center py-[130px] h-full">
                <span className="text-white text-5xl">Pro Made Cobra</span>
            </div>
        </div>
    )
}

export default MainSlider;
