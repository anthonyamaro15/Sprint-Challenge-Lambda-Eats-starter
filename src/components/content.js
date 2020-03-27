import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import axios from "axios";
import * as yup from "yup";

const Content = ({ status, errors, touched }) => {
  const [post, setPost] = useState([]);
  const [empty, setEmpty] = useState(false);

  useEffect(() => {
    status && setPost(status);
    setEmpty(true);
  }, [status]);
  //     red: "",
  //   console.log(post);

  return (
    <div className="main-content">
      <h1>build your own pizza</h1>
      <div className="gb-img"></div>
      <Form>
        <div className="wrapper">
          <span className="choice">choice of size</span>
          <span className="desc">required</span>
        </div>

        <label htmlFor="size" className="size">
          <Field name="size" as="select" id="size">
            <option value="">Choose size</option>
            <option value="small">small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
            <option value="x-lage">X-Large</option>
          </Field>
        </label>
        <div className="wrapper">
          <span className="choice">choice of sauce</span>
          <span className="desc">required</span>
        </div>
        <div className="sauce-container">
          <label htmlFor="red">
            <Field type="checkbox" id="red" name="red" />
            original red
          </label>
          <label htmlFor="garlic">
            <Field type="checkbox" id="garlic" name="garlic" />
            garlic sauce
          </label>
          <label htmlFor="=bbq">
            <Field type="checkbox" id="bbq" name="bbq" />
            BBQ sauce
          </label>
          <label htmlFor="spinach">
            <Field type="checkbox" id="spinach" name="spinach" />
            spinach alfredo
          </label>
        </div>

        <div className="wrapper">
          <span className="choice">add toppings</span>
          <span className="desc">choose up to 10.</span>
        </div>

        <div className="toppings-container">
          <div className="topping-wrapper">
            <div className="side-one">
              <label htmlFor="pepperoni">
                <Field type="checkbox" id="pepperoni" name="pepperoni" />
                pepperoni
              </label>

              <label htmlFor="bacon">
                <Field type="checkbox" id="bacon" name="bacon" />
                canadian bacon
              </label>

              <label htmlFor="italian">
                <Field type="checkbox" id="italian" name="italian" />
                spicy italian sausage
              </label>
            </div>

            <div className="side-two">
              <label htmlFor="chicken">
                <Field type="checkbox" id="chicken" name="chicken" />
                grilled chicked
              </label>

              <label htmlFor="onions">
                <Field type="checkbox" id="onions" name="onions" />
                onions
              </label>

              <label htmlFor="pineapple">
                <Field type="checkbox" id="pineapple" name="pineapple" />
                pineapple
              </label>
            </div>
          </div>

          <div className="wrapper">
            <span className="choice">choice of subtitute</span>
          </div>

          <div className="instructions">
            <label htmlFor="instructions">
              <Field
                type="text"
                id="instructions"
                name="instructions"
                placeholder="anything else you'd like to add?"
              />
              {errors.instructions && touched.instructions && (
                <p>{errors.instructions}</p>
              )}
            </label>
          </div>

          <div className="submit-btn">
            <div className="count">
              <label htmlFor="count" className="label-num">
                <Field type="number" name="count" id="count" />
              </label>
              <button type="submit">
                add to order <span className="total">$10.00</span>
              </button>
            </div>
          </div>
        </div>
      </Form>

      {empty ? (
        <div>
          {post.map((item, i) => (
            <div key={i}>{JSON.stringify(item, null, 3)}</div>
          ))}
        </div>
      ) : (
        <h2>loading...</h2>
      )}
    </div>
  );
};

export default withFormik({
  mapPropsToValues: () => ({
    size: "",
    red: "",
    garlic: "",
    bbq: "",
    spinach: "",
    pepperoni: "",
    bacon: "",
    italian: "",
    chicken: "",
    onions: "",
    pineapple: "",
    instructions: "",
    count: ""
  }),
  validationSchema: yup.object().shape({
    instructions: yup.string().required("cannot be empty")
  }),
  handleSubmit: (values, { setStatus, resetForm }) => {
    axios
      .post("https://reqres.in/api/users", values)
      .then(res => {
        setStatus([res.data]);
        resetForm();
      })
      .catch(err => console.log(err));
  }
})(Content);
