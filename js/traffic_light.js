//tells us if we want to run the method
var runMe=false;
//indicates light position (red,red-yellow,green,yellow)
var position=0;
function normalRun(){
    //set runMe to true, so we can run the method
    runMe=true;
    /*
    //set a time out, which will run the next position after 1 sec.
    var lightRun = setTimeout(function(){
        //check if runMe is true, or we need to exit the method
        if (!runMe) {
            return;
        }
        //show current light by it's position
        showLight();
        //call the method again to move to next position
        normalRun();
        //check if we want to clear to timeOut (stop the process)
        if (!runMe){
            //clear timeOut
            clearTimeout(lightRun);
        }
        //tells us to wait 1sec before moving to next item...
    },1000);
    */
   //we will use interval instead of timeOut (thanks to gabi :) )
   var lightRun = setInterval(function(){
       //show the light by it's position
       showLight();
       //if we stop the process
       if (!runMe){
        //clear timeOut
        clearInterval(lightRun);
        //close the lights
        red(false);
        yellow(false);
        green(false);
        //exit the method..
        return;
    }
   },1000);
}

function manualRun(){
    console.log("manual run...")
    //go to next position each time
    showLight();
}

function showLight(){
    //show light by position
    switch(position){
        case 0:
            red(true);
            yellow(false);
            green(false);
            break;
        case 1:
            red(true);
            yellow(true);
            green(false);
            break;
        case 2:
            red(false);
            yellow(false);
            green(true);
            break;
        case 3:
            red(false);
            yellow(true);
            green(false);
            break;
    }
    //increase by one to next position
    position+=1;
    //if position is 4, move to zero to reset the position
    if (position==4){
        position=0;
    }
}


//eop
var flipFlop = false;
function blinkYellow(runStatus){
    //set run me to true, so we can run the method
    runMe=true;
    //set interval , repeat on the process, each 1 sec.
    var blinkInterval = setInterval(function(){
        //turn on and off the light
        flipFlop=!flipFlop;
        //show the light according to flipFlop
        yellow(flipFlop);
        if (!runMe){
            //if we stop the process, clear the interval, and exit the method
            clearInterval(blinkInterval);
            yellow(false);
            return;
        }
        //repeat each 1 sec.
    }, 1000);    
}


//set runMe to false , to stop all running methods and set light to off
function stopAll(){
    console.log("Stop all");
    runMe=false;
    red(false);
    yellow(false);
    green(false);
}

//change light status : true - on / false - off
function red(status){
    var red = document.getElementById("red_light");
    red.style = status?" box-shadow: inset 0px 0px 20px 0px black;":" box-shadow: inset 0px 0px 80px 0px black;"
}

function green(status){
    var green = document.getElementById("green_light");
    green.style = status?" box-shadow: inset 0px 0px 20px 0px black;":" box-shadow: inset 0px 0px 80px 0px black;"
}

function yellow(status){
    var yellow = document.getElementById("yellow_light");
    yellow.style = status?" box-shadow: inset 0px 0px 20px 0px black;":" box-shadow: inset 0px 0px 80px 0px black;"
}