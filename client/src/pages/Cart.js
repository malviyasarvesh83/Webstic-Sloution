import React from "react";
import {
  Box,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  styled,
} from "@mui/material";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { getAllProducts, removeCartItem, decreaseQty, increaseQty } from "../services/api";
import { useEffect, useState } from "react";

const Container = styled(Box)`
  margin-top: 100px;
  margin-left: 100px;
  margin-right: 100px;
  width: 70%;
`;

const ButtonStyled = styled(Button)`
  margin-left: 500px;
  margin-top: 20px;
  width: 300px;
  text-transform: capitalize;
  background: black;
  border: 1px solid black;

  &:hover {
    background: none;
    color: black;
  }
`;

const Cart = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await getAllProducts();
    setProducts(response.data);
  };

  const removeItem = async (id) => {
    await removeCartItem(id);
    getProducts();
    window.location.reload();
  }

  let total = 0;
  products.map((p) => {
    total += p.amount*p.quantity;
  })

  const handleDecrement = async (id, qty) => {
    if (qty > 1) {
      await decreaseQty(id, Number(+qty - 1));
      window.location.reload();
    }
  }

  const handleIncrement = async (id, qty) => {
    await increaseQty(id, Number(+qty + 1));
    window.location.reload();
  }

  return (
    <>
      <Box style={{ marginTop: 240 }}>
        <Typography variant="h6" style={{ marginBottom: 20, marginLeft: 600 }}>
          Shopping cart
        </Typography>
        {products.length === 0 ? (
          <>
            <Typography style={{ marginBottom: 20, marginLeft: 600 }}>
              Your cart is currently empty.
            </Typography>
            <Typography component={Link} to="/" style={{ marginLeft: 600 }}>
              Continue shopping
            </Typography>
          </>
        ) : (
          <>
            <Container>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Product</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Quantity</TableCell>
                    <TableCell>Total</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {products.map((prod) => (
                    <TableRow key={prod.id}>
                      <TableCell>
                        <img
                          src={prod.url}
                          style={{ width: "30%", height: "30%" }}
                          alt={prod.text}
                        />
                      </TableCell>
                      <TableCell>{prod.text}</TableCell>
                      <TableCell>${prod.amount}.00 USD</TableCell>
                      <TableCell
                        style={{
                          display: "flex",
                          width: 70,
                          height: 20,
                          alignItems: "center",
                          textAlign: "center",
                          justifyContent: "center",
                          marginTop: 60,
                          marginRight: 30,
                        }}
                      >
                        <Button onClick={() => handleDecrement(`${prod.id}`,`${prod.quantity}`)}>-</Button>
                        <Typography>{prod.quantity}</Typography>
                        <Button onClick={() => handleIncrement(`${prod.id}`,`${prod.quantity}`)}>+</Button>
                      </TableCell>
                      <TableCell>${prod.amount*prod.quantity}.00 USD</TableCell>
                      <TableCell>
                        <Button
                          variant="contained"
                          color="warning"
                          style={{ marginRight: 10 }}
                          onClick={() => removeItem(`${prod.id}`)}
                        >
                          Remove
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Container>
            <Typography
              style={{
                border: "1px solid black",
                marginLeft: 100,
                marginRight: 100,
                width: "70%",
                marginTop: 20,
              }}
            ></Typography>
            <Box
              style={{
                display: "flex",
                marginLeft: 100,
                marginRight: 100,
                width: "70%",
                marginTop: 20,
                justifyContent: "space-between",
              }}
            >
              <Typography>Subtotal</Typography>
              <Typography>${total}.00</Typography>
            </Box>
            <Typography
              style={{
                border: "1px solid black",
                marginLeft: 100,
                marginRight: 100,
                width: "70%",
                marginTop: 20,
              }}
            ></Typography>
            <ButtonStyled variant="contained" component={Link} to="/checkout">
              Check out
            </ButtonStyled>
          </>
        )}
      </Box>
      <Footer />
    </>
  );
};

export default Cart;
