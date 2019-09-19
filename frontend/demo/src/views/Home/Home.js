import React, { useEffect, useState } from "react";
import "./Home.css";
import { Row, Col, Badge } from "reactstrap";

export default function Home({ match }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  return (
   <div>
     Home
   </div>
  );
}
