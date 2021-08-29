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