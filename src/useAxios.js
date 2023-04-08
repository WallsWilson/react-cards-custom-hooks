import { useState,useEffect } from "react";
import axios from "axios";
import { v4 as uuid} from "uuid";
import { scryRenderedComponentsWithType } from "react-dom/test-utils";

function useAxios(baseUrl) {
    const [data, setData] = useState([]);

   const addData = async (urlExtension) => {
    const response = await axios.get(`${baseUrl}${urlExtension}`);
    setData((data) => [...data, { ...response.data, id: uuid()}]);
   }

    useEffect(() => {
      async function fetchData() {
        const response = await axios.get(baseUrl);
        setData(response.data);
      }
      fetchData();
    }, [baseUrl]);

    return [data, fetchData];
}

export default useAxios;