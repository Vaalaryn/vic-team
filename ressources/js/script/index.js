function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }
let tabCount = 1;

let tabActive = 1;

function openCity(evt, sheetId) {
    // Declare all variables
    var i, tabcontent, tablinks;
    tabActive = sheetId;
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById("div"+sheetId).style.display = "block";
    evt.currentTarget.className += " active";
  }

  var sheets = [
    {title: "Sheet1", id:1}
  ]
  document.getElementById('tab-list').innerHTML += "<button class='tablinks active' onclick='openCity(event, "+sheets[0].id+")'>" + sheets[0].title + '</button>'
  document.getElementById('tabs-container').innerHTML += "<div id='div"+sheets[0].id+"' ondrop='drop(event)' style='display: block' ondragover='allowDrop(event)' class='dropzone tabcontent active'>bla</div>"
  let button = new Button();
  document.getElementById('mySidebar').innerHTML += button.draw();
  button.changeValue('Un text ici');
  function addTab(){
    tabCount++
    let sheet = {title:'Sheet'+ tabCount.toString(), id: tabCount}
    sheets.push(sheet)

    document.getElementById('tab-list').innerHTML += "<button class='tablinks' onclick='openCity(event, "+sheet.id+")'>" + sheet.title + '</button>'
    document.getElementById('tabs-container').innerHTML += "<div id='div"+sheet.id+"' ondrop='drop(event)' ondragover='allowDrop(event)' class='dropzone tabcontent'>test</div>"

  }

  function changeBgCol(event){
    document.getElementById('div'+ tabActive).style.backgroundColor = event

  }
  
