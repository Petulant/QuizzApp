
import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/Observable/interval'


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  Answer: number;
  Answer2:number;
  outcome:number;
  num=0;
  Autumn;
  Winter2;
  Autumn3;
  Spring4;
  Summer5;

  count=0;
  avocado1;
  WaterMelon2;
  Apples3;
  Orange4;

  counter=0;
  one3;
  two4;
  three1;
  Four3;
  Five2;
  six4;
  x;

  Total:number;

timerVar;
// used to display timer in the html page
timerVal;




  Food=[{PicFruits:"../../assets/imgs/Orange.jpg"},{PicFruits:"assets/imgs/avocado.jpg"},
  {PicFruits:"assets/imgs/waterMelon.jpg"},{PicFruits:"assets/imgs/apples.jpg"}]

  Page0=true;
  Page1=false;


  Page2:boolean;
  Page3:boolean;
  Page4:boolean;
  Page5:boolean;
  Page6:boolean;
  Page7:boolean;
 

  checked=true;
  unchecked=false;
  Winter: boolean;
  Summer;
  Spring: boolean;
  Summer2: boolean;
  Autumn2: boolean;
  Spring2: boolean;
  Summer3: boolean;
  Winter3: boolean;
  Spring3: boolean;
  Summer4: boolean;
  Winter4: boolean;
  Autumn4: boolean;
  Winter5: boolean;
  Autumn5: boolean;
  Spring5: boolean;
  Orange1: boolean;
  Apples1: boolean;
  WaterMelon1: boolean;
  avocado2: boolean;
  Orange2: boolean;
  Apples2: boolean;
  avocado3: boolean;
  Orange3: boolean;
  WaterMelon3: boolean;
  avocado4: boolean;
  Apples4: boolean;
  WaterMelon4: boolean;
  one1: boolean;
  one2: boolean;
  one4: boolean;
  two1: boolean;
  two2: boolean;
  two3: boolean;
  three2: boolean;
  three3: boolean;
  three4: boolean;
  Four1: boolean;
  Four2: boolean;
  Four4: boolean;
  Five1: boolean;
  Five3: boolean;
  Five4: boolean;
  six1: boolean;
  six2: boolean;
  six3: boolean;

  
  constructor(public navCtrl: NavController) {
    this.Answer=0;
    this.outcome=0;
    this.Answer2=0;
 
  }

  myButton(){
    this.Answer=1;
    this.num=0;

  }
  
 myResults(){

  //CategoryA Score
  if(this.Autumn==true){
    this.num += 1;  
  }
  
    if(this.Winter2==true){
        this.num += 1;
    }

    if(this.Autumn3==true){
      this.num += 1;
    }

    if(this.Spring4==true){
      this.num += 1;
    }

    if(this.Summer5==true){
      this.num += 1;
    }


    //CategoryB Score

    if(this.avocado1==true){
      this.count +=1;
       }
     
     if(this. WaterMelon2==true){
       this.count +=1;
     }
 
     if(this.Apples3==true){
        this.count +=1;
     }
 
     if(this.Orange4==true){
       this.count +=1;
     }

     console.log(this.avocado1);
     console.log(this.WaterMelon2);
     console.log(this.Apples3);
     console.log(this.Orange4);

     //CategoryC Score
     if(this.one3==true){
      this.counter +=1;
    }
    if(this.two4==true){
      this.counter +=1;
    }

    if(this.three1==true){
      this.counter +=1;
    }
    if(this.Four3==true){
      this.counter +=1;
    }
   
    if(this.Five2==true){
      this.counter +=1;
    }

    if(this.six4==true){
      this.counter +=1;
    }

    console.log(this.Five2);
    console.log(this.one3);
    console.log(this.two4);
    console.log(this.three1);
    console.log(this.Four3);
    console.log(this.six4);

    this.Total= this.num + this.count + this.counter;
    console.log(this.Total);

    if(this.Total>=7){
      alert("You passed your Test")
    }else{
      alert("Sorry you failed the Test");
    }
  
  }
  startButton(){
    this.Page0=false;
    this.Page1=true;
    this.startTimer();
  }
  Next(){
    this.Page1=false;
    this.Page2=true;
  }
  NextPic(){
   this.Page2=false;
   this.Page3=true;

  
  }
  NextPic3(){
    this.Page3=false;
    this.Page4=true;
  }
  NextPics4(){
    this.Page4=false;
    this.Page5=true;
  }
  Nextt(){
    
    this.Page5=false;
    this.Page6=true;
  }
  Nextt2(){
    this.Page6=false;
    this.Page7=true;
    this.timerVar.unsubscribe();
    
  }
  AnswerButt(){
    this.outcome=1;
    console.log(this.outcome);
  }

  myButtonC(){
    this.Answer2=1;
    this.counter=0;
  }
  Goback(){
    this.Page7=false;
    this.Page0=true;
 
 // Reset All the Checkbox
    
  if(this.Summer==this.checked){
    this.Summer=this.unchecked;
  }
  if(this.Winter==this.checked){
    this.Winter=this.unchecked;
  }
  if(this.Autumn==this.checked){
    this.Autumn=this.unchecked;
  }
  if(this.Spring==this.checked){
    this.Spring=this.unchecked;  
  }

  if(this.Summer2==this.checked){
    this.Summer2=this.unchecked;
  }
  if(this.Winter2==this.checked){
    this.Winter2=this.unchecked;
  }
  if(this.Autumn2==this.checked){
    this.Autumn2=this.unchecked;
  }
  if(this.Spring2=this.checked){
    this.Spring2=this.unchecked
  }

  if(this.Summer3==this.checked){
    this.Summer3=this.unchecked;
  }
  if(this.Winter3==this.checked){
    this.Winter3=this.unchecked;
  }
  if(this.Autumn3==this.checked){
    this.Autumn3=this.unchecked;
  }
  if(this.Spring3=this.checked){
    this.Spring3=this.unchecked
  }

  if(this.Summer4==this.checked){
    this.Summer4=this.unchecked;
  }
  if(this.Winter4==this.checked){
    this.Winter4=this.unchecked;
  }
  if(this.Autumn4==this.checked){
    this.Autumn4=this.unchecked;
  }
  if(this.Spring4=this.checked){
    this.Spring4=this.unchecked
  }

  if(this.Summer5==this.checked){
    this.Summer5=this.unchecked;
  }
  if(this.Winter5==this.checked){
    this.Winter5=this.unchecked;
  }
  if(this.Autumn5==this.checked){
    this.Autumn5=this.unchecked;
  }
  if(this.Spring5=this.checked){
    this.Spring5=this.unchecked
  }
   this.num=0;
       //Reset CategoryB
      //  ====================
   if(this.avocado1==this.checked){
     this.avocado1=this.unchecked
   }  
   if(this.Orange1==this.checked){
    this.Orange1=this.unchecked
  }  
  if(this.Apples1==this.checked){
    this.Apples1=this.unchecked
  }                
  if(this.WaterMelon1==this.checked){
    this.WaterMelon1=this.unchecked
  }                              
  if(this.avocado2==this.checked){
    this.avocado2=this.unchecked
  }  
  if(this.Orange2==this.checked){
   this.Orange2=this.unchecked
 }  
 if(this.Apples2==this.checked){
   this.Apples2=this.unchecked
 }                
 if(this.WaterMelon2==this.checked){
   this.WaterMelon2=this.unchecked
 }   
 if(this.avocado3==this.checked){
  this.avocado3=this.unchecked
}  
if(this.Orange3==this.checked){
 this.Orange3=this.unchecked
}  
if(this.Apples3==this.checked){
 this.Apples3=this.unchecked
}                
if(this.WaterMelon3==this.checked){
 this.WaterMelon3=this.unchecked
}  

if(this.avocado4==this.checked){
  this.avocado4=this.unchecked
}  
if(this.Orange4==this.checked){
 this.Orange4=this.unchecked
}  
if(this.Apples4==this.checked){
 this.Apples4=this.unchecked
}                
if(this.WaterMelon4==this.checked){
 this.WaterMelon4=this.unchecked}
 this.count=0;

       //Reset CategoryC
  // =================================
  if(this.one1==this.checked){
    this.one1=this.unchecked
  }
  if(this.one2==this.checked){
    this.one2=this.unchecked
  }
  if(this.one3==this.checked){
    this.one3=this.unchecked
  }
  if(this.one4==this.checked){
    this.one4=this.unchecked
  }
  if(this.two1==this.checked){
    this.two1=this.unchecked
  }
  if(this.two2==this.checked){
    this.two2=this.unchecked
  }
  if(this.two3==this.checked){
    this.two3=this.unchecked
  }
  if(this.two4==this.checked){
    this.two4=this.unchecked
  }

  if(this.three1==this.checked){
    this.three1=this.unchecked
  }
  if(this.three2==this.checked){
    this.three2=this.unchecked
  }
  if(this.three3==this.checked){
    this.three3=this.unchecked
  }
  if(this.three4==this.checked){
    this.three4=this.unchecked
  }
  if(this.Four1==this.checked){
    this.Four1=this.unchecked
  }
  if(this.Four2==this.checked){
    this.Four2=this.unchecked
  }
  if(this.Four3==this.checked){
    this.Four3=this.unchecked
  }
  if(this.Four4==this.checked){
    this.Four4=this.unchecked
  }

  if(this.Five1==this.checked){
  this.Five1=this.unchecked
  }
  if(this.Five2==this.checked){
    this.Five2=this.unchecked
    }
    if(this.Five3==this.checked){
      this.Five3=this.unchecked
      }
      if(this.Five4==this.checked){
        this.Five4=this.unchecked
        }
  if(this.six1==this.checked){
    this.six1=this.unchecked
  }
  if(this.six2==this.checked){
    this.six2=this.unchecked
  }
  if(this.six3==this.checked){
    this.six3=this.unchecked
  }
  if(this.six4==this.checked){
    this.six4=this.unchecked
  }
  this.counter=0;
  this.Total=0;
}
  startTimer(){
    this.timerVar = Observable.interval (1000).subscribe( x =>{
      console.log(x);
      this.timerVal = x;

      if(x==60){
        this.timerVar.unsubscribe()
          alert("Your time is up!!! You Lost")
        }
    })

   }
}

