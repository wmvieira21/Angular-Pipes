import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filtrerPipe',
    pure: false /*Pipe will always be recalculated when changing anything in the dom
    IMPORTANT: It's not the default behavior. It might lead to performance issues*/
})

export class FilterPipe implements PipeTransform {

    transform(value: any, filterInput: string, propName: string) {

        if (value.length === 0
            || filterInput.length === 0) {
            return value;
        } else {
            let arrayFiltered = [];

            for (let itemList of value) {
                if (itemList[propName] === filterInput) {
                    arrayFiltered.push(itemList);
                }
            }
            return arrayFiltered;
        }
    }
}
