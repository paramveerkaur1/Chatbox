

app.controller('chatboxCtrl', function ($scope) {

    $scope.messageString;   //obtained from text input entered by user

    //function called on clicking the Send Message button
    $scope.SendMessage=function()
    {
        var newMessage = document.createElement('div');
        var newImage = document.createElement("img");
        var newText = document.createElement("text");
        newImage.src = "https://freeiconshop.com/wp-content/uploads/edd/person-girl-flat.png";      //can be replaced by any other image from any api call
        newText.innerText = $scope.messageString;
        newMessage.appendChild(newText);
        newImage.classList.add('dimen50');
        newImage.classList.add('pull-right');
        newMessage.appendChild(newImage);
        newMessage.classList.add('sent');
        document.getElementById('messageBody').appendChild(newMessage);
        $scope.messageString = "";
        var scroll = document.getElementById('messageBody');
        scroll.scrollTop = scroll.scrollHeight;
        scroll.animate({ scrollTop: scroll.scrollHeight });
       

    }


    $scope.msgReceivedString;           //can be obtained from the server by calling relevant apis  

    //function to be called at regular intervals to update the received message in chat window
    $scope.ReceiveMessage = function () {
        var newMessage = document.createElement('div');
        var newImage = document.createElement("img");
        var newText = document.createElement("text");
        newImage.src = "https://x.dpstatic.com/d/avatars/l/905/905144.jpg?1511195787";          //can be replaced by any other image from any api call
        newText.innerText = $scope.msgReceivedString;
        newMessage.appendChild(newText);
        newImage.classList.add('dimen50');
        newImage.classList.add('pull-left');
        newMessage.appendChild(newImage);
        newMessage.classList.add('received');
        document.getElementById('messageBody').appendChild(newMessage);
        $scope.messageString = "";
        var scroll = document.getElementById('messageBody');
        scroll.scrollTop = scroll.scrollHeight;
        scroll.animate({ scrollTop: scroll.scrollHeight });

    }
})