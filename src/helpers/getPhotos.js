const slides = [
    {
      image: 'https://github.com/eismerelnps/SegurtecSURL/blob/b22c77f98b40758c6bf4cc3c1686abe023d4ffee/docs/static/media/camera-back.5557eae55515246e906b.png',
      caption: 'Slide 1',
    },
    {
      image: 'https://github.com/eismerelnps/SegurtecSURL/blob/b22c77f98b40758c6bf4cc3c1686abe023d4ffee/docs/static/media/dome.7ee3c66ecea72610404c.png',
      caption: 'Slide 2',
    },
    {
      image: 'https://github.com/eismerelnps/SegurtecSURL/blob/b22c77f98b40758c6bf4cc3c1686abe023d4ffee/docs/static/media/gavin.b42358bccf50fa36413f.png',
      caption: 'Slide 3',
    },
    {
      image: 'https://github.com/eismerelnps/SegurtecSURL/blob/b22c77f98b40758c6bf4cc3c1686abe023d4ffee/docs/static/media/lacer.ff46d9d09aa3b5514e4c.png',
      caption: 'Slide 4',
    },
    {
      image: 'https://github.com/eismerelnps/SegurtecSURL/blob/b22c77f98b40758c6bf4cc3c1686abe023d4ffee/docs/static/media/card-segurtec.0ce4706aa6b87b2ac671.png',
      caption: 'Slide 4',
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

export default slides;