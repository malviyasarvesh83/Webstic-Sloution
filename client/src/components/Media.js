import { Typography, Box } from "@mui/material";


const Media = () => {
    const mediaImg1 = 'https://shechocolate.com/cdn/shop/files/28A8433_460x.png?v=1689063359';
    const mediaImg2 = 'https://shechocolate.com/cdn/shop/files/28A7704_460x.png?v=1689063239';
    const mediaImg3 = 'https://shechocolate.com/cdn/shop/files/28A8399_460x.png?v=1689063661';
    return (
      <Box style={{marginLeft: 25, marginTop: 50}}>
        <Typography style={{marginLeft: 500, marginBottom: 20, fontSize: 40}}>Text columns with media</Typography>
        <Box style={{display: 'flex', textAlign: 'center', alignItems: 'center', justifyContent: 'space-between', width: '50%', height: '50%'}}>
            <img src={mediaImg1} alt='mediaImg1' style={{width: '50%', height: '50%', marginLeft: 70}} />
            <img src={mediaImg2} alt='mediaImg2' style={{width: '50%', height: '50%', marginLeft: 70}} />
            <img src={mediaImg3} alt='mediaImg3' style={{width: '50%', height: '50%', marginLeft: 70}} />
        </Box>
      </Box>
    );
}

export default Media;