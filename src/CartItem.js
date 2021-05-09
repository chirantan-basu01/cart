import React from 'react';

class CartItem extends React.Component {
    
    increaseQuantity = () => {
    //  console.log('this',this.state);
    //  setState form 1 for normal change like title 
        // this.setState({
        //     qty: this.state.qty +1
        // });

    //  setState form 2 - if previous state required use this

        this.setState((prevState)=>{
            return{
                qty: prevState.qty + 1
            }
        });
    }
    decreaseQuality = () => {
        const {qty} = this.state;
        
        if(qty===0){
            return;
        }
    //  setState form 2 - if previous state required use this
        this.setState((prevState)=>{
            return{
                qty: prevState.qty - 1
            }
        });
    }
    render() {
        console.log('this.props',this.props);
        const { price,title,qty } = this.props.product;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} />
                </div>
                <div className="right-block">
                    <div style={{fontSize: 25}}>{title}</div>
                    <div style={{color: '#777'}}>Rs {price}</div>
                    <div style={{color: '#777'}}>Qty: {qty}</div>
                    <div className="cart-item-actions">
                        {/*Buttons*/}
                        <img 
                        alt="increase" 
                        className="action-icons" 
                        src="https://www.flaticon.com/premium-icon/icons/svg/3303/3303893.svg"
                        onClick={this.increaseQuantity}
                        />
                        <img 
                        alt="decrease" 
                        className="action-icons" 
                        src="https://www.flaticon.com/premium-icon/icons/svg/2740/2740679.svg"
                        onClick={this.decreaseQuality}
                        />
                        <img 
                        alt="delete" 
                        className="action-icons" 
                        src="https://www.flaticon.com/premium-icon/icons/svg/484/484662.svg"
                        />
                    </div> 
                </div>
            </div>
        );
    }
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}

export default CartItem;