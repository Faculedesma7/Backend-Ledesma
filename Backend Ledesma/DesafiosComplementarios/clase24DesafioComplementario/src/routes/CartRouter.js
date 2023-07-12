import { Router } from 'express';
import CartController from '../controllers/CartController.js'
import auth from  '../middlewares/auth.js';
import authorization from '../middlewares/authorization.js';

const cartRouter = Router();

cartRouter.post('/', CartController.saveCart);
cartRouter.get('/:cid', CartController.getOneCart);
cartRouter.post('/:cid/product/:pid', auth, authorization('addProductByCartId'), CartController.addProduct);
cartRouter.delete('/:cid/product/:pid', auth, authorization('deleteProductInCart'), CartController.deleteProduct);
cartRouter.delete('/:cid', auth, authorization('deleteCart'), CartController.deleteProducts);
cartRouter.put('/:cid', auth, authorization('updateCart'), CartController.updateCart);
cartRouter.put('/:cid/product/:pid', auth, authorization('updateProductByCartId'), CartController.updateProduct);

export default cartRouter;