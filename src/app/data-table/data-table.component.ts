import {Component, OnInit} from '@angular/core';
import {DataService} from "../data-service.service";
import {Data} from "../data";
import {SortPipe} from "../pipes/sort.pipe";
import {SearchPipe} from "../pipes/search.pipe";
import {MatTableDataSource, PageEvent} from '@angular/material';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css'],
  providers: [DataService]
})
export class DataTableComponent implements OnInit {
  products:any;
  data:any[] = [];
  tabels:any[] = [];
  isDesc: boolean = false;
  column: number ;
  direction: number;
  selectedData:any;
  tableIndex:number=0;
  size:string='';
  sizes = [
    'Большой',
    'Маленький',
    'Свой'
  ];
  pager: any = {};

  // paged items
  pagedItems: any[];
  constructor(private dataService: DataService) {

  }

  ngOnInit() {
    this.tabels.push(this.tableIndex++)
  }
  loadData(size?){

      this.dataService.getData(size).subscribe(data => {

        console.log( this.tabels);
        this.data=[];
        this.products=data['table'];
        this.data.push(data['table'][0]);
        this.products.splice(0, 1);


        this.setPage(1);
      })
  }
  setClickedRow(data){
    this.selectedData = data;
  }
  onSelectionChange(size){
    this.size = size;
    this.loadData(size);
  }
  addTable(){
    this.tabels.push(this.tableIndex++ )
  }
  sorted(property){
    this.isDesc = !this.isDesc;
    this.column = property;
    this.direction = this.isDesc ? 1 : -1;
  };
  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
      return;
    }

    // get pager object from service
    this.pager = this.dataService.getPager(this.products.length, page);

    // get current page of items
    this.pagedItems = this.products.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

}
