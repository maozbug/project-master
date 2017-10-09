import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
	private goodsList :Array<any>=[
		{"name":"苹果8","price":"8000","youfei":"20","num":"1","sumMoney":"8020"},
		{"name":"VIVO20","price":"5000","youfei":"20","num":"1","sumMoney":"5020"},
		{"name":"OPPO11","price":"4500","youfei":"20","num":"1","sumMoney":"4520"},
		{"name":"三星gx5","price":"3500","youfei":"20","num":"1","sumMoney":"3520"},
		{"name":"华为P8","price":"6000","youfei":"20","num":"1","sumMoney":"6020"}
	]
	private shopCarList :Array<any>=[]
	private sumall :number=0
  constructor() { }

  ngOnInit() {
  }
	add(goods){
		this.shopCarList.push(goods);
		goods.sumMoney=goods.price*goods.num+parseInt(goods.youfei);
	}
	jian(goods){
		if(goods.num>1){
			goods.num=goods.num-1
		}
		goods.sumMoney=goods.price*goods.num
		if(goods.sumMoney>10000){
			return goods.sumMoney
		}else{
			goods.sumMoney=goods.price*goods.num+parseInt(goods.youfei);
		}
	}
	jia(goods){
		goods.num=parseInt(goods.num)+1
		goods.sumMoney=goods.price*goods.num
		if(goods.sumMoney>10000){
			return goods.sumMoney
		}else{
			goods.sumMoney=goods.price*goods.num+parseInt(goods.youfei);
		}
	}
}
