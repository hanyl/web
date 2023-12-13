//constants: 
//http://physics.nist.gov/cgi-bin/cuu/Category?view=html&Universal.x=81&Universal.y=7   
var epsilon0 = 8.854187817e-12; //electric constant F m-1
var z0 = 376.730313461; //ohm, characteristic impedance of vacuum 
var u0 = 12.566370614e-7; // 4 pi, magnetic constant 
var c0 = 299792458; //m.s-1, speed of light in vacuum 
var e = 1.6021766208e-19; //C, elementary charge
var mu = 1.660539040e-27; //kg, atomic mass constant 

var muc2 = 931.4940954; //atomic mass constant energy equivalent in MeV

function mag_MEBT_Q1() {
    var current = document.getElementById("f_mebt_q1_current").value; 
    var a4 = -3.22918E-07;
    var a3 = 0.000195132;
    var a2 = -0.03891109;
    var a1 = 67.14447275;
    var a0 = 15.56639917;
    document.getElementById("f_mebt_q1_B").value =  (a4*Math.pow(current,4) + a3*Math.pow(current,3) + a2*Math.pow(current,2) + a1*Math.pow(current,1) + a0)/10000/0.07949;
}


function mag_MEBT_Q2() {
    var current = document.getElementById("f_mebt_q2_current").value; 
    var a4 = 0.000000;
    var a3 = 0.000191;
    var a2 = -0.035987;
    var a1 = 66.350130;
    var a0 = 12.605718;
    document.getElementById("f_mebt_q2_B").value =  (a4*Math.pow(current,4) + a3*Math.pow(current,3) + a2*Math.pow(current,2) + a1*Math.pow(current,1) + a0)/10000/0.07949;
}





function mag_MEBT_Q3() {
    var current = document.getElementById("f_mebt_q3_current").value; 
    var a4 = 0.000000;
    var a3 = 0.000189;
    var a2 = -0.034653;
    var a1 = 66.336355;
    var a0 = 16.553088;
    document.getElementById("f_mebt_q3_B").value =  (a4*Math.pow(current,4) + a3*Math.pow(current,3) + a2*Math.pow(current,2) + a1*Math.pow(current,1) + a0)/10000/0.07949;

}

function mag_MEBT_Q4() {
    var current = document.getElementById("f_mebt_q4_current").value; 
    var a4 = 0.000000;
    var a3 = 0.000202;
    var a2 = -0.038618;
    var a1 = 66.839421;
    var a0 = 8.852936;
    document.getElementById("f_mebt_q4_B").value =  (a4*Math.pow(current,4) + a3*Math.pow(current,3) + a2*Math.pow(current,2) + a1*Math.pow(current,1) + a0)/10000/0.07949;

}

function mag_MEBT_Q5() {
    var current = document.getElementById("f_mebt_q5_current").value; 
    var a4 = -3.16196E-07;
    var a3 = 0.000185;
    var a2 = -0.033855;
    var a1 = 66.158013;
    var a0 = 19.184013;
    document.getElementById("f_mebt_q5_B").value =  (a4*Math.pow(current,4) + a3*Math.pow(current,3) + a2*Math.pow(current,2) + a1*Math.pow(current,1) + a0)/10000/0.07949;
    
}



function mag_MEBT_Q6() {
    var current = document.getElementById("f_mebt_q6_current").value; 
    var a4 = -3.13246E-07;
    var a3 = 0.000182;
    var a2 = -0.033208;
    var a1 = 66.159668;
    var a0 = 18.889611 ;
    document.getElementById("f_mebt_q6_B").value =  (a4*Math.pow(current,4) + a3*Math.pow(current,3) + a2*Math.pow(current,2) + a1*Math.pow(current,1) + a0)/10000/0.07949;
}


function mag_MEBT_Q7() {
    var current = document.getElementById("f_mebt_q7_current").value; 
    var a4 = -3.21351E-07;
    var a3 = 0.000188;
    var a2 = -0.034598;
    var a1 = 66.304729;
    var a0 = 17.237136;
    document.getElementById("f_mebt_q7_B").value =  (a4*Math.pow(current,4) + a3*Math.pow(current,3) + a2*Math.pow(current,2) + a1*Math.pow(current,1) + a0)/10000/0.07949;

}


function mag_MEBT_Q8() {
    var current = document.getElementById("f_mebt_q8_current").value; 
    var a4 = -3.19822E-07;
    var a3 = 0.000188;
    var a2 = -0.034674;
    var a1 = 66.276157;
    var a0 = 16.426605;
    document.getElementById("f_mebt_q8_B").value =  (a4*Math.pow(current,4) + a3*Math.pow(current,3) + a2*Math.pow(current,2) + a1*Math.pow(current,1) + a0)/10000/0.07949;

}

function mag_MEBT_Q9() {
    var current = document.getElementById("f_mebt_q9_current").value; 
    var a4 = -3.16345E-07;
    var a3 = 0.000187;
    var a2 = -0.036049;
    var a1 = 66.937797 ;
    var a0 = 20.196004 ;
    document.getElementById("f_mebt_q9_B").value =  (a4*Math.pow(current,4) + a3*Math.pow(current,3) + a2*Math.pow(current,2) + a1*Math.pow(current,1) + a0)/10000/0.07949;

}

function mag_MEBT_Q10() {
    var current = document.getElementById("f_mebt_q10_current").value; 
    var a4 = -3.1862E-07;
    var a3 = 0.000187;
    var a2 = -0.034396;
    var a1 = 66.245614;
    var a0 = 15.326431;
    document.getElementById("f_mebt_q10_B").value =  (a4*Math.pow(current,4) + a3*Math.pow(current,3) + a2*Math.pow(current,2) + a1*Math.pow(current,1) + a0)/10000/0.07949;

}
