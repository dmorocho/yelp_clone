import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../providers/AuthContext ";
import { apiURL } from "../util/apiURL";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "./UserSlice";

export default function userIndex() {
  const [users, setUsers] = useState([]);
  const API = apiURL();
  const { token } = useContext(AuthContext);
  const dispatch = useDispatch();

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
      debugger;
    };
    fetchUser();
  }, []);

  return <div></div>;
}
