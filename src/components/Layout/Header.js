import React,{Fragment} from 'react';
import classes from "./Header.module.css"
import imageMeals from "../../Assets/meals.jpg"
import HeaderCartButton from './HeaderCartButton';
const Header=(props)=>{
    return(  <Fragment>
            <header className={classes.header}>
                <h1> Delicious Meals</h1>
            <HeaderCartButton onClick={props.onShowCart}/>
             </header>
                
            <div className={classes['main-image']}>
                <img src={imageMeals} alt="Meals Table"/>
            </div>
        </Fragment>
    )
        
    
}
export default Header