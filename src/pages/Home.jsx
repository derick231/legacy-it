
import Header from '../components/Header'
import Slider from '../components/slider'
import web from '../assets/web.jpg'
import graphic from '../assets/graphic.jpg'
import digital from '../assets/digital.jpg'
import { useTranslation } from 'react-i18next'
import Background from '../components/Background'
import ServiceSection from '../components/ServiceSection'
import Footer from '../components/Footer'

const Home = () => {
  const {t} = useTranslation()

  return (
    < >
      <Header/>  
      <Slider/>
      <ServiceSection
        title={t("slides.webDevelopment")}
        content={t("contents.webDevelopment")}
        image={web}
      />

      <ServiceSection
        title={t("slides.graphicDesign")}
        content={t("contents.graphicDesign")}
        image={graphic}
        reverse
      />

      <ServiceSection
        title={t("slides.digitalMarketing")}
        content={t("contents.digitalMarketing")}
        image={digital}
      />

      <Background
      title={t("slides.background")}
      content={t("contents.background")}
      />

      <Footer/>
      
    </>
  )
}

export default Home