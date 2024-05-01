import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/Models/IProduct';
import { StaticServicesService } from 'src/app/Services/static-services.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productId:number=0;
  Product:IProduct|null=null
  ids!:number[]
  constructor(private active:ActivatedRoute,private locate:Location,private route:Router,
    private serv:StaticServicesService)
  {

  }
  ngOnInit(): void {
    this.active.paramMap.subscribe(params => {
      this.productId = Number(params.get('id'));
      this.Product=this.serv.getById(this.productId);
      console.log(this.Product)
    })
    this.ids=this.serv.AllIds()
  }
  GoSomeWhere()
  {
    this.locate.back()
  }
  next()
  {
    let idex=this.ids.findIndex((x)=>x===this.productId)
    console.log(idex)
    let nextid;
    if(idex<this.ids.length)
      {
         nextid=this.ids[idex+1]
         this.route.navigate(['/productdetails',nextid])
      }

  }
}
