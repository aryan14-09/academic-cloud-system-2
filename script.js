let resources = JSON.parse(localStorage.getItem("resources")) || [];

function uploadResource(){

let title = document.getElementById("title").value;
let file = document.getElementById("file").files[0];

if(!file){
alert("Please select a file");
return;
}

let reader = new FileReader();

reader.onload = function(e){

let resource = {
title: title || file.name,
fileData: e.target.result,
fileName: file.name
};

resources.push(resource);

localStorage.setItem("resources", JSON.stringify(resources));

alert("File uploaded successfully!");

}

reader.readAsDataURL(file);

}

function loadResources(){

let list = document.getElementById("resourceList");

if(!list) return;

list.innerHTML="";

resources.forEach((res,index)=>{

let item = document.createElement("div");

item.innerHTML = `
<p>${res.title} - ${res.fileName}</p>
<a href="${res.fileData}" download="${res.fileName}">
<button>Download</button>
</a>
`;

list.appendChild(item);

});

}

loadResources();
