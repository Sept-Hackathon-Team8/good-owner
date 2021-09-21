import React from "react";
import Pets from "../../components/pets/Pets";
import AddPet from "../../components/add-pet/AddPet";

const HomePage = () => {
  return (
    <div className="homepage-container">
      <h1>Once logged in, you end up here</h1>
      <h2>Pets</h2>
      <Pets />
      <AddPet />
    </div>
  );
};

export default HomePage;