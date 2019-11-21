
$('#calculate').click(function(e){
    event.preventDefault();
    let a = parseFloat($('#a').val());
    let b = parseFloat($('#b').val());
    let c = parseFloat($('#c').val());
    console.log(a, b,c)
    let solution = quadraticEquation(a, b, c);
    console.log(solution);
    if(solution.isComplex){
        $('#one').html(solution.real);
        $('#two').html(parseInt(solution.imaginary) + "i");
    } else{
        $('#one').html(parseInt(solution.real));
       $('#two').html(parseInt(solution.imaginary));
    }
  });


function quadraticEquation(a, b, c) {
    var first = b * b;
    first -= 4 * a * c;
    if (first >= 0) {
      first = Math.sqrt(first)
      var add = -(b) + first;
      var subtract = -(b) - first;
      add = add / 2 * a;
      subtract = subtract / 2 * a;
      return { 
        isComplex: false,
        real: {
          one: add,
          two: subtract
        }
      };
  
    } else {
      var real = -(b)/(2 * a); //real stuff
      var imaginary = (b * b) - (4 * a * c);
      imaginary = Math.abs(imaginary);
      imaginary = Math.sqrt(imaginary);
      imaginary = imaginary / (2 * a);
      return{
        isComplex: true,
        real: real,
        imaginary: imaginary
      }
    }
  }
  

