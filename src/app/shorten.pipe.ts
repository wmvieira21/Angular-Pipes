import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'shorten'
})

export class ShortenPipe implements PipeTransform {

    transform(value: any, star: number, end: number) {
        return value.substring(star, end);
    }
}
