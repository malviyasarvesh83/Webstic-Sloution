import FeaturedCollection from "../components/FeaturedCollection";
import Images from "../components/Images";
import Testimonials from "../components/Testimonials";
import CollectionList from "../components/CollectionList";
import Post from "../components/Post";
import Media from "../components/Media";
import Footer from "../components/Footer";
import { Box, Typography } from '@mui/material';

const Home = () => {
    return (
        <>
            <video style={{width: '100%', height: '50%'}} playsInline loop autoPlay muted tabIndex="-1">
          <source
            src="https://cdn.shopify.com/videos/c/vp/e910ec708e7e4a448de9086e2f29f5b1/e910ec708e7e4a448de9086e2f29f5b1.HD-1080p-7.2Mbps-19366411.mp4"
            type="video/mp4"
          />
          
        </video>
        <Box style={{marginTop: 50, height: 100}}>
            <Typography variant='h3' style={{fontStyle: 'italic', marginLeft: 500}}>She Chocolate</Typography>
        </Box>
            <FeaturedCollection />
            <Images />
            <Testimonials />
            <CollectionList />
            <Post />
            <Media />
            <Footer />
        </>
    )
}

export default Home;