function time(){
  let d = new Date();
        let h = d.getHours();
        let m = d.getMinutes();
        let s = d.getSeconds();
        let arr = [h, m, s];

        for (let i = 0; i < (arr.length); i++) {
            // if the hours or minutes less then 10 print...
            if (arr[i] < 10 && i != 2) {
                arr[i] = "0" + arr[i] + ":";
            }
            //  to know that this is the seconds, the last item of the array
            // when i will be 2 it's mean that i[2] of the array   
            else if (i == 2) {
                // if the seconds less then 10 print..
                if (arr[i] < 10) {
                    arr[i] = "0" + String(arr[i]);
                }
                // if the seconds 10 and up
                else {
                    // String() converts a value to a string
                    arr[i] = String(arr[i]);
                }
            }
            // if the hours or minutes more then 10 print...
            else {
                arr[i] = String(arr[i]) + ":";
            }
        }
        //The join() method returns an array as a string.
        // removes the commas
        clock.innerHTML = arr.join("")
}

let redC =0;
let grrenC =0;
let blueC =0;

function setColor(){
  redC +=10;
  grrenC +=20;
  blueC +=3;
  // set diffrent background color in the body tag
  bg.style.backgroundColor = `rgb( ${redC % 255} , ${grrenC % 255} ,  ${blueC % 255} ) `;
  time();

}

// The setInterval() method calls a function "setColor()"
setInterval(setColor,1000)