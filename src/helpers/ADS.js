import Products from "./Products"

const photos = [
  {
    image: `/assets/cabledivisor.jpg`,
    id:'',
    price:'0.00',
    caption: 'Cámara exterior',
    description: 'Cámara de seguridad diseñada para resistir las condiciones climáticas y para monitorear áreas exteriores',
  },
  {
    image: `/assets/fisheye.jpg`,
    id:'',
    price:'0.00',
    caption: 'Cámara exterior',
    description: 'Cámara de seguridad diseñada para resistir las condiciones climáticas y para monitorear áreas exteriores',
  },
  {
    image: `/assets/generador.jpg`,
    id:'',
    price:'0.00',
    caption: 'Cámara exterior',
    description: 'Cámara de seguridad diseñada para resistir las condiciones climáticas y para monitorear áreas exteriores',
  },
  {
    image: `/assets/glandulas.jpg`,
    id:'',
    price:'0.00',
    caption: 'Cámara exterior',
    description: 'Cámara de seguridad diseñada para resistir las condiciones climáticas y para monitorear áreas exteriores',
  },
  {
    image: `/assets/secure-home.jpg`,
    id:'',
    price:'0.00',
    caption: 'Cámara exterior',
    description: 'Cámara de seguridad diseñada para resistir las condiciones climáticas y para monitorear áreas exteriores',
  },
  {
    image: `/assets/probadores.jpg`,
    id:'',
    price:'0.00',
    caption: 'Cámara exterior',
    description: 'Cámara de seguridad diseñada para resistir las condiciones climáticas y para monitorear áreas exteriores',
  },
  {
    image: `/assets/spy.jpg`,
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
    width: "auto",
    height: "350px",
    alt: Products.caption,
    onError: () => {console.log("Error")},
  })