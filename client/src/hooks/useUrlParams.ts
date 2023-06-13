import { useSearchParams } from "react-router-dom";

const useUrlParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const urlParamsHandler = (
    key: string,
    value: string | number | object,
    key1?: string,
    value1?: string,
  ) => {
    var params: any = {};
    searchParams.forEach((value: string, key: string) => (params[key] = value));

    if (key === "filter" || key === "search") {
      setSearchParams({
        ...params,
        [key]: typeof value === "object" ? JSON.stringify(value) : value,
        page: 1,
      });
    } else if (key1) {
      setSearchParams({
        ...params,
        [key]: value,
        [key1]: value1,
        page: 1,
      });
    } else {
      setSearchParams({
        ...params,
        [key]: typeof value === "object" ? JSON.stringify(value) : value,
      });
    }
  };

  const resetParamsUrl = () => {
    var params: any = {};
    searchParams.forEach((value: string, key: string) => (params[key] = value));
    setSearchParams({ page: params?.page || 1 });
  };
  return { searchParams, urlParamsHandler, resetParamsUrl };
};

export default useUrlParams;
