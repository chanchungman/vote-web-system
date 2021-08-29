

console.log(localStorage.getItem("selected_id"));
var selected_id=localStorage.getItem("selected_id");
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = firebase_key;
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


const database = firebase.database();
var all_data=[];
var Today = new Date();   
console.log(Today);       
console.log(Today.getMonth().toString().length);
if(Today.getMonth().toString().length==1){
    var Today1 = Today.getFullYear()+"-0"+(Today.getMonth()+1)+"-"+Today.getDate();
        if(Today.getDate().toString().length==1){
            var Today1 = Today.getFullYear()+"-0"+(Today.getMonth()+1)+"-0"+Today.getDate();
        }
}
else{
var Today1 = Today.getFullYear()+"-"+(Today.getMonth()+1)+"-"+Today.getDate();
    if(Today.getDate().toString().length==1){
        var Today1 = Today.getFullYear()+"-"+(Today.getMonth()+1)+"-0"+Today.getDate();
    }    
}
console.log(Today);  
database.ref("vote").once("value", result=>{ //get all database data
    all_data.push(result.val()); //put all the data in array
    //console.log(Object.keys(all_data[0][selected_id].voter));
    var start = all_data[0][selected_id].Start;
    var end = all_data[0][selected_id].End;
    var vote_count=[];

    document.getElementById("title").innerHTML = all_data[0][selected_id].title;
    document.getElementById("start").innerHTML = "Start Time: "+start;
    document.getElementById("end").innerHTML = "End Time: "+end;
    for(var i=1;i<=(Object.keys(all_data[0][selected_id].options).length);i++){ //show all the option data
        var option_name=document.createElement('span');
        option_name.innerText=(Object.keys(all_data[0][selected_id].options)[i-1]);
        option_name.setAttribute("id", "option_name");

        vote=document.createTextNode('  vote:   ');

        var vote_num=document.createElement('span');

        vote_num.innerText=(Object.values(all_data[0][selected_id].options)[i-1]);
        vote_num.setAttribute("id", "vote_num");

        
        vote_count.push(Object.values(all_data[0][selected_id].options)[i-1]);

        var id='option'+i;
        var input = document.createElement("input");
        var br1 = document.createElement("br");
        var br2 = document.createElement("br");
        var br3 = document.createElement("br");
        var div = document.createElement("div");
        div.setAttribute("style", "display:inline");
        div.setAttribute("id", "vote_result"+i);
        input.setAttribute('type', 'radio');
        input.setAttribute('value', Object.keys(all_data[0][selected_id].options)[i-1]);
        input.setAttribute('name', "vote"+selected_id);
        input.setAttribute("class","radio");

        var new1 = document.getElementById("new");
        var new2 = document.getElementById("vote_num");
        var new3 = document.getElementById("vote_result");
        new1.appendChild(input);
        new1.appendChild(option_name);
        new1.appendChild(br1);
        new2.appendChild(vote);
        new2.appendChild(vote_num);

        new2.appendChild(br2);
        new3.appendChild(div);
        new3.appendChild(br3);

    }
    if (Today1>end){ //checK the vote is end
        document.getElementById("time_left").innerHTML="This vote has ended!!!";
        document.getElementById("time_left").style.color = "red";
        document.getElementById("hkid").disabled = true;
        document.getElementById("vote").disabled = true;
        console.log("end!");
    }
    else{
        document.getElementById("status").remove();
        var time_left=(Date.parse(end)-Date.parse(Today1))/(1000*60*60*24);
        document.getElementById("time_left").innerHTML="Remaining Day: "+"<br></br>"+time_left;
        console.log("未end");
    }
        if(all_data[0][selected_id].End<Today1)//check the vote is end?
        { 
            max_vote=Math.max.apply(null,vote_count);           
            console.log(max_vote);
            var winner=[];
            for(var i=0;i<=vote_count.length;i++){
                if(max_vote == vote_count[i]){
                    console.log("vote_count[i]: "+vote_count[i]);
                    winner.push(i+1);
                    console.log(winner);
                }
            }
            var result1 = document.getElementById("vote_result"+winner);
            console.log("vote_result"+winner);
            for(var i=0;i<winner.length;i++){
            document.getElementById("vote_result"+winner[i]).innerHTML = "WINNER";
            }
        }
        console.log(parseInt(end))
});

function vote1(){
    hkid=document.getElementById("hkid").value


    str = document.getElementById("hkid").value;    //HKID validation
    var strValidChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    // basic check length
    if (str.length < 8){
    alert("Please enter the correct format");
    return false;
    }
    // handling bracket
    if (str.charAt(str.length-3) == '(' && str.charAt(str.length-1) == ')')
    {
    str = str.substring(0, str.length - 3) + str.charAt(str.length -2);
    // convert to upper case
    str = str.toUpperCase();
    // regular expression to check pattern and split
    var hkidPat = /^([A-Z]{1,2})([0-9]{6})([A0-9])$/;
    var matchArray = str.match(hkidPat);
    // not match, return false
    }
    if (matchArray == null){
        alert("Add () to the last number");
    return false;
    }




    var radios = document.getElementsByName("vote"+selected_id);
    var selected_radio
    
    for (var x = 0, length = radios.length; x < length; x++) {
        if (radios[x].checked) {
        // do whatever you want with the checked radio
        selected_radio=radios[x].value;
        
        // only one radio can be logically checked, don't check the rest
        break;
            }
        }

    var hkid_data= {

    };//add the voted hkid number
    all_hkid=Object.keys(all_data[0][selected_id].voter).length;

    for(var i=0;i<=(all_hkid);i++ ){ 

        if(i!=(Object.keys(all_data[0][selected_id].voter).length)){

            var db_hkid = Object.keys(all_data[0][selected_id].voter)[i];

            if(hkid == db_hkid) //check the hkid have repeat?
            {
                alert("This hkid is repeat and voted "+Object.values(all_data[0][selected_id].voter)[i]);
                return;
            }
            hkid_data[(Object.keys(all_data[0][selected_id].voter)[i])]=(Object.values(all_data[0][selected_id].voter)[i]);
            
    }
        else{

            hkid_data[hkid]=selected_radio;
        }
    }


    var vote_number=(Object.values(all_data[0][selected_id].options)[x]);//攞票數
    
    console.log(Object.values(all_data[0][selected_id].options)[x]);

    var vote_data= {};//add the voted hkid number
    vote_data[Object.keys(all_data[0][selected_id].options)[x]]=vote_number+1;//加一票

    
    if(Today1>all_data[0][selected_id].End)//check the vote is end?
    { 
        alert("The vote is end.");
    }

    else if (hkid ==''){    //hkid null?
        alert("please insert hkid");
    }

    else if (hkid.length < 8){    //hkid null?
        alert("please insert correct hkid");
    }

    else if (selected_radio == undefined){  //non radio select
        alert("please select radio");
    }

    else{
    database.ref('vote').child(selected_id).child("voter").set(hkid_data);
    database.ref('vote').child(selected_id).child("options").update(vote_data);
    console.log("upload succcess!!!!")
    location.href = "http://127.0.0.1:3000/vote.html"
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