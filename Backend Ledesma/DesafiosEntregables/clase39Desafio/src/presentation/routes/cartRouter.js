import { Router } from 'express';
import CartController from '../controllers/cartController.js'
import auth from  '../middlewares/auth.js';
import authorization from '../middlewares/authorization.js';

const cartRouter = Router();

cartRouter.post('/', auth, authorization('createCart'),CartController.saveCart); // Crea un carrito
cartRouter.get('/:userId', auth, authorization('getCartByUserId'), CartController.getOneCart); // Obtiene un carrito a partir del id del usuario
cartRouter.post('/:cid/product/:pid', auth, authorization('addProductByCartId'), CartController.addProduct); // Agrega un producto al carrito
cartRouter.delete('/:cid/product/:pid', auth, authorization('deleteProductInCart'), CartController.deleteProduct); // Elimina un producto del carrito
cartRouter.delete('/:cid', auth, authorization('deleteCart'), CartController.deleteProducts); // Borra todos los productos de un carrito
cartRouter.put('/:cid', auth, authorization('updateCart'), CartController.updateCart); // Actualiza todo el carrito
cartRouter.put('/:cid/product/:pid', auth, authorization('updateProductByCartId'), CartController.updateProduct); // Actualiza la cantidad del producto en un carrito
cartRouter.post('/:cid/purchase', auth, authorization('checkout'), CartController.checkout) // Finalizar compra

export default cartRouter;
