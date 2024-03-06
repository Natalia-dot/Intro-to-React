import { Component } from "react";

export class Carousel extends Component {
  state = {
    active: 0,
  };
  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pet/none.jpg"],
  };

  changeIndex = (e) => {
    this.setState({
      active: +e.target.dataset.index,
      //we use the + sign because everything coming from the DOM is string;
      //the plus turns it to a number. Kind of like json.parse
    });
  };

  render() {
    const { active } = this.state;
    const { images } = this.props;

    return (
      <div className="carousel">
        <img src={images[active]} alt="animal hero" />
        <div className="carousel-smaller">
          {images.map((image, index) => (
            //para que no me diga que tiene que tener una tecla asignada
            // eslint-disable-next-line
            <img
              onClick={this.changeIndex}
              data-index={index}
              key={image}
              src={image}
              alt="pet"
              className={index === active ? "active" : ""}
            />
          ))}
        </div>
      </div>
    );
  }
}
