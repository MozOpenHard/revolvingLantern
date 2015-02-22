(function(){
  window.onload = function(){
    init();
  };
  
  function init(){
    console.log("start");
    
    var leftbtn = document.getElementById("leftbtn");
    leftbtn.addEventListener("click",function(){
      console.log("btn click");
      send("http://lantern.local:3001/left/");
    });
    var rightbtn = document.getElementById("rightbtn");
    rightbtn.addEventListener("click",function(){
      console.log("btn click");
      send("http://lantern.local:3001/right/");
    });
    var autobtn = document.getElementById("autobtn");
    autobtn.addEventListener("click",function(){
      console.log("btn click");
      send("http://lantern.local:3001/auto/");
    });
  }
  
  function send(url){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function(){
      // 本番用
      if (xhr.readyState === 4 && xhr.status === 200){
        var result1 = document.getElementById('xhr-result1');
        result1.value = xhr.responseText;
      }
      // ローカルファイル用
      if (xhr.readyState === 4 && xhr.status === 0){
        var result1 = document.getElementById('xhr-result1');
        result1.value = xhr.responseText;
      }
    };
    xhr.send(null);
  }
  
})();
