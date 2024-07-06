import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartItemList : any =[]
  public productList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");
 

  constructor() { }
  getProducts(){
    return this.productList.asObservable();
  }
  
  setProduct(product : any){
    this.cartItemList.push(...product);
    this.productList.next(product);
  }
  addtoCart(product : any){
    this.cartItemList.push(product);

    this.productList.next(this.cartItemList);
    
    this.getTotalPrice();

  }
  getTotalPrice() : number{
    let grandTotal = 0;
    this.cartItemList.map((a:any)=>{
      
      grandTotal =grandTotal + (a.total * a.quantity);
    })
    return grandTotal;
  }
  removeCartItem(product: any){
    this.cartItemList.map((a:any, index:any)=>{
      if(product.id=== a.id){
        product.quantity--;
        if(product.quantity==0){
this.cartItemList.splice(index,1);
        }
        
      }
    })
    this.productList.next(this.cartItemList);
  }
  removeAllCart(){
    this.cartItemList = []
    this.productList.next(this.cartItemList);
  }
  addOnecartItem(product:any){
      
      product.quantity++;
      this.getTotalPrice;
      this.productList.next(this.cartItemList);
  }

  
}
