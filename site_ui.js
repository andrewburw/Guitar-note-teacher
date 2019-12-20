$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
  });

function show_hide_gird(obj){

  $(obj).toggleClass("btn_f");
    $("#guit_gird").toggle();
}

function hidShowMenusFunc(arg) {

if (arg == 'hide') {
$("#turrOffMenus, #musicTeoryForm").hide();
$("#showShwMenuButtn").show();

} else {

$("#turrOffMenus, #musicTeoryForm").show();
$("#showShwMenuButtn").hide(); 
}





}
