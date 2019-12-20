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
},{
 name:"bebop_dom",
 formula:['W','W','H','W','W','H','H']
},{
 name:"bebop_half_dim",
 formula:['H','W','W','H','H','H','','W']
},{
 name:"blues_var1",
 formula:['','W','W','H','H','','','H','H']
},{
 name:"blues_var2",
 formula:['','W','H','H','H','H','','','H','H']
},{
 name:"blues_var3",
 formula:['','W','H','H','H','H','W','H','H']
},{
 name:"mixo_blues",
 formula:['','W','H','H','H','H','','','H','W']
},{
 name:"maj_blu_scl",
 formula:['W','H','H','','','H','W','','']
},{
 name:"chinese_2",
 formula:['W','','W','W','W','','']
},{
 name:"hirajoshi_2",
 formula:['','','','H','H','','','','H','W']
},{
 name:"iwato",
 formula:['H','','','','H','H','','','','H']
},{
 name:"japanise",
 formula:['H','','','','H','W','','','H','W']
},{
 name:"kumoi_2",
 formula:['H','','','','H','W','H','','','']
},{
 name:"pelog_2",
 formula:['H','W','','','','H','','','H']
},{
 name:"locrian_6",
 formula:['H','W','W','H','','','H','H']
},{
 name:"ionian_#5",
 formula:['W','W','H','','','H','H','W']
},{
 name:"ionian_#5",
 formula:['W','W','','','H','H','H','W']
},{
 name:"dorian_#4",
 formula:['W','H','','','H','H','W','H']
},{
 name:"phryg_maj",
 formula:['H','','','H','H','W','H','W']
},{
 name:"lyd_#2",
 formula:['','','H','H','W','H','W','W']
},{
 name:"ultralocrian",
 formula:['H','W','H','W','W','H','','']
},{
 name:"moorish_phrygian",
 formula:['H','W','H','H','W','H','W','H']
},{
 name:"algerian",
 formula:['W','H','W','H','H','H','','','H']
},{
 name:"altered",
 formula:['H','W','H','W','H','H','W']
},{
 name:"arabian_a",
 formula:['W','H','W','H','W','H','W']
},{
 name:"arabian_b",
 formula:['W','W','H','H','W','W','W']
},{
 name:"augmented",
 formula:['','','H','H','W','W','','','H']
},{
 name:"aux_dim",
 formula:['W','H','W','H','W','H','W',]
},{
 name:"aux_aug",
 formula:['W','W','W','W','W','W','W',]
},{
 name:"aux_dim_blues",
 formula:['H','W','H','W','H','W','H',]
},{
 name:"balinese",
 formula:['H','W','','','','H','H','','','']
},{
 name:"blues",
 formula:['','','H','W','H','H','','','H']
},{
 name:"byzantine",
 formula:['H','','','H','H','W','H','','','H']
},{
 name:"chinese",
 formula:['','','','H','W','H','','','','H']
},{
 name:"chinese_mong",
 formula:['W','W','','','H','W','','']
},{
 name:"diminished",
 formula:['W','H','W','H','W','H','W']
},{
 name:"dim_halfs",
 formula:['H','W','H','W','H','W','H',]
},{
 name:"dim_whole",
 formula:['H','W','H','W','W','W','W',]
},{
 name:"dim_7th",
 formula:['W','W','H','W','W','H','W',]
},{
 name:"d_hormonic",
 formula:['H','','W','H','W','H','','','H']
},{
 name:"egyptian",
 formula:['W','','W','W','','','H']
},{
 name:"e_tone_span",
 formula:['H','W','H','H','H','W','W']
},{
 name:"enigmatic",
 formula:['H','','W','W','W','W','H']
},{
 name:"ethi_a_rar",
 formula:['W','H','W','H','W','W','W']
},{
 name:"ethi_a_rar_g_E",
 formula:['W','H','W','W','H','W','W']
},{
 name:"dim_half_locr_2",
 formula:['W','H','W','H','W','W','W']
},{
 name:"hawaiian",
 formula:['W','H','W','W','W','W','W']
},{
 name:"hindu",
 formula:['W','W','H','W','H','W','W']
},{
 name:"hirajoshi",
 formula:['W','H','','','W','H','','','',]
},{
 name:"hung_maj",
 formula:['','W','H','W','H','W','H']
},{
 name:"hung_gyp",
 formula:['W','H','','W','H','H','','','H']
},{
 name:"hung_gyp_per",
 formula:['H','','W','H','W','H','','W']
},{
 name:"japanise_a",
 formula:['H','','','W','W','H','','','']
},{
 name:"japanise_b",
 formula:['W','','W','W','H','','','']
},{
 name:"jap_ichik",
 formula:['W','W','H','H','H','W','W']
},{
 name:"javaneese",
 formula:['H','W','W','W','W','H','W']
},{
 name:"jewish_a_m",
 formula:['H','H','H','W','W','W','H']
},{
 name:"jewish_a_r",
 formula:['H','','W','H','W','H','W','W']
},{
 name:"jewish_m_b",
 formula:['H','','W','H','W','H','W','W']
},{
 name:"kumoi",
 formula:['W','H','','','W','W','','']
},{
 name:"lead_w_tone",
 formula:['W','W','W','W','W','H','H']
},{
 name:"maj_locrian",
 formula:['W','W','H','H','W','W','W']
},{
 name:"mohammedan",
 formula:['W','H','W','W','H','','W']
},{
 name:"n_pure_min",
 formula:['W','H','W','W','H','W','W']
},{
 name:"neopolitan",
 formula:['H','W','W','W','H','','W']
},{
 name:"neopolitan_maj",
 formula:['H','W','W','W','W','W','W']
},{
 name:"neopolitan_min",
 formula:['H','W','W','W','H','W','W']
},{
 name:"n_tone_scl",
 formula:['W','H','H','W','H','H','H','W']
},{
 name:"orental_a",
 formula:['H','','W','H','H','W','W']
},{
 name:"orental_b",
 formula:['H','','W','H','H','','W','H']
},{
 name:"overtone",
 formula:['W','W','W','H','W','H','W']
},{
 name:"pelog",
 formula:['H','W','','','W','H','','','']
},{
 name:"persian",
 formula:['H','','W','H','H','W','','','H']
},{
 name:"prometheus",
 formula:['W','W','W','','W','H']
},{
 name:"prometheus_neo",
 formula:['H','','W','W','','W','H']
},{
 name:"rom_min",
 formula:['W','H','','W','H','W','H']
},{
 name:"six_t_sym",
 formula:['H','','W','H','','W','H']
},{
 name:"sp_gay",
 formula:['H','','W','H','W','H','W']
},{
 name:"sp_loc",
 formula:['H','W','H','W','W','W']
},{
 name:"m_phry",
 formula:['H','W','H','H','W','H','W','H']
}];





//[8,1,5,10,3,8,1,6]

const patternStartNotes = [8,1,5,10,3,8,1,6]; // start positions for note "C"
const noteFormulas = ['C','C#','D','D#','E','F','F#','G','G#','A','A#','B'];


// main FUNCTION controled by GET button
function showScaleMain() {
// button GET pressed
let patternS = $("#selectScalePattern").val();
let chordS =  $("#selectScaleChords").val();
let scaleS =  $("#selectScaleScale").val();

  showScaleNotesOngird(scaleGenerator(patternS,chordS,scaleS));
}


//**************************************************************
//                        The main scale generator
//**************************************************************
function scaleGenerator(pattern_s,chord_s,scale_s) {
  clear_all();
  $(".displayNONE1").hide(); // hide all notes on gird
  $("#schemaShow").text(filterIt(scalesFormulas,scale_s).formula.join(" ")); // in menu show schema selected
  $("#scaleNameShow").text($("#selectScaleScale").find('option:selected').text());



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

         return val + noteFormulas.indexOf(chord) > 12 ? (val + noteFormulas.indexOf(chord)) - 12 : val + noteFormulas.indexOf(chord);

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
  $(".schemaShow").toggle();
  $("#schemaShow").text(" ")


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
