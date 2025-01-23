// function main(m,n){
//     new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if(isNaN(m) || isNaN(n)){
//                 return reject()
//             }
//             for(let i=m;i<=n;i++){
//                 console.log(i);
//             }
//             return resolve()
//         },5000)
//     })
//     .then(() => console.log("Promise is resolved"))
//     .catch(() => console.log("error occur"))
// }
// main(1, 10)



//BOM-browser object model-to contact to bom we have to go through window
//DOM-document object model-inside dom we are having root element which is document,inside document all html code will be stored in tree kind of structure.
//html divided into 2 parts one is head and another is body.inside head we are having meta tag & title tag.inside body tag all the tags are present
//DOM-->document-->html(head,body)
//each tag in DOM called as node
// DOM is an object.it is an api provided by window.
//DOM is having root element called document.DOM is having life span(page reloads)
//purpose of DOM is used to create ,delete and update a element
//it is used to provide style for an element

//how to convert html structure into DOM tree?

// console.log(window);
// console.log(document);
// console.log(document.URL);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.title);
// document.title = "amazon"
// console.log(document.body);

// console.log(window);
// console.log(document);
// console.log(document.URL);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.title);
// document.title = "amazon"
// console.log(document.body);


// let image = document.images
// console.log(img);
// // console.log(img[0]);
// // console.log(img[1]);
// // console.log(img[2]);

// for(let i=0; i<=img.length; i++){
//     console.log(img[i]);
//     img[i].style.height = "200px"
//     img[i].style.width = "200px"
//     img[i].style.borderRadius = "100%"
//     img[i].alt = "image"
// }

//in-direct access in dom (methods in dom)
// 1) document. getElementById("value")
// 2) document getElementsByClassName ("value")
// 3) document getElementsByTagName ("value")
// 4) document. getElementsByName("value")
// 5) document. querySelector ("value")
// 6) document. querySelectorA11("value")