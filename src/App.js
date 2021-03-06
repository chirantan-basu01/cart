import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component {
  
  constructor(){
    super();
    this.state = {
        products: [
            {
                price: 99,
                title: 'Watch',
                qty: 1,
                img: 'https://images.unsplash.com/photo-1560863185-a4f6199b5768?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
                id: 1
            },
            {
                price: 999,
                title: 'Mobile Phone',
                qty: 10,
                img: 'https://images.unsplash.com/photo-1567581935884-3349723552ca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80',
                id: 2 
            },
            {
                price: 9999,
                title: 'Laptop',
                qty: 4,
                img: 'https://images.unsplash.com/flagged/photo-1560854350-13c0b47a3180?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=726&q=80',
                id: 3
            }
        ]
    }
}
handleIncreaseQuantity = (product) => {
    console.log('Hey pls inc the qty of ',product);
    const{products} = this.state;
    const index = products.indexOf(product);

    products[index].qty+=1;

    this.setState({
        products
    })
}
handleDecreaseQuantity = (product) => {
    console.log('Hey pls dec the qty of ',product);
    const{products} = this.state;
    const index = products.indexOf(product);

    if(products[index].qty===0){
        return;
    }

    products[index].qty-=1;

    this.setState({
        products
    })
}
handleDeleteProduct = (id) => {
    const{products}=this.state;
    const items = products.filter((item)=>item.id!==id); //  [{}]

    this.setState({
        products: items
    })
}

getCartCount = () => {
  const {products} = this.state;

  let count = 0;

  products.forEach((product)=>{
    count+=product.qty;
  })

  return count;
}

getCartTotal = () => {
  const {products} =this.state;

  let cartTotal = 0;

  products.map((product)=>{
    cartTotal+=product.qty*product.price
  })
  return cartTotal;
}

  render() {
    const {products}=this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <Cart 
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
        <div style={ {padding:10, fontSize:20} }>TOTAL: {this.getCartTotal()} </div>
      </div>
    );
  }
}

export default App;
