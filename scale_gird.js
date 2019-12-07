// ***********************************************************
// This codefile is for showing diferent scales on gird.
// ***********************************************************

let scalesFormulas = [
     {
      name:"Major",
      formula:['W','W','H','W','W','W','H']


},{
 name:"h_minor",
 formula:['W','H','W','W','H','','','H']


},{
 name:"m_minor_asc",
 formula:['W','H','W','W','W','W','H']


},{
 name:"m_minor_dsc",
 formula:['W','H','W','W','H','W','W']


},{
 name:"w_tone",
 formula:['W','W','W','W','W','W','W']


},{
 name:"penta_major",
 formula:['W','W','','W','W','','W']


},{
 name:"penta_minor",
 formula:['','','H','W','W','','W']


},{
 name:"penta_blues",
 formula:['','','H','W','H','H','','','H']


},{
 name:"penta_minor",
 formula:['','','H','W','W','','W']


},{
 name:"penta_neutral",
 formula:['W','','W','W','','','H']


},{
 name:"Octa_h_w",
 formula:['H','W','H','W','H','W','H']


},{
 name:"Octa_w_h",
 formula:['W','H','W','H','W','H','W']


},{
 name:"ionian",
 formula:['W','W','H','W','W','W','H']


},{
 name:"dorian",
 formula:['W','H','W','W','W','H','W']


},{
 name:"phrygian",
 formula:['H','W','W','W','H','W','W']


},{
 name:"lydian_augment",
 formula:['W','W','W','W','H','W','W']


},{
 name:"lydian_minor",
 formula:['W','W','W','H','H','W','W']


},{
 name:"lydian_dim",
 formula:['W','H','','','H','H','W','W']


},{
 name:"mixolydian",
 formula:['W','W','H','W','W','H','W']


},{
 name:"aeolian",
 formula:['W','H','W','W','H','W','W']


},{
 name:"locrian",
 formula:['H','W','W','H','W','W','W']


},{
 name:"bebop_maj",
 formula:['W','W','H','W','H','H','W']


},{
 name:"bebop_min",
 formula:['W','H','H','H','W','W','H']


}]
//[8,1,5,10,3,8,1,6]

const patternStartNotes = [8,1,5,10,3,8,1,6]; // start positions for note "C"
const noteFormulas = [{
   name: 'C',
   formula:0

},{
  name: 'C#',
  formula: 1
},{
  name: 'D',
  formula: 2
},{
  name: 'D#',
  formula: 3
},{
  name: 'E',
  formula: 4
},{
  name: 'F',
  formula: 5
},{
  name: 'F#',
  formula: 6
},{
  name: 'G',
  formula: 7
},{
  name: 'G#',
  formula: 8
},{
  name: 'A',
  formula: 9
},{
  name: 'A#',
  formula: 10
},{
  name: 'B',
  formula: 11
}];
//**************************************************************
//                        The main scale generator
//**************************************************************
function scaleGenerator(pattern_s,chord_s,scale_s) {
  clear_all();
  $(".displayNONE1").hide(); // hide all notes on gird


    let formulaBin = [true];
    let generatorResultArray = [];



function filterIt(arr,searchKey) {
  // search function in scalesFormulas
    return   arr.find(function(val){
      return  val.name === searchKey;

     });
}



    $.each(filterIt(scalesFormulas,scale_s).formula, function(i, l) {
      // generate patern by true/false
        if(l == 'W'){
          formulaBin.push(false);
          formulaBin.push(true);
        }else if (l == '') { // need this part if two 'whole' go in a row
          formulaBin.push(false);

       } else {
          formulaBin.push(true);
      }

    });

// array is default start patern positions in note 'E' but other notes taken by math
  $.each(selectedNote(chord_s),function a(i,val) {

     sortIdis(val,i+1)

});
//********************************************************

function selectedNote(chord) {

      return patternStartNotes.map(function(val){

         return val + filterIt(noteFormulas,chord).formula > 12 ? (val + filterIt(noteFormulas,chord).formula) - 12 : val + filterIt(noteFormulas,chord).formula;

});

}

//********************************************************

function sortIdis(prm,string) {

    $.each(genIds(string,prm,prm+12),function a(i,val) {
 // filter adresses by generated pattern
    if(formulaBin[i] === true){
       generatorResultArray.push(overflowIdsOver12Fret(val))
    }
  });
}

function overflowIdsOver12Fret(val) {
//  checking adress val - 12
// #S4L12
let data = val.split('');
let result = null;

    if(data.length == 6 && Number(data[4] + data[5]) > 11 ){
     let temp =  Number(data[4] + data[5]) - 12
     result = data.join('').slice(0, 4) + temp
   } else {
     result = val;
   }
   return result;
}

//console.log( generatorResultArray);
return generatorResultArray;



}
//**************************************************************
//                     END SCALE GENERATOR
//**************************************************************


function showMusicTeory() {
   clear_all();
  $("#musicTeoryForm").toggle();
  $(".displayNONE1").hide(); // hide all notes on gird
}
// main FUNCTION controled by GET button
function showScaleMain() {
// button GET pressed
let patternS = $("#selectScalePattern").val();
let chordS =  $("#selectScaleChords").val();
let scaleS =  $("#selectScaleScale").val();

  showScaleNotesOngird(scaleGenerator(patternS,chordS,scaleS));
}




// function of showing IDis
function showScaleNotesOngird(arrOfIDs) {
 shiftForOneOctave(arrOfIDs);
  $.each(arrOfIDs, function(i, l) {
     $(l).show();
  });

}
//************************************************************
//                    SHIFT FOR ONE OCTAVE + 23 - 24
//************************************************************

function shiftForOneOctave(arrOfIds) {
// #S1L12

  //let temp = []
  $.each(arrOfIds, function(i, l) {

       let ids = l.split('');
        fret23_24(l); // function adding last two frets

if (l.length == 6) {

     ids[4] = Number(ids[4] + ids[5]) + 12;
     ids.pop();
     $(ids.join('')).show();

} else {


  ids[4] = Number(ids[4]) + 12
  $(ids.join('')).show();

}
  });
//**********************************************************************************

function fret23_24(l){
// separate function to show 23 - 24 fret notes
  let ids = l.split('');

  if (ids[4] == 0) {
 // 0+25 = teaking from fret 0 to 2 octaves

      ids[4] = Number(ids[4]) + 24;
      $(ids.join('')).show();

  } else if (Number(ids[4] + ids[5]) == 11) {

          ids[4] = Number(ids[4] + ids[5]) + 12;
          ids.pop();
          $(ids.join('')).show();
  }
  }
}
