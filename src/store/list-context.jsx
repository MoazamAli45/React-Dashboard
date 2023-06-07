import React from "react";
import { useCallback } from "react";
import { useEffect } from "react";

import { db } from "../firebase-config";
import { collection, getDocs } from "firebase/firestore";

export const DataContext = React.createContext();

const DataProvider = (props) => {
  const [rowsData, setRowsData] = React.useState([]);

  const emptyCollectionRef = collection(db, "products");
  // now getting data from firebase
  // wrap this function in useCallback

  const getData = useCallback(async () => {
    const data = await getDocs(emptyCollectionRef);
    setRowsList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  }, [emptyCollectionRef]);

  useEffect(() => {
    getData();
  }, []);
  // I want only one time rerendering so

  function setRowsList(rows) {
    setRowsData(rows);
  }

  return (
    <DataContext.Provider value={{ rowsData, setRowsList }}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataProvider;
