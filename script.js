/*
const init = function (){
    document.getElementById('btn-reset').addEventListener('click',reset);
    document.getElementById('btn-send').addEventListener('click',send);
} ;


const reset = function (ev){
    ev.preventDefault();
    document.getElementById('form1').reset();
}

const send = function (ev){
    ev.preventDefault();
    ev.stopPrepagation();
    let ret = validate();
    if(ret){
        document.getElementById('form').submit(); 
        alert('good');
    }
}

document.addEventListener('DOMContentLoaded',init);*/
var gflag=false;

function myalert(m,o) {
    if (gflag) {
        return;
    }

    gflag=true;
    alert(m);
    o.focus();
    setTimeout(function() {gflag=false;},10);
}


var a = document.getElementById('btn-submit');
var list = document.getElementsByTagName('input');
document.getElementById('btn-submit').addEventListener("click",function(e){
    var list = document.getElementsByTagName('input');

    if (list[0].value === ""||list[1].value === ""||list[2].value === ""||list[3].value === ""||list[4].value === ""){
        alert('all field required!');
        e.preventDefault();
        
    }
    else if ((/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(list[3].value)===false)&&(list[0].value !== ""&&list[1].value !== ""&&list[4].value !== ""&&list[3].value !== "")){
        alert ('password most contain at least 8 character have a capitale letter and a combination of character and numbers');
        e.preventDefault();
       }
        else if( (/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]+[a-z]{2})*$/.test(list[2].value)===false)&&(list[0].value !== ""&&list[1].value !== ""&&list[4].value !== ""&&list[2].value!=="")){
        alert('Plz! enter a valid email adresse');
        e.preventDefault();
   }
   else {
    var r = confirm("Do you really want to submit your data!");
    if (r == true) {
        e.preventDefault();
        document.getElementById('demo').style.visibility='visible';
        document.getElementById('form-group').style.visibility='hidden';
    } else{
        document.getElementById('form-group').style.visibility='visible';
    }
   }
  
       

});


    list[0].addEventListener("blur",function(e){
        if (list[0].value ==""){
            myalert('username required',this);
            
        }
        });
        
        list[1].addEventListener("blur",function(){
 
            if (list[1].value ==""){
                myalert('adresse required',this)
  
              } 
             
        
            });
        
            list[2].addEventListener("blur",function(){
                if (list[2].value ==""){
                    myalert('email required',this);
   
                  }  else if (/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]+[a-z]{2})*$/.test(list[2].value)===false){
                       alert('Plz! enter a valid email adresse');
     
                  }
                 
            
                });
              
        
                list[3].addEventListener("blur",function(){
                    if (list[3].value ==""){
                        myalert('password required');
                     }
                      else if ((list[3].value.length < 8) && (/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(list[3].value)===false)){
                        alert ('password most contain at least 8 character have a capitale letter and a combination of character and numbers');
                       }
                      
                    
                
                    });

                    list[4].addEventListener("blur",function(){
                        if (list[4].value ==""){
                            myalert('comment required');
                        

                          } 

                        });
                       
                        
         
            
                    