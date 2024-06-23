"use client";
import React, { useState } from "react";
import MainSlider from "./components/mainSlider";
import Header from "./components_layout/header";
import CallToActionView from "./components/callToActionView";
import TemplateCard from "./components/templateCard";
import Gallery from "./components/gallery";
import TableImg from "./components/tableImg.jsx"
import { fromJSON } from "postcss";
import { textEnglish, textSpanish } from "./data/textTranslate";
import Footer from "./components_layout/footer";



export default function Home() {

  const urlNosotros = "/assets/nosotros.png"
  const cobraTres = "/assets/cobraTres.jpeg"
  const cobraCuatro = "/assets/cobraCuatro.jpeg"

  const [language, setLanguage] = useState('es')

  const handleLanguage = () => {
    if (language == "es") {
      setLanguage("en")
      console.log("Cambiado a english")
    } else {
      setLanguage("es")
      console.log("Cambiado a Español")

    }
  }



  return (
    <main className="w-full flex justify-center items-center bg-[#0f0f0f]">
      <div className="w-full max-w-[1550px]">
        <Header language={language} handleLanguage={handleLanguage}


        />

        <MainSlider
          title={language == "es" ? "¡Haz Tuya la Leyenda de un Cobra Shelby!" : "Make the Legend of a Shelby Cobra Your Own!"}
          textButton={language == "es" ? "Descubre Nuestros Modelos" : "Discover Our Models"}
        />
        <CallToActionView

          title={language == "es" ? "Nuestra Empresa" : "Our Company"}
          description={language == "es" ? textSpanish.nuestraCompañia : textEnglish.ourCompany}
          buttonTitle={language == "es" ? "Contáctanos" : "Contact Us"}
        />



        <TemplateCard
          title={language == "es" ? "Sobre Nosotros" : "About us"} description={language == "es" ? textSpanish.nosotros : textEnglish.aboutUs}
          imgUrl={urlNosotros}
          id={"nosotros"}
          textButton={language == "es" ? "Contáctanos" : "Contact Us"}
        />
        <TemplateCard
          title={language == "es" ? "¿Por qué Elegirnos?" : "Why choose us?"}
          description={language == "es" ? textSpanish.elegirnos : textEnglish.whyUs}
          textButton={language == "es" ? "Contáctanos" : "Contact Us"}
          id={"porqueelegirnos"}
          imgUrl={cobraTres}
          directionReverse={true}
        />
        <TemplateCard
          title={language == "es" ? "SHELBY FAMI 427 – MODELO STANDARD" : "SHELBY FAMI 427 – STANDARD MODEL "}
          description={language == "es" ? textSpanish.modelo : textEnglish.model}
          imgUrl={cobraCuatro}
          id="modelos"
          textButton={language == "es" ? "Contáctanos" : "Contact Us"}

        />


        <TableImg
          id={"caracteristicas"}
          headerTitle1={language == "es" ? "Imagen" : "Picture"}
          headerTitle2={language == "es" ? "Características" : "Features"}
          language={language}

        />

        <Gallery id={"galeria"} title={language == "es" ? "Galería" : "Gallery"}></Gallery>
        <Footer language={language}/>
      </div>
     

    </main>
  );
}
