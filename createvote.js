// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = firebase_key;

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
  firebase.analytics();

const database = firebase.database();
var option_name=2;

var all_data=[];

database.ref("vote").once("value").then(result=>{ //get all database data
    all_data.push(result.val()); //put all the data in array
    console.log(all_data[0]);
});



function add(){ //add the vote option intput bar
    var id='option '+option_name;
    var input = document.createElement("input");
    var br1 = document.createElement("br");
    input.setAttribute('type', 'text');
    input.setAttribute('placeholder', 'Voting options:');
    input.setAttribute('id', id);
    var new1 = document.getElementById("new");
    new1.appendChild(br1);
    new1.appendChild(input);
    option_name++;
}

function storedata() {

 //count  next upload data id
    var title = document.getElementById("title").value;
    var start = document.getElementById("start").value;
    var end = document.getElementById("end").value;
    console.log(option_name);
        var option=[]
    for (let i = 1; i < option_name; i++) {  //get all vote option
        option.push(document.getElementById('option '+i).value);

    }
    console.log(option);
    const option_filter = option.filter((a) => a);
    console.log(option_filter);
    let data = { 
        id: all_data[0].length,
        Start: start,
        End: end,
        title: title,
        options:{

        },      
        voter:{

        }
    };
    data.voter[0]="";
     for (let i = 0; i < option_filter.length; i++) {  //get all vote option
        console.log(option_filter[i]+" :0");
        data.options[option_filter[i]]=0;
        console.log(data);
    }
    if(title==""){
        alert("please insert vote title");
    }
    else if(start==""){
        alert("please insert the start time");
    }
    else if(end==""){
        alert("please insert the end time");
    }
    else if(end<=start){
        alert("End time must be greater than start time");
    }
    else if(option_filter==""){
        alert("please insert the option");
    }
    else{
        database.ref("vote").child(all_data[0].length.toString()).set(data);  
        location.href = "http://127.0.0.1:3000/createvote.html";
    }
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
  function search() {
    var search_value = document.getElementById("search").value;
    console.log(search_value);
    localStorage.setItem("search_value",search_value);//send the selected vote to next page
    location.href="http://127.0.0.1:3000/search.html"
    return false;
  }






