const mark = 1000;
let grade;
if(mark>= 80 && mark <= 100){
    message = `grade A is ${mark}`;
}else if(mark>= 70 && mark <=79){
    message = `Grade B is ${mark}`;
}else if(mark>= 60 && mark <=69){
    message = `Grade C is ${mark}`;
}else if(mark>= 50 && mark <= 59){
    message = `Grade D is ${mark}`;
}else if(mark>= 0 && mark <= 49){
    message = `Grade F is ${mark}`;
}else{
    message = `Grade ERROR is ${mark}`;
}


console.log(message)
