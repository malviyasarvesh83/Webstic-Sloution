import { Box, Typography, Button } from '@mui/material';
import { collectionsList } from '../constants/data';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
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

const CollectionList = () => {
    return (
        <Box style={{background: 'grey'}}>
            <Box style={{display: 'flex', alignItems: 'center', textAlign: 'center', justifyContent: 'space-between', marginTop: 50, marginBottom: 50}}>
                <Typography style={{fontSize: 30, marginLeft: 50}}>Collection list</Typography>
                <Typography style={{fontSize: 20, marginRight: 50}}>View All</Typography>
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
                itemClass='carousel-item-padding-40-px'
                dotListClass="custom-dot-list-style"
                style={{marginTop: 20}}
            >
              {
                collectionsList.map((collection)=>(
                    <Box>
                        <img src={collection.url} alt='image1' style={{width: '70%', height: '70%'}} />
                        <Typography style={{marginLeft: 80}}>{collection.text}</Typography>
                        <Button variant='contained' style={{background: 'transparent', color: 'black', width: 350, boxShadow: 'none', border: '1px solid black'}} component={Link} to={collection.list}>View</Button>
                    </Box>
                ))
              }
            </Carousel>
        </Box>
    )
}

export default CollectionList;