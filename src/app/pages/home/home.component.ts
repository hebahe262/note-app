import { Component, ElementRef, HostListener, inject, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NotesService } from '../../core/services/notes/notes.service';
import { isPlatformBrowser } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { Inotes } from '../../shared/interfaces/inotes/inotes';

@Component({
  selector: 'app-home',
  imports: [ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {


 _pLATFORM_ID =inject(PLATFORM_ID);
  private readonly _notesService=inject(NotesService);
  private readonly _toastrService=inject(ToastrService);


  NotesData:Inotes[]=[];
noteId:string ='';

 @ViewChild('updateModel')myEle!:ElementRef;

   addForm =new FormGroup({
   
    title:new FormControl(null ,[Validators.required,]),
    content:new FormControl(null ,[Validators.required]),
   

  });


   upDateForm =new FormGroup({
   
    title:new FormControl(null ,[Validators.required,]),
    content:new FormControl(null ,[Validators.required]),
   

  });

  ngOnInit(): void {

    if(isPlatformBrowser(this._pLATFORM_ID)){
      if(localStorage.getItem('userToken')!==null){
        this.getAllUserNotes();
        
      }
    }
    //   this._notesService.getUserNotes().subscribe({


    //     next:(res) =>{
    //     console.log(res);
      
    // },
    // error:(err)=>{
    //   console.log(err);
      
    // },
    //   })
  };

  getAllUserNotes():void{
    this._notesService.getUserNotes().subscribe({

 next:(res) =>{
        console.log(res.notes);
        this.NotesData =res.notes;
      
    },
    error:(err)=>{
      console.log(err);
      if(err.error.msg === 'not notes found'){
        this.NotesData =[];
      }
      
    },

    })
  }





  submitAddForm():void{

    if(this.addForm.valid){
 
      this._notesService.addNewNote(this.addForm.value).subscribe({


       
      next:(res) =>{
        if(res.msg ==='done'){
           console.log(res);
           this.addForm.reset();
           this.getAllUserNotes();
           this._toastrService.success(res.msg,'goodNotes')
           
        }
       
      
    },
    error:(err)=>{
      console.log(err);
      
    },
    })
    }

    else{
      this.addForm.markAllAsTouched();
    }
  }


showModel():void{

const model = this.myEle.nativeElement as HTMLElement;

model.classList.remove('d-none');

}

hideModel():void{


const model = this.myEle.nativeElement as HTMLElement;

model.classList.add('d-none');


}

@HostListener('document:click',['$event']) onClick(e:PointerEvent){

if(  e.target ===  this.myEle.nativeElement){

  this.hideModel();

}

};

// deh be  bt7ot el data function deh
setFormData(note:any, id:string):void{

  this.noteId =id;

  // 3ashan ab3at el atnen dol benhom fe form 3ashan a2der a3del 3lehom
 this.upDateForm.patchValue({
  title:note.title,
  content:note.content,
 })
}

SubmitUpdateForm():void{
 this._notesService.updateUserNotes(this.upDateForm.value, this.noteId).subscribe({


    next:(res) =>{
        
           console.log(res);
           this.upDateForm.reset();//reset ll form
        this.hideModel();
        this.getAllUserNotes();// 3ashan t3rdhaly tany ba3d el update
       
      
    },
   
 })
}

deleteSpecificNote(id:string):void{
 this._notesService.deletUserNotes(id).subscribe({

  next:(res) =>{
        
           console.log(res);
           this.getAllUserNotes();
           
      
    },
 })
}


}
