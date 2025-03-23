

export const ProductCountRemeinder = (props : {id : number}) =>{


    const available_count = props.id % 3 

    return(
        <h1 className="cart-alert"> Hurry, Only {available_count} left</h1>
    )
}