$(document).ready(main)

function main() {}

function show_main_page() {
  $('#start_page').hide()
  $('#main_page').show()
}
$('.dropdown-submenu a.test').on("click", function(e) {
  $(this).next('ul').toggle();
  e.stopPropagation();
  e.preventDefault();
});
//  -------------- generate cx adress ----------------------------
// this part generates each adress x8 times
const cx = [383, 420.96, 486.17, 557.48, 613.17, 668.99, 727.98, 775.43, 823.86, 870.47, 913.3, 953.34, 990.63, 1026.6, 1061.74, 1092.94,
  1123.22, 1152.32, 1178.24, 1203.12, 1226.91, 1249.67, 1271.1, 1291.39, 1309.73
]

let a = 0;
let c = 0;

function gen_cx() {
  if (a < 7) {
    a += 1;
    return cx[c];
  } else {
    c += 1;
    a = 0;
    return cx[c - 1]
  }
}

//-------------------  generate ID ----------------------------------
// this par generate uniq ID for html attribute

let lad = 0;
let strg = 9;

function generate_id() {
  if (strg != 2) {
    strg -= 1
    return "S" + strg + "L" + lad
  } else {
    lad += 1
    strg = 9

    return "S" + (strg - 8) + "L" + (lad - 1)
  }


}
// ------------------- render translate --------------------------------
// this part concatinates two parts of translate argument

const translate = [380.37, 418.32, 483.54, 554.85, 610.53, 666.36, 725.35, 772.79, 821.22, 867.53, 910.66, 950.7, 988, 1023.97, 1059.1,
  1090.3, 1120.59, 1149.69, 1175.6, 1200.49, 1224.27, 1247.03, 1268.63, 1288.76, 1307.1
]

const translate_part2 = [209.84, 195.79, 181.73, 167.68, 154.13, 140.06, 126.01, 112.09, 206.96, 192.9, 178.79, 164.49, 150.31, 136.9, 124.56, 111.571, 209.21, 195.11, 181.04, 166.74, 152.37, 138.62, 124.37, 110.12,
  210.21, 195.48, 181.04, 166.35, 152.17, 137.73, 123.29, 108.85, 209.93, 195.84, 181.77, 167.47, 153.09, 139.34, 124.1, 108.55, 212.18, 196.95, 182.24, 167.57, 152.9, 138.1, 123.31, 108.83, 213.46, 198.09, 182.96, 167.68, 152.7, 137.56,
  122.38, 107.1, 214.43, 199.2, 183.34, 167.68, 152.12, 137.1, 121.65, 107.18, 215.43, 199.2, 183.34, 167.68, 151.93, 136.51, 120.58, 104.27, 216.64, 200.42, 184.36, 167.68, 151.93, 136.06, 120.39, 104.46, 217.57, 201.45, 184.17,
  168.2, 152.44, 136.84, 120.2, 103.88, 218.69, 201.45, 185.12, 168.71, 152.25, 135.86, 120, 101.95, 219.21, 201.09, 183.81, 167.84, 152.08, 136.48, 119.84, 101.52, 220.94, 203.15, 186.61, 168.52, 152.25, 135.86, 119.71, 101.74, 220.75,
  203.34, 186.06, 169.37, 152.06, 136.41, 120, 101.76, 222.2, 203.86, 187.34, 169.34, 152.41, 136.45, 119.97, 101.71, 221.84, 203.81, 186.42, 169.17, 151.73, 136.22, 119.62, 101.35, 222.17, 204.65, 187.51, 169.5, 152.38, 136.02, 119.42,
  101.16, 223.08, 204.54, 187.24, 169.39, 152.28, 136.3, 119, 100.15, 223.12, 205.59, 187.31, 170.25, 152.22, 135.83, 118.72, 99.85, 224.09, 205.59, 188.49, 170.06, 152.22, 135.97, 118.67, 99.82, 223.78, 206.06, 188.29, 170.06,
  152.03, 135.78, 118.81, 99.29, 224.45, 206.06, 188.1, 170.06, 152.22, 135.78, 118.61, 98.78, 225.33, 206.79, 188.53, 170.06, 152.19, 135.83, 118.36, 98.84, 225.14, 206.79, 188.33, 170.06, 152.83, 135.3, 118.13, 98.3
]

let a1 = 0;
let c1 = 0;
let b1 = -1;

