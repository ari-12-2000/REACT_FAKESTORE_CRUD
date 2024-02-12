import React, { useState, useEffect } from "react";
import axios from "axios";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import {
  Card,
  CardContent,
  Typography,
  Container,
  Grid,
  Box,
} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [defaultOrder, setdefaultOrder] = useState("asc");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (error) {
        setError(error);
      }finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const handleSort = async (order) => {
    let response;
    try {
      if (order == "desc")
        response = await axios.get(
          "https://fakestoreapi.com/products?sort=desc"
        );
      else response = await axios.get("https://fakestoreapi.com/products");
    } catch (error) {
      console.error("Error sorting in descending order:", error);
    }
    setProducts(response.data);
  };

  return (
    <>
      {isLoading ? (
       
        <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <CircularProgress />
    </div>
      ) : (
        // Render the content once isLoading is false
        <>
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            ml={2}
            mt={2}
            sx={{
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)", // Customize the shadow effect
              padding: "20px",
              borderRadius: "8px",
              backgroundColor: "#fff", // Set background color if needed
              maxWidth: "50px", // Adjust width as needed
              height: "50px",
            }}
          >
            {defaultOrder === "desc" && (
              <SwapVertIcon
                sx={{
                  height: "65px",
                  color: "blue",
                  width: "50px",
                  margin: "20px",
                }}
                onClick={() => {
                  setdefaultOrder("asc");
                  handleSort("asc");
                }}
              />
            )}
            {defaultOrder === "asc" && (
              <SwapVertIcon
                sx={{
                  height: "65px",
                  color: "blue",
                  width: "50px",
                  margin: "20px",
                }}
                onClick={() => {
                  setdefaultOrder("desc");
                  handleSort("desc");
                }}
              />
            )}
          </Box>
  
          <Container sx={{ marginTop: "20px" }}>
            <Grid container spacing={3}>
              {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4}>
                  <Card style={{ height: "550px", width: "350px" }}>
                    <img
                      src={product.image}
                      alt={product.title}
                      style={{ height: "370px" }}
                    />
                    <CardContent>
                      <Typography variant="h6" component="div">
                        {product.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        ${product.price}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {product.category}
                      </Typography>
                    </CardContent>
                  </Card>
                  <Card></Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </>
      )}
    </>
  );
  
};

export default Home;
