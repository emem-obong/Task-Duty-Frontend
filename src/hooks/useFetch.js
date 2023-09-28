import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(url);
      const data = await res.json();
      setData(data.tasks?data.tasks:data.task);
      setLoading(false);
      console.log(data);
    };
    setTimeout(async () => {
      try {
        await getData();
      } catch (error) {
        setError("oops something went wrong");
        setLoading(false);
      }
    }, 2000);
  }, []);

  return { data, loading, error };
};
