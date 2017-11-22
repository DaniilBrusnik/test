import {Injectable} from '@angular/core';
import {RequestOptions} from "@angular/http";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import * as _ from "lodash";

@Injectable()
export class DataService {
  private _urlSmall: string = "assets/listS.json";
  private _urlBig: string = "assets/listB.json";

  constructor(private http: HttpClient) {
  }

  getData(size?) {
    if (size == 'Маленький') {
      return this.http.get(this._urlSmall)
    }
    else if (size == 'Большой') {
      return this.http.get(this._urlBig)
    }

  }


  getPager(totalItems: number, currentPage: number = 1, pageSize: number = 50) {
    // calculate total pages
    let totalPages = Math.ceil(totalItems / pageSize);

    let startPage: number, endPage: number;
    if (totalPages <= 10) {
      startPage = 1;
      endPage = totalPages;
    } else {
      if (currentPage <= 6) {
        startPage = 1;
        endPage = 10;
      } else if (currentPage + 4 >= totalPages) {
        startPage = totalPages - 9;
        endPage = totalPages;
      } else {
        startPage = currentPage - 5;
        endPage = currentPage + 4;
      }
    }

    let startIndex = (currentPage - 1) * pageSize;
    let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

    let pages = _.range(startPage, endPage + 1);

    return {
      totalItems: totalItems,
      currentPage: currentPage,
      pageSize: pageSize,
      totalPages: totalPages,
      startPage: startPage,
      endPage: endPage,
      startIndex: startIndex,
      endIndex: endIndex,
      pages: pages
    };
  }
}
