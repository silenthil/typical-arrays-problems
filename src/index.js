
exports.min = function min (array) {
  if (array==null || array=='') return 0;
    array=array.sort(function(a, b) { return a - b; });
    return array[0];
}

exports.max = function max (array) {
  if (array==null || array=='') return 0;
  array=array.sort(function(a, b) { return a-b; });
  array.reverse();
    return array[0] ;
}


exports.avg = function avg (array) {
  if (array==null || array=='') return 0;
  let sum=0;
  array.forEach(element => {
    sum+=element;
  });
  return (sum/array.length)
}

