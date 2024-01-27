import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { successOrderDetails } from '../services/api';

const PaypalCheckoutButton = ({ basicDetails }) => {

    const [paidFor, setPaidFor] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    
    const handleApprove = async (orderId) => {
        setPaidFor(true);
    }
    (async () => {
      if (paidFor) {
        alert("Thank You for purchasing from She Chocolate");
        await successOrderDetails(basicDetails);
        navigate("/");
      }

      if (error) {
        alert(error);
      }
    })();
    return (
        <PayPalScriptProvider>
            <PayPalButtons
                createOrder={(data, actions) => {
                    return actions.order.create({
                        purchase_units: [
                            {
                                amount: {
                                    value:basicDetails.totalAmount
                                }
                            }
                        ]
                    })
                }}
                onApprove = { async (data, action) => {
                    const order = await action.order.capture();
                    console.log("My Order=", order);

                    handleApprove(data.orderID);
                }}
                onCancel={() => { }}
                onError={(err) => {
                    setError(err);
                    console.log('Paypal Checkout onError', err);
                }}
            />
        </PayPalScriptProvider>
    )
}

export default PaypalCheckoutButton;