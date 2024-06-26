import React from "react";
import styles from "./PhotoCommentsForm.module.css";
import EnviarSVG from "../../../Assets/EnviarSVG";
import useFetch from "../../../Hooks/useFetch";
import Error from "../../Helpers/Error";
import { COMMENT_POST } from "../../../api";

const PhotoCommentsForm = ({ id, setComments, single }) => {
  const [comment, setComment] = React.useState("");
  const { request, error } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = COMMENT_POST(id, { comment });
    const { response, json } = await request(url, options);
    if (response.ok) {
      setComment("");
      setComments((comments) => [...comments, json]);
    }
  }

  return (
    <form
      className={`${styles.form} ${single ? styles.single : ""}`}
      onSubmit={handleSubmit}
    >
      <textarea
        className={styles.textarea}
        id="comment"
        name="comment"
        placeholder="Comente..."
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      />
      <button className={styles.button}>
        <EnviarSVG />
      </button>
      <Error error={error} />
    </form>
  );
};

export default PhotoCommentsForm;
