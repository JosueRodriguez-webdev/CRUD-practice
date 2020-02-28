import React, { useState, useEffect } from "react";

import AnimalForm from "./AnimalForm.js";
import AnimalList from "./AnimalsList.js";

import { axiosWithAuth } from "../utils/axiosWithAuth";

export default function AnimalDashboard() {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get(`/api/animals`)
      .then((res) => {
        setAnimals(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // How can get fetch the data from the server when the component mounts?
  // How can we capture and set that data to state?

  return (
    <div className="dash">
      <AnimalForm animals={animals} updateAnimals={setAnimals} />
      <AnimalList animals={animals} />
    </div>
  );
}
