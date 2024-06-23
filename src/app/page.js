import Image from "next/image";
import MainSlider from "./components/mainSlider";
import CallToActionView from "./components/callToActionView";
import TemplateCard from "./components/templateCard";
import Gallery from "./components/gallery";
import TableImg from "./components/tableImg.jsx"
export default function Home() {


  const urlNosotros = "/assets/nosotros.png"
  const cobraTres ="/assets/cobraTres.jpeg"
  const cobraCuatro ="/assets/cobraCuatro.jpeg"

  return (
    <main className="w-full flex justify-center items-center bg-[#0f0f0f]">
      <div className="w-full max-w-[1550px]">
        <MainSlider />
        <CallToActionView />
        <TemplateCard
          title="Sobre Nosotros" description='
Antonio Infantino.- Fundador


Piloto italo-venezolano retirado de las emocionantes pistas de motociclismo y pique cuarto de milla del autódromo internacional de Turagua de Maracay (Venezuela).  Fundador de la empresa "Industria Automotriz Replica C.A" (IARCA) y con conocimientos en mecanica automotriz especializándose en la construcción de las réplicas del Shelby Cobra.
Guiomar Márquez – Gerente General.


Guiomar Márquez es Comunicador Social de la Universidad Católica Andrés Bello (Venezuela), con estudios avanzados en negocios y marketing digital en prestigiosas instituciones internacionales. Posee un Executive MBA de la Quantic School of Business and Technology (EE.UU.), un Máster en Marketing Digital de Wind Up School of Business (España) y un Diplomado en Gestión de Agencias de Marketing Digital de la Escuela de Asuntos Digitales (España). 
Guiomar Márquez, reconociendo el inmenso potencial de la empresa IARCA, decidió unirse a Antonio Ifantino para reestructurarla, aumentar su presencia en el mercado y proyectarla a nivel internacional. Ambos comparten una profunda pasión por el mundo automotriz y por los vehículos de renombre, lo que los motivó a combinar sus fuerzas y talentos para llevar la empresa a nuevas alturas. ' textButton=""
          imgUrl={urlNosotros}
          id={"nosotros"}
        />
        <TemplateCard
          title="¿Por qué elegirnos?"
          description='IARCA ofrece una calidad incomparable y el compromiso de preservar el encanto atemporal de este automóvil legendario con nuestra réplica excepcional, el Shelby Fami 427.
Contamos con un equipo con más de 20 años de experiencia, dedicado a elaborar a mano esta leyenda automotriz.  Nuestros ingenieros y artesanos cualificados trabajan incansablemente para ofrecer vehículos que honren el legado del original y al mismo tiempo ofrezcan el rendimiento esperado por el mercado actual.
IARCA cuenta con certificación de origen para sus vehículos, lo que garantiza su exportación a cualquier país del mundo.  
La misión de nuestra empresa es clara y audaz: “Producir y llevar al mercado mundial réplicas exclusivas de alta calidad del icónico automovil Shelby”.
Nuestra promesa es simple: ofrecer obras maestras que no sólo capturen la esencia del automovil diseñado por Shelby sino que también brinden un placer de conducción incomparable. Desde el diseño inicial hasta el montaje final, nos aseguramos de que cada detalle sea perfecto, garantizando a los clientes un producto tan bello como funcional.
'
          imgUrl={cobraTres}
          directionReverse={true}
        />
        <TemplateCard
          title="SHELBY FAMI 427 – MODELO STANDARD / STANDARD MODEL "
          description='Nuestro modelo standard es el Shelby Fami 427, que puede ser personalizado según las preferencias del cliente mediante opciones de mejoras disponibles.

          El Shelby Fami 427 es ensamblado a mano bajo la estricta supervisión de Antonio Infantino en todos sus procesos, garantizando una producción de calidad.   
'imgUrl={cobraCuatro}
        />


        <TableImg/>

        <Gallery></Gallery>
      </div>
    </main>
  );
}
