'use strict';
let questionArea = document.querySelector('#question-area');

window.onload = function () {
    fetch("questions/",
        {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            if (response.status !== 200) {

                return Promise.reject();
            }
            return response.json();
        })
        .then(products => {
            products.forEach(function (item, question) {
                drawQuestion(item);
            });
        })
        .catch(() => console.log('Error messages'));
};

function drawQuestion(question) {
    var questionElement  =  document.createElement('ul');

    var questionMsg = document.createElement('li');
    var hrefMsg = document.createElement('a');
        hrefMsg.setAttribute('href','https:/');
    var text = document.createTextNode(question.message);
        hrefMsg.appendChild(text);
        questionMsg.appendChild(hrefMsg);
        questionElement.appendChild(questionMsg);

    var underMsg = document.createElement('li');
        underMsg.setAttribute('class','liMsg');
    var questionUser = document.createElement('div');
        questionUser.setAttribute('class','divUnderMsg');
    var text = document.createTextNode(question.student.userName);
        questionUser.appendChild(text);
        underMsg.appendChild(questionUser);

    var questionCategory = document.createElement('div');
        questionCategory.setAttribute('class','divUnderMsg');
    var text = document.createTextNode(question.category);
        questionCategory.appendChild(text);
        underMsg.appendChild(questionCategory);

    var questionHardLevel = document.createElement('div');
        questionHardLevel.setAttribute('class','divUnderMsg');
    var text = document.createTextNode(question.hardLevel);
        questionHardLevel.appendChild(text);
        underMsg.appendChild(questionHardLevel);

        questionElement.appendChild(underMsg);




    questionArea.appendChild(questionElement);
}

function launch_toast() {

    var x = document.getElementById("toast");
    x.className = "show";
    setTimeout(function() { x.className = x.className.replace("show", ""); }, 2000);
}