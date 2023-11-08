import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchTerm:String ="";

  constructor(
    //activatedRoute is use to reading from the route
    private route:ActivatedRoute , 
    //Router is use to writing into the route
    private router:Router
    ){

     }

  ngOnInit(): void {
    
    this.route.params.subscribe(params =>{
      if(params['searchTerm'])
      this.searchTerm = params['searchTerm'];
    })
  }

  search():void{
         if(this.searchTerm)
         this.router.navigateByUrl('/search/' + this.searchTerm);
  }
}
