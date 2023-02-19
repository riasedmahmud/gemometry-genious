//triangle / rohmbus / pentagon /ellipse

// triangle
document.getElementById('Calculation').addEventListener('click', function (){
    var myBox1 = document.getElementById('box1').value; 
    var myBox2 = document.getElementById('box2').value;
    var result = document.getElementById('result'); 
    var myResult = 0.5 * myBox1 * myBox2;
      document.getElementById('result').value = myResult;
})

// rohmbus
document.getElementById('rombcalc').addEventListener('click',function(){
    var myBox1 = document.getElementById('input1').value; 
    var myBox2 = document.getElementById('input2').value;
    var result = document.getElementById('result4'); 
    var myResult = 0.5 * myBox1 * myBox2;
      document.getElementById('result4').value = myResult;
})

// pentagon
document.getElementById('penclac').addEventListener('click',function(){
    var myBox1 = document.getElementById('class1').value; 
    var myBox2 = document.getElementById('class2').value;
    var result = document.getElementById('result5'); 
    var myResult = 0.5 * myBox1 * myBox2;
      document.getElementById('result5').value = myResult;
})

// ellipse
document.getElementById('pcalc'),addEventListener('click',function(){
    var myBox1 = document.getElementById('ell1').value; 
    var myBox2 = document.getElementById('ell2').value;
    var result = document.getElementById('result6'); 
    var myResult = 3.14 * myBox1 * myBox2;
      document.getElementById('result6').value = myResult;
})
//  ...............
// rectangle / paralellogram

// reactangle
 document.getElementById('reactcalc').addEventListener('click',function(){
    var myBox1 = document.getElementById('label1').value; 
    var myBox2 = document.getElementById('label2').value;
    var result = document.getElementById('result2'); 
    var myResult = myBox1 * myBox2;
      document.getElementById('result2').value = myResult;
 })
//   parallelogram
 document.getElementById('pcalc').addEventListener('click',function(){
    var myBox1 = document.getElementById('div1').value; 
        var myBox2 = document.getElementById('div2').value;
        var result = document.getElementById('result3'); 
        var myResult = myBox1 * myBox2;
          document.getElementById('result3').value = myResult;
 })