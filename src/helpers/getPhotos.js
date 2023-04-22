const slides = [
    {
      image: 'https://picsum.photos/500/300?random=1',
      caption: 'Slide 1',
    },
    {
      image: 'https://picsum.photos/500/300?random=2',
      caption: 'Slide 2',
    },
    {
      image: 'https://picsum.photos/500/300?random=3',
      caption: 'Slide 3',
    },
  ];
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
export default slides;