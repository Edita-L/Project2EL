var translations = [
  
    {
      "id" : 1,
      "question" : "How to say hello in Spanish?",
      "original" : ["Hola", "Huula", "Herla"],
      "correct" : "Hola",
      "score" : 0
    },
    {
      "id" : 2,
      "question" : "How to say bye in Spanish?",
      "original" : ["Adios", "Udios", "Hola"],
      "correct" : "Adios",
      "score" : 0
    },
    {
      "id" : 3,
      "question" : "How to say potato?",
      "original" : ["Patata", "Petata", "Poortata"],
      "correct" : "Patata",
      "score" : 0
    }
  ];
  
  
  // 1. load when page loads, gets question 0
  window.addEventListener("load", function() {
    
    var question = document.getElementById("question1");
    
    question.innerHTML = translations[0]["question"];
    
  });