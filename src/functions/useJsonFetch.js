import { useState, useEffect } from "react";

export default function useJsonFetch(url, opts = {}) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    fetch(url, {
      ...{
        method: 'GET',
      },
      ...opts
    })
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        if (!data) {
          setError('Error! Empty Data Set.');
          return;
        } else if (/error/i.test(data.status)) {
          setError(data.status);
          return;
        }
        setData(data.status);
      })
      .catch((error) => {
        setLoading(false);
        setError(error.message);
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { data, loading, error };
}
