function newElement() {
  var li = document.createElement('li');
  var inputValue = document.getElementById('TodoItem').value + ' ';
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  document.getElementById('list').appendChild(li);
  document.getElementById('TodoItem').value = "";
  var button = document.createElement('button');
  var txt = document.createTextNode("Delete");
  button.className = "delete";
  button.appendChild(txt);
  li.appendChild(button);
}

var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
  // debugger;
    if(ev.target.tagName === "INPUT") {
       ev.target.classList.toggle('checked');
       var el = ev.target.nextSibling;
       el.classList.toggle('checked');
       console.log(el);
    } else if(ev.target.tagName === "BUTTON") {
       var node = ev.target.parentNode;
       node.remove();
    }
}, false);