import { Box, Button, Typography, styled, Grid } from '@mui/material';
import { embroideriesCollection } from '../services/api';
import { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const BoxStyled = styled(Box)`
  background-image: url("//shechocolate.com/cdn/shop/collections/102103003-B_1512x.jpg?v=1688461569");
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

const Casual = () => {

    const [embroideries, setEmbroideries] = useState([]);

    useEffect(() => {
        getEmbroideries();
    }, [])

    const getEmbroideries = async () => {
        const response = await embroideriesCollection();
        setEmbroideries(response.data);
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
            Casual
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
            Casual fashion for women is all about being comfortable while still
            looking stylish. It's a relaxed, laid-back style that's perfect for
            everyday wear. Casual fashion is all about expressing your personal
            style while still feeling comfortable and confident.
          </Typography>
        </BoxStyled>
        <Box style={{ marginTop: 50, marginLeft: 100 }}>
          <Grid container spacing={2}>
            {embroideries.map((product) => (
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
                      to={`/embroideries/quickView/${product.id}`}
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

export default Casual;