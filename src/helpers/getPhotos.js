const Slides = [
    {
      image: `/assets/camera-back.png`,
      caption: 'Slide 1',
     
    },
    {
      image: `./assets/dome.png`,
      caption: 'Slide 2',
    },
    {
      image: `./assets/gavin.png`,
      caption: 'Slide 3',
    },
    {
      image: `./assets/lacer.png`,
      caption: 'Slide 4',
    },
    {
      image: `./assets/card-segurtec.png`,
      caption: 'Slide 5',
    },
    {
      image: `./assets/connection.png` ,
      caption: 'Slide 6 ',
    },
  ];

  /*
  let photos = [];

  export const getPhotos = (url) => {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((response) => response)
        .then((data) => {
          photos = data;
          resolve(photos);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
  
  //export default photos;
/*const getPhotos = async ( index ) => {
  const url = `https://picsum.photos/250/300?random=${index}`
  const result = await fetch(url);
  const data = result.json();

  const photos = data;
  return photos;
}

let photos;

export const getPhotos = ( ) => {
  const url = 'https://jsonplaceholder.typicode.com/photos';
  return new Promise((resolve, reject) => {
    fetch( url )
      .then((response) => response.json())
      .then((data) => {
        photos = data;
        resolve(photos);
      })
      .catch((err) => {
        reject(err);
      })
  });
};*/

export default Slides;