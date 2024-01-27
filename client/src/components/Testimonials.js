import StarBorderIcon from '@mui/icons-material/StarBorder';
import { Box, Typography } from '@mui/material';

const Testimonials = () => {
    return (
      <Box style={{display: 'flex', marginLeft: 50, marginRight: 50, alignItems: 'center', textAlign: 'center', justifyContent: 'space-between', height: 400}}>
        <Box>
          <StarBorderIcon style={{ color: "grey" }} />
          <StarBorderIcon style={{ color: "grey" }} />
          <StarBorderIcon style={{ color: "grey" }} />
          <StarBorderIcon style={{ color: "grey" }} />
          <StarBorderIcon style={{ color: "grey" }} />
          <Typography variant="h6">LINDA</Typography>
          <Typography>
            I recently purchased an embroidered dress from a She Chocolate, and
            I am absolutely in love with it! The intricate embroidery adds such
            a unique and beautiful touch to the garment. The attention to detail
            is remarkable, and I have received numerous compliments every time I
            wear it."
          </Typography>
        </Box>
        <Box style={{marginLeft: 30}}>
          <StarBorderIcon style={{ color: "grey" }} />
          <StarBorderIcon style={{ color: "grey" }} />
          <StarBorderIcon style={{ color: "grey" }} />
          <StarBorderIcon style={{ color: "grey" }} />
          <StarBorderIcon style={{ color: "grey" }} />
          <Typography variant="h6">Emily</Typography>
          <Typography>
            I ordered a custom embroidered Thob from she Chocolate, The
            embroidery design was exactly as I envisioned, and the stitching is
            flawless. The Thob itself is comfortable and made from high-quality
            fabric,I would definitely recommend embroidered clothes to anyone
            looking to add a unique touch to their wardrobe."
          </Typography>
        </Box>
      </Box>
    );
}

export default Testimonials;