import React from "react";
import "./App.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      background1: "#000000",
      file: "",
      imagePreviewUrl: ""
    };
  }

  handleImageChange = e => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      this.setState({ file: file, imagePreviewUrl: reader.result });
    };
    reader.readAsDataURL(file);
  };

  handleBackgroundColor1 = e => {
    this.setState({ background1: e.target.value });
  };

  render() {
    let backgroundColor1 = {
      backgroundColor: `${this.state.background1}`
    };
    let { imagePreviewUrl } = this.state;

    return (
      <>
        <div className="container" style={backgroundColor1}>
          <header className="header">
            <div className="nav-bar">
              <ul>
                <li>
                  <a href="https://www.markwuu.com">Contact</a>
                </li>
                <li>
                  <a href="https://www.markwuu.com">About</a>
                </li>
                <li>
                  <a href="https://www.markwuu.com">Home</a>
                </li>
              </ul>
            </div>
            <div className="logo-box">
              {imagePreviewUrl ? (
                <img className="logo" src={imagePreviewUrl} alt="" />
              ) : (
                <img
                  src={require(`../src/circle.jpg`)}
                  alt="logo"
                  className="logo"
                />
              )}
            </div>

            <div className="text-box">
              <h1 className="heading-primary">
                <span className="heading-primary-main">Fushimi Inari</span>
                <span className="heading-primary-sub">
                  Red torii gates of Kyoto
                </span>
              </h1>

              <input
                type="text"
                value={this.state.background1}
                onChange={this.handleBackgroundColor1}
              />

              <div id="uploadContainer">
                <input
                  type="file"
                  id="file"
                  onChange={this.handleImageChange}
                />
                <label htmlFor="file" id="upload">
                  Upload a logo
                </label>
              </div>
            </div>
          </header>
        </div>
      </>
    );
  }
}
