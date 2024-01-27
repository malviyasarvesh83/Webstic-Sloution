import { images } from '../constants/data';
import { Box } from '@mui/material';

const Images = () => {
    return (
        <Box style={{marginTop: 100, marginLeft: 25, marginRight: 25}}>
            {
                images.map((image) => (
                    <img src={image.url} alt='image1' style={{marginLeft: 10, marginTop: 10}} />
                ))
            }
        </Box>
    )
}

export default Images;