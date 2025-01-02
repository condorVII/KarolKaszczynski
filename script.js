var img1_0 = document.getElementById("img1_0");
var img1_1 = document.getElementById("img1_1");
var img1_2 = document.getElementById("img1_2");

var img2_0 = document.getElementById("img2_0");
var img2_1 = document.getElementById("img2_1");
var img2_2 = document.getElementById("img2_2");

var img3_0 = document.getElementById("img3_0");
var img3_1 = document.getElementById("img3_1");
var img3_2 = document.getElementById("img3_2");

var img4_0 = document.getElementById("img4_0");
var img4_1 = document.getElementById("img4_1");
var img4_2 = document.getElementById("img4_2");

var img5_0 = document.getElementById("img5_0");
var img5_1 = document.getElementById("img5_1");
var img5_2 = document.getElementById("img5_2");

var img6_0 = document.getElementById("img6_0");
var img6_1 = document.getElementById("img6_1");
var img6_2 = document.getElementById("img6_2");

var img7_0 = document.getElementById("img7_0");
var img7_1 = document.getElementById("img7_1");
var img7_2 = document.getElementById("img7_2");


var counter1 = 1;
var counter2 = 1;
var counter3 = 1;
var counter4 = 1;
var counter5 = 1;
var counter6 = 1;
var counter7 = 1;

function change_counter_up1(){
    change_img_forward(img1_0,img1_1,img1_2,counter1);
    switch(counter1){
        case 1:
            counter1 = 2;
            break;
        case 2:
            counter1 = 3;
            break;
        case 3:
            counter1 = 1;
            break;
    }
}

function change_counter_down1(){
    change_img_backward(img1_0,img1_1,img1_2,counter1);
    switch(counter1){
        case 1:
            counter1 = 3;
            break;
        case 2:
            counter1 = 1;
            break;
        case 3:
            counter1 = 2;
            break;
    }
}


function change_counter_up2(){
    change_img_forward(img2_0,img2_1,img2_2,counter2);
    switch(counter2){
        case 1:
            counter2 = 2;
            break;
        case 2:
            counter2 = 3;
            break;
        case 3:
            counter2 = 1;
            break;
    }
}
function change_counter_down2(){
    change_img_backward(img2_0,img2_1,img2_2,counter2);
    switch(counter2){
        case 1:
            counter2 = 3;
            break;
        case 2:
            counter2 = 1;
            break;
        case 3:
            counter2 = 2;
            break;
    }
}


function change_counter_up3(){
    change_img_forward(img3_0,img3_1,img3_2,counter3);
    switch(counter3){
        case 1:
            counter3 = 2;
            break;
        case 2:
            counter3 = 3;
            break;
        case 3:
            counter3 = 1;
            break;
    }
}
function change_counter_down3(){
    change_img_backward(img3_0,img3_1,img3_2,counter3);
    switch(counter3){
        case 1:
            counter3 = 3;
            break;
        case 2:
            counter3 = 1;
            break;
        case 3:
            counter3 = 2;
            break;
    }
}


function change_counter_up4(){
    change_img_forward(img4_0,img4_1,img4_2,counter4);
    switch(counter4){
        case 1:
            counter4 = 2;
            break;
        case 2:
            counter4 = 3;
            break;
        case 3:
            counter4 = 1;
            break;
    }
}
function change_counter_down4(){
    change_img_backward(img4_0,img4_1,img4_2,counter4);
    switch(counter4){
        case 1:
            counter4 = 3;
            break;
        case 2:
            counter4 = 1;
            break;
        case 3:
            counter4 = 2;
            break;
    }
}


function change_counter_up5(){
    change_img_forward(img5_0,img5_1,img5_2,counter5);
    switch(counter5){
        case 1:
            counter5 = 2;
            break;
        case 2:
            counter5 = 3;
            break;
        case 3:
            counter5 = 1;
            break;
    }
}
function change_counter_down5(){
    change_img_backward(img5_0,img5_1,img5_2,counter5);
    switch(counter5){
        case 1:
            counter5 = 3;
            break;
        case 2:
            counter5 = 1;
            break;
        case 3:
            counter5 = 2;
            break;
    }
}


function change_counter_up6(){
    change_img_forward(img6_0,img6_1,img6_2,counter6);
    switch(counter6){
        case 1:
            counter6 = 2;
            break;
        case 2:
            counter6 = 3;
            break;
        case 3:
            counter6 = 1;
            break;
    }
}
function change_counter_down6(){
    change_img_backward(img6_0,img6_1,img6_2,counter6);
    switch(counter6){
        case 1:
            counter6 = 3;
            break;
        case 2:
            counter6 = 1;
            break;
        case 3:
            counter6 = 2;
            break;
    }
}


function change_counter_up7(){
    change_img_forward(img7_0,img7_1,img7_2,counter7);
    switch(counter7){
        case 1:
            counter7 = 2;
            break;
        case 2:
            counter7 = 3;
            break;
        case 3:
            counter7 = 1;
            break;
    }
}
function change_counter_down7(){
    change_img_backward(img7_0,img7_1,img7_2,counter7);
    switch(counter7){
        case 1:
            counter7 = 3;
            break;
        case 2:
            counter7 = 1;
            break;
        case 3:
            counter7 = 2;
            break;
    }
}


function change_img_forward(img1,img2,img3,counter){
    switch(counter){
        case 1: 
            img1.style.display = "none";
            img2.style.display = "block";
            img3.style.display = "none";
            break;
        case 2:
            img1.style.display = "none";
            img2.style.display = "none";
            img3.style.display = "block";
            break;
        case 3:
            img1.style.display = "block";
            img2.style.display = "none";
            img3.style.display = "none";
            break;
    }
}

function change_img_backward(img1,img2,img3,counter){
    switch(counter){
        case 1: 
            img1.style.display = "none";
            img2.style.display = "none";
            img3.style.display = "block";
            break;
        case 2:
            img1.style.display = "block";    
            img2.style.display = "none";
            img3.style.display = "none";
            break;
        case 3:
            img1.style.display = "none";
            img2.style.display = "block";    
            img3.style.display = "none";
            break;
    }
}



var main0 = document.getElementById("main0");
var main1 = document.getElementById("main1");
var main2 = document.getElementById("main2");
var main3 = document.getElementById("main3");
var main4 = document.getElementById("main4");
var main5 = document.getElementById("main5");
var main6 = document.getElementById("main6");
var main7 = document.getElementById("main7");
var main8 = document.getElementById("main8");

function change_main(block1,block2,block3,block4,block5,block6,block7,block0,block8){
    block1.style.display = "block";
    block2.style.display = "none";
    block3.style.display = "none";
    block4.style.display = "none";
    block5.style.display = "none";
    block6.style.display = "none";
    block7.style.display = "none";
    block0.style.display = "none";
    block8.style.display = "none";
}