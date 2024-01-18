"use client";

import React, { useState } from "react";

const TicketForm = () => {
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("submitted");
  };

  const startingTicketData = {
    title: "",
    description: "",
    priority: 1,
    process: 0,
    status: "not started",
    category: "Hardware Problem",
  };
  const [formData, setFormData] = useState(startingTicketData);
  return (
    <div className="flex justify-center">
      <from className="flex flex-col gap-3 w-1/2" method="post" onSubmit={handleSubmit}>
        <h3>Create Your Ticket</h3>
        <label>Title</label>
        <input
          id="title"
          name="title"
          type="text"
          onChange={handleChange}
          required={true}
          value={formData.title}
        />
        <label>Description</label>
        <textarea
          id="description"
          name="description"
          type="text"
          onChange={handleChange}
          required={true}
          value={formData.description}
          rows="5"
        />
        <label>Category</label>
        <select name="category" value={formData.category} onChange={handleChange}>
          <option value="Hardware Problem">Hardware Problems</option>
          <option value="Software Problem">Software Problems</option>
          <option value="Project">Project</option>
        </select>
      </from>
    </div>
  );
};

export default TicketForm;
