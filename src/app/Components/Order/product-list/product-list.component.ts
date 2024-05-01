import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ICategory } from 'src/app/Models/ICategory';
import { IProduct } from 'src/app/Models/IProduct';
import { StaticServicesService } from 'src/app/Services/static-services.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnChanges, OnInit {
  // products: IProduct[];
  categories: ICategory[];
  TotalPrice: number = 0;
  @Input() FromOuter: number = 0;
  color: string = "darkblue"
  orderDate: Date;
  idNumber: string = '30005282400101';
  birthdate: any;
  proProducts: IProduct[];
  selectedProducts:IProduct[];
  @Output() InnerToOuter = new EventEmitter<IProduct[]>(); 

  emitEvent() {
  }
  constructor(private serv:StaticServicesService,private rout:Router) {
    this.selectedProducts=[]
    this.orderDate = new Date()
   
    this.proProducts = this.serv.getAll();
    this.categories =
      [
        { id: 1, name: "lab" },
        { id: 2, name: 'TV' },
        { id: 3, name: 'Watch' }
      ];
    this.extractBirthdate();
    // this.birthdate= this.idNumber.split("-")[0].match(/(..?)/g) // split the first part in pairs of two
    // console.log(this.birthdate.join("/"))
    // this.birthdate=this.birthdate.join("/");
  }
  ngOnInit(): void {
    // this.proProducts=this.products;
  }

  ngOnChanges(): void {
    this.FilterProduct();

  }


  CalculatePrice( count: string,id: number):void {
    //  this.TotalPrice=price*(Number(count));
    const product=this.serv.getById(id)
    if(product!=null)
      {
        console.log(product)
         product.quantity=Number(count);
         console.log(product)

         this.selectedProducts.push(product);
         console.log(this.selectedProducts)
         this.InnerToOuter.emit(this.selectedProducts); 

      }
    // else
    // {

    // }
    // return this.selectedProducts;
  }
  prdTrack(i: number, pro: IProduct): number {
    return pro.id;
  }
  // Change()
  // {
  //    this.SelectedCat=1;
  // }
  event(ev: any) {
    console.log(ev.target.id)
  }
  extractBirthdate() {
    const birthdateString = this.idNumber.substring(0, 7);
    const year = parseInt(birthdateString.substring(2, 4));
    const month = parseInt(birthdateString.substring(2, 5)) - 1;
    const day = parseInt(birthdateString.substring(5, 7));
    this.birthdate = new Date(2000, month, day)
  }
  FilterProduct() {
    if (this.FromOuter == 0)
      this.proProducts = this.serv.getAll();
    else
    {
      let pro=this.serv.getProductByCatId(this.FromOuter)
      if(pro)
        {

          this.proProducts = pro
          this.TotalPrice=0
          this.TotalPrice+=this.proProducts.reduce((total, product) => total + product.price, 0);
          console.log(this.FromOuter)
        }
    }
  }
  ViewDetails(id: number) {
    this.rout.navigate(['productdetails', id]).then(() => {
      console.log('Navigation to product details successful');
      console.log(this.categories);
    });
  }
  
  
}
