import React from "react";
import "./Vendorbanner.css";

class Vendorbanner extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div className="banner-container teal darken-2">
        <br />
        <br />
        <div className="banner-text-box">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 30 30"
            className="pen-svg"
          >
            <path d="M13.473 7.196c-.425-.439-.401-1.127.035-1.552l4.461-4.326c.218-.211.498-.318.775-.318.282 0 .563.11.776.331l-6.047 5.865zm-7.334 11.021c-.092.089-.139.208-.139.327 0 .25.203.456.455.456.115 0 .229-.042.318-.128l.748-.729-.633-.654-.749.728zm8.212-6.482l-2.57 2.481c-.824.799-1.607 1.328-2.705 1.79.496-1.084 1.05-1.852 1.873-2.65l2.569-2.479-1.049-1.083-2.564 2.485c-1.378 1.336-2.08 2.63-2.73 4.437l1.133 1.169c1.824-.593 3.14-1.255 4.518-2.591l2.563-2.486-1.038-1.073zm7.878-7.243l-5.527 5.359-1.239-1.279 5.529-5.361c.824-.803 2.087.456 1.237 1.281zm-.643-3.036c-.572 0-1.156.209-1.64.678l-6.604 6.405 3.326 3.434 6.604-6.403c.485-.47.728-1.094.728-1.719 0-1.426-1.181-2.395-2.414-2.395zm-3.586 12.01v7.534h-16v-12h8.013l2.058-2h-12.071v16h20v-11.473l-2 1.939z" />
          </svg>
          <span className="banner-text">Buy, Sell and Design</span>
        </div>
      </div>
    );
  }
}

export default Vendorbanner;
