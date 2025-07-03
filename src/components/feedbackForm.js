import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const FeedbackForm = () => {
  const navigate = useNavigate();

  const initialValues = {
    name: "",
    movie: "",
    rating: "",
    comments: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .required("Name is required"),
    movie: Yup.string().required("Please select a movie"),
    rating: Yup.number()
      .min(1, "Minimum rating is 1")
      .max(5, "Maximum rating is 5")
      .required("Rating is required"),
    comments: Yup.string().max(500, "Comments should be under 500 characters"),
  });

  const handleSubmit = (values, { resetForm }) => {
    const existingReviews = JSON.parse(localStorage.getItem("reviews")) || [];
    const updatedReviews = [...existingReviews, values];

    localStorage.setItem("reviews", JSON.stringify(updatedReviews));
    alert("Thank you for your feedback!");
    resetForm();
    navigate("/reviews");
  };

  return (
    <div className="form-container">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="form">
          <div>
            <label>Name:</label>
            <Field type="text" name="name" />
            <ErrorMessage name="name" component="div" className="error" />
          </div>

        <div>
            <label>Movie:</label>
                <Field as="select" name="movie">
                    <option value="">Select Movie</option>
                    <option value=" The Wild Robot">Tourist Family</option>
                    <option value=" Ratatouille">Love marriage</option>
                    <option value="The Lion King">Retro</option>
                    <option value="Finding Nemo">DIA</option>
                </Field>
                <ErrorMessage name="movie" component="div" className="error"/>
        </div>

        <div>
            <label>Rating (1-5):</label>
            <Field type="number" name="rating" min="1" max="5" />
            <ErrorMessage name="rating" component="div" className="error" />
        </div>

        <div>
            <label>Comments:</label>
            <Field as="textarea" name="comments" />
            <ErrorMessage name="comments" component="div" className="error" />
        </div>

        <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default FeedbackForm;