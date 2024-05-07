import React, { useState, useEffect } from "react";
import { supabase } from "./createClient";
import "./App.css";

const App = () => {
  const [users, setUsers] = useState([]);

  const [user, setUser] = useState({
    name: "",
  });

  const [user2, setUser2] = useState({
    name: "",
    id: "",
  });

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    const { data } = await supabase.from("users").select("*");
    setUsers(data);
  }

  function handleChange(event) {
    setUser((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  function handleChange2(event) {
    setUser2((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }
  async function createUser() {
    const { data, error } = await supabase
      .from("users")
      .insert({ name: user.name });

    fetchUsers();

    if (error) {
      console.log(error);
    }

    if (data) {
      console.log(data);
    }
  }

  async function updateUser() {
    const { data, error } = await supabase
      .from("users")
      .update({ name: user2.name })
      .eq("id", user2.id);

    fetchUsers();

    if (error) {
      console.log(error);
    }

    if (data) {
      console.log(data);
    }
  }

  async function deleteUser(id) {
    const { data, error } = await supabase.from("users").delete().eq("id", id);

    fetchUsers();

    if (error) {
      console.log(error);
    }

    if (data) {
      console.log(data);
    }
  }

  async function displayUser(id) {
    users.map((user) => {
      if (user.id == id) {
        setUser2({ name: user.name, id: user.id });
      }
    });
  }

  return (
    <div className="container">
      {/* form 1 */}
      <form onSubmit={createUser}>
        <h4>Create</h4>
        <input
          type="text"
          placeholder="name"
          name="name"
          onChange={handleChange}
        />

        <button type="submit">Save</button>
      </form>

      {/* form 2 */}
      <form onSubmit={updateUser}>
        <h4>Edit/Update</h4>
        <input
          type="text"
          placeholder="name"
          name="name"
          onChange={handleChange2}
          defaultValue={user2.name}
        />

        <button type="submit">Update</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>
                <button
                  onClick={() => {
                    deleteUser(user.id);
                  }}
                >
                  Delete
                </button>
                <button
                  onClick={() => {
                    displayUser(user.id);
                  }}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
