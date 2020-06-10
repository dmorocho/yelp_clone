import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../providers/AuthContext ";
import { apiURL } from "../util/apiURL";
import axios from "axios";

export default function userIndex() {
  const [users, setUsers] = useState([]);
  const API = apiURL();
  const { token } = useContext(AuthContext);

  useEffect(() => {
    const fetchUser = async () => {
      let res = await axios({
        method: "get",
        url: `${API}/api/users`,
        headers: {
          AuthToken: token,
        },
      });
      setUsers(res.data.payload);
    };
    fetchUser();
  }, []);

  return <div></div>;
}
