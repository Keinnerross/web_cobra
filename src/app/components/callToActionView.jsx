const CallToActionView = () => {

    const images = {one: "assets/cobraUno.jpeg",
        dos: "assets/cobraDos.png"
    }


    return (

        <div id="nosotros" className="flex w-full bg-[#0f0f0f] pb-10 h-[650px]">
            <div  style={{ backgroundImage: `url('${images.dos}')` }} className="bg-no-repeat bg-cover w-[28%] bg-white rounded-br-[80px]"></div>
            <div className="flex items-center px-6 justify-center w-[44%]">
                <div className="flex flex-col gap-8 pt-8">
                    <h3 className="text-[35px] text-center text-white font-bold">Nuestra Empresa</h3>
                    <p className="text-center text-white">En los años noventa, Antonio Infantino, piloto italo-venezolano retirado de las emocionantes pistas de motociclismo y pique cuarto de milla del autódromo internacional de Turagua de Maracay (Venezuela), conoce en tierras estadounidenses a Everett Morrison, constructor del icónico automóvil Shelby Cobra.
                        En el encuentro entre ambas personalidades, Everett Morrison autoriza a Antonio Infantino, para que desarrolle réplicas del Shelby Cobra; confiando en su alto conocimiento automotriz y dedicación a la excelencia.
                        De esta manera, nace en Venezuela "Industria Automotriz Replica C.A" (IARCA), una firma imbuida por el espíritu de la pasión, la velocidad y la perfección.
                        En nuestra empresa, nos enorgullecemos de crear meticulosamente réplicas del icónico vehículo Shelby. Contamos con un equipo con más de 20 años de experiencia, dedicado a elaborar a mano esta leyenda automotriz.
                        IARCA cuenta con certificación de origen para sus vehículos, lo que garantiza su exportación a cualquier país del mundo.
                        Nuestra misión empresarial es clara y audaz: “Producir y llevar al mercado mundial réplicas exclusivas de alta calidad del icónico automovil Shelby”.
                    </p>
                    <button className="cursor-pointer bg-red-800 hover:bg-red-600 text-white rounded-full py-4 w-[100%]">
                        Conocer Trabajos
                    </button>
                </div>
            </div>
            <div  style={{ backgroundImage: `url('${images.one}')` }} className="w-[28%] bg-white rounded-bl-[80px]"></div>
        </div>
    )
}

export default CallToActionView;