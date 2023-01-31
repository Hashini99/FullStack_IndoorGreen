import { environment } from "src/environments/environment";

const main_url = environment.production? '' : 'http://localhost:3000';
// const chat_url =environment.production? '':'http://localhost:9000';

export const login_url = main_url + '/api/users/login';
export const plants_url = main_url + '/api/plants';

export const plantID_url = plants_url + '/';

export const register_url = main_url + '/api/users/register';

export const order_url = main_url + '/api/orders';
export const create_order = order_url + '/create';
export const new_order = order_url + '/newOrderForCurrentUser';
export const payment_url = order_url + '/pay';
// export const chat_app= chat_url + '/api/chat';

