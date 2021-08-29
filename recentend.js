// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = firebase_key;

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const database = firebase.database();
var all_data=[];



database.ref("vote").once("value", result=>{ //get all database data
all_data.push(result.val());



    var Today = new Date();  
    var date_array=[];
    var date_array_filter=[];
    console.log(Today);  
    var date;
    var total_vote1=0;
    console.log(Date.parse(Today));  
    var date_array_location;

    for(var a=1;a<all_data[0].length;a++){
        console.log(all_data[0][a].End);  
        var end = all_data[0][a].End;
        date=Date.parse(end)-Date.parse(Today)
        date_array.push(date);
        if(date>=0){
            date_array_filter.push(date);
        }          
    }
    
    const length = date_array_filter.length;
    console.log("date_array: "+length);



    total_vote=0;

    for(var i=length;i>0;i--){  
      min_data=Math.min.apply(null,date_array_filter);     
      date_array_location=date_array.indexOf(min_data);  
      var total_vote=0;
      for(var a=0;a<Object.keys(all_data[0][date_array_location+1].options).length;a++){
        total_vote = parseInt(total_vote) + parseInt(Object.values(all_data[0][date_array_location+1].options)[a]);
      }

      var table = document.getElementById("myTable");
      var row = table.insertRow(1);
      row.setAttribute("id",date_array_location+1);
      row.setAttribute("onclick","go_vote(this.id)");
      var id = row.insertCell(0);
      var title = row.insertCell(1);
      var start = row.insertCell(2);
      var end = row.insertCell(3);
      var vote = row.insertCell(4);

      id.innerHTML = i;
      title.innerHTML = all_data[0][parseInt(date_array_location+1)].title; 
      start.innerHTML = all_data[0][parseInt(date_array_location+1)].Start;
      end.innerHTML = all_data[0][parseInt(date_array_location+1)].End; 
      vote.innerHTML = total_vote; 

      date_array_filter.splice(date_array_filter.indexOf(min_data),1,0)
      date_array_filter = date_array_filter.filter((a) => a);

      date_array.splice(date_array.indexOf(min_data),1,3)
    }

});
function createvote(){
    location.href="http://127.0.0.1:3000/createvote.html"
  }
function allvote(){
    location.href="http://127.0.0.1:3000/"
}
function hotvote(){
    location.href="http://127.0.0.1:3000/hotvote.html"
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