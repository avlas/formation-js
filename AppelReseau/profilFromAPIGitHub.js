// function syncProfilGitHub() {
//     const request = new XMLHttpRequest();
//     request.open('GET', 'https://api.github.com/users/avlas', false);
//     request.send();
//
//     if (request.status === 200) {
//         var response = JSON.parse(request.responseText);
//
//         if (response) {
//             console.log("Reponse recue: %s", response);
//
//             document.getElementById('gitHubImage').src = response.avatar_url;
//             document.getElementById('gitHubPseudo').innerHTML = response.login;
//             document.getElementById('gitHubName').innerHTML = response.name;
//         }
//     } else {
//         console.log("Status de la reponse: %d (%s)", request.status, request.statusText);
//     }
// }

function asyncProfilGitHub() {
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
                    window.profilName = response.login;

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

function asyncProfilRepositories(window) {
    const request = new XMLHttpRequest();

    request.onreadystatechange = function() {
        // XMLHttpRequest.DONE === 4
        if (this.readyState === XMLHttpRequest.DONE) {
            if (this.status === 200) {
                var response = JSON.parse(request.responseText);

                if (response) {
                    console.log("Reponse reçu: %s", response);

                    window.repoResponse = response;
                }
            } else {
                console.log("Status de la reponse: %d (%s)", this.status, this.statusText);
            }
        }
    };

    // Récupération d'un paramètre dans une URL
    var url = new URL(window.location);
    var profilName = url.searchParams.get('name');
    console.log('profilName', profilName);

    request.open('GET', 'https://api.github.com/users/' + profilName + '/repos', true);
    request.send();
}

app = {
    init: function () {
        this.gitHubProfil();

      //  this.redirectPage2();

        this.gitHubProfilRepositories();
    },
    gitHubProfil: function(){
        var allSendButtons = document.getElementsByClassName('send');
        if(allSendButtons && allSendButtons[0]) {
            var sendButton = allSendButtons[0];

            function btnClickHandler(event){
                if(event.type === 'click') {
                    // getSyncInfos();
                    asyncProfilGitHub();
                }
            };

            sendButton.onclick = btnClickHandler;
        }
    },
    // redirectPage2 : function() {
    //     var gitHubImage = document.getElementById('gitHubImage');
    //
    //     if(gitHubImage) {
    //         function clickHandler(event){
    //             if(event.type === 'click') {
    //                 window.location = 'page2.html/name=' + window.profilName;
    //
    //                 setTimeout(this.gitHubProfilRepositories(), 1000);
    //             }
    //         };
    //
    //         gitHubImage.onclick = clickHandler;
    //     }
    // },
    gitHubProfilRepositories : function() {
        var gitHubImage = document.getElementById('gitHubImage');

        if(gitHubImage) {
            function clickHandler(event){
                if(event.type === 'click') {

                    setTimeout( asyncProfilRepositories(window), 1000);

                    //Redirect page2
                    window.location = 'page2.html?name=' + window.profilName;

                    if(window.repoResponse){
                        document.getElementById('gitHubRepoName').innerHTML = window.repoResponse.name;
                        document.getElementById('gitHubRepoDesc').innerHTML = window.repoResponse.description;
                    }
                }
            };

            gitHubImage.onclick = clickHandler;
        }
    }
};