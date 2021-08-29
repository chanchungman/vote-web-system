// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = firebase_key;

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


const database = firebase.database();
var all_data=[];
var total_vote_array=[];

database.ref("vote").once("value", result=>{ //get all database data
    all_data.push(result.val()); //put all the data in array
    console.log(all_data[0].length);

    total_vote=0;

    for(var i=(all_data[0].length-1);i>0;i--){    
      var total_vote=0;
      for(var a=0;a<Object.keys(all_data[0][i].options).length;a++){
        total_vote = parseInt(total_vote) + parseInt(Object.values(all_data[0][i].options)[a]);
      }
      var table = document.getElementById("myTable");
      var row = table.insertRow(1);
      row.setAttribute("id",i);
      row.setAttribute("onclick","go_vote(this.id)");
      
      var id = row.insertCell(0);
      var title = row.insertCell(1);
      var start = row.insertCell(2);
      var end = row.insertCell(3);
      var vote = row.insertCell(4);

      id.innerHTML = i;
      title.innerHTML = all_data[0][i].title; 
      start.innerHTML = all_data[0][i].Start;
      end.innerHTML = all_data[0][i].End; 
      vote.innerHTML = total_vote; 

    }
});





var option_name=2;
function add(){

  let tableRef = document.getElementById("vote-table");
  // Insert a row at the end of the table
  let newRow = tableRef.insertRow(-1);

  // Insert a cell in the row at index 0
  let newCell = newRow.insertCell(0);
  
  // Append a text node to the cell
  let newText = document.createTextNode('New bottom row');
  var id='option'+option_name;
  var input = document.createElement("input");
  input.setAttribute('type', 'radio');
  input.setAttribute('id', id);
  newCell.appendChild(input);
  newCell.appendChild(newText);

  option_name++;
}

function createvote(){
  location.href="http://127.0.0.1:3000/createvote.html"
}
function hotvote(){
  location.href="http://127.0.0.1:3000/hotvote.html"
}
function recentend(){
  location.href="http://127.0.0.1:3000/recentend.html"
}
function go_vote(clicked_id){
  var id = clicked_id;
  console.log(id);
  localStorage.setItem("selected_id",id);//send the selected vote to next page
  location.href="http://127.0.0.1:3000/vote.html"
  return false;
}
function search() {
  var search_value = document.getElementById("search").value;
  console.log(search_value);
  localStorage.setItem("search_value",search_value);//send the selected vote to next page
  location.href="http://127.0.0.1:3000/search.html"
  return false;
}