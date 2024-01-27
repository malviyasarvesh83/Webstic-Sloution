import { casualQuickViewDetails, casualAddToCartDetails } from "../services/api";
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";
import { Box, Button, Typography, styled } from '@mui/material';
import Footer from "../components/Footer";

const ButtonStyled = styled(Button)`
  margin-top: 20px;
  width: 25%;
  background: black;
  text-transform: capitalize;
  box-shadow: none;

  &:hover {
    background: white;
    color: black;
    border: 1px solid black;
  }
`

const CasualQuickView = () => {

  const [product, setProduct] = useState([]);
  const [count, setCount] = useState(1);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    casualQuickView();
  }, [])

  const casualQuickView = async () => {
    const response = await casualQuickViewDetails(id);
    console.log('Quick View=',response);
    setProduct(response.data);
  }

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  const handleIncrement=()=>{
    setCount(count+1);
  }

  const addToCart = async (id) => {
    await casualAddToCartDetails(id, count);
    navigate('/');
  }

    return (
      <>
        <Box style={{ marginTop: 240, display: "flex" }}>
          <img
            src={product.url}
            alt={product.text}
            style={{ width: "80%", height: "80%" }}
          />
          <Box>
            <Typography>She Chocolate</Typography>
            <Typography style={{ marginTop: 20 }} variant="h4">
              {product.text}
            </Typography>
            <Typography style={{ marginTop: 20 }}>
              ${product.amount}.00 USD
            </Typography>
            <Typography variant="h6" style={{ marginTop: 20 }}>
              Size
            </Typography>
            <Box style={{ display: "flex" }}>
              <Typography variant="h6" style={{ marginLeft: 10 }}>
                38
              </Typography>
              <Typography variant="h6" style={{ marginLeft: 10 }}>
                40
              </Typography>
              <Typography variant="h6" style={{ marginLeft: 10 }}>
                42
              </Typography>
              <Typography variant="h6" style={{ marginLeft: 10 }}>
                44
              </Typography>
              <Typography variant="h6" style={{ marginLeft: 10 }}>
                46
              </Typography>
              <Typography variant="h6" style={{ marginLeft: 10 }}>
                48
              </Typography>
              <Typography variant="h6" style={{ marginLeft: 10 }}>
                50
              </Typography>
              <Typography variant="h6" style={{ marginLeft: 10 }}>
                52
              </Typography>
            </Box>
            <Box
              style={{
                display: "flex",
                border: "1px solid black",
                width: "20%",
                marginTop: 20,
              }}
            >
              <Button onClick={() => handleDecrement()}>-</Button>
              <Typography style={{ marginTop: 5 }}>{count}</Typography>
              <Button onClick={() => handleIncrement()}>+</Button>
            </Box>
            <ButtonStyled variant="contained" onClick={ () => addToCart(`${product.id}`) }>Add To Cart</ButtonStyled>
            <Typography variant="h6" style={{ marginTop: 20 }}>
              Description
            </Typography>
            <Typography style={{ width: "50%", height: "auto" }}>
              Thob embroidered features intricate designs on the sleeves and
              chest that are coordinated with thob color Our fabrics have a
              higher proportion of cotton and less polyester, and the embroidery
              threads are made of silk.
            </Typography>
          </Box>
        </Box>
        <Footer />
      </>
    );
}

export default CasualQuickView;