import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  public products : any = [];
  public totalItem : number = 0;
  public grandTotal !: number;
  constructor(private cartService : CartService) {}

  ngOnInit(): void {

    this.cartService.getProducts()
      .subscribe(res=>{
        this.totalItem = res.length;
      })

this.cartService.getProducts()
.subscribe(res=>{
  this.products = res;
  this.grandTotal = this.cartService.getTotalPrice();
})
  }
  removeItem(item: any){
    this.cartService.removeCartItem(item);
  }
  emptycart(){
    this.cartService.removeAllCart();
  }
}
