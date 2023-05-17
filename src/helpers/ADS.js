import Products from "./Products"

const photos = [
  {
    image: `/assets/ADS/cardSegurtec.png`,
    id:'',
    price:'0.00',
    caption: 'Cámara exterior',
    description: 'Cámara de seguridad diseñada para resistir las condiciones climáticas y para monitorear áreas exteriores',
  },

  {
    image: `/assets/ADS/cabledivisor.jpg`,
    id:'',
    price:'0.00',
    caption: 'Cámara exterior',
    description: 'Cámara de seguridad diseñada para resistir las condiciones climáticas y para monitorear áreas exteriores',
  },
  {
    image: `/assets/ADS/fisheye.jpg`,
    id:'',
    price:'0.00',
    caption: 'Cámara exterior',
    description: 'Cámara de seguridad diseñada para resistir las condiciones climáticas y para monitorear áreas exteriores',
  },
  {
    image: `/assets/ADS/generador.jpg`,
    id:'',
    price:'0.00',
    caption: 'Cámara exterior',
    description: 'Cámara de seguridad diseñada para resistir las condiciones climáticas y para monitorear áreas exteriores',
  },
  {
    image: `/assets/ADS/glandulas.jpg`,
    id:'',
    price:'0.00',
    caption: 'Cámara exterior',
    description: 'Cámara de seguridad diseñada para resistir las condiciones climáticas y para monitorear áreas exteriores',
  },
  {
    image: `/assets/ADS/secure-home.jpg`,
    id:'',
    price:'0.00',
    caption: 'Cámara exterior',
    description: 'Cámara de seguridad diseñada para resistir las condiciones climáticas y para monitorear áreas exteriores',
  },
  {
    image: `/assets/ADS/probadores.jpg`,
    id:'',
    price:'0.00',
    caption: 'Cámara exterior',
    description: 'Cámara de seguridad diseñada para resistir las condiciones climáticas y para monitorear áreas exteriores',
  },
  {
    image: `/assets/ADS/spy.jpg`,
    id:'',
    price:'0.00',
    caption: 'Cámara exterior',
    description: 'Cámara de seguridad diseñada para resistir las condiciones climáticas y para monitorear áreas exteriores',
  },
]

export const ADS = ({
    slides: photos,
    interval: 5000,
    transition: "opacity 1s ease-in-out",
    captionPosition: "bottom",
    width: '100%',
    height: '100px',
    alt: Products.caption,
    onError: () => {console.log("Error")},
  })