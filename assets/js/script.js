var translations = [

  {
    "id": 1,
    "question": "How to say CAT in Spanish?",
    "original": ["Gato", "Cato", "Fato"],
    "correct": "Gato",
    "score": 0
  },
  {
    "id": 2,
    "question": "How to say HOUSE in Spanish?",
    "original": ["Casa", "Vila", "Doma"],
    "correct": "Casa",
    "score": 0
  },
  {
    "id": 3,
    "question": "How to say POTATO in Spanish?",
    "original": ["Patita", "Petata", "Patata"],
    "correct": "Patata",
    "score": 0
  }
];


// 1. load when page loads, gets question 0
window.addEventListener("load", function () {

  var question = document.getElementById("question1");
  question.innerHTML = translations[0]["question"];

  var answer11 = document.getElementById('qa1');
  answer11.innerHTML = translations[0]["original"][0];

  var answer12 = document.getElementById('qa2');
  answer12.innerHTML = translations[0]["original"][1];


  var answer13 = document.getElementById('qa3');
  answer13.innerHTML = translations[0]["original"][2];

});