import axios from "axios";
import React, { useEffect, useState } from "react";
// import { useState } from "react";
import { useParams } from "react-router-dom";
import { server } from "../server";

const ActivationPage = () => {
  const { activation_token } = useParams();
  const [error, setError] = useState(false);

  useEffect(() => {
    if (activation_token) {
      const activationEmail = async () => {
        try {
          const res = await axios.post(`${server}/user/activation`, {
            activation_token,
          });
          console.log(res.data.message);
        } catch (error) {
            console.log("Error response data:", error.response.data);
          setError(true);
        }
      };
      activationEmail();
    }
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        direction: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {error ? (
        <p>Your token is expired</p>
      ) : (
        <p>your account has been created successfully</p>
      )}
    </div>
  );
};

export default ActivationPage;