#15

function dec2bin(dec){
        return (dec >>> 0).toString(2);
}
function bin2dec(bin) {
    return parseInt(bin, 2);
}
function calculateBinByDimension(dimension) {
    var i,
        bin ={high:'',low:''};
    for (i = 0; i < dimension; i++) {
        bin.high = '1'+bin.high+'0';
        bin.low +='1';
    }
    return bin;
}
function padNumber(num, size) {
      var s = num+"";
      while (s.length < size) s = "0" + s;
      return s;
}
function checkValid(dim, bin) {
    var Zs,
        Os;

    bin = padNumber(bin, dim*2);
    Zs = bin.replace(/1/g,'');
    Os = bin.replace(/0/g,'');
    if (Os.length === dim && Zs.length === dim) {
        return true;
    }
    return false;
}
function init(dimension) {
    var bin,
        num,
        i,
        routes = 0;
    bin = calculateBinByDimension(dimension);
    num = bin2dec(bin.high);
    for (i = bin2dec(bin.low); i <= num; i++) {
        console.log(i + ' of ' + num);
        if(checkValid(dimension, dec2bin(i))) {
                routes++;
        }
    }
    console.log('routes:'+routes);
}
/*
init(1); //2
init(2); //6
init(3); //20
init(4); //70
init(5); //252
*/
init(20); 
