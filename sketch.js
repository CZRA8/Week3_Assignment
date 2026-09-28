/* DM3008 Generative Art, Cheng Ziren Alex 2026
 * Week 3 - Modulo
 * Assigment
*/

// s=900,i=j=0;function setup(){createCanvas(s,s);stroke(255,9);fill(9,3)}function draw(){quad(i++,j++,j,i,s-i,i-50,s-j,j);i=(i<<j%4)%1200;j=j%s}
// i=0,k=450;function setup(){createCanvas(900,900);textSize(k)}function draw(){translate(k,k);fill(i%1*k/2,60);rotate(i+=+.01);text("@",99,0)}

// parameters
i=0;
j=0;
s=2500;
k=450;

function setup(){
    // Square canvas using the value stored in 's'.
    // s = 2500, the canvas is 2500 x 2500 pixels
    createCanvas(s,s);
    textSize(k); // size of "#"
    // Set the stroke color to white (255) with low opacity (25)
    stroke(255, 25);
    // Set the fill color to black with low opacity
    fill(9,3);
}

function draw(){
    // starts drawing from approximately the centre of the canvas
    translate(k,k);
    // Set the fill color dynamically
    fill(i%176,38,255*k/2,10);

    // Draw a quadrilateral using values of i and j
    quad(i++,j++,i,j);
    // i++ uses the current i, then increments i
    // j++ uses the current j, then increments j
    // i uses the already incremented value
    // j uses the already incremented value

    // increases i by 0.01 and use the new value of i as the rotation angle
    rotate(i+=+.01);
    // "#" at coordinates
    text("#",10,0);
}

/*
I think the most interesting thing about the code is 
how I managed to create continous "loops" of programmable
visual effects from mathematical models and combine various
exmaples to generate something new.
*/
