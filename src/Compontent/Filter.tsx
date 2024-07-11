import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../Redux/hooks";
import { fetchSearch } from "../Redux/Slice";
import Style from "./Filter.module.scss";
import { useParams } from "react-router-dom";

const Filter = () => {
  const { userId } = useParams();
  const dispatch = useAppDispatch();
  const details = useAppSelector((state) => state.Api);
  useEffect(() => {
    dispatch(fetchSearch());
  }, [dispatch]);

  const filterData =
    details.Search &&
    details.Search.filter((item) => item.id.toString() === userId);
  console.log(filterData, "hello");
  return (
    <div className={Style.Filter}>
      <div className={Style.wrapper}>
        {filterData &&
          filterData.map((item) => {
            return (
              <div className={Style.Filterdisk}>
                <h2>{item.id}</h2>
                <p>{item.text}</p>
                <h3>{item.title}</h3>
                <img src={item.img} alt="" />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Filter;
