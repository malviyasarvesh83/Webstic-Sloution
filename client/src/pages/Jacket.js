import { Box, Button, Typography, styled, Grid } from '@mui/material';
import { jacketCollection } from '../services/api';
import { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const BoxStyled = styled(Box)`
  background-image: url("https://shechocolate.com/cdn/shop/collections/10680004-N_1512x.png?v=1702561437");
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

const Jacket = () => {

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
            Jackets
          </Typography>
          {/* <Typography
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
            Embroidery is the art of decorating fabric or other materials with
            needle and thread. It involves creating intricate designs by
            stitching various types of stitches onto a base fabric. Embroidery
            can be done by hand using a needle and thread or by using
            specialized sewing machines.
          </Typography> */}
        </BoxStyled>
        <Box style={{ marginTop: 50, marginLeft: 100}}>
          <Grid container spacing={2}>
            {jackets.map((product) => (
              <Grid key={product.prodId} item xs={12} sm={6} md={4}>
                <Box>
                  <Box>
                    <img
                      src={product.url}
                      alt={product.text}
                      style={{ width: "100%", maxWidth: 200, height: 'auto' }}
                    />
                    <Typography style={{marginLeft: 30, marginTop: 10}}>{product.text}</Typography>
                    <Typography style={{marginLeft: 30, marginTop: 10}}>${product.amount}.00 USD</Typography>
                    <ButtonStyled variant="contained" style={{width: 250, marginTop: 10, background: 'transparent', color: 'black', border: '1px solid black'}} component={Link} to={`/jacket/quickView/${product.id}`}>Quick View</ButtonStyled>
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

export default Jacket;