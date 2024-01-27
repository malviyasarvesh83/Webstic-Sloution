import { Typography, Box } from '@mui/material';
import Footer from '../components/Footer';

const SizeGuide = () => {
    const size1 = "https://cdn.shopify.com/s/files/1/0778/4579/1001/files/embroidery_design_sizes_1024x1024.jpg?v=1689061579";
    const size2 = "https://cdn.shopify.com/s/files/1/0778/4579/1001/files/abaya_size_1024x1024.jpg?v=1689061589";
    const size3 = "https://cdn.shopify.com/s/files/1/0778/4579/1001/files/large_abaya_size_1024x1024.jpg?v=1689061596";
    return (
        <>
      <Box style={{marginTop: 240, marginLeft: 400}}>
        <Typography style={{fontSize: 40, marginBottom: 20}}>Size Guide</Typography>
        <Typography>
            <img src={size1} alt='size1' />
        </Typography>
        <Typography>
            <img src={size2} alt='size2' />
        </Typography>
        <Typography>
            <img src={size3} alt='size3' />
        </Typography>
      </Box>
      <Footer />
        </>
    );
}

export default SizeGuide;