// var x = 10;
// x="123"

var str : string;
str="Hello"

var isAvail : boolean = false;

if(isAvail) {
    console.log("isAvail");
    isAvail = false;
}
else{
 // wait for more time 
}
// Arrays
// array of numbers

// let list : number[] = [1,2,3];
var list : number[] = [];

list.push(1);
list.push(2);
list.push(3);
list.push(4);

var char : string[] = [];
char.push("a");
char.push("a");
char.push("a");
char.push("a");

// let matrix : number[][] = [[],[]];

// matrix.push[0][0] = 1;

var bool : Array<boolean> = [false, true];
console.log(x);
// console.log(matrix);


// Tuples

var tuple :[string,number];
tuple = ["tuple",1];

// Enums
enum ActionType {
    GET_TODO_REQUEST,
    GET_TODO_SUCCESS,
    GET_TODO_FAILURE
}
function reducer(action:ActionType){
    switch(action){
        case ActionType.GET_TODO_REQUEST:{
            console.log("requestiing fro data");
            break;
        }
        case ActionType.GET_TODO_SUCCESS:{
            console.log("success fro data");
            break;
        }
        case ActionType.GET_TODO_FAILURE:{
            console.log("failure fro data");
            break;
        }
    }
}

const action = ActionType.GET_TODO_SUCCESS;
reducer(action);

let n : null = null;
let u : undefined = undefined;

function printData() : void{
console.log("printing....")
}
printData();

function add(a:number, b:number) : number{
    return a + b;
}

console.log(add(1,2));

function printName(firstName:string,lastName:string):string{
    return firstName + " " + lastName;
}

let res = printName("Anamika","Gupta");
console.log(res);

function printName2(firstName:string,lastName?:string):string{
    return firstName;
}

let res2 = printName2("Anamika");
console.log(res2);

interface TodoItem{
    id:number;
    title:string;
    status:boolean;
    onClick : (id:number) => void;
}

const todoItem : TodoItem = {
    id:1,
    title:"Learn Everying in Redux",
    status :false,
    onClick : (val:number) => console.log(val)
}
todoItem.onClick(5000);

// type
// union/or/and

var users : "admin" | "user" | "superadmin"
let variants : "h1" | "h2" | "h3" | "h4"

let grids : 1 | 2 | 3 | 4 | 5 | 6

type Users = "admin" | "user" | "superadmin"
var users : Users;

type ActionTypes2 = "GET_TODO_REQUEST" | "GET_TODO_SUCCESS" | "GET_TODO_FAILURE"

type State = {
    todos?:TodoItem[] | null;
    isLoading?:boolean | null;
    isError?:boolean | null;
}

type Actions = {
    type:ActionTypes2;
    payload:State
}

const myReducer = (state:State,action:Actions) => {
    switch(action.type) {
        case "GET_TODO_REQUEST":{
            console.log("request");
            break;
        }
        case "GET_TODO_SUCCESS":{
            console.log("success");
            break;
        }
        case "GET_TODO_FAILURE":{
            console.log("failed");
            break;
        }
    }
}
// console.log(myReducer({},{type:"GET_TODO_REQUEST",payload:{isLoading:true}}))

// and (&)
interface Response200{
    status:200 | 201 | 202 | 204 | 304,
    error:"network error" | "no data"
}

interface TodoResponse{
    data:TodoItem[]
}

type TodoResponseAxios = Response200 & TodoResponse;

// const response : TodoResponseAxios = {
//     // status: 200,
//     data:[{
//         id:1,
//         title: "Learn DSA",
//         status:false,
//         onClick:(val:number) => console.log(val)
//     }]
// }

// class Nodes<T>{
//     node: T
//     id:string
//     constructor(node: T) {
        // this.node = node
//     }
// }