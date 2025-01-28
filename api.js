// JSON (java Script object notation)
// IT is a plain text file where data will be stored in the form of key and value pair where all keys enclosed with double quotes

// How to create JSON?
// step1: create a .json file.
// step2: to create json we cannot use undefined & function datatype.
//        In json we store data in array of obj format [{},{},{}]

// Methods in JSON:
// 1. Stringify() -> convert obj to json type
// 2. Parse() -> convert json type to obj format


// api ---> two types
// 1.SOAP-Source Object Access Protocol -->HTTP,XHR(XML HTTP request ,also called AJAX)
// 2.REST-Representational State Transfer---> JSON it support more than 21 programming languages





// let obj = {
//    name : "abhi" ,
//    id : 1,
//    designation : "developer"
// }
// console.log(obj);

// let obj1 = JSON.stringify(obj)
// console.log(obj1);

// let obj2 = JSON.parse(obj1)
// console.log(obj2);






// we can fetch in 3 ways
// 1.fetch() method
// 2.ajax

//fetch present in windowm 
// let a =windows.fetch()
// console.log(a)



// window.fetch("data.json")
// .then((data) => data.json())
// .then((res) => {
//     console.log(res)
//     // console.log(res[0])
//     // console.log(res[1])
//     res.map((x) => {
//         console.log(x)
//         console.log(x.name)
    
//     })
// })



async () => {
    let data = await fetch("data.json")
    console.log(data)
    let res = await data.json()
    console.log(res)

    res.map((res) => {
        console.log(res);
        document.body.innerHTML  += <h1>${res.name</h1>
    })
}
