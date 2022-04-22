console.log("Working AJAX/JQUERY");

$("#b1").click(function(){
    $("#p1").hide();
});
$("#b2").click(function(){
    $("#p1").show();
});


$(("#b3")).click(function(){
    $.ajax({
        url : "https://jsonplaceholder.typicode.com/todos/12",
        type : "GET",
        success : function(data){
            console.log(data);
            document.getElementById("p2").innerText = data.title;
            // document.getElementById("p3").innerText = data.body;
        }
    })
})