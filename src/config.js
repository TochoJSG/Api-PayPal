import { config } from 'dotenv';
config();
export const PORT = 4000;
export const HOST = 'http://localhost:' + PORT;
export const PAYPAL_KEY = 'EKCu53ROvJ8OAAq0d87OvecfOCfhcMaJfETLoHef0_rv1Gv3tGf6NNNt5y9S-N5rN8Zx0ecdQxQH5qs2';
export const PAYPAL_ClientId = 'AePSuNvOZ6eB_tzLeYE-w1Q61pQ7EEA7zpA1TMEtelXiwrUEO-gT_5XqgtDAjx8j9b_-a0Rw1F3-iwbb';
export const ApiPaypalClient = process.env.ApiPaypalClient;
export const ApiPaypalSecret = process.env.ApiPaypalSecret;
export const PaypalApi = 'https://api-m.sandbox.paypal.com';
export const PaypalApiProduccion = 'https://api-m.paypal.com/v2/checkout/orders';