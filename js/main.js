var table = document.getElementById("tabl");

function AddDialog(){
    var row = document.createElement("tr");
    row.className = "todo";
    var td0 = document.createElement("td");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var text = document.createTextNode("Click me to Add");
    td0.appendChild(text);
    td0.onclick = function() {Add(this)};
    var img = document.createElement("img");
    td1.appendChild(img);
    img.src = "img/tick1.png";
    var img2 = document.createElement("img");
    td2.appendChild(img2);
    img2.src = "img/cross1.png";
    td1.onclick = function(){chngclass(this.parentNode)};
    td2.onclick = function(){del(this.parentNode)};
    row.appendChild(td0);
    row.appendChild(td1);
    row.appendChild(td2);
    table.appendChild(row);
}

function Add(elmnt){
    elmnt.onclick = function() {
        return false;
    };
    var bn = document.createElement("button");
    var textt = document.createTextNode("Update"); 
    var inpt = document.createElement("input");
    inpt.value = elmnt.childNodes[0].textContent;
    var tex = elmnt.childNodes[0];
    tex.remove();
    elmnt.appendChild(inpt);
    bn.appendChild(textt);
    elmnt.appendChild(bn);
    bn.onclick = function(){chngtxt(elmnt)};
}

function chngtxt(elmnt){
    var inpt = elmnt.childNodes[0];
    var butt = elmnt.childNodes[1];
    var x = inpt.value;
    inpt.remove();
    butt.remove();
    var txt = document.createTextNode(x);
    elmnt.appendChild(txt);
    elmnt.onclick = function(){Ad(elmnt)};
}

function Ad(elmnt){
    elmnt.onclick = function() {Add(elmnt)};
}

function chngclass(elmnt){
    elmnt.className = "done";
    var x = elmnt.childNodes[1];
    x.onclick = function(){chngclass2(elmnt)};
}

function chngclass2(elmnt){
    elmnt.className = "todo";
    var x = elmnt.childNodes[1];
    x.onclick = function(){chngclass(elmnt)};
}

function del(elmnt){
    elmnt.remove();
}