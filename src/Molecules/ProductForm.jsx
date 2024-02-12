// ProductForm.js

import React, { useState } from "react";
import { TextField } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
const ProductForm = ({ onSubmit, job }) => {
  const [formData, setFormData] = useState({
    id: "",
    image: "",
    title: "",
    price: "",
    category: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    onSubmit(formData, formData.id);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "80vw",
      }}
    >
      {(job === "update"||job === "create") && <TextField
        label="Image URL"
        name="image"
        value={formData.image}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
      />}
      {(job === "update"||job === "delete") && (
        <TextField
          placeholder="Enter the id of product to update"
          label="Id"
          name="id"
          value={formData.id}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
      )}
      {(job === "update"||job === "create") && <TextField
        placeholder="Title should be unique in every product"
        label="Title"
        name="title"
        value={formData.title}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
      />}
      {(job === "update"||job === "create") && <TextField
        label="Price"
        name="price"
        value={formData.price}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
      />}
      {(job === "update"||job === "create") && <TextField
        label="Category"
        name="category"
        value={formData.category}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
      />}

      <AddCircleIcon
        sx={{ height: "50px", color: "blue", width: "50px" }}
        onClick={handleSubmit}
      />
    </div>
  );
};

export default ProductForm;
