// //*import React from "react";

// const contact = () => {
//   return (
//     <form action="process_form.php" method="post">
//       <label for="username">Username:</label>
//       <input type="text" id="username" name="username" required></input>
//       <br></br>

//       <label for="email">Email:</label>
//       <input type="email" id="email" name="email" required></input>
//       <br></br>

//       <label for="password">Password:</label>
//       <input type="password" id="password" name="password" required></input>
//       <br></br>

//       <label for="phone">Phone Number:</label>
//       <input type="tel" id="phone" name="phone" required></input>
//       <br></br>

//       <label for="message">Message:</label>
//       <textarea id="message" name="message" rows="4" required></textarea>
//       <br></br>
//       <input type="submit" value="Submit"></input>
//     </form>
//   );
// };
// export default contact;
import axios from "axios";
import { useEffect, useState } from "react";

function EmployeeCrud() {
  const [_id, setId] = useState("");
  const [name, setName] = useState("");
  const [mail, setmail] = useState("");
  const [password, setpassword] = useState("");
  const [phone, setphone] = useState("");
  const [message, setmessage] = useState("");
  const [vijays, setUsers] = useState([]);

  useEffect(() => {
    (async () => await Load())();
  }, []);

  async function Load() {
    const result = await axios.get("http://localhost:8000/user/getAll");
    setUsers(result.data.data);
    console.log(result.data);
  }

  async function save(event) {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8000/user/create", {
        name: name,
        mail: mail,
        password: password,
        phone: phone,
        message: message,
      });
      alert("Employee Registation Successfully");
      setId("");
      setName("");
      setmail("");
      setpassword("");
      setphone("");
      setmessage("");
      Load();
    } catch (err) {
      alert("User Registation Failed");
    }
  }
  async function editEmployee() {
    setName(vijays.name);
    setmail(vijays.mail);
    setpassword(vijays.password);
    setphone(vijays.phone);
    setmessage(vijays.massage);
    setId(vijays._id);
  }

  async function DeleteEmployee(_id) {
    await axios.delete("http://localhost:8000/user/delete/" + _id);
    alert("Employee deleted Successfully");
    Load();
  }

  async function update(event) {
    event.preventDefault();
    try {
      await axios.patch(
        "http://localhost:8000/user/update/" +
          vijays.find((u) => u._id === _id)._id || _id,
        {
          _id: _id,
          name: name,
          mail: mail,
          password: password,
          phone: phone,
          message: message,
        }
      );
      alert("Registation Updateddddd");
      setId("");
      setName("");
      setmail("");
      setpassword("");
      setphone("");
      setmessage("");
      Load();
    } catch (err) {
      alert(err);
    }
  }

  return (
    <div>
      <h1 className="dd"> YOUR DETAILS</h1>
      <div class="container mt-4">
        <form>
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              id="_id"
              hidden
              value={_id}
              onChange={(event) => {
                setId(event.target.value);
              }}
            />
            <label>User Name</label>
            <input
              type="text"
              class="form-control"
              id="name"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
          </div>
          <div class="form-group">
            <label>Mail</label>
            <input
              type="mail"
              class="form-control"
              id="address"
              value={mail}
              onChange={(event) => {
                setmail(event.target.value);
              }}
            />
          </div>

          <div class="form-group">
            <label>Password</label>
            <input
              type="password"
              class="form-control"
              id="phone"
              value={password}
              onChange={(event) => {
                setpassword(event.target.value);
              }}
            />
          </div>
          <div class="form-group">
            <label>Phone</label>
            <input
              type="tel"
              class="form-control"
              id="phone"
              value={phone}
              onChange={(event) => {
                setphone(event.target.value);
              }}
            />
          </div>
          <div class="form-group">
            <label>Message</label>
            <textarea
              type="text"
              class="form-control"
              id="phone"
              row="4"
              value={message}
              onChange={(event) => {
                setmessage(event.target.value);
              }}
            />
          </div>
          <br></br>
          <div>
            <input type="submit" value="Submit" onClick={save}></input>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EmployeeCrud;
