import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule} from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import { MatCardModule} from '@angular/material/card';

const MaterialComponents=[
  MatButtonModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    
  ],
  exports:[
    MatButtonModule,
    MatIconModule
  ]
})
export class MaterialModule { }
