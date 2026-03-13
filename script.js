let resources = JSON.parse(localStorage.getItem("resources")) || [];

function upload(){

let title = document.getElementById("title").value;
let file = document.getElementById("file").files[0];

let resource = {
title:title,
fileName:file.name
};

resources.push(resource);

localStorage.setItem("resources",JSON.stringify(resources));

alert("Resource uploaded successfully");

}

function loadResources(){

let list=document.getElementById("resources");

resources.forEach(r=>{

let li=document.createElement("li");

li.innerHTML=r.title+" - "+r.fileName;

list.appendChild(li);

});

}

if(document.getElementById("resources")){
loadResources();
}