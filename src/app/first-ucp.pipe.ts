import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstUcp'
})
export class FirstUcpPipe implements PipeTransform {

  transform(value: any, length?: any): any {
  	if(value.length>length){
  		return value.substr(0,1).toUpperCase()+value.substr(1,length)+"...";
  	}else{
  		return value.substr(0,1).toUpperCase()+value.substr(1,length)
  	}
  }

}
