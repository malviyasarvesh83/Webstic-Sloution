import { Box, Typography } from "@mui/material";
import Footer from "../components/Footer";

const ContactInfo = () => {
    return (
      <>
        <Box style={{ marginTop: 240, width: '50%', marginLeft: 400 }}>
          <Typography variant="h4">Contact information</Typography>
          <Typography style={{marginTop: 20}}>Trade name: She Chocolate</Typography>
          <Typography style={{marginTop: 20}}>Email: shechocolate@shechocolate.com</Typography>
          <Typography style={{marginTop: 20}}>Physical address: jordan, 130, amman 11123, Jordan</Typography>
        </Box>
        <Footer />
      </>
    );
}

export default ContactInfo;