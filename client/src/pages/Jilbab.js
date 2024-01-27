import { Box, Button, Typography, styled, Grid } from '@mui/material';
import { jilbabCollection } from '../services/api';
import { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const BoxStyled = styled(Box)`
  background-image: url("//shechocolate.com/cdn/shop/collections/101106004-C_1512x.jpg?v=1688386965");
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

const Jilbab = () => {

    const [jilbab, setJilbab] = useState([]);

    useEffect(() => {
        getJilbab();
    }, [])

    const getJilbab = async () => {
        const response = await jilbabCollection();
        setJilbab(response.data);
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
            Jilbab
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
            Jilbab is a long, flowing garment that is designed to provide
            comfort and relaxation, and it can be made from a variety of
            materials such as cotton, silk, or polyester. Jilbab can come in a
            range of styles, including kimono-style, wrap-around, or zip-up,
            Jilbab can be found in a variety of colors, patterns, and designs to
            suit different tastes and preferences
          </Typography>
        </BoxStyled>
        <Box style={{ marginTop: 50, marginLeft: 100 }}>
          <Grid container spacing={2}>
            {jilbab.map((product) => (
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
                      to={`/jilbab/quickView/${product.id}`}
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

export default Jilbab;