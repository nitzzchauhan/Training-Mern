import React, { useState, useRef } from "react";

export default function SimpleForm() {
  const inputUsername = useRef();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
  });
  function handleChange(e) {
    //    const {name, value} = e.target
    // //    console.log(name)
    //    setFormData((prevState)=>({...prevState,[name]:value}))
    //    console.log(formData)
    // validation
    console.log(inputUsername.current.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    // fetch
    // axios
    // ajax
    if (formData.email.includes("@")) {
      fetch("url", {
        method: "POST",
        body: formData,
      });
    }
    else{
        alert("enter valid email")
    }
    // send the form
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="">Name:</label>
      <input
        type="text"
        name="username"
        ref={inputUsername}
        id=""
        onChange={handleChange}
      />
      <br />
      <label htmlFor="">Email</label>

      <input type="email" name="email" id="" onChange={handleChange} />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

// useform

