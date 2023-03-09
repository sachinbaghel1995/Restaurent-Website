import classes from "./Card.module.css"
const Card=(props)=>{
    return(
        <div children className={classes.card}>{props.children}</div>
    )
}
export default Card