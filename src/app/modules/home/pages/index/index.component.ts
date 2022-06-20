import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Flight } from 'src/app/models/flight.model';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {


  profileForm: FormGroup;


  data = new BehaviorSubject({} as Flight);
  data$ = this.data.asObservable();

  get profileImage() {
    return this.profileForm.get('profileImage');
  }


  get firstName() {
    return this.profileForm.get('firstName');
  }


  get lastName() {
    return this.profileForm.get('lastName');
  }

  constructor(private route: ActivatedRoute, public http: HttpClient, private cd: ChangeDetectorRef) {
    this.profileForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      profileImage: new FormControl(null, Validators.required),
    });

  }

  ngOnInit(): void {
    this.http.get(`${environment.apiUrl}/flight/1`).subscribe((res) => {
      this.data.next(res as Flight);
    })
    // this.profileForm.markAllAsTouched()
    // console.log(this.route.snapshot.data);
  }

  onFileChange(event: any) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {
        // need to run CD since file load runs outside of zone
        this.cd.markForCheck();
      };
    }
  }

  handleSubmit() {
    // this.profileForm.markAllAsTouched();
    if (this.profileForm.valid) {
      console.log(this.profileForm.value);
    }
  }

}
