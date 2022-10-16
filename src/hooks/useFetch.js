import http from "../services/httpServices";
import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    setLoading(true);
    setData(null);
    setError(null);
    http
    .get(url)
    .then((res) => {
      setLoading(false);
      setData(res.data);
    })
    .catch((err) => {
      setLoading(false);
      setError(err.message);
    });
  }, [url]);

  return { data, error, loading };
};

export default useFetch;
