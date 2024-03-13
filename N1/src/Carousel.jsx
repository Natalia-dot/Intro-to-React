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
      <div className="flex-row flex  w-full justify-between h-[360px]">
        <div className="w-full h-full flex-row flex items-center justify-center gap-10">
          <img
            src={images[active]}
            alt="animal hero"
            className="h-5/6 rounded-lg"
          />
          <div className="w-fit h-5/6 flex flex-col justify-center align-middle flex-wrap">
            {images.map((image, index) => (
              //para que no me diga que tiene que tener una tecla asignada
              // eslint-disable-next-line
              <img
                onClick={this.changeIndex}
                data-index={index}
                key={image}
                src={image}
                alt="pet"
                className={
                  index === active
                    ? "w-10 rounded-full opacity-60 m-1"
                    : "w-10 rounded-full m-1"
                }
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