function generate_trans() {

  if (a1 < 7) {
    a1++
    b1++
    return translate[c1] + " " + translate_part2[b1];
  } else {
    c1 += 1;
    a1 = 0;
    b1++
    return translate[c1 - 1] + " " + translate_part2[b1];
  }



}
// can't be generated addresses
const render_notes = {
  cy: [207.38, 193.32, 179.27, 165.22, 151.67, 137.6, 123.55, 109.62, 204.5, 190.44, 176.33, 162.03, 147.85, 134.44, 122.1, 109.11, 206.74, 192.65, 178.58, 164.28, 149.9, 136.16, 121.91, 107.66,
    207.74, 193.02, 178.58, 163.89, 149.71, 135.27, 120.83, 106.39, 207.47, 193.37, 179.31, 165.01, 150.63, 136.18, 121.63, 106.39, 209.72, 194.49, 179.77, 165.11, 150.44, 135.64, 120.84, 106.37,
    211, 195.62, 180.49, 165.22, 150.24, 135.1, 119.91, 104.64, 211.97, 196.74, 180.88, 165.22, 149.66, 134.63, 119.19, 104.72, 212.97, 196.74, 180.88, 165.22, 149.46, 134.05, 118.12, 101.89,
    214.17, 197.95, 181.9, 165.22, 149.46, 133.6, 117.93, 102, 215.11, 198.99, 181.71, 165.74, 149.98, 134.38, 117.74, 101.42, 216.23, 198.99, 182.66, 166.25, 149.79, 133.4, 117.54, 99.49, 216.74, 198.63,
    181.35, 165.37, 149.62, 134.02, 117.37, 99.06, 218.48, 200.68, 184.15, 166.05, 149.79, 133.4, 117.25, 99.27, 218.29, 200.88, 183.6, 166.91, 149.6, 133.95, 117.54, 99.29, 219.74, 201.4, 184.88,
    166.87, 149.95, 133.99, 117.51, 99.24, 219.38, 201.35, 183.96, 166.71, 149.27, 133.75, 117.16, 98.89, 219.71, 202.19, 185.04, 167.04, 149.92, 133.56, 116.96, 98.69, 220.62, 202.08, 184.77, 166.93,
    149.81, 133.84, 116.54, 97.69, 220.66, 203.13, 184.85, 167.79, 149.76, 133.37, 116.26, 97.39, 221.63, 203.13, 186.02, 167.6, 149.76, 133.51, 116.21, 97.36, 221.32, 203.6, 185.83, 167.6, 149.56,
    133.31, 116.35, 96.82, 221.99, 203.6, 185.64, 167.6, 149.76, 133.31, 116.15, 96.32, 222.87, 204.33, 186.07, 167.6, 149.73, 133.37, 115.89, 96.37, 222.68, 204.33, 185.87, 167.6, 150.37, 132.83,
    115.67, 95.84
  ]
}
//------------------ this part renders notes on guitar gird------------
function render() {
  for (var i = 0; i < 200; i++) {
    d3.select(".container1").append("g").html(

      "<g onClick=\"showBigNote(this)\" id=\"" + generate_id() + "\" class=\"displayNONE displayNONE1\"><ellipse class=\"cls-001\" cx=" + gen_cx() +
      " cy=\"" + render_notes.cy[i] + "\" rx=\"6.78\" ry=\"7.03\"  /><text class=\"cls-8\" transform=\"translate(" +
      generate_trans() + ") scale(0.96 1)\">E</text></g>");

  }

  a1 = 0;c1 = 0;b1 = -1;lad = 0;strg = 9;a = 0;c = 0;
};

render()

//--------------------- end -------------------------------------------
// default guitar tune for 8 strings
const noteE_arr = ["#S8L10", "#S7L5", "#S6L0", "#S4L2", "#S1L0", "#S2L5", "#S5L7", "#S3L9", "#S6L12", "#S1L12",
  "#S2L17", "#S5L19", "#S3L21", "#S1L24", "#S6L24", "#S4L14", "#S8L22", "#S7L17"];
let note_E = {name:"E", hafTonesCheck: false, id: noteE_arr, color: "#5fb761"};
const noteA_arr = ["#S8L3", "#S7L10", "#S5L0", "#S3L2", "#S6L5", "#S4L7", "#S2L10", "#S3L14", "#S1L5", "#S1L17", "#S6L17",
  "#S4L19", "#S2L22", "#S5L24", "#S5L12", "#S8L15", "#S7L22"];
let note_A = {name:"A", hafTonesCheck: true, id:  noteA_arr, color: "#b20000"};
const noteD_arr = ["#S8L8", "#S7L3", "#S4L0", "#S2L3", "#S5L5", "#S3L7", "#S6L10", "#S1L10", "#S4L12", "#S2L15", "#S5L17",
  "#S3L19", "#S1L22", "#S6L22", "#S4L24", "#S8L20", "#S7L15"];
