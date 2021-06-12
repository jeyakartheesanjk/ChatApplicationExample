import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ApiGlobalService } from '../api-global.service';
import { ServiceApiService } from '../service/service-api.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Input() loggedin: boolean | undefined;
  @Output() loggedinChanged: EventEmitter<boolean> = new EventEmitter();
  hide = true;
  constructor(private api:ApiGlobalService) { }
  configuration: any;
  ngOnInit(): void {
    this.configuration = ServiceApiService.settings;
    console.log("jk"+this.configuration.global.domain_name);
    console.log(this.configuration.global.port_number);
    
    this.api.get_book_details().subscribe((data: any)=>{
      console.log(data);
      console.log(data.name);
      for(var i=0;i<data.name.length;i++)
    {
        console.log(data.name[i]);
    }
    for(var i=0;i<data.name.length;i++)
    {
        console.log(data.name[i].student_name);
    }
    });
  }
  onSubmit(f: NgForm) {
    console.log(f.value.Username, f.value.password);
     //   this.router.navigate(['/bookissue']);
    this.api.login_fun(f.value.Username, f.value.password).subscribe((data: any) => {
       console.log(data);

      // if (data[0].status === 'success')
      // {
      //   this.loggedin = true;
      //   this.loggedinChanged.emit(this.loggedin);
     
      // //  this.router.navigate(['/bookissue']);
      //   //this.router.navigate(['/_uview']);
      //   //this.router.navigate(['/user_add']);
      // }
      // else{
      //   alert('User name or password is wrong!!!');
      // }
    });
    

  }


}
