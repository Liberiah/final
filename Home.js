var Home = {};

function displayAccount()
{
    alert(newUser.Username);
    alert(newUser.Password);
    alert(newUser.EmailAdd);
    alert(newUser.EmailCon);
}

function createAccount()
{
    var newUser = new Object();
    newUser.Username = document.getElementById("username1");
    newUser.Password = document.getElementById("password1");
    newUser.EmailAdd = document.getElementById("EmailAdd");
    newUser.EmailCon = document.getElementById("EmailCon");
    //Not sure why the line below doesn't work. I would try and figure that out
    //console.log(JSON.stringify(newUser));
    //
    console.log(newUser);
}

//Home.Button1Click = function()
//{
    //console.log("button click");
    /*
    $.get("Home/GetAccountInformation", function(rawResponseData, status)
    {
        console.log("button click");
        alert(rawResponseData);
        var deserializedData=JSON.parse(rawResponseData);
        var person = deserializedData;
    });
    */
//}


Home.Button1Click = function () {

    console.log("button 1 clicked");
    console.log($("#username").val());

    $.ajax
    ({
        url: "Home/Login",
        data: {
            Username: $("#username").val(),
            Password: $("#password").val()
        },
        success: function (result) { alert(result); }
    }); 
}
   
Home.Button2Click = function () {

    console.log("button2 clicked");
    $.ajax
    ({
        url: "Home/CreateAccount",
        
        data: {
            Username: $("#username1").val(),
            Password: $("#password1").val(),
            EmailAdd: $("#emailadd").val(),
            EmailCon: $("#emailcon").val()
        },
        success: function (result) { alert(result); $("#message_response").html(result)}
    });
}


    
$(document).ready(function () {
    $(".button1").click(Home.Button1Click);
    $(".button2").click(Home.Button2Click);

    
});
