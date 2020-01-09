import React from "react";
// import "./SignUp.css";
import { useForm } from "react-hook-form";
import ErrorMessage from "./ErrorMessage";

const SignUp = () => {
  const { register, handleSubmit, errors } = useForm();

  const submitForm = data => {
    console.log(data);
  };

  return (
    <form style={{ width: "40%" }} onSubmit={handleSubmit(submitForm)}>
      <h1>Sign Up</h1>
      <div className="form-group">
        <label className="form-label">First Name: </label>
        <input
          name="firstName"
          className="form-control"
          type="text"
          ref={register({ required: true })}
        />
      </div>
      <ErrorMessage error={errors.firstName} />
      {/* {errors.firstName && errors.firstName.type === "required" && (
        <p className="text-danger">First name is required</p>
      )} */}

      <div className="form-group">
        <label className="form-label">Last Name:</label>
        <input
          name="lastName"
          className="form-control"
          type="text"
          ref={register({ required: true })}
        />
      </div>
      <ErrorMessage error={errors.lastName} />

      <div className="form-group">
        <label className="form-label">Gender: </label>
        <select
          name="gender"
          className="form-control"
          ref={register({ required: true })}
        >
          <option value="">--select--</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <ErrorMessage error={errors.gender} />

      <div className="form-group">
        <label className="form-label">Username: </label>
        <input
          name="username"
          className="form-control"
          type="text"
          ref={register({ required: true, minLength: 5 })}
        />
      </div>
      <ErrorMessage error={errors.username} />

      <div className="form-group">
        <label className="form-label">Email: </label>
        <input
          name="email"
          className="form-control"
          type="email"
          ref={register({ required: true, pattern: /^\S+@\S+$/i })}
        />
      </div>
      <ErrorMessage error={errors.email} />

      <div className="form-group">
        <label className="form-label">Age: </label>
        <input
          name="age"
          type="number"
          className="form-control"
          ref={register({ required: true, min: 18 })}
        />
      </div>
      <ErrorMessage error={errors.age} />

      <div className="form-group">
        <label className="form-label">About you:</label>
        <textarea name="aboutyou" className="form-control" ref={register} />
      </div>

      <div className="form-group"></div>
      <button type="submit" className="btn btn-primary">
        Sign Up
      </button>
    </form>
  );
};

export default SignUp;
