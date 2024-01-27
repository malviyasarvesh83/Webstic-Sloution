import { Box, Button, Typography, styled } from '@mui/material';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import { featuredCollection } from '../services/api';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const StyledBox = styled(Box)`
  position: relative;
  &:hover {
    p {
      visibility: visible;
    }
    button {
      visibility: visible;
    }
  }
`;

const FeaturedCollection = () => {

  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    getFeaturedCollection();
  }, []);

  const getFeaturedCollection = async () => {
    const response = await featuredCollection();
    setFeatured(response.data);
    console.log('My Response=',response);
  }

    return (
      <>
        <Box
          style={{
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            justifyContent: "space-between",
            marginTop: 50,
          }}
        >
          <Typography style={{ fontSize: 30, marginLeft: 50 }}>
            Featured Collection
          </Typography>
          <Typography style={{ fontSize: 20, marginRight: 50 }}>
            View All
          </Typography>
        </Box>
        <Carousel
          responsive={responsive}
          swipeable={false}
          draggable={false}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={4000}
          keyBoardControl={true}
          centerMode={true}
          containerClass="carousel-container"
          itemClass="carousel-item-padding-40-px"
          dotListClass="custom-dot-list-style"
          style={{ marginTop: 20 }}
        >
          {featured.map((f_Collection) => (
            <StyledBox key={f_Collection.id}>
              <img
                src={f_Collection.url}
                alt={f_Collection.text}
                style={{ width: "70%", height: "70%" }}
              />
              <Typography style={{ marginLeft: 70 }}>
                {f_Collection.text}
              </Typography>
              <Box style={{ display: "flex" }}>
                <Typography style={{ marginLeft: 70 }}>
                  ${f_Collection.amount}.00 USD{" "}
                </Typography>
                <Typography
                  style={{ textDecoration: "line-through", color: "grey", marginLeft: 10 }}
                >
                  $ {f_Collection.amount - 1}.00 USD
                </Typography>
              </Box>
              <Button
                variant="contained"
                style={{
                  background: "transparent",
                  color: "black",
                  width: 350,
                  boxShadow: "none",
                  border: "1px solid black",
                }}
                component={Link}
                to={`/quickView/${f_Collection.id}`}
              >
                Quick View
              </Button>
            </StyledBox>
          ))}
        </Carousel>
      </>
    );
}

export default FeaturedCollection;