import { useState } from "react";
import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};
  if (!values.username) {
    errors.username = "username cannot be empty";
  } 

  return errors;
};

export default function CommentsForm({ addNewComment }) {
  //   let [formData, setFormData] = useState({
  //     username: "",
  //     remarks: "",
  //     rating: 5,
  //   });

  const formik = useFormik({
    initialValues: {
      username: "",
      remarks: "",
      rating: 5,
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });



  return (
    <div>
      <h4>Give a comment!</h4>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="username">username</label>
        <input
          type="text"
          placeholder="username"
          value={formik.values.username}
          onChange={formik.handleChange}
          id="username"
          name="username"
        />
        {formik.errors.username ? <p style={{color:"red"}}>{formik.errors.username}</p> : null}
        <br /> <br />
        <label htmlFor="remarks">Remarks</label>
        <textarea
          value={formik.values.remarks}
          placeholder="Add Remarks"
          onChange={formik.handleChange}
          id="remarks"
          name="remarks"
        ></textarea>
        <br /> <br />
        <label htmlFor="rating">rating</label>
        <input
          type="number"
          placeholder="rating"
          min={1}
          max={5}
          value={formik.values.rating}
          onChange={formik.handleChange}
          id="rating"
          name="rating"
        />
        <br /> <br />
        <button type="submit">Add comment</button>
      </form>
    </div>
  );
}
