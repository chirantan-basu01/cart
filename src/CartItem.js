import React from 'react';

class CartItem extends React.Component {
    constructor(){
        super();
        this.state = {
            price: 999,
            title: 'Phone',
            qty: 1,
            img: ''
        }
    }
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
        const { price,title,qty } = this.state;
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
                        src="https://www.flaticon.com/svg/vstatic/svg/992/992651.svg?token=exp=1620383404~hmac=394245a6cc47002e99c07e517709fd13"
                        onClick={this.increaseQuantity}
                        />
                        <img 
                        alt="decrease" 
                        className="action-icons" 
                        src="https://www.flaticon.com/svg/vstatic/svg/992/992683.svg?token=exp=1620383223~hmac=a2883352753e0a3c6f5c42b5ceb7f697"
                        onClick={this.decreaseQuality}
                        />
                        <img 
                        alt="delete" 
                        className="action-icons" 
                        src="https://www.flaticon.com/svg/vstatic/svg/1214/1214428.svg?token=exp=1620383438~hmac=6911992d1931acc1853a7ea4153384ce"
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