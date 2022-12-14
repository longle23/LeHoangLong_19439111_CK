import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useEffect, useState } from "react";
import * as bikeService from "../services/bikeService";


import BikeContext from './Context'

function Provider({ children }) {
  const [bikes, setBikes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    bikeService
      .getBikes()
      .then((data) => {
        setBikes(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [loading]);

  return (
    <BikeContext.Provider value={{ bikes, setBikes, loading, setLoading }}>
      {children}
    </BikeContext.Provider>
  );
}

export default Provider;
