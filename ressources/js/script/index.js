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
let tabNumber = 1;

function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
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
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }

  var sheets = [
    {title: "Sheet1", id:1}
  ]
  document.getElementById('tab-list').innerHTML += "<button class='tablinks' onclick='openCity("+sheets[0].id+")'>" + sheets[0].title + '</button>'

  function addTab(){
    tabNumber++
    sheet = {title:'Sheet'+ tabNumber.toString(), id: tabNumber}
    sheets.push(sheet)
    // list(sheets)
    document.getElementById('tab-list').innerHTML += "<button class='tablinks' onclick='openCity("+sheet.id+")'>" + sheet.title + '</button>'

    // sheets.forEach(sheet => 
    // );  
  }

  
  
