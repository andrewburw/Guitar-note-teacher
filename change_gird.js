/**
 * this file with functions for change guitar gird from 8 to 7 or 6 string guit_gird
 * and shift notes
 */

 // def parametrs for string gird
const strg_arr = [".string_gird7",".string_gird6",".string_gird5",".string_gird4",".string_gird3",".string_gird2",".string_gird1"];
const def_y1 = [206.44,188.18,168.86,150.86,133.54,115.42,94.66];
const def_y2 = [189.04,173.97,161.96,147.07,136.11,123.95,111.5];

// def parametrs for "machine heads x y"
const strg_head_arr = ['#mhead7','#mhead6','#mhead5','#mhead4','#mhead3','#mhead2','#mhead1'];
const str_def_y1 = [239.29,224.51,212.87,92.46,74.93,70.64,66.8];
const str_def_y2 = [189.8,175.02,163.38,147.07,135.91,124.41,109.41];


const strg_head_arr_txt = ['#mhead7Name','#mhead6Name','#mhead5Name','#mhead4Name','#mhead3Name','#mhead2Name','#mhead1Name'];
const strg_head_trans = ['184.2 251.67','130.28 236.89','74.61 225.25','41.18 86.66','119.41 70.35','184.2 65.35','248.84 65.35'];

let selectedGrid = false;



