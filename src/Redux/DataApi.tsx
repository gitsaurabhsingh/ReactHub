import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./hooks";
import { fetchhead } from "./Slice";

const DataApi = () => {
  const dispatch = useAppDispatch();
  const details = useAppSelector((state) => state.Api);
  useEffect(() => {
    dispatch(fetchhead());
  }, [dispatch]);
  return (
    <div>
      {details.data &&
        details.data.map((item) => {
          return <li>{item.title}</li>;
        })}
    </div>
  );
};

export default DataApi;
