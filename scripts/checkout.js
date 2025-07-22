import {renderOrderSummary} from './checkout/orderSummary.js';
import {renderPaymentSummary} from './checkout/paymentSummary.js';
//import '../data/cart-class.js';
//import '../data/data/car.js';
//import '../data/backend-practice.js';
import { loadProducts } from '../data/products.js';
import { loadCart } from '../data/cart.js';

// array of promises, runs all completely before next code execute
Promise.all([
  new Promise((resolve)=>{
    loadProducts(()=>{
      resolve('value1');
    });
  }),
  new Promise((resolve)=>{
    loadCart(()=>{
      resolve('value2');
    });
  })
]).then((value)=>{
  console.log(value);
  renderOrderSummary();
  renderPaymentSummary();
});

/*
//resolve controls 
new Promise((resolve)=>{
  loadProducts(()=>{
    resolve('value1');
  });
}).then((value) =>{
  console.log(value);
  return new Promise((resolve)=>{
    loadCart(()=>{
      resolve();
    });
  });
}).then(()=>{
  renderOrderSummary();
  renderPaymentSummary();
});


// nested 'callbacks' is not good, that's why use promises to keep code flat
loadProducts(()=>{
  loadCart(()=>{
    renderOrderSummary();
    renderPaymentSummary();
  });
});
*/