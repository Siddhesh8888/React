import { useState } from "react";

const EmployeeTable = (props) => {
  let [myname, setmyname] = useState("");

  let addnewemployee = () => {
    props.insertdata(myname);
    setmyname("");
  };

  let displayemployee = props.empdata.map((name, index) => (
    <tr key={index}>
      <td>{name}</td>
    </tr>
  ));

  return (
    <div>
      <input
        type="text"
        name="nm"
        id="nm"
        placeholder="Enter Employee name"
        value={myname}
        onChange={(event) => {
          setmyname(event.target.value);
        }}
      ></input>{" "}
      <button
        type="button"
        name="btn"
        id="btn"
        value="btn"
        onClick={addnewemployee}
      >
        Add Employee
      </button>
      <br /> <br></br>
      <table border="2px">
        <thead>
          <tr>
            <th>Employee Name</th>
          </tr>
        </thead>
        <tbody>{displayemployee}</tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;
