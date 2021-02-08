"use strict";


init();

function init () {
    document.querySelector("#genes").addEventListener("click" , read);
    


}


function read () {
    const gener = document.querySelector("#outputBox").value ;
    let firstcheck = document.querySelector("#sentence").value.replaceAll("  ", " ").replaceAll("   ", " ").replaceAll("    ", " ") ;
    let theIn = firstcheck.trim() ; 
    console.log(theIn);

    if ( gener === "firstNameUp") {
        console.log("it works");
        let li = document.createElement("li");
        li.textContent = theIn.toUpperCase()[0] + theIn.substring(1)  ;
        console.log(li);
        show(li);

    } else if ( gener === "fullName" ) {
        let li = document.createElement("li");
        li.textContent = theIn.split(" ")[0] ;
        console.log(li);
        show(li);
    } else if ( gener === "fullNameL" ) {
        let fstname = theIn.split(" ")[0];
        let li = document.createElement("li");
        li.textContent = " the lenght of the first name is :" + fstname.length  ;
        console.log(li);
        show(li);
    } else if ( gener === "midllNameP" ) {
        let scndname = theIn.split(" ")[1];
        let li = document.createElement("li");
        li.textContent = " the midlle : "+ scndname+ " name starts at : " + theIn.indexOf(scndname) + " and finishes at : " + (theIn.lastIndexOf(scndname)+ scndname.length -1) ;
        console.log(li);
        show(li);
    } else if ( gener === "fileName" ) {
        let typ1 = theIn.endsWith(".jpg") ;
        let typ2 = theIn.endsWith(".png") ;
        if ( typ1 == true){
            let li = document.createElement("li");
            li.textContent = "this document is a jpg" ;
            console.log(li);
            show(li);
        } else if ( typ2 == true) {
            let li = document.createElement("li");
            li.textContent = "this document is a png" ;
            console.log(li);
            show(li);
        }

    } else if ( gener  === "pass" ) {
        let li = document.createElement("li");
        console.log("hahahahahahhag");
        let pswrd = theIn.length ; 
        for ( pswrd == 0 ; pswrd-- ; ) {
              console.log(pswrd);
              li.textContent += "*" ; 
              console.log(li);
              if (pswrd == 0 ) {
                show(li);
              }  
           }    
    } else if ( gener  === "any1" ) {
        let li = document.createElement("li");
        li.textContent = theIn.substring(0,2) + theIn.toUpperCase()[2] + theIn.substring(3); ;
        console.log(li);
        show(li);


    } else if ( gener  === "any2" ) {
          
    }

}


function show (li) {
        document.querySelector("#output").appendChild(li);
        document.querySelector("#output").scrollBy(0 , 4454545454545); 
   
}
