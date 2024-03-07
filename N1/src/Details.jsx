import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { petFetch } from "./fetchPet";
import { Carousel } from "./Carousel";
import { ErrorBoundary } from "./ErrorBoundary";
import { useContext, useState } from "react";
import { Modal } from "./Modal";
import { AdoptedPetContext } from "./AdoptedPetContext";

const Details = () => {
  const [showModal, setShowModal] = useState(false);
  const { id } = useParams();
  const [_, setAdoptedPet] = useContext(AdoptedPetContext);
  const navigate = useNavigate();
  const results = useQuery(["detailsPage", id], petFetch);
  if (results.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">Nyoom</h2>
      </div>
    );
  }

  const individualPet = results?.data?.pets[0];
  return (
    <div
      className="p-0 m-0"
      style={{
        background: "url(http://pets-images.dev-apis.com/pets/wallpaperC.jpg)",
      }}
    >
      <Carousel images={individualPet.images} />
      <h2>{individualPet.name}</h2>
      <h3>
        {individualPet.city}, {individualPet.state}
      </h3>
      <h4>
        A {individualPet.breed} {individualPet.animal}
      </h4>
      <button onClick={() => setShowModal(true)}>
        Adopt {individualPet.name}
      </button>
      <p>{individualPet.description}</p>
      {showModal ? (
        <Modal>
          <h2>Do you want to adopt {individualPet.name}?</h2>
          <p>This is an important thing!</p>
          <button
            onClick={() => {
              setAdoptedPet(individualPet);
              navigate("/");
            }}
          >
            Yes
          </button>
          <button onClick={() => setShowModal(false)}>No</button>
        </Modal>
      ) : null}
    </div>
  );
};

export const ErrorBoundaryDetails = (props) => (
  <ErrorBoundary>
    <Details {...props} />
  </ErrorBoundary>
);