function change_strings(argg) {

if (argg == 6 && selectedGrid !== true) {

    $( "#menuChangeStrings6" ).addClass("disabled");
    $( "#menuChangeStrings7" ).addClass("disabled");
    //$( "#menuChangeStrings7" ).prop( "disabled", false );


    $(".string_gird8").hide();
    $(".string_gird7").hide();
    $("#how_much_string").text("6");
    $("#tuneShow").text("Standart(E-A-D-G-B-E)");
    remove_notes(7);
    remove_notes(8);
    shift_All_notes(6)

  selectedGrid = true;
// if selected 6 string guitar shift strings:
  //string 6:
  shiftPosition ([".string_gird6"],30,'line','y1');
  shiftPosition ([".string_gird6"],20,'line','y2');
  //string 5:
  shiftPosition ([".string_gird5"],23,'line','y1');
  shiftPosition ([".string_gird5"],14,'line','y2');
  //string 4:
  shiftPosition ([".string_gird4"],18,'line','y1');
  shiftPosition ([".string_gird4"],13,'line','y2');
  //string 3:
  shiftPosition ([".string_gird3"],12,'line','y1');
  shiftPosition ([".string_gird3"],12,'line','y2');
  //string 2:
  shiftPosition ([".string_gird2"],8,'line','y1');
  shiftPosition ([".string_gird2"],9,'line','y2');

  //string 1:
  shiftPosition ([".string_gird1"],4,'line','y1');
  shiftPosition ([".string_gird1"],7,'line','y2');

// ***********************************************************************


// genIds(string,from,to) <- function generator of ID



shift_Translate (genIds(1,0,24),5); //correction of note names
shift_Translate (genIds(2,0,24),7);
shift_Translate (genIds(3,0,24),12);

shift_Translate (['#S4L0'],12);
shift_Translate (genIds(4,1,5),14);
shift_Translate (genIds(4,6,24),16);


shift_Translate (['#S5L0'],15);
shift_Translate (genIds(5,1,5),17);
shift_Translate (genIds(5,6,13),19);
shift_Translate (genIds(5,14,24),20);


shift_Translate (['#S6L0'],21);
shift_Translate (genIds(6,1,5),23);
shift_Translate (genIds(6,6,13),25);
shift_Translate (genIds(6,14,24),27);

// shift string names  and "Machine heads"

// string 6 head shift
  shiftPosition (["#mhead6"],33,'line','y1');
  shiftPosition (["#mhead6"],20,'line','y2');
  shift_Translate (['#mhead6Name'],30);

// string 5 head shift
shiftPosition (["#mhead5"],17,'line','y1');
shiftPosition (["#mhead5"],14,'line','y2');
shift_Translate (['#mhead5Name'],12);
// string 4 head shift
  shiftPosition (["#mhead4"],10,'line','y1');
  shiftPosition (["#mhead4"],13,'line','y2');
  shift_Translate (['#mhead4Name'],11);
// string 3 head shift
shiftPosition (["#mhead3"],13,'line','y1');
shiftPosition (["#mhead3"],12,'line','y2');
shift_Translate (['#mhead3Name'],11);
// string 2 head shift
  shiftPosition (["#mhead2"],13,'line','y1');
  shiftPosition (["#mhead2"],12,'line','y2');
  shift_Translate (['#mhead2Name'],13);
  // string 1 head shift
shiftPosition (["#mhead1"],2,'line','y1');
shiftPosition (["#mhead1"],10,'line','y2');
shift_Translate (['#mhead1Name'],2);



} else if (argg == 7 && selectedGrid !== true) {

  $( "#menuChangeStrings6" ).addClass("disabled");
  $( "#menuChangeStrings7" ).addClass("disabled");

// if selected 7 string guitar shift strings:


  $(".string_gird8").hide();
  $("#how_much_string").text("7");
  $("#tuneShow").text("Standart(B-E-A-D-G-B-E)");
  remove_notes(8);
  shift_All_notes(8)

selectedGrid = true;
//string 7:
shiftPosition ([".string_gird7"],14,'line','y1');
shiftPosition ([".string_gird7"],7,'line','y2');

//string 6:
shiftPosition ([".string_gird6"],11,'line','y1');
shiftPosition ([".string_gird6"],7,'line','y2');

//string 5:
shiftPosition ([".string_gird5"],8,'line','y1');
shiftPosition ([".string_gird5"],7,'line','y2');

//string 4:
shiftPosition ([".string_gird4"],5,'line','y1');
shiftPosition ([".string_gird4"],7,'line','y2');
//string 3:
shiftPosition ([".string_gird3"],5,'line','y1');
shiftPosition ([".string_gird3"],5,'line','y2');
//string 2:
shiftPosition ([".string_gird2"],5,'line','y1');
shiftPosition ([".string_gird2"],5,'line','y2');
//string 1:
shiftPosition ([".string_gird1"],5,'line','y1');
shiftPosition ([".string_gird1"],5,'line','y2');

//*************************************************************************



  shift_Translate (genIds(1,0,24),5);
  shift_Translate (genIds(2,0,24),5);
  shift_Translate (genIds(3,0,24),5);
  shift_Translate (genIds(4,0,24),5);

  shift_Translate (genIds(5,0,7),5);
  shift_Translate (genIds(5,8,24),7);


  shift_Translate (genIds(6,0,7),6);
  shift_Translate (genIds(6,8,24),10);


  shift_Translate (genIds(7,0,7),9);
  shift_Translate (genIds(7,8,24),13);
// ************* shift machine heads *************************************



// shift string names  and "Machine heads"
// string 7 head shift
  shiftPosition (["#mhead7"],5,'line','y1');  // down
  shiftPosition (["#mhead7"],8,'line','y2'); // up
  shift_Translate (['#mhead7Name'],5);
// string 6 head shift
  shiftPosition (["#mhead6"],10,'line','y1');
  shiftPosition (["#mhead6"],8,'line','y2');
  shift_Translate (['#mhead6Name'],10);

// string 5 head shift
shiftPosition (["#mhead5"],4,'line','y1');
shiftPosition (["#mhead5"],5,'line','y2');
shift_Translate (['#mhead5Name'],5);

// string 4 head shift
shiftPosition (["#mhead4"],4,'line','y1');
shiftPosition (["#mhead4"],5,'line','y2');
shift_Translate (['#mhead4Name'],3);
// string 3 head shift
shiftPosition (["#mhead3"],8,'line','y1');
shiftPosition (["#mhead3"],5,'line','y2');
shift_Translate (['#mhead3Name'],5);
// string 2 head shift
shiftPosition (["#mhead2"],8,'line','y1');
shiftPosition (["#mhead2"],5,'line','y2');
shift_Translate (['#mhead2Name'],5);
// string 1 head shift
shiftPosition (["#mhead1"],3,'line','y1');
shiftPosition (["#mhead1"],5,'line','y2');
//shift_Translate (['#mhead1Name'],5);




}



}


// ============== end change strings ========================================
// ==========================================================================


function remove_notes(arg) {
  for (var i = 0; i < 25; i++) {
    d3.select("#S" + arg + "L" + i + "").remove();
  }

}

