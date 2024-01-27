import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
      <Box style={{ background: "grey", display: 'flex', marginTop: 50, alignItems: 'center', textAlign: 'center', justifyContent: 'space-between', width: '100%', height: 400 }}>
        <Box style={{width: '50%', marginLeft: 30, marginTop: 30}}>
          <Typography style={{fontSize: 25}}>
            She Chocolate is one of the leading brands in the field of clothing
            and embroideries on a large scale. It was established in 2009 and
            specialized in the production of traditional dresses and caftans. It
            occupied its position among the brands in Jordan and all over the
            world.
          </Typography>
        </Box>
        <Box style={{marginRight: 100}}>
          <Typography style={{ fontSize: 20, marginBottom: 10 }}>Quick links</Typography>
          <Typography style={{marginBottom: 10, textDecoration: 'none', color: 'black', display: 'block'}} component={Link} to='/search'>Search</Typography>
          <Typography style={{marginBottom: 10, textDecoration: 'none', color: 'black', display: 'block'}} component={Link} to='/privacy-policy'>Privacy Policy</Typography>
          <Typography style={{marginBottom: 10, textDecoration: 'none', color: 'black', display: 'block'}} component={Link} to='/terms-of-service'>Terms of Service</Typography>
          <Typography style={{marginBottom: 10, textDecoration: 'none', color: 'black', display: 'block'}} component={Link} to='/shipping-policy'>Shipping Policy</Typography>
          <Typography style={{marginBottom: 10, textDecoration: 'none', color: 'black', display: 'block'}} component={Link} to='/refund-policy'>Refund Policy</Typography>
          <Typography style={{marginBottom: 10, textDecoration: 'none', color: 'black', display: 'block'}} component={Link} to='/contact-information'>Contact Information</Typography>
          <Typography style={{marginBottom: 10, textDecoration: 'none', color: 'black', display: 'block'}} component={Link} to='/contact'>Contact</Typography>
        </Box>
      </Box>
    );
}

export default Footer;