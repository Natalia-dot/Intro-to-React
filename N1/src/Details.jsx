import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { petFetch } from "./fetchPet";
import { Carousel } from "./Carousel";
import { ErrorBoundary } from "./ErrorBoundary";
import { lazy, useContext, useState } from "react";
import { AdoptedPetContext } from "./AdoptedPetContext";

const Modal = lazy(() => import("./Modal"));

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
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="p-0 m-0 flex-col bg-red-500 w-5/6 h-5/6 rounded-2xl">
        <Carousel images={individualPet.images} />
        <div className="mb-10 mx-5">
          <h2 className="my-2 font-bold">{individualPet.name}</h2>
          <h3 className="  text-xs -mt-2">
            {individualPet.city}, {individualPet.state}
          </h3>
          <h4 className="mt-4">
            A {individualPet.breed} {individualPet.animal}
          </h4>
          <button onClick={() => setShowModal(true)}>
            Adopt {individualPet.name}
          </button>
          <p>{individualPet.description}</p>
          {showModal ? (
            <Modal>
              <h2 className="m-4 font-semibold">
                Do you want to adopt {individualPet.name}?
              </h2>
              <p>This is an important thing!</p>
              <button
                onClick={() => {
                  setAdoptedPet(individualPet);
                  navigate("/");
                }}
              >
                Yes
              </button>
              <button
                onClick={() => setShowModal(false)}
                className=" bg-red-400 bg-opacity-50 my-4"
              >
                No
              </button>
            </Modal>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export const ErrorBoundaryDetails = (props) => (
  <ErrorBoundary>
    <Details {...props} />
  </ErrorBoundary>
);
