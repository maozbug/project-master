import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
  	console.log('调用搜索管道');
		let arr=value.filter(res=>{
			if(res.name.indexOf(args)!=-1 || res.age.indexOf(args)!=-1){
				return true
			}
		}) 
		return arr
  }

}
