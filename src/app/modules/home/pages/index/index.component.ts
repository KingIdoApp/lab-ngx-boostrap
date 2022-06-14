import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor(private route: ActivatedRoute, public http: HttpClient) {

  }

  ngOnInit(): void {
    this.http.get(`${environment.apiUrl}/flight`).subscribe(res=>{
      console.log(res);

    })
    console.log(this.route.snapshot.data);
  }

}
