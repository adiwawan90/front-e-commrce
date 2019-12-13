import React, { Component } from 'react';
import { storeProducts, detailProduct } from './data';

export const ProductContext = React.createContext();

class ProductProvider extends Component {
  //untuk menampung produk & detail
  state = {
    // produk: storeProducts, // jika produk lgsung di inisiasi maka nilai dalam data tdk akan bisa terubah,
    //makanya produk akan kina inisiasi dgn Arra kosong dahulu
    produk: [],
    detailProduk: detailProduct,
    cart: [],
    cartSubtotal: 0,
    cartTotal: 0
  };

  //ini fungsi setelah semua component di render oleh browser
  componentDidMount() {
    this.setProduk();
  }

  //membuat fungsi utk men-set isi Produk
  setProduk = () => {
    let tempProduk = [];
    storeProducts.forEach(item => {
      const singleItem = { ...item };
      tempProduk = [...tempProduk, singleItem];
    });
    this.setState(() => {
      return { produk: tempProduk };
    });
  };

  getItem = id => {
    const produk = this.state.produk.find(item => item.id === id);
    return produk;
  };

  //mengecek berhasil apa tidak saat di klik
  handleDetail = id => {
    const produk = this.getItem(id);
    this.setState({
      detailProduk: produk
    });
  };
  //   addToCart = id => {
  //     console.log('ke Cart, isinya :' + id + '');
  //   };

  addToCart = id => {
    let tempProduk = [...this.state.produk];
    const index = tempProduk.indexOf(this.getItem(id));
    const produk = tempProduk[index];
    produk.inCart = true;
    produk.count = 1;
    const price = produk.price;
    produk.total = price;
    this.setState(() => {
      return { produk: tempProduk, cart: [...this.state.cart, produk] };
    });
  };

  increase = id => {
    // console.log('tambah');
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find(item => item.id === id)
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];

    product.count = product.count + 1;
    product.total = product.count * product.price;

    this.setState(() =>{
      return {cart: [...this.state.cart]}
    },()=>{
      this.addTotal();
    })
  
  };
  decrease = id => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find(item => item.id === id)
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];

    product.count = product.count - 1;
    if(product.count === 0){
      this.removeItem(id)
    }else{
      product.total = product.count * product.price;
      this.setState(() =>{
        return {cart: [...tempCart]}
      },()=>{
        this.addTotal();
      })
    }
  }
  removeItem = id => {
    let tempProducts = [...this.state.produk];
    let tempCart = [...this.state.cart];

    tempCart = tempCart.filter(item => item.id !== id);

    const index = tempProducts.indexOf(this.getItem(id));
    let removeProduct = tempProducts[index];
    removeProduct.inCart = false;
    removeProduct.count = 0;
    removeProduct.total = 0;
    
    this.setState(() => {
      return {
        cart: [...tempCart],
        produk: [...tempProducts]
      };
    },() => {
      this.addTotal();
    })

  }
  clearCart = () => {
   this.setState(() =>{
     return {cart: []}
   },() => {
    this.setProducts();
    this.addTotal();
   })
  }
  addTotal = () => {
    let subtotal= 0
    this.state.cart.map(item => (subtotal += item.total))
    const tempTax = subtotal * 0.1
    const tax = parseFloat(tempTax.toFixed(2))
    const total = subtotal + tax
    this.setState(() => {
      return {
        cartSubtotal: subtotal,
        cartTax: tax,
        cartTotal: total
      }
    })
  }

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          increase: this.increase,
          decrease: this.decrease,
          removeItem: this.removeItem,
          clearCart: this.clearCart
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
