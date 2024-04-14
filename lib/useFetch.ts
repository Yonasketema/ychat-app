import { useEffect, useState, useTransition } from "react";

const useFetch = (api, dep = []) => {
  const [isFetching, startTransition] = useTransition();
  const [data, setData] = useState();
  useEffect(() => {
    startTransition(() => {
      api().then((data) => setData(data));
    });
  }, [api]);

  return [isFetching, data];
};

export default useFetch;
