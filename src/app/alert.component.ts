import { Component, Input, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';


@Component({
    selector:'alert-selector',
    templateUrl:'./alert.component.html'
})
export class AlertComponent implements OnInit{

        constructor(@Inject(MAT_DIALOG_DATA) public data: any ){
            
        }
        
        ngOnInit(){
                
        }
        ngOnDestroy(){
            
        }
    errorRecived:string;
}
