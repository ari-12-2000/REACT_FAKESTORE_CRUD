import React, { useContext, useState } from "react";
import { Card, Button, Typography } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ProductForm from "../Molecules/ProductForm";
import axios from "axios";
import LoginError from "../Molecules/LoginError";
import { AuthContext } from "../Atoms/AuthContext";
import { CrudContext } from "../Atoms/CrudContext";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

let create = 0,
  update = 0,
  deleted = 0,
  value;

const CreateCard = () => {
  const [cards, setCards] = useState([]);
  const [formData, setFormData] = useState(null);
  const { userData } = useContext(AuthContext);
  const { CrudCount } = useContext(CrudContext);


  const addCard = () => {
    let updatedCards;
    if (value === "update") {
      CrudCount(create, ++update, deleted);
      setCards((prevCards) => {
        updatedCards = prevCards.filter((card) => card.id !== formData.id);
        updatedCards = [...updatedCards, formData];
        return updatedCards;
      });
    } else if (value === "create") {
      CrudCount(++create, update, deleted);
      updatedCards = [...cards, formData];
      setCards(updatedCards);
    } else {
      CrudCount(create, update, ++deleted);
      setCards((prevCards) => {
        updatedCards = prevCards.filter((card) => {
          console.log(card.id);
          card.id !== formData.id;
        });

        return updatedCards;
      });
    }
    setFormData(null);
  };

  const updateCard = () => {
    value = "update";
    setFormData({});
  };

  const handleCreate = () => {
    value = "create";
    setFormData({});
  };

  const deleteCard = () => {
    value = "delete";
    setFormData({});
  };

  const handleFormSubmit = async (data, id) => {
    try {
      let response;
      if (value === "create") {
        response = await axios.post("https://fakestoreapi.com/products", data);
      } else if (value === "update") {
        response = await axios.patch(
          `https://fakestoreapi.com/products/${id}`,
          data
        );
      } else {
        response = await axios.delete(
          `https://fakestoreapi.com/products/${id}`
        );
      }
      const newItem = response.data;
      if (value !== "delete") {
        setFormData(newItem);
      } else {
        setFormData({ id: id, image: "", title: "", price: "", category: "" });
        window.alert(
          "Status =" + response.status + "\nProduct Deleted Successfully"
        );
      }
    } catch (error) {
      console.error("Error occurred:", error);
    }
  };

  return (
    <>
      {userData ? (
        <div style={{ display: "flex", padding: "30px" }}>
          {!formData ? (
            <>
              {cards.map((data, index) => (
                <Card
                  key={index}
                  sx={{
                    textAlign: "center",
                    padding: "15px",
                    marginRight: "20px",
                  }}
                >
                  <Typography variant="body1">{data.id}</Typography>
                  <img
                    src={data.image}
                    alt={data.title}
                    style={{ height: "200px" }}
                  />
                  <Typography variant="h5">{data.title}</Typography>
                  <Typography variant="body1">Price: ${data.price}</Typography>
                  <Typography variant="subtitle1">
                    Category: {data.category}
                  </Typography>
                  <EditIcon
                    sx={{ marginTop: "20px", width: "100px" }}
                    onClick={updateCard}
                  />
                  <DeleteIcon
                    sx={{
                      marginTop: "20px",
                      marginRight: "20px",
                      width: "100px",
                    }}
                    onClick={deleteCard}
                  />
                </Card>
              ))}
              <Card
                style={{
                  height: "300px",
                  width: "300px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: "20px",
                }}
              >
                <AddCircleIcon
                  sx={{
                    height: "50px",
                    color: "blue",
                    width: "50px",
                    margin: "20px",
                  }}
                  onClick={handleCreate}
                />
              </Card>
            </>
          ) : (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems:"space-evenly"
              }}
            >
             <ArrowBackIcon onClick={()=>setFormData(null)}/>
              <ProductForm onSubmit={handleFormSubmit} job={value} />
              <Button
                variant="contained"
                sx={{ marginTop: "20px" }}
                color="primary"
                onClick={addCard}
              >
                SUBMIT
              </Button>
            </div>
          )}
        </div>
      ) : (
        <LoginError />
      )}
    </>
  );
};

export default CreateCard;
