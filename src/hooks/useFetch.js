// hooks/useFetch.js
import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({
    next: null,
    previous: null,
    first: null,
    last: null,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async (targetUrl = url) => {
    try {
      setLoading(true);
      const respuesta = await fetch(targetUrl);
      if (!respuesta.ok) throw new Error("Error fetching data");
      const jsonData = await respuesta.json();
      setData(jsonData);
      setPagination(jsonData.links || {
        next: null,
        previous: null,
        first: null,
        last: null
      });
    } catch (error) {
      setError(error.message || "Ocurrio un problema inesperado");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  const navigateTo = (pageType) => {
    if (pagination[pageType]) {
      fetchData(pagination[pageType]);
    }
  };

  return { data, pagination, navigateTo, loading, error, refetch: fetchData };
};
