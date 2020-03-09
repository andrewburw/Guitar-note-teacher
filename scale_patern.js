//*************************************************************
//                    Scale patern generator file
//*************************************************************

let startPositionDsc = 95;
let startPositionAsc = 10;

function showPaternAndTab() {
// button Tab pressed
 $("#hideShwMenuButtn").show();
 $("#musicTeoryTabs").show();

 showScaleMain(); // need this if you press only "Guitar Tab button"

if (patterSelectedNotes.length == 0) {

  window.alert("Pattern set 'Full', please select pattern!")

} else {
$( "#tabBoxer" ).empty()

renderTabAlgorythm(patterSelectedNotes,'1',false);
renderTabAlgorythm(patterSelectedNotes,'2',false);
renderTabAlgorythm(patterSelectedNotes,'3',false);
renderTabAlgorythm(patterSelectedNotes,'4',false);
renderTabAlgorythm(patterSelectedNotes,'5',false);
renderTabAlgorythm(patterSelectedNotes,'6',false);
renderTabAlgorythm(patterSelectedNotes,'7',false);
renderTabAlgorythm(patterSelectedNotes,'8',false);
$( "#tabBoxer" ).append( "<span></span><br />" );
renderTabAlgorythm(patterSelectedNotes,'1',true);
renderTabAlgorythm(patterSelectedNotes,'2',true);
renderTabAlgorythm(patterSelectedNotes,'3',true);
renderTabAlgorythm(patterSelectedNotes,'4',true);
renderTabAlgorythm(patterSelectedNotes,'5',true);
renderTabAlgorythm(patterSelectedNotes,'6',true);
renderTabAlgorythm(patterSelectedNotes,'7',true);
renderTabAlgorythm(patterSelectedNotes,'8',true);


startPositionDsc = 95;
startPositionAsc = 10 ;

  }
}


function renderTabAlgorythm(ids,obsPos,asc_dsc){
  // UI
  $("#hideShwMenuButtn").show();
  $("#musicTeoryTabs").show();

  window.scrollTo(0, 250);

// algoryth generates from note adreses => guitar tabs
//the idea is to start each guitar string from the starting position
//with a modified previous function call

let tabPositionsArray = Array(99);
tabPositionsArray.fill("-", 0, 99);
tabPositionsArray.unshift("|");

  let middle = ids.filter(function(value) { return value[2] === obsPos }).map(function(val){

    return val.length == 6 ? val[4]+val[5]:val[4];
  })//.sort();
middle.sort()

if(asc_dsc){

if (middle.length == 1) {
 tabPositionsArray[startPositionDsc] = middle[0];
 startPositionDsc = startPositionDsc - 3

} else if (middle.length == 2) {

 tabPositionsArray[startPositionDsc] = middle[1];
 tabPositionsArray[startPositionDsc-3] = middle[0];

  startPositionDsc = startPositionDsc - 8

} else if (middle.length == 3) {

  tabPositionsArray[startPositionDsc] = middle[2];
  tabPositionsArray[startPositionDsc-3] = middle[1];
  tabPositionsArray[startPositionDsc-6] = middle[0];

     startPositionDsc = startPositionDsc - 12
} else if (middle.length == 4) {

  tabPositionsArray[startPositionDsc] = middle[3];
  tabPositionsArray[startPositionDsc-3] = middle[2];
  tabPositionsArray[startPositionDsc-6] = middle[1];
  tabPositionsArray[startPositionDsc-9] = middle[0];

     startPositionDsc = startPositionDsc - 16
} else {
  console.warn('Error in renderTabAlgorythm :(');
}
//############
} else {

  if (middle.length == 1) {
   tabPositionsArray[startPositionAsc] = middle[0];
   startPositionAsc = startPositionAsc + 3

  } else if (middle.length == 2) {

   tabPositionsArray[startPositionAsc] = middle[1];
   tabPositionsArray[startPositionAsc+3] = middle[0];

    startPositionAsc = startPositionAsc + 8

  } else if (middle.length == 3) {

    tabPositionsArray[startPositionAsc] = middle[2];
    tabPositionsArray[startPositionAsc+3] = middle[1];
    tabPositionsArray[startPositionAsc+6] = middle[0];

       startPositionAsc = startPositionAsc + 12
  } else if (middle.length == 4) {

    tabPositionsArray[startPositionAsc] = middle[3];
    tabPositionsArray[startPositionAsc+3] = middle[2];
    tabPositionsArray[startPositionAsc+6] = middle[1];
    tabPositionsArray[startPositionAsc+9] = middle[0];

  startPositionAsc = startPositionAsc + 16
  } else {
    console.warn('Error in renderTabAlgorythm :(');
  }


}

$( "#tabBoxer" ).append( "<span>"+ tabPositionsArray.join("") + "</span><br />" );


}
