const mark = 80;

let message;
switch(mark){
    case ((mark >= 80 && mark <= 100 ? mark :80)):
        message = `grade A is ${mark}`;
        break;
    case ((mark >= 70 && mark < 80 ? mark :70)):
        message = `Grade B is ${mark}`;
        break;
    case ((mark >= 60 && mark < 70 ? mark :69)):
        message = `Grade C is ${mark}`;
        break;
    case ((mark >= 50 && mark < 60 ? mark :59)):
        message = `grade D is ${mark}`;
        break;
    default:
        message = `ERROR is ${mark}`;
}
console.log(message)