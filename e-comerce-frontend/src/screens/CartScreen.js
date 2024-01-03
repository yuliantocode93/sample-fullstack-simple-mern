import "./CartScreen.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

// Components
import CartItem from "../components/CartItem";

// Actions
import { addToCart, removeFromCart } from "../redux/actions/cartActions";
import useLogin from "../utils/hooks/useLogin";

const CartScreen = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);

  const { loginInfo } = useLogin();

  const { cartItems } = cart;

  const qtyChangeHandler = (id, qty) => {
    dispatch(addToCart(id, qty));
  };

  const removeFromCartHandler = (item) => {
    dispatch(removeFromCart({ pId: item.product, _id: item._id }));
  };

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  const getCartSubTotal = () => {
    return cartItems.reduce((price, item) => price + item.price * item.qty, 0).toFixed(2);
  };

  const handleProceedBtn = () => {};

  if (loginInfo.loading) return <h1>Loading.....</h1>;
  else if (!loginInfo.loading && loginInfo.isLogin)
    return (
      <>
        <div className="cartscreen">
          <div className="cartscreen__left">
            <h2>Keranjang Belanja</h2>

            {cartItems.length === 0 ? (
              <div>
                Keranjangmu Kosong <Link to="/">Kembali</Link>
              </div>
            ) : (
              cartItems.map((item) => <CartItem key={item.product} item={item} qtyChangeHandler={qtyChangeHandler} removeHandler={() => removeFromCartHandler(item)} />)
            )}
          </div>

          <div className="cartscreen__right">
            <div className="cartscreen__info">
              <p>Subtotal ({getCartCount()}) items</p>
              <p>Rp. {getCartSubTotal()}</p>
            </div>
            <div>
              <button title="" onClick={handleProceedBtn}>
                Lanjut Checkout
              </button>
            </div>
          </div>
        </div>
      </>
    );
};

export default CartScreen;
