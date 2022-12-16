import { useEffect, useState } from "react";
import AxiosInstance from "../axios";

const useFetchApi = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log(props);
    if (props) {
      setIsLoading(true);
      AxiosInstance.get(props)
        .then((res) => {
          setIsLoading(false);
          setData(res.data);
        })
        .catch((err) => {
          setIsLoading(false);
          setError("oops something went wrong");
        });
    }
  }, [props]);

  return [isLoading, data, error];
};

export default useFetchApi;
