// (function ()
// {
//     console.log("hello");
// })();
// ((a,b) => {
//     console.log(a + b);
// })(10,10);
// (function demo()
// {
//     console.log("hello world");
// })();

// arr = [10, 20, "hello",true, 1n, undefined]
// console.log(arr);

// arr1=new Array(10,20,"hello",true)
// console.log(arr1);

// (function ()
// {
//     console.log("hello");
// })();

// ((a,b) => {
//     console.log(a + b);
// })(10,10);

// (function demo()
// {
//     console.log("hello world");
// })();

// //declaration way
// let arr = [10 , 20 , "hello" , true ,1n , undefined]
// console.log(arr);

// //Using new keyword
// let arr1 = new Array(10 , 20 , "hello" , true)
// console.log(arr1);

//declaration way

// let obj = {
//     name : "abhi" ,
//     id : 1 ,
//     arr : [10 , 20 , 30],
//     boolean : true ,
//     demo : function()
//     {
//         console.log("hello")
//     }
// }

//     console.log(obj);
//     console.log(obj.name);

// function obj1(name, id){
//     this.name = name;
//     this.id = id;
// }
// let p1 = new obj1("Ammu",1)
// console.log(p1);
// console.log(p1.name);
// console.log(p1.id);


function main(m,n)
{
    setTimeout(() => { 
    for(let i = m;i<=n; i++)
    {
        console.log(i);
    }
},5000) 

}
main(1, 10)

function sample()
{
    console.log("no's printed");
}

// window.setTimeout(() => {
//     console.log("Iam settimeout");
// },5000)

// window.setInterval(() =>{
//     console.log("Iam setinterval");

// },3000)

