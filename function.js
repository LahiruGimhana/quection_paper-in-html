



//  $(document).on(
//  function(){
//      var TabId = $(this).attr('data-trigger');
//      $('div#'+TabId+' ').show();
      
//      console.log("Current Tab: " + TabId);
//      currentTab = parseInt(TabId.replace("content", ""));

//      $('.tabcontent:not(#'+TabId+')').hide()

//  });
  
 function next(){
     $("#main").show();
     $("#main2").hide();
     $("#main1").hide();

    
     if(currentTab < 3){
         $(".tabcontent").hide();
         currentTab++;
        //  console.log(currentTab);
         $("#content"+(currentTab)).show();
     }
     else{
        // console.log(currentTab);
        $(".tabcontent").hide();
        currentTab=1;
        // console.log(currentTab);
         $("#content"+(currentTab)).show();
        }  
}

// function next1(){
//     $("#main").show();
//     $("#main2").hide();
//     $("#main1").hide();

   
//     if(currentTab < 3){
//         $(".tabcontent").hide();
//         currentTab++;
//        //  console.log(currentTab);
//         $("#content"+(currentTab)).show();
//     }
//     else{
//        // console.log(currentTab);
//        $(".tabcontent").hide();
//     //    currentTab=1;
//        // console.log(currentTab);
//         $("#content"+(currentTab)).show();
//        }  
// }
  
// function prev(){
//     $("#main").show();
//     $("#main2").hide();
//     $("#main1").hide();

//     if(currentTab > 1){
//         $(".tabcontent").hide();
//         currentTab--;
//         $("#content" + (currentTab)).show();
//     }
//     else{
//         // console.log(currentTab);
//         $(".tabcontent").hide();
//         // currentTab=3;
//         // console.log(currentTab);
//         $("#content"+(currentTab)).show();
//         }    
// }
function prev1(){
    $("#main").show();
    $("#main2").hide();
    $("#main1").hide();

    if(currentTab >= 1){
        $(".tabcontent").hide();
        currentTab;
        $("#content" + (currentTab)).show();
    }
    else{
        // console.log(currentTab);
        $(".tabcontent").hide();
        currentTab=3;
        // console.log(currentTab);
        $("#content"+(currentTab)).show();
        }    
}
    
     
 




function myFuncYes() {
 var x = document.getElementById("msgYes");
 if (x.style.display != "none") {
 x.style.display = "block";
    
    if(currentTab==1){
        console.log("SUCCESS 1");
        document.getElementById("output_yes").innerHTML = "Success1";
    }else if(currentTab==2){
        console.log("SUCCESS 2");
        document.getElementById("output_yes").innerHTML = "success2";
    }else if(currentTab==3){
        console.log("SUCCESS 3");
        document.getElementById("output_yes").innerHTML = "success3";
    }

 } else {
//  x.style.display = "none";
 
 }

 $("#main2").hide();
 $("#main1").show();
 $("#main").hide();
};



function myFuncNo() {
 var x = document.getElementById("msgNo");
 if (x.style.display != "none") {
 x.style.display = "block";
    
    if(currentTab==1){
        console.log("WRONG 1");
        document.getElementById("output_no").innerHTML = "wrong1";
    }else if(currentTab==2){
        console.log("WRONG 2");
        document.getElementById("output_no").innerHTML = "wrong2";
    }else if(currentTab==3){
        console.log("WRONG 3");
        document.getElementById("output_no").innerHTML = "wrong3";
    }
 } else {
//  x.style.display = "none";
 }

 $("#main1").hide();
 $("#main2").show();
 $("#main").hide();
};

