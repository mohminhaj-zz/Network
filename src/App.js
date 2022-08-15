import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [users, setUsers] = useState([]);

  // const fetchData = () => {
  //   fetch("http://localhost:1337/api/resturants")
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setUsers(data.data);
  //       console.log(data);
  //     })
  //     .catch((error) => {
  //       console.error("Error is:", error);
  //     });
  // };
  useEffect(() => {
    axios
      .get("http://localhost:1337/api/resturants")
      .then((res) => {
        const data = res.data;
        setUsers(data.data);
      })
      .catch((error) => {
        console.error("Error is:", error);
      });
  }, []);
  return (
    <div>
      {users.length > 0 && (
        <ul>
          {users.map((user) => (
            <div key={user.id}>
              <h1>{user.attributes.name}</h1>
              <h2>{user.attributes.description}</h2>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
