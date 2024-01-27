import { Box, Typography } from '@mui/material';

const Post = () => {
    const url = 'https://shechocolate.com/cdn/shop/files/28A8021_900x.png?v=1689063523';
    return (
      <Box style={{display: 'flex', marginLeft: 50, marginTop: 20, alignItems: 'center', textAlign: 'center', justifyContent: 'space-between', height: 'auto'}}>
        <Box style={{marginRight: 50}}>
          <Typography>SHE CHOCOLATE</Typography>
          <Typography style={{marginTop: 20, fontSize: 20}}>
            She Chocolate is one of the leading brands in the field of clothing
            and embroideries on a large scale. It was established in 2009 and
            specialized in the production of traditional dresses and caftans. It
            occupied its position among the brands in Jordan and all over the
            world.
          </Typography>
        </Box>
        <Box>
            <img src={url} alt='post' />
        </Box>
      </Box>
    );
}

export default Post;