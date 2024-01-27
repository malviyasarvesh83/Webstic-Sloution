import { Box, Typography, TextField, Button, styled } from "@mui/material";
import Footer from "../components/Footer";
import { useState } from "react";
import { sendMessageDetails } from '../services/api';
import { useNavigate } from "react-router-dom";

const ButtonStyled=styled(Button)`
  margin-top: 20px;
  width: 680px;
  height: 50px;
  background: black;
  text-transform: capitalize;

  &:hover {
    background: transparent;
    color: black;
    border: 1px solid black;
  }
`

const defaultValue = {
  name: '',
  email: '',
  message: '',
}

const Contact = () => {

  const [contact, setContact] = useState(defaultValue);
  const navigate = useNavigate();

  const onValueChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  }

  const sendMessage = async () => {
    const response = await sendMessageDetails(contact);
    if (response.status == 200) {
      alert('Message Send Successfully');
      navigate('/');
    } else {
      alert('Something Went Wrong');
    }
  }
    return (
      <>
        <Box style={{ marginTop: 240, width: '50%', marginLeft: 400 }}>
          <Typography variant="h4" style={{marginLeft: 150}}>Contact</Typography>
          <TextField style={{marginTop: 20}} fullWidth label="Name" id="fullWidth" onChange={ (e) => onValueChange(e) } name='name' />
          <TextField style={{marginTop: 20}} fullWidth label="Email" id="fullWidth" onChange={ (e) => onValueChange(e) } name='email' />
          <TextField
            id="outlined-multiline-static"
            label="Message"
            multiline
            rows={4}
            style={{ marginTop: 20, width: 680 }}
            onChange={(e) => onValueChange(e)}
            name='message'
          />
          <ButtonStyled variant='contained' onClick={ () => sendMessage() }>Send</ButtonStyled>
        </Box>
        <Footer />
      </>
    );
}

export default Contact;