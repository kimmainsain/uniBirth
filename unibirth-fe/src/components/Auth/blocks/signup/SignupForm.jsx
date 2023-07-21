import React, { useState } from "react";
import { InputField } from "../../atoms/InputField";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    nickname: "",
    email: "",
    password: "",
    confirmPassword: "",
    dateOfBirth: "",
  });
  const [isDuplicate, setIsDuplicate] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission

    // You can access form data from the state (formData) and perform actions here
    console.log(formData);

    // For demonstration purposes, let's clear the form data after submission
    setFormData({
      nickname: "",
      email: "",
      password: "",
      confirmPassword: "",
      dateOfBirth: "",
    });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    // Check for duplicate nickname
    if (name === "nickname") {
      const existingNicknames = ["user1", "user2", "user3", "admin"];
      setIsDuplicate(existingNicknames.includes(value));
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="content-center pl-10 flex flex-col mt-10 justify-center items-center"
    >
      <div>
        <label htmlFor="email">email</label>
        <InputField
          type="text"
          name="email"
          value={formData.nickname}
          onChange={handleInputChange}
          placeholder="Nickname"
          autoComplete="off"
          id="email"
        />
        {isDuplicate && (
          <p>This nickname is already taken. Please choose a different one.</p>
        )}
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <InputField
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="email"
          autoComplete="off"
        />
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <InputField
          className="border border-gray-300"
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          placeholder="password"
          autoComplete="off"
        />
      </div>

      <div>
        <label htmlFor="confirmPassword">Confirm Password</label>
        <InputField
          className="border border-gray-300"
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleInputChange}
          placeholder="password"
          autoComplete="off"
        />
      </div>

      <div>
        <label htmlFor="dateOfBirth">Date of Birth</label>
        <InputField
          className="border border-gray-300"
          type="date"
          id="dateOfBirth"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleInputChange}
          placeholder="off"
          autoComplete="off"
        />
      </div>
    </form>
  );
};

export default SignupForm;
