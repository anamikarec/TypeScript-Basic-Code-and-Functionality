var x = 10;
// x="123"
var str;
str = "Hello";
var isAvail = false;
if (isAvail) {
    console.log("isAvail");
    isAvail = false;
}
else {
    // wait for more time 
}
// Arrays
// array of numbers
// let list : number[] = [1,2,3];
var list = [];
list.push(1);
list.push(2);
list.push(3);
list.push(4);
var char = [];
char.push("a");
char.push("a");
char.push("a");
char.push("a");
// let matrix : number[][] = [[],[]];
// matrix.push[0][0] = 1;
var bool = [false, true];
console.log(x);
// console.log(matrix);
// Tuples
var tuple;
tuple = ["tuple", 1];
// Enums
var ActionType;
(function (ActionType) {
    ActionType[ActionType["GET_TODO_REQUEST"] = 0] = "GET_TODO_REQUEST";
    ActionType[ActionType["GET_TODO_SUCCESS"] = 1] = "GET_TODO_SUCCESS";
    ActionType[ActionType["GET_TODO_FAILURE"] = 2] = "GET_TODO_FAILURE";
})(ActionType || (ActionType = {}));
function reducer(action) {
    switch (action) {
        case ActionType.GET_TODO_REQUEST: {
            console.log("requestiing fro data");
            break;
        }
        case ActionType.GET_TODO_SUCCESS: {
            console.log("success fro data");
            break;
        }
        case ActionType.GET_TODO_FAILURE: {
            console.log("failure fro data");
            break;
        }
    }
}
var action = ActionType.GET_TODO_SUCCESS;
reducer(action);
var n = null;
var u = undefined;
function printData() {
    console.log("printing....");
}
printData();
function add(a, b) {
    return a + b;
}
console.log(add(1, 2));
function printName(firstName, lastName) {
    return firstName + " " + lastName;
}
var res = printName("Anamika", "Gupta");
console.log(res);
function printName2(firstName, lastName) {
    return firstName;
}
var res2 = printName2("Anamika");
console.log(res2);
var todoItem = {
    id: 1,
    title: "Learn Everying in Redux",
    status: false,
    onClick: function (val) { return console.log(val); }
};
todoItem.onClick(5000);
// type
// union/or/and
var users;
var variants;
var grids;
var users;
var myReducer = function (state, action) {
    switch (action.type) {
        case "GET_TODO_REQUEST": {
            console.log("request");
            break;
        }
        case "GET_TODO_SUCCESS": {
            console.log("success");
            break;
        }
        case "GET_TODO_FAILURE": {
            console.log("failed");
            break;
        }
    }
};
// const response : TodoResponseAxios = {
//     // status: 200,
//     data:[{
//         id:1,
//         title: "Learn DSA",
//         status:false,
//         onClick:(val:number) => console.log(val)
//     }]
// }
