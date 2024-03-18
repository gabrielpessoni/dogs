import React from "react";
import styles from "./User.module.css";
import UserHeader from "./UserHeader";
import { Routes, Route } from "react-router-dom";

const User = () => {
  return (
    <section className="container">
      <UserHeader />
      <Routes></Routes>
    </section>
  );
};

export default User;
