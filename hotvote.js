
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = firebase_key;

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


const database = firebase.database();
var all_data=[];
var total_vote_array=[];
var r=0;
database.ref("vote").once("value", result=>{ //get all database data
    all_data.push(result.val()); //put all the data in array

      for(var i=(all_data[0].length-1);i>0;i--){  
      var total_vote=0;
        for(var a=0;a<Object.keys(all_data[0][i].options).length;a++){
          total_vote=parseInt(total_vote) + parseInt(Object.values(all_data[0][i].options)[a]);
        }
        total_vote_array.push(total_vote);
      }
    total_vote_array=total_vote_array.reverse()
    for(var i=(all_data[0].length-1);i>0;i--){    
      
      console.log(total_vote_array)
      minvote=Math.min.apply(null, total_vote_array);
      console.log(minvote);
      console.log(total_vote_array.indexOf(minvote));
      var table = document.getElementById("myTable");
      var row = table.insertRow(1);
      row.setAttribute("id",total_vote_array.indexOf(minvote)+1);
      row.setAttribute("onclick","go_vote(this.id)");
      var id = row.insertCell(0);
      var title = row.insertCell(1);
      var start = row.insertCell(2);
      var end = row.insertCell(3);
      var vote = row.insertCell(4);

      id.innerHTML = i;
      title.innerHTML = all_data[0][total_vote_array.indexOf(minvote)+1].title; 
      start.innerHTML = all_data[0][total_vote_array.indexOf(minvote)+1].Start;
      end.innerHTML = all_data[0][total_vote_array.indexOf(minvote)+1].End; 
      vote.innerHTML = total_vote_array[total_vote_array.indexOf(minvote)];  
      
      //removeItemOnce(total_vote_array, minvote)
      //console.log(total_vote_array)
      console.log("~~~~~")
      total_vote_array.splice(total_vote_array.indexOf(minvote),1,Math.max.apply(null, total_vote_array)+1)
      //total_vote_array = total_vote_array.filter((a) => a);

    }

});



function removeItemOnce(arr, value) {
  var index = arr.indexOf(value);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
}
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
function allvote(){
  location.href="http://127.0.0.1:3000/"
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