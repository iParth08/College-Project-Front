"use client";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import axios from "axios";
const ActionTab = () => {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const response = await axios.get(`/api/test`);
        // const response = await axios.get("http://localhost:5000/api/test");
        console.log("Response:", response.data);
        setMessage(response.data);
      } catch (error) {
        console.error("Error fetching message:", error);
        setMessage("Error fetching message");
      }
    };
    fetchMessage();
  }, []);
  return (
    <div className="w-[50%] h-[100vh] bg-green-400 flex">
      <div>Welcome, USER. Backend : {message}</div>
      <div>
        <Link href={"/login"}>
          <Button>Login</Button>
        </Link>

        <Link href={"/register"}>
          <Button>Register</Button>
        </Link>
      </div>
      <Link href={"/home"}>
        <Button>Guest Login</Button>
      </Link>
    </div>
  );
};

export default ActionTab;