let note_D = {name:"D", hafTonesCheck: true,id: noteD_arr,color: "#3b79dd"};
const noteG_arr = ["#S8L1", "#S7L8", "#S3L0", "#S1L3", "#S6L3", "#S4L5", "#S2L8", "#S5L10", "#S3L12", "#S1L15", "#S6L15",
  "#S4L17", "#S2L20", "#S5L22", "#S3L24", "#S8L13", "#S7L20"];
let note_G = {name:"G", hafTonesCheck: true,id: noteG_arr,color: "#d5ca03"};
const noteB_arr = ["#S8L5", "#S7L12", "#S7L0", "#S2L0", "#S5L2", "#S3L4", "#S6L7", "#S1L7", "#S4L9", "#S2L12", "#S5L14", "#S3L16",
  "#S1L19", "#S6L19", "#S4L21", "#S2L24", "#S8L17", "#S7L24"];
let note_B = {name:"B",hafTonesCheck: false,id: noteB_arr,color: "#560000"};
const noteF_arr = ["#S8L11", "#S8L-1", "#S7L6", "#S6L1", "#S1L1", "#S4L3", "#S2L6", "#S5L8", "#S3L10", "#S6L13", "#S1L13", "#S4L15",
  "#S2L18", "#S5L20", "#S3L22", "#S8L23", "#S7L18"];
let note_F = {name:"F",hafTonesCheck: true,id: noteF_arr,color: "#1d0433"};
const noteC_arr = ["#S8L6", "#S7L1", "#S2L1", "#S5L3", "#S3L5", "#S1L8", "#S6L8", "#S4L10", "#S2L13", "#S5L15", "#S3L17",
  "#S1L20", "#S6L20", "#S4L22", "#S8L18", "#S7L13"];
let note_C = {name:"C",hafTonesCheck: true,id: noteC_arr,color: "#804f9b"};
function renderNotesOnGird(){
note(note_E)
note(note_A)
note(note_D)
note(note_G)
note(note_B)
note(note_F)
note(note_C)
}
  renderNotesOnGird();
// ============= BUTTONS FUNCTIONS ==========================================
let turnedONbuttons = [], // presed notes
    turnedOnHalfToneButtons =[], // pressed half notes
    button_all_pressed = false,
    all_butun_pressed_first = true;
    tuneChenge = false;
function collapse_all() {

if (all_butun_pressed_first == true) {$(".displayNONE1").toggle()}
  if (button_all_pressed == true) {

    $.each(turnedONbuttons, function(i, l) {
      let lo = getName_array(l) ;

        $.each(lo.id, function(i, l) {
     $(l).hide()});
    });
    // ----------- part with haftones -------------------
    $.each(turnedOnHalfToneButtons, function(i, l) {
      let lo = getName_array(l);
        $.each(detect_haf_tone(lo), function(i, l) {$(l).hide()});
        });
  } else {

$.each(turnedONbuttons, function(i, l) {
  let lo = getName_array(l);
    $.each(lo.id, function(i, l) {$(l).show()});
    });
    // ----------- part with haftones -------------------
    $.each(turnedOnHalfToneButtons, function(i, l) {
      let lo = getName_array(l);
        $.each(detect_haf_tone(lo), function(i, l) {$(l).show()});
        });
}
  button_all_pressed == true ? button_all_pressed = false  : button_all_pressed = true ;
}
//this functuon get note name from "pushed buttn array" to asign right array

function getName_array(noteName){
  let note;
  switch(noteName) {
case "B": note = note_B; break;
case "C": note = note_C; break;
case "D": note = note_D; break;
case "E": note = note_E; break;
case "F": note = note_F; break;
case "A": note = note_A; break;
case "G": note = note_G; break;

}
return note;

}

function clear_all(){
  $(".displayNONE1").show();
  $(".rm").removeClass("note-btn-color_active")
  button_all_pressed = false;
  all_butun_pressed_first = true;
  turnedONbuttons.splice(0, turnedONbuttons.length);
  turnedOnHalfToneButtons.splice(0, turnedOnHalfToneButtons.length);

}

function shiftNote(l) {
  if (tuneChenge == true) {
    if (l[2] == 8) {
      let log = Number(l[4]) + 2 // Shift
      if (l.length == 6) {
        log = Number(l[4] + l[5]) + 2 // Shift
      }
      return l[0] + l[1] + l[2] + l[3] + log
    }
  }

  return l;
}


