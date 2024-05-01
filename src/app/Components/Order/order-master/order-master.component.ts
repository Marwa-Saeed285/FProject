import { AfterViewInit, Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { ICategory } from 'src/app/Models/ICategory';
import { IProduct } from 'src/app/Models/IProduct';
import { StaticServicesService } from 'src/app/Services/static-services.service';
import { IProductViewModel } from 'src/app/ViewModels/IProductViewModel';

@Component({
  selector: 'app-order-master',
  templateUrl: './order-master.component.html',
  styleUrls: ['./order-master.component.css']
})
export class OrderMasterComponent implements AfterViewInit{
  categories:ICategory[];
  SelectedCat:number=0;
  SelectedCard!:IProductViewModel[]
  TotalPrice:number=0;
  qunt!:number
 @ViewChild('viewInput')FromViewChild!:ElementRef;
constructor(private serv:StaticServicesService)
{
  this.categories=
  [
    {id:1,name:"lab"},
    {id:2,name:'TV'},
    {id:3,name:'Watch'}
  ];
}
  ngAfterViewInit(): void {
    this.FromViewChild.nativeElement.style.border="2px solid red"
    this.FromViewChild.nativeElement.value="Enter Your Name"
  }

handleDataFromInner(data:number)
{
  this.TotalPrice=data
}

CardTable(data:IProduct[])
{
  console.log(data)
   this.SelectedCard=data.map(product=>{
    return{
      id:product.id,
    name:product.name,
    quantity:product.quantity,
    price:product.price,
    totalPrice:(product.price*product.quantity),
   }
   }
   )
}
// FilterProduct()
// {
//  this.proProducts= this.products.filter(x=>x.catId==this.SelectedCat)
//  console.log(this.SelectedCat)
// }

changeTotal(id:number,qunt:string)
{
  let pro= this.SelectedCard.find(x=>x.id===id)
  if(pro)
    {
      pro.quantity=+qunt 
      pro.totalPrice=pro.price*+qunt;
      this.SelectedCard[id]=pro;
      console.log(this.SelectedCard)
    }
}
}
