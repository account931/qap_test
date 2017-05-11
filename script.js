$(document).ready(function(){
 
// Toogle  2  forms
//--------------------------
$("#butt1").on("click",function(){
  $("#form1").hide(1000);
  $("#form2Wrap").show(1000);
     //dispaly  array
       displayArray();
       

});

$("#butt2").on("click",function(){
  $("#form2Wrap").hide(1000);
  $("#form1").show(1000);
});
// END  Toogle  2  forms



//-------------------------------------
  /*$("#form1").on("swipe",function(){
 alert('j');
    //$("span").text("Swipe detected!");
  }); */
 



//not  used
//----------------------------------------------------------------
/*function showOrHide(cb) {  // argument  is  an id 
    alert('gg');
    cb = document.getElementById(cb);
    if (cb.checked) {
              var c= document.getElementById(cb).value;
              alert(c);
             //add value  to  array 
            // resulted.push(c);
                                }
  } */
//********************************************************************************





// **************************************************************************************
// **************************************************************************************
// **                                                                                  **
// **
//  WORKING!!!!!!!!!!!!!!!!!!!!!!
//while  clicked checkbox adding  to  array
//---------------------------
var vehicles = []; // array  for   all values;
$('input[name=vehicle]').click(function(){ //alert("ggg"); 
     
    if(this.checked) { // if  the check is  not  placed
    
    var bb=$(this).val();//alert("You  selected  "+bb);//just   for  testing
    vehicles.push($(this).val()); alert("Now  array  contains:  "+vehicles );//adds  to  array

    //$('input[name=vehicle]').removeAttr('checked');//????
    $(this).attr('checked', true);//???????/
    //ifAllCkecked();//  fuction to  check  if  all  are  checked  and  change  CheckAll button
       // displayArray();
}else{ // if  u uncheck it
var aa=$(this).val(); //value
var position = vehicles.indexOf(aa); //alert(position);// search  the  index of  specified  value
vehicles.splice(position,1);// erase  the  last added  array  element 
//vehicles.splice(-1,1);// erase  the  last added  array  element 
alert('This element ( '+aa+' )  has  beee erased  from array');
}// END if(this.checked
ifAllCkecked();
});
//-----------------------------------------------
// **                                                                                  **
// **                                                                                  **
// **************************************************************************************
// **************************************************************************************





//  DELETING ITEMS from  FORM 2 
// **************************************************************************************
// **************************************************************************************
// **                                                                                  **
// **

// WORKS
$(function() {
$(document).on("click", '.deleteItem', function() {
  var id =(this.id); //alert(id);
  //delete vehicles[id];
//removing checked  status in form1  if  deleted  in form 2 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 //1.  get the  value  of  array index (var id); // this p  value;
 //2. select $    +give  it  atrribute  unchecked ; |  $ ('input[value="something"]').removeAttr('checked');  |;
 var delValue=$(this).prev().text(); /*delValue=(delValue.split(' ').join(''));*/ alert(delValue); // gets  the  value of  deleted in form 2  item 
         $("input:checkbox[value=delValue]").removeAttr('checked');//  stopped  here!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1
//$("#form1 input[type=checkbox]").removeAttr('checked'); //  it  works  if  u place  explicit  value (i.e Number1.4)


  vehicles.splice(id,1);//  delete  1  element  at  specified  position;
  displayArray();
    //alert("You have just clicked on ");
});
  });
// end  works


// End  deleting  from array----------
// **                                                                                  **
// **                                                                                  **
// **************************************************************************************
// **************************************************************************************








//Function  to  display array (triggered  on 2nd  page click &  after  each  items  deleting(on 2nd  page ))
// **************************************************************************************
// **************************************************************************************
// **                                                                                  **
// **
//******
function displayArray(){
     //display  array
// if  exists  array checkedValuesArr of CheckAll  button. If yes assigned it  to maun array
//if (typeof checkedValuesArr!== 'undefined' && checkedValuesArr.length > 0) {alert(" No exist");}else {alert("exist!!!");}//Dos not  work properly!-TRANSFER IT to CheckAll/Uncheck  section  !!!!!!!!!!!!!!!!!!!!!!!!!
//

var newHTML = [];
for (var i = 0; i < vehicles.length; i++) {
    newHTML.push('<p class="resultArray"><span>' + vehicles[i] +'</span>  '+  '<span class="deleteItem" id="'+[i]+'">' + '<img src="images/delete2.png"/></span></p>');
}

$(".resultMy").html(newHTML.join(""));

    /* for (var i = 0; i < vehicles.length; i++) {
    $(".resultMy").append('<p>' + vehicles[i] + '</p>');
}*/

}
//-------------------------------------------------------

// **                                                                                  **
// **                                                                                  **
// **************************************************************************************
// **************************************************************************************




// CheckAll/ UncheckAlll button -Working!!!!!!!
// **************************************************************************************
// **************************************************************************************
// **                                                                                  **
//  SELECT ALL
$('#checkButton').click(function(event) {  //on click 
         $buttonVal=$("#checkButton").val();//alert($buttonVal);
        //if u click "Check all"
        if($buttonVal=="Check"){
           $("#checkButton").fadeOut("slow", function(){
                                           $("#checkButton").val("Uncheck").css("background","red");;
                                                                                        }).fadeIn("slow");
           //$("#checkButton").val("Uncheck");  $("#checkButton").css("background","red");
 $("#form1 input[type=checkbox]").prop('checked','checked');//change atributes  to  checked
//TEMPORARY KILLED
    var checkedValuesArr = $('input:checkbox:checked').map(function() {  // var checkedValues=array  with all values;
    return this.value;
             }).get();
vehicles=checkedValuesArr ; //works;

          
           /*$("#d1 input[type=checkbox]").each(function () {
                $(this).attr("checked", true);
            });*/
                                }// end if($buttonVal=="Check all";)
           else if($buttonVal=="Uncheck"){
$("#form1 input[type=checkbox]").removeAttr('checked');
checkedValuesArr=[];vehicles=[];
//checkedValuesArr.splice(0,checkedValuesArr.length);//checkedValuesArr=[];//delete checkedValuesArr;// TEMPOPARY, cuases  problem!!!!!!!!!!!!!!!! ;//
checkedValuesArr=vehicles;//???????
/*$("#d1 input[type=checkbox]").each(function () {
                $(this).attr("checked",false);
            });*/
//$("#checkButton").val("Check");$("#checkButton").css("background","grey");//substituted
$("#checkButton").fadeOut("slow", function(){
                                           $("#checkButton").val("Check").css("background","grey");
                                                                                        }).fadeIn("slow");
                           }// end  else
        /*}else{
            $('.checkbox1').each(function() { //loop through each checkbox
                this.checked = false; //deselect all checkboxes with class "checkbox1"                       
            });         
        }*/
    });

// **                                                                                  **
// **                                                                                  **
// **************************************************************************************
// **************************************************************************************








// Focusing => (shifting  dots)
// **************************************************************************************
// **************************************************************************************
// **                                                                                  **
/*function dotChange(d1,d2,d3,d4){
$(d1).on("click",function(){
$('d1).hide().html("&#x25C9;").fadeIn('slow');
$(d2).hide().html("").fadeIn(1500);
$(d3).hide().html("").fadeIn(1500); //  original small dot "&#9679;"   //  last(white circle)=&#x25CE;
});
}*/
// end  function 


$("#d1").on("click",function(){
$('#dot1').hide().html("&#x25C9;").fadeIn('slow');
//$("#dot1").html('&#x25C9;');
$('#dot2').hide().html(".").fadeIn('slow');
$('#dot3').hide().html(".").fadeIn('slow'); //  original small dot "&#9679;"   //  last(white circle)=&#x25CE;
});

$("#d2").on("click",function(){
$('#dot2').hide().html("&#x25C9;").fadeIn('slow');
//$("#dot2").html('&#x25C9;');
$("#dot1").html('.');
$("#dot3").html('.');
});

$("#d3").on("click",function(){
$('#dot3').hide().html("&#x25C9;").fadeIn('slow');
//$("#dot3").html('&#x25C9;');
$("#dot1").html('.');
$("#dot2").html('.');
});

/*
$("*").not("#d1,#d2,#d3").on("click",function(){
$("#dot3").html('');
$("#dot1").html('');
$("#dot2").html('');
});*/


// **                                                                                  **
// **                                                                                  **
// **************************************************************************************
// **************************************************************************************




// **************************************************************************************
// **************************************************************************************
// **                                                                                  **

// fuction to  check  if  all  are  checked  and  change  CheckAll button //works ;
function ifAllCkecked(){
if
($('input[name=vehicle]:checked').length == $('input[name=vehicle]').length)
{//alert("all")
$("#checkButton").val("Uncheck");  $("#checkButton").css("background","red");
}
else if($('input[name=vehicle]:checked').length<$('input[name=vehicle]').length){$("#checkButton").val("Check");  $("#checkButton").css("background","grey");}

}
// **                                                                                  **
// **                                                                                  **
// **************************************************************************************
// **************************************************************************************





/*
	
Pass data using Session Storage or Local Storage: (basic example)

You can pass data from one page to the next using sessions storage. Alternatively you can also use local storage which behaves in similar fashion. Except local storage will not be cleared when the session is closed.

For local storage just replace sessionStorage with localStorage.

Array to store:

var testArray = ['test'];
Storing the Array:

$('#store').on('click', function(){
    sessionStorage.setItem('myArray', testArray);
});
Getting the Array:

$('#get').on('click', function(){
    var myArray = sessionStorage.getItem('myArray');
    alert(myArray);
});
Clearing the Session Storage:

$('#clear').on('click', function(){
    sessionStorage.clear();
});
*/







                     
});// doc ready