function setDefault8() {
// return to default 8 strnig position
    selectedGrid = false;

    $( "#menuChangeStrings6" ).removeClass("disabled");
    $( "#menuChangeStrings7" ).removeClass("disabled");

  d3.select(".container1").selectAll("g").remove();
  render()
  renderNotesOnGird();

 // set strings back

shiftPosition(["#S1L12"],0,'ellipse',"cy",'y12',def_y1,def_y2,strg_arr);

// set machine head name lines Black

shiftPosition(["#S1L12"],0,'ellipse',"cy",'y12',str_def_y1,str_def_y2,strg_head_arr);
shiftPosition(["#S1L12"],0,'ellipse',"cy",'trans',strg_head_trans,null,strg_head_arr_txt);// set translate of text


  $(".string_gird7").show();
  $(".string_gird8").show();


}
//-------------- shift notes part -------------------------------------------
function shift_All_notes(arg){

  if(arg == 8) {


shiftPosition  (genIds(1,0,24),5,'ellipse','cy');
shiftPosition  (genIds(2,0,24),5,'ellipse','cy');
shiftPosition  (genIds(3,0,24),5,'ellipse','cy');
shiftPosition (genIds(4,0,24),5,'ellipse','cy');

shiftPosition (genIds(5,0,7),5,'ellipse','cy');
shiftPosition  (genIds(5,8,24),7,'ellipse','cy');


shiftPosition  (genIds(6,0,7),6,'ellipse','cy');
shiftPosition  (genIds(6,8,24),10,'ellipse','cy');


shiftPosition  (genIds(7,0,7),9,'ellipse','cy');
shiftPosition  (genIds(7,8,24),13,'ellipse','cy');

} else {

   // --------------- 6 string choosen
//shiftPosition(arrOfIDs,shiftStep,figure,elArg
//genIds(string,from,to)


// shift notes on gird
shiftPosition (genIds(1,0,24),5,'ellipse','cy');
shiftPosition (genIds(2,0,24),7,'ellipse','cy');
shiftPosition (genIds(3,0,24),12,'ellipse','cy');

shiftPosition (['#S4L0'],12,'ellipse','cy');
shiftPosition (genIds(4,1,5),14,'ellipse','cy');
shiftPosition (genIds(4,6,24),16,'ellipse','cy');


shiftPosition (['#S5L0'],15,'ellipse','cy');
shiftPosition (genIds(5,1,5),17,'ellipse','cy');
shiftPosition (genIds(5,6,13),19,'ellipse','cy');
shiftPosition (genIds(5,14,24),20,'ellipse','cy');


shiftPosition (['#S6L0'],21,'ellipse','cy');
shiftPosition (genIds(6,1,5),23,'ellipse','cy');
shiftPosition(genIds(6,6,13),25,'ellipse','cy');
shiftPosition (genIds(6,14,24),27,'ellipse','cy');

}


}


// ----------------------------------------------------------------
// --------------------------- 2019 -------------------------------
//-----------------------------------------------------------------

// 2019 new concept is not to use one function with billion parameters and functions inside, but use one function with 10 or ... calls of it with shift parameters
// i think its beter way to understand wath code does after year

function genIds(string,from,to){
  //function generates string adreses #S1L12
  let arr = [];
  for (var i = from; i <= to; i++) {arr.push("#S"+string+"L"+i)}
    return arr;
}


function shift_Translate (arrOfIDs,shiftStep){

  // notes between is range of notes correction
  // idea is to not use arrays with notes ID, but generate range of shift on gird  by "function genId"

    $.each(arrOfIDs, function(i, l) {
      let transLate = d3.select(l).select("text").attr("transform");
      let textParamTranslate = transLate.substring(transLate.indexOf("(")+1, transLate.indexOf(")")).split(" "); // get translate paramets
       d3.select(l).select("text")
          .attr("transform", "translate("+ Number(textParamTranslate[0]) + " " + (Number(textParamTranslate[1])+shiftStep) +")")


    });

}
//-------------------------------------------------------
function shiftPosition(arrOfIDs,shiftStep,figure,elArg) {
// shift elements universal function

   $.each(arrOfIDs, function(i, l) {

      let dataCy = d3.select(l).select(figure).attr(elArg);

          d3.select(l).select(figure)
            .attr(elArg, Number(dataCy) + shiftStep);

   });

// hidden function to get back parametrs through array of default param. x y and translate
if (arguments[4] === 'y12') {

 let arr1 = arguments[5];
 let arr2 = arguments[6];

  $.each(arguments[7], function(i, l) {
    d3.select(l).select("line")
      .attr("y1", Number(parseFloat(arr1[i])))
      .attr("y2", Number(parseFloat(arr2[i])))

  });

} else if (arguments[4] === 'trans') {
 // translate shift back
  let arr1 = arguments[5];

  $.each(arguments[7], function(i, l) {
     d3.select(l).select("text")
        .attr("transform", "translate("+ arr1[i] + ")" );
    });
  }


}
