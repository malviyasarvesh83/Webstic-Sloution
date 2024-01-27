import { Box, Button, Typography, styled, Grid } from '@mui/material';
import { jacketCollection } from '../services/api';
import { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const BoxStyled = styled(Box)`
  background-image: url("//shechocolate.com/cdn/shop/collections/110101055-G_1512x.jpg?v=1688387199");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  width: 100%;
  height: 600px;
`;

const ButtonStyled = styled(Button)`
    transition: background 0.3s ease;
    &:hover {
        background: black !important;
        color: white !important;
    }
`

const SuitFormal = () => {

    const [jackets, setJackets] = useState([]);

    useEffect(() => {
        getJackets();
    }, [])

    const getJackets = async () => {
        const response = await jacketCollection();
        setJackets(response.data);
    }
    return (
      <>
        <BoxStyled>
          <Typography
            style={{
              paddingTop: 250,
              paddingLeft: 500,
              color: "white",
              fontSize: 40,
            }}
          >
            Suit Formal
          </Typography>
          <Typography
            style={{
              width: "50%",
              height: "auto",
              color: "white",
              fontSize: 20,
              display: "flex",
              textAlign: "center",
              alignItems: "center",
              paddingLeft: 300,
            }}
          >
            A formal women's suit is a tailored garment typically consisting of
            a jacket and matching pants or skirt. It is a versatile and timeless
            addition to any wardrobe, suitable for a range of occasions, from
            business meetings to formal events. Formal women's suits are
            designed to flatter the female form while maintaining a professional
            and sophisticated look. They are a classic and elegant choice for
            any fashion-conscious woman
          </Typography>
        </BoxStyled>
        <Box style={{ marginTop: 50, marginLeft: 100 }}>
          <Grid container spacing={2}>
            {jackets.map((product) => (
              <Grid key={product.prodId} item xs={12} sm={6} md={4}>
                <Box>
                  <Box>
                    <img
                      src={product.url}
                      alt={product.text}
                      style={{ width: "100%", maxWidth: 200, height: "auto" }}
                    />
                    <Typography style={{ marginLeft: 30, marginTop: 10 }}>
                      {product.text}
                    </Typography>
                    <Typography style={{ marginLeft: 30, marginTop: 10 }}>
                      ${product.amount}.00 USD
                    </Typography>
                    <ButtonStyled
                      variant="contained"
                      style={{
                        width: 250,
                        marginTop: 10,
                        background: "transparent",
                        color: "black",
                        border: "1px solid black",
                      }}
                      component={Link}
                      to={`/jacket/quickView/${product.id}`}
                    >
                      Quick View
                    </ButtonStyled>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Footer />
      </>
    );
}

export default SuitFormal;