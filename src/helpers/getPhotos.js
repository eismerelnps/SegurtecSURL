const Slides = [
    {
      image: `${process.env.PUBLIC_URL}/assets/camera-back.png`,
      caption: 'Slide 1',
     
    },
    {
      image: `${process.env.PUBLIC_URL}./assets/dome.png`,
      caption: 'Slide 2',
    },
    {
      image: `${process.env.PUBLIC_URL}./assets/gavin.png`,
      caption: 'Slide 3',
    },
    {
      image: `${process.env.PUBLIC_URL}./assets/lacer.png`,
      caption: 'Slide 4',
    },
    {
      image: `${process.env.PUBLIC_URL}./assets/card-segurtec.png`,
      caption: 'Slide 5',
    },
    {
      image: `${process.env.PUBLIC_URL}./assets/connection.png` ,
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