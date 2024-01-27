import { Box, Typography } from "@mui/material";
import Footer from "../components/Footer";

const TermsOfService = () => {
    return (
      <>
        <Box style={{ marginTop: 240 }}>
          <Typography variant="h4" style={{marginLeft: 500}}>Terms Of Service</Typography>
          <Typography style={{marginTop: 20, width: '50%', fontSize: 20, marginLeft: 300}}>
            Thank you for using “She Chocolate“. The Terms and Conditions and
            Privacy policy are intended to make you aware of your legal rights
            and responsibilities with respect to your access to and use of the
            “She Chocolate“.
          </Typography>
          <Typography style={{marginTop: 20, width: '50%', fontSize: 20, marginLeft: 300}}>
            Your privacy is very important to us. It is “She Chocolate“ policy
            to respect your privacy regarding any information we may collect
            while operating our The Site. We created our Privacy Policy and Site
            Usage Rules to make important disclosures about how you can use “She
            Chocolate“ to list your business for the public to see/use and how
            we collect and can use your content and information. We encourage
            you to read this Policy to help you make informed decisions.
          </Typography>
          <Typography style={{marginTop: 20, width: '50%', fontSize: 20, marginLeft: 300}}>
            Please understand that your use of The Site and its listing services
            automatically enters you in agreement with our Terms, Conditions and
            Privacy Policy. We use your data to make our business and delivery
            better, to serve you better. Your data will be used to improve site
            dynamic and make what we do better and more efficient. We use your
            data and knowledge of how people view your listing to create new
            site capabilities and enhancements.
          </Typography>
          <Typography style={{marginTop: 20, width: '50%', fontSize: 20, marginLeft: 300}}>
            We use your data to make our business and delivery better. Your data
            will be used to improve site dynamics and capability of its
            searches. “She Chocolate“ collects non-personally-identifying
            information that web browsers and servers typically make available,
            such as the browser type, language preference, referring site, and
            the date and time of each web visit. Our purpose in collecting
            non-personally identifying information is to better understand how
            our web visitors and customers use its website.
          </Typography>
        </Box>
        <Footer />
      </>
    );
}

export default TermsOfService;