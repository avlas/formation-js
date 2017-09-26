function getSyncInfos() {
    const request = new XMLHttpRequest();
    request.open('GET', 'https://api.github.com/users/avlas', false);
    request.send();

    if (request.status === 200) {
        var response = JSON.parse(request.responseText);

        if (response) {
            console.log("Reponse recue: %s", response);

            document.getElementById('gitHubImage').src = response.avatar_url;
            document.getElementById('gitHubPseudo').innerHTML = response.login;
            document.getElementById('gitHubName').innerHTML = response.name;
        }
    } else {
        console.log("Status de la reponse: %d (%s)", request.status, request.statusText);
    }
}

function getAsyncInfos() {
    const request = new XMLHttpRequest();

    request.onreadystatechange = function() {
        // XMLHttpRequest.DONE === 4
        if (this.readyState === XMLHttpRequest.DONE) {
            if (this.status === 200) {
                var response = JSON.parse(request.responseText);

                if (response) {
                    console.log("Reponse reçu: %s", response);

                    document.getElementById('gitHubImage').src = response.avatar_url;
                    document.getElementById('gitHubPseudo').innerHTML = response.login;
                    document.getElementById('gitHubName').innerHTML = response.name;
                }
            } else {
                console.log("Status de la reponse: %d (%s)", this.status, this.statusText);
            }
        }
    };

    request.open('GET', 'https://api.github.com/users/avlas', true);
    request.send();
}

app = {
    init: function () {
        this.getGitHubInfos();
    },
    getGitHubInfos: function(){
        var allSendButtons = document.getElementsByClassName('send');
        if(allSendButtons && allSendButtons[0]) {
            var sendButton = allSendButtons[0];

            function btnClickHandler(event){
                if(event.type === 'click') {
                    // getSyncInfos();
                    getAsyncInfos();
                }
            };

            sendButton.onclick = btnClickHandler;
        }
    }
};