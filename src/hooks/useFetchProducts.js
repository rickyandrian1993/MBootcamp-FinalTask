import { useEffect, useState } from 'react';
import api from '../api';
import handleError from '../helpers/handleError';

const useFetchProducts = (state) => {
  const [loading, setLoading] = useState(false);
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    setLoading(true);
    api.get('/products')
      .then(({ data }) => {
        setDatas(data);
      })
      .catch(err => handleError(err))
      .finally(() => setLoading(false));
  }, [state]);

  return { loading, datas }
}

export default useFetchProducts;
