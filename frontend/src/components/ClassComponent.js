import React, { Component } from "react";
import Utils from "../utils/Utils";

const clickUtils1 = new Utils();
export default class ClassComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      buttonClicked: false,
      clickUtils: "",
    };
    this.updateFunction = this.updateFunction.bind(this);
  }

  componentWillMount() {
    console.log("Will mount");
    this.setState({ name: "Shashank" });
  }

  componentDidMount() {
    console.log("Did mount");
    this.setState({ clickUtils: new Utils() });
  }

  updateFunction() {
    console.log("update");
    console.log(this);
    this.setState({
      buttonClicked: true,
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.buttonClicked == false) {
      console.log("shouldComponentUpdate");
      return true;
    }
  }

  render() {
    return (
      <div>
        <button onClick={clickUtils1.onClickFunction}> onClickFunction</button>
        <button onClick={clickUtils1.onClickFunction2}>
          {" "}
          onClickFunction2
        </button>
        {this.state.name}
      </div>
    );
  }
}
