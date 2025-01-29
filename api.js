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

// fetch present in windowm 
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
//         console.log(x.id)

//         document.body.innerHTML  += `<h1>${x.name}</h1>`
//         document.body.innerHTML  += `<h2>${x.id}</h2>`
//         document.body.innerHTML  += `<h2>${x.designation}</h2>`

    
//     })
// })

// when one then method works properly we can use another then method and it is called promise chaining



// async () => {
//     let data = await fetch("data.json")
//     console.log(data)
//     let res = await data.json()
//     console.log(res)

//     res.map((res) => {
//         console.log(res);
//         document.body.innerHTML  += <h1>${res.name}</h1>
//     })
// }

let btn = document.getElementById("btn")
console.log(btn);

btn.onclick = () => {
    let search = document.getElementById("search").value 
    console.log(search);
    let page = 10
    window.fetch(`https://pixabay.com/api/?key=36434946-acc22cf6e0589aeef704c8b24&q=${search}&image_type=photo&pretty=true&per_page=${page}`)
    .then((data) => data.json())
    .then((res) => {
        console.log(res);
        console.log(res.hits);
        res.hits.map((x) => {
            console.log(x)

            let demo = document.getElementById("demo")
            console.log(demo)
            demo.innerHTML +=`<img src = ${x.previewURL} />`
        })
    })
}

