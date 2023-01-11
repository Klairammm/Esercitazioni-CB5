import { useEffect, useState } from "react";

export function useFetch(urlToFetch) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setData(null);
    setError(null);
    setLoading(true);

    try {
      const data = await fetch(urlToFetch).then((res) => res.json());
      setData(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, error, loading, refetch: fetchData };
}
