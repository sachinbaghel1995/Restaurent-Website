import classes from "./Cart.module.css"
import Modal from "../UI/Modal"
const Cart=props=>{
    const CartItems=(<ul className={classes['cart-items']}>{[{id:'c1',name:"sushi",amount:2,price:12.79}].map((item)=>(
        <li>{item.name}</li>
    ))}</ul>
    )

return(
    <Modal>
        {CartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>35.72</span>
        </div>
       <div className={classes.actions}>
             <button className={classes['button-alt']}>Close</button>
             <button className={classes.button}>Order</button>
       </div>

    </Modal>
)
}
export default Cart