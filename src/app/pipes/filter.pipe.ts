import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  //Recibe el array de elementos y el string que nos trae desde el html
  transform(posts: any[], filterPost: string): any[] {
    if (!filterPost) {
      return posts;
    }
    filterPost = filterPost.toLowerCase();
    return posts.filter(post => post.title.toLowerCase().includes(filterPost));
  }

}

/*

transform(posts: any[], filterPost: string): any[] {
    if (!filterPost) {
      return posts;
    }
    filterPost = filterPost.toLowerCase();
    return posts.filter(post => post.title.toLowerCase().includes(filterPost));
  }

*/
