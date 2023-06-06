import logo from "./logo.svg";
import "./App.css";
import React, { component } from "react";
import EmployeeTable from "./components/EmployeeTable";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      names: ["amit", "pranav", "mayur"],
    };
  }

  addemployee = (nm) => {
    this.setState({ ...this.state, names: [...this.state.names, nm] });
  };
  render() {
    return (
      <div>
        <EmployeeTable
          empdata={this.state.names}
          insertdata={this.addemployee}
        ></EmployeeTable>
      </div>
    );
  }
}

export default App;
