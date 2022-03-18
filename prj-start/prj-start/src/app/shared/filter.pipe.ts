import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filter",
})
export class FilterPipe implements PipeTransform {
  transform(value: any, filterRecipeName: number): any {
    if (
      value.length === 0 ||
      filterRecipeName === undefined ||
      filterRecipeName === null
    ) {
      return value;
    }
    const resultArr = [];
    for (const item of value) {
      if (item.name.length >= filterRecipeName) {
        resultArr.push(item);
      }
    }
    return resultArr;
  }
}
