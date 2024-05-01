import { Injectable } from '@angular/core';
import { IProduct } from '../Models/IProduct';

@Injectable({
  providedIn: 'root'
})
export class StaticServicesService {
  products: IProduct[];
 ids!:number[]
  constructor() 
  { 
    this.products = [
      { id: 1, name: 'lab', price: 30000, imgUrl: 'https://fakeimg.pl/250x100/', quantity: 0, catId: 1 },
      { id: 2, name: 'Watch', price: 40000, imgUrl: 'https://fakeimg.pl/250x100/', quantity: 2, catId: 2 },
      { id: 3, name: 'TV', price: 1000, imgUrl: 'https://fakeimg.pl/250x100/', quantity: 0, catId: 1 },
      { id: 4, name: 'Fan', price: 70000, imgUrl: 'https://fakeimg.pl/250x100/', quantity: 4, catId: 3 },

    ]
  }
  getAll():IProduct[]
  {
    return this.products
  }
  getById(id:number):IProduct|null
  {
    let pro= this.products.find(x=>x.id===id);
    return pro? pro:null
  }
  getProductByCatId(catId:number):IProduct[]|null
  {
    let pro= this.products.filter(x=>x.catId===catId);
    return pro? pro:null
  }
  AllIds():number[]
  {
    this.ids=this.products.map(x=>x.id)
    return this.ids
  }

}
