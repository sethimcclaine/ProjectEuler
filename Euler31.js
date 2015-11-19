//Correct Answer 73682
var objective = 200, //L2
    l2 = 200,
    l1 = 100, 
    l1Sum = 0,
    p50 = 50,
    p50Sum=0,
    p20 = 20,
    p20Sum=0,
    p10 = 10,
    p10Sum=0,
    p5 = 5,
    p5Sum=0,
    p2 = 2,
    p2Sum=0,
    p1 = 1,
    p1Sum=0,
    count = 0;

while (l1Sum <= objective) {
    while ((p50Sum+l1Sum) <= objective) {
        while ((p20Sum+p50Sum+l1Sum) <= objective) {
            while ((p10Sum+p20Sum+p50Sum+l1Sum) <= objective) {
                while ((p5Sum+p10Sum+p20Sum+p50Sum+l1Sum) <= objective) {
                    while ((p2Sum+p5Sum+p10Sum+p20Sum+p50Sum+l1Sum) <= objective) {
                        while ((p1Sum+p2Sum+p5Sum+p10Sum+p20Sum+p50Sum+l1Sum) <= objective) {
                            if (p1Sum+p2Sum+p5Sum+p10Sum+p20Sum+p50Sum+l1Sum == 200) {
                                count ++;
                            } 
                            p1Sum += p1;
                        } 
                        p1Sum = 0;
                        p2Sum += p2;
                    } 
                    p2Sum = 0;
                    p5Sum += p5;
                } 
                p5Sum = 0;
                p10Sum += p10;
            }
            p10Sum = 0;
            p20Sum += p20;
        }
        p20Sum = 0;
        p50Sum += p50;
    }
    p50Sum = 0;
    l1Sum += l1;
}
var attemptedAnswers = ['73681', '69118'];
if(attemptedAnswers.indexOf(count)) {
    console.error('**wrong**')
}
console.log(count);