function on_off(note,check,butn,obj) {
$(obj).toggleClass("note-btn-color_active");
  all_butun_pressed_first = false;
  if (check == false) {
    $.each(detect_haf_tone(note), function(i, l) {
      // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
      let render = [];
       render.push(shiftNote(l))

      $(render.join(", ")).toggle()
    });
   $(butn).prop('disabled', function(i, v) { return !v; }); // turns off button note when pressing halftone button

} else {
    $.each(note.id, function(i, l) {
      // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
      let render = [];
       render.push(shiftNote(l))

      $(render.join(", ")).toggle()
    });
    $.each(detect_haf_tone(note), function(i, l) {
      // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
      let render = [];
       render.push(shiftNote(l))

      $(render.join(", ")).toggle()

});

     // this part checks if note exist in array then delete it
     if(turnedONbuttons.indexOf(note.name) == -1 ){
        turnedONbuttons.push(note.name);
    } else {
      turnedONbuttons.splice(turnedONbuttons.indexOf(note.name), 1);
    }
    // this part checks if half.note exist in array then delete it
    if(turnedOnHalfToneButtons.indexOf(note.name) == -1 ){
      turnedOnHalfToneButtons.push(note.name);
    } else {
     turnedOnHalfToneButtons.splice(turnedOnHalfToneButtons.indexOf(note.name), 1);
   }
  }
}
// ============= BUTTONS FUNCTIONS END ==========================================
 // color rendered notes
 //# bigInfo - zoom big info note
 // tune - standart or modify
function note(note) {
  $("#bigInfo").show(500)

  $.each(note.id, function(i, l) {
    $(l).show(500)
    d3.select(l).select("ellipse").style("fill", note.color)
    d3.select(l).select("text").text(note.name)
  });
  // this part check if note have halfnotes and generate adress and  renders it
  if (note.hafTonesCheck === true) {
    $.each(detect_haf_tone(note), function(i, l) {
   d3.select(l).select("ellipse").style("fill", note.color)
    d3.select(l).select("text").text(note.name + "#")
    $(l).show(500);
});
  }
}

// return half tone adreses
function detect_haf_tone(note){
   var returned = []
   if (note.hafTonesCheck === true) {
     $.each(note.id, function(i, l) {
       let log = Number(l[4]) + 1
       if (l.length == 6) {
         log = Number(l[4] + l[5]) + 1 // sdvig
       }
       returned.push(l[0] + l[1] + l[2] + l[3] + log)

     });
   }
   return returned;
   }


//----------- zooom note ------------------------
function showBigNote(d) {
  let dataCx = d3.select(d).select("ellipse").attr("cx");
  let dataCy = d3.select(d).select("ellipse").attr("cy");
  let color = d3.select(d).select("ellipse").attr("style");
  let noteName = d3.select(d).select("text").text()
 let rgb = [];

for (var i = 6; i < color.length-1; i++) {
    rgb.push(color[i])
}

  d3.select("#bigInfo").select("ellipse")
    .style("fill", rgb.join(""))
    .attr("cx",694.56)
    // change note
    d3.select("#bigInfo").select("text")
      .text(noteName)
      .attr("transform", "translate(687.67 31.72) scale(0.96 1)")
      // change laine point
    d3.select("#bigInfo").select("line")
    .attr("x1",dataCx)
    .attr("y1",dataCy)
    .attr("x2","675.86")
// ----------------------------------
   if (dataCx > 650) {
        d3.select("#bigInfo").select("text")
           .attr("transform", "translate("+ Number(dataCx-58) + " 31.72) scale(0.96 1)")
        d3.select("#bigInfo").select("line")
           .attr("x2", dataCx - 50)
        d3.select("#bigInfo").select("ellipse")
           .attr("cx", dataCx - 50)
} else if (dataCx > 700) {
  d3.select("#bigInfo").select("line")
     .attr("x2", dataCx - 100)
  d3.select("#bigInfo").select("ellipse")
     .attr("cx", dataCx - 100)
}
}
//--------------- zooom note end----------
// ------------- tune selected ------------------
$( "#sel1" ).change(function() {
  $("#modalCheck").modal("hide")
changeTune(this.value);
});
function changeTune(id){
   if (id == "dropE-8") {
       tuneChenge = true;
     let tempAdress = [];
     $("#tuneShow").text("Droped E (E-B-E-A-D-G-B-E)")
     for (var i = 0; i < 25; i++) {  tempAdress.push("#S6L"+i);}

     $.each(tempAdress, function(i, l) {

       let getParmSyle = d3.select(l).select("ellipse").attr("style");
       let getParmTxt = d3.select(l).select("text").text();
       let transformAdress = function(l) {
         let re = /6/;
         return l.replace(re, '8'); // change string in adress
       }
         let rgb = [];
          for (var i = 6; i < getParmSyle.length-1; i++) {
        rgb.push(getParmSyle[i]);
     }
     d3.select(transformAdress(l)).select("ellipse").style("fill",rgb.join(""));
     d3.select(transformAdress(l)).select("text").text(getParmTxt);

      });


   } else if (id == "def-8"){
     tuneChenge = false;
      renderNotesOnGird();
      $("#tuneShow").text("Standart — (F#-B-E-A-D-G-B-E)")
   }
}
