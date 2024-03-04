import { createRoot } from "react-dom/client";
import { SearchParams } from "./SearchParams";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Details } from "./Details";
// 1.1 const Pet = () => {
// return React.createElement("div", {}, [
//     React.createElement("h1", {}, "Maki"),
//     React.createElement("h2", {}, "Dog"),
//     React.createElement("h2", {}, "Yorkshire"),

// ])
// };
//This is okay but Pet will not be able to render any more pets, so we want to make it reusable

//ANTIGUOO
// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "Adopt-a-me!"),
//      1.1 React.createElement(Pet),
//     React.createElement(
//       Pet,
//       { name: "Maki", species: "Dog", race: "Yorkshire" },
//       null
//     ),
//     React.createElement(
//       Pet,
//       { name: "Pitu", species: "Cat", race: "Orange cat" },
//       null
//     ),
//     React.createElement(
//       Pet,
//       { name: "Pato", species: "Reptile", race: "Gecko" },
//       null
//     ),
//   ]);
// };
// const mainContainer = document.getElementById("root");
// const root = createRoot(mainContainer);
// root.render(React.createElement(App, {}, null));
//siempre tiene 3 argumentos createElement, pero pueden obviarse
// React.createElement(App) funciona igual

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <header>
          <Link to="/">Adopt-a-me!</Link>
          {/* //   <Pet name="Maki" species="Dog" race="Yorkshire" /> */}
          {/* //   <Pet name="Pitu" species="Cat" race="Orange Cat" /> */}
          {/* //   <Pet name="Pato" species="Reptile" race="Gecko" />  */}
        </header>
        <Routes>
          <Route path="/" element={<SearchParams />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

const mainContainer = document.getElementById("root");
const root = createRoot(mainContainer);
root.render(<App />);
