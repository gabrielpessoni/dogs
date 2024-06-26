import React from "react";
import styles from "./User.module.css";
import UserHeader from "./UserHeader";
import { UserContext } from "../../Contexts/UserContext";
import { Routes, Route } from "react-router-dom";
import Feed from "../Feed/Feed";
import UserPhotoPost from "./UserPhotoPost";
import UserStats from "./UserStats";
import NotFound from "../NotFound";
import Head from "../Helpers/Head";

const User = () => {
  const { data } = React.useContext(UserContext);
  return (
    <section className="container">
      <Head title="Minha conta" />
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={data.id} />} />
        <Route path="postar" element={<UserPhotoPost />} />
        <Route path="estatisticas" element={<UserStats />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  );
};

export default User;
