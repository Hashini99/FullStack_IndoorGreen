import {Router} from 'express';
import asyncHandler from 'express-async-handler';

import { orderstatus } from '../constants/order_sta';
import { OrderModel } from '../models/order.model';
import auth from '../middleware/auth.mid';

const router = Router();
router.use(auth);

router.post('/create',
asyncHandler(async (req:any, res:any) => {
    const requestOrder = req.body;

    if(requestOrder.items.length <= 0){
        res.status(400).send('Cart Is Empty!');
        return;
    }

    await OrderModel.deleteOne({
        user: req.user.id,
        status: orderstatus.NEW
    });

    const newOrder = new OrderModel({...requestOrder,user: req.user.id});
    await newOrder.save();
    res.send(newOrder);
})
)


router.get('/newOrderForCurrentUser', asyncHandler( async (req:any,res ) => {
  
     const order= await getNewOrderForCurrentUser(req);
    if(order) res.send(order);
     else res.status(400).send();
}))

router.post('/pay', asyncHandler( async (req:any, res) => {
    const {paymentId} = req.body;
    const order = await getNewOrderForCurrentUser(req);
    if(!order){
        res.status(400).send('Order Not Found!');
        return;
    }

    order.paymentId = paymentId;
    order.status = orderstatus.PAYED;
    await order.save();

    res.send(order._id);
}))


export default router;



async function getNewOrderForCurrentUser(req: any) {
    return await OrderModel.findOne({ user: req.user.id, status: orderstatus.NEW });
}
