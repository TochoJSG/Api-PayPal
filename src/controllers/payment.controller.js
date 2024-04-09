import { ApiPaypalClient,ApiPaypalSecret,HOST,PaypalApi } from '../config.js';
import axios from 'axios';

export const createOrder = async (request,res)=>{
    if(request.error){console.table(request.error)} 
    //res.send('Order Created')
    const order = {
        intent:"CAPTURE",
        purchase_units: [
            {
                amount:{
                    currency_code:"MXN",
                    value:"100.0"
                }
            },
        ],
        application_context: {
            brand_name: "Mi_Tienda",
            landing_page: "NO_PREFERENCE",
            user_action: "PAY_NOW",
            return_url: `${HOST}/capture-order`,
            cancel_url: `${HOST}/cancel-order`
        }
    };

    const params = new URLSearchParams();
    params.append('grant_type','client_credentials');
    const { data:{access_token} } = await axios.post(`${ PaypalApi }/v1/oauth2/token`,params,{
        auth: {
            username: ApiPaypalClient,
            password: ApiPaypalSecret
        }
    })
    console.log( data.access_token );

    const response = await axios.post(`${PaypalApi}/v2/checkout/order`,order,{
        headers: {
            "Content-Type":"application/json",
            Authorization: `Bearer ${ access_token }`
        }
    })
    console.log(res.data);

    return res.json(response.data);
};

export const captureOrder = async (request,response)=>{
    //response.send('Order received') 
    const { token } = request.query;

    const res = await axios.post(`${ PaypalApi }/v2/checkout/orders/${token}/capture`,{},{
        auth: {
            username: ApiPaypalClient,
            password: ApiPaypalSecret
        }
    })

    console.log(res.data);

    return response.send('payed');
};

export const cancelOrder = (request,response)=>{ 
    if(request.error){console.table(request.error)}
    return response.redirect('/');
};