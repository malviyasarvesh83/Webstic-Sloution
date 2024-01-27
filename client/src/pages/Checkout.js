import { Box, Typography, TextField } from "@mui/material";
import { getAllProducts } from "../services/api";
import { useEffect, useState } from "react";
import PaypalCheckoutButton from './PaypalCheckoutButton';

const defaultInfo = {
  name: '',
  email: '',
  phone: '',
  address: '',
  totalAmount: 0,
}

const Checkout = () => {
    const [products, setProducts] = useState([]);
    const [basicDetails, setBasicDetails] = useState(defaultInfo);

    useEffect(() => {
      getProducts();
    }, [])

    const getProducts = async () => {
      const response = await getAllProducts();
      setProducts(response.data);
    }

    let total = 0;
    products.map((p) => {
        total += p.amount*p.quantity;
    })
    basicDetails.totalAmount = total;

    const onValueChange = (e) => {
      setBasicDetails({ ...basicDetails, [e.target.name]: e.target.value });
      console.log(basicDetails);
    }

    return (
      <Box style={{ marginTop: 240, width: "50%", marginLeft: 300 }}>
        <Typography variant="h4">Basic Details</Typography>
        <TextField
          style={{ marginTop: 20 }}
          onChange={(e) => onValueChange(e)}
          fullWidth
          label="Name"
          id="fullWidth"
          name="name"
        />
        <TextField
          style={{ marginTop: 20 }}
          onChange={(e) => onValueChange(e)}
          fullWidth
          label="Email"
          id="fullWidth"
          name="email"
        />
        <TextField
          style={{ marginTop: 20 }}
          onChange={(e) => onValueChange(e)}
          fullWidth
          label="Phone Number"
          id="fullWidth"
          name="phone"
        />
        <TextField
          style={{ marginTop: 20 }}
          onChange={(e) => onValueChange(e)}
          fullWidth
          label="Delivery Address"
          id="fullWidth"
          name="address"
        />
        <Box
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 20,
          }}
        >
          <Typography variant="h5">Total Amount To Be Paid:</Typography>
          <Typography variant="h5">${total}.00</Typography>
        </Box>
        <PaypalCheckoutButton basicDetails={basicDetails} />
      </Box>
    );
}

export default Checkout;