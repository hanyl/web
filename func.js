//constants: 
//http://physics.nist.gov/cgi-bin/cuu/Category?view=html&Universal.x=81&Universal.y=7   
var epsilon0 = 8.854187817e-12; //electric constant F m-1
var z0 = 376.730313461; //ohm, characteristic impedance of vacuum 
var u0 = 12.566370614e-7; // 4 pi, magnetic constant 
var c0 = 299792458; //m.s-1, speed of light in vacuum 
var e = 1.6021766208e-19; //C, elementary charge
var mu = 1.660539040e-27; //kg, atomic mass constant 

// xingguang Liu(liuxg@ihep.ac.cn), Jan 27, 2021

var muc2 = 931.4940954; //atomic mass constant energy equivalent in MeV

function mag_MEBT_Q1() {
    var current = document.getElementById("f_mebt_current").value; 
    var a4 = -3.22918E-07;
    var a3 = 0.000195132;
    var a2 = -0.03891109;
    var a1 = 67.14447275;
    var a0 = 15.56639917;
    //document.getElementById("f_mebt_B1").value = a4*Math.power(current,4) + a3*Math.power(current,3) + a2*Math.power(current,2) a1*Math.power(current,1) + a0;
    document.getElementById("f_mebt_B1").value = current;
}
