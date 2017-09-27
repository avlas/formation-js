// function syncProfilGitHub() {
//     const request = new XMLHttpRequest();

//     request.open('GET', 'https://api.github.com/users/avlas', false);   // false => c'est synchrone
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

    request.open('GET', 'https://api.github.com/users/avlas', true);      // true => asynchrone
    request.send();
}

// var asyncProfilRepositories = function (window) {
//     console.log('function asyncProfilRepositories');
//
//     if(window.repoResponse[0]){
//         document.getElementById('gitHubRepoName').innerHTML = window.repoResponse[0].name;
//         document.getElementById('gitHubRepoDesc').innerHTML = window.repoResponse[0].description;
//     }
// };

function asyncProfilRepositories(window) {
    const request = new XMLHttpRequest();

    request.onreadystatechange = function() {
        // XMLHttpRequest.DONE === 4
        if (this.readyState === XMLHttpRequest.DONE) {
            if (this.status === 200) {
                var response = JSON.parse(request.responseText);

                if (response) {
                    console.log("Reponse reçu: %s", response);

                    window.repoResponse = response[0];

                    if(window.repoResponse[0]){
                        document.getElementById('gitHubRepoName').innerHTML = window.repoResponse[0].name;
                        document.getElementById('gitHubRepoDesc').innerHTML = window.repoResponse[0].description;
                    }
                }
            } else {
                console.log("Status de la response: %d (%s)", this.status, this.statusText);
            }
        }
    };

    // Récupération d'un paramètre dans une URL
    // var url = new URL(window.location);
    // var profilName = url.searchParams.get('name');
    // console.log('profilName LOCAL ', profilName);
    console.log('profilName GLOBAL', window.profilName);

    request.open('GET', 'https://api.github.com/users/' + window.profilName + '/repos', true); // true => asynchrone
    request.send();
/*
    if (asyncProfilRepositories && typeof asyncProfilRepositories === 'function') {         // synchrone
        setTimeout(asyncProfilRepositories, 1000, window);                                  // asynchrone
    }*/
}

app = {
    init: function () {
        this.gitHubProfil();

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
    gitHubProfilRepositories : function() {
        var gitHubImage = document.getElementById('gitHubImage');

        if(gitHubImage) {
            function clickHandler(event){
                if(event.type === 'click') {
                    //Redirect page2
                    window.location = 'page2.html?name=' + window.profilName;

                    asyncProfilRepositories(window);
                }
            };

            gitHubImage.onclick = clickHandler;
        }
    }
};