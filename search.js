console.log(localStorage.getItem("search_value"));
var search_value=localStorage.getItem("search_value");

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = firebase_key;

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const database = firebase.database();
var all_data=[];
var true_location;
var total_vote_array=[];
total_vote=0;
database.ref("vote").once("value", result=>{ //get all database data
    all_data.push(result.val());


    for(var i=(all_data[0].length-1);i>0;i--){  
      if(all_data[0][i].title.includes(search_value)){
       
      
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
      
      total_vote_array.push(total_vote);
    }
  }
    console.log(total_vote_array)
});





function createvote(){
  location.href="http://127.0.0.1:3000/createvote.html"
}
function hotvote(){
  location.href="http://127.0.0.1:3000/hotvote.html"
}
function recentend(){
  location.href="http://127.0.0.1:3000/recentend.html"
}
function allvote(){
  location.href="http://127.0.0.1:3000/"
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