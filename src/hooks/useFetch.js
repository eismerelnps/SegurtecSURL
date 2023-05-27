import { useEffect, useState } from "react";

export const useFetch = (url) => {
    console.log('fetch fetching');
  const [state, setState] = useState({
    data: null,
    loading: 'Cargando los datos',
    error: null,
  });

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        setState({
          loading: 'false',
          error: null,
          data,
        })
        // .catch((error) => {
        //     console.log(error); // Log any fetch errors
        //     setState({
        //       loading: false,
        //       error: error.message,
        //       data: null,
        //     });
        // })
      });
  }, [url]);
  return state;
};
