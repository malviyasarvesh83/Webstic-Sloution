import { AppBar, Box, Toolbar, Typography, styled, IconButton, Badge } from '@mui/material';
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link, useNavigate } from 'react-router-dom';
import { getAllProducts } from '../services/api';
import { useEffect, useState } from 'react';

const BoxStyled = styled(Box)`
    & p {
        margin-left: 30px;
    }
`

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const AppBarStyled = styled(AppBar)`
    margin-top: 40px;
    height: 200px;
    background: none;
    box-shadow: none;
    color: black;
    transition: background 0.3s ease;

    &:hover {
        background: white;
        color: black;
    }

    &:hover img {
        filter: invert(100%);
    }
`;

const Header = () => {
  const [cartLength, setCartLength] = useState(0);

  useEffect(() => {
    cartItems();
  }, [])

  const cartItems = async () => {
    const response = await getAllProducts();
    setCartLength(response.data.length);
  }

  const navigate = useNavigate();

  const logoRedirect = () => {
    navigate("/");
  }
    const logo = "https://shechocolate.com/cdn/shop/files/4_500x.png?v=1687177537";
    
    return (
      <>
        <AppBar style={{ background: "grey", height: 40, boxShadow: "none" }}>
          <Toolbar>
            <Typography
              style={{
                marginLeft: 500,
                fontSize: 15,
                color: "black",
                marginBottom: 20,
              }}
            >
              Save 25% on your entire purchase, Free worldwide shipping
            </Typography>
          </Toolbar>
        </AppBar>
        <AppBarStyled>
          <Toolbar style={{ marginTop: 20 }}>
            <Box style={{ marginLeft: 40 }}>
              <img
                src={logo}
                alt="she_Chocolate"
                style={{ width: 150, cursor: "pointer" }}
                onClick={() => logoRedirect()}
              />
            </Box>
            <BoxStyled style={{ display: "flex", marginLeft: 20 }}>
              <Typography
                style={{
                  marginLeft: 30,
                  textDecoration: "none",
                  color: "black",
                }}
                component={Link}
                to="/"
              >
                Home
              </Typography>
              <Typography
                style={{
                  marginLeft: 30,
                  textDecoration: "none",
                  color: "black",
                }}
                component={Link}
                to="/embroideries"
              >
                Embroideries
              </Typography>
              <Typography
                style={{
                  marginLeft: 30,
                  textDecoration: "none",
                  color: "black",
                }}
                component={Link}
                to="/jacket"
              >
                Jacket
              </Typography>
              <Typography
                style={{
                  marginLeft: 30,
                  textDecoration: "none",
                  color: "black",
                }}
                component={Link}
                to="/jilbab"
              >
                Jilbab
              </Typography>
              <Typography
                style={{
                  marginLeft: 30,
                  textDecoration: "none",
                  color: "black",
                }}
                component={Link}
                to="/casual"
              >
                Casual
              </Typography>
              <Typography
                style={{
                  marginLeft: 30,
                  textDecoration: "none",
                  color: "black",
                }}
                component={Link}
                to="/suitFormal"
              >
                Suit Formal
              </Typography>
              <Typography
                style={{
                  marginLeft: 30,
                  textDecoration: "none",
                  color: "black",
                }}
                component={Link}
                to="/abaya"
              >
                Abaya
              </Typography>
              <Typography
                style={{
                  marginLeft: 30,
                  textDecoration: "none",
                  color: "black",
                }}
                component={Link}
                to="/summer"
              >
                Summer
              </Typography>
              <Typography
                style={{
                  marginLeft: 30,
                  textDecoration: "none",
                  color: "black",
                }}
                component={Link}
                to="/sizeGuide"
              >
                Size Guide
              </Typography>
              <SearchIcon style={{ fontSize: 40, marginLeft: 30 }} />
              <Typography
                style={{
                  fontSize: 40,
                  marginLeft: 30,
                  textDecoration: "none",
                  color: "black",
                }}
                component={Link}
                to="/cart"
              >
                <IconButton aria-label="cart">
                  <StyledBadge badgeContent={cartLength} color="secondary">
                    <ShoppingCartIcon />
                  </StyledBadge>
                </IconButton>
              </Typography>
            </BoxStyled>
          </Toolbar>
        </AppBarStyled>
      </>
    );
}

export default Header;