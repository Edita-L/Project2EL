//do i need on document load function to include all below?//
function submitQuiz() {
  console.log('submitted');

// get each answer score
  function answerScore (qName) {
    var radiosNo = document.getElementsByName(qName);

    for (var i = 0, length = radiosNo.length; i < length; i++) {
         if (radiosNo[i].checked) {
    // do something with radiosNo
        var answerValue = Number(radiosNo[i].value);
      }
    }
    // change NaNs to zero
    if (isNaN(answerValue)) {
      answerValue = 0;
    }
     
    //** add hide ??
    /*document.querySelectorAll('.question').forEach(x => x.classList.add('hide'));
    document.querySelectorAll('.answer').forEach(x => x.classList.add('hide'));
    document.querySelectorAll('label').forEach(x => x.classList.add('hide'));
    return answerValue; */

    return answerValue;
  }

// calc score with answerScore function
  var calcScore = (answerScore('q1') + answerScore('q2') + answerScore('q3') + answerScore('q4')+ answerScore('q5')+ answerScore('q6'));
  console.log("CalcScore: " + calcScore);

// function to return correct answer string
  function correctAnswer (correctStringNo, qNumber) {
    console.log("qNumber: " + qNumber);  // logs 1,2,3,4,5,6 after called below.**why do we need: &nbsp;**
    return ("The correct answer for question #" + qNumber + ": &nbsp;<strong>" +
      (document.getElementById(correctStringNo).innerHTML) + "</strong>");
    }

// print correct answers only if wrong (calls correctAnswer function)
  if (answerScore('q1') === 0) {
    document.getElementById('correctAnswer1').innerHTML = correctAnswer('correctString1', 1);
  }
  if (answerScore('q2') === 0) {
    document.getElementById('correctAnswer2').innerHTML = correctAnswer('correctString2', 2);
  }
  if (answerScore('q3') === 0) {
    document.getElementById('correctAnswer3').innerHTML = correctAnswer('correctString3', 3);
  }
  if (answerScore('q4') === 0) {
    document.getElementById('correctAnswer4').innerHTML = correctAnswer('correctString4', 4);
  }
  if (answerScore('q5') === 0) {
    document.getElementById('correctAnswer5').innerHTML = correctAnswer('correctString5', 5);
  }
  if (answerScore('q6') === 0) {
    document.getElementById('correctAnswer6').innerHTML = correctAnswer('correctString6', 6);
  }

// calculate total possible score
  var questionCountArray = document.getElementsByClassName('question');

  var questionCounter = 0;
  for (var i = 0, length = questionCountArray.length; i < length; i++) {
    questionCounter++;
  }

// show score as score/out of possible score
  var showScore = "Your Score: " + calcScore +"/" + questionCounter;
// for full score
  if (calcScore === questionCounter) {
    showScore = showScore + "&nbsp; <strong>Amazing - You Got a Perfect Score!</strong>"
  };
// for lesser scores
  if (calcScore >= 4 && calcScore < 6) {
    showScore = showScore + "&nbsp; <strong> Nearly There, Just a Tiny Bit More of Practice Needed :) </strong>"
  };
  
  if (calcScore <=3) {
    showScore = showScore + "&nbsp; <strong> Nice Try, But There Is Room For Improvment.. </strong>"
  };


  document.getElementById('userScore').innerHTML = showScore;
}


//what is below about..shows Uncaught ReferenceError: $ is not defined    at script.js for document (in developer tools)
 
$(document).ready(function() {

/*$('#submitButton').click(function() {
  $('.question').hide();
}); */

});

// *--------------------------------1. load when page loads, gets question 0
/*window.addEventListener("load", function () {

    /*var question = document.getElementById("question1");
     question.innerHTML = translations[0]["question"];

    var answer11 = document.getElementById('qa1');
     answer11.innerText = translations[0]["original"][0];

     var answer12 = document.getElementById('qa2');
     answer12.innerText = translations[0]["original"][1];


     var answer13 = document.getElementById('qa3');
     answer13.innerText = translations[0]["original"][2];*/
    
