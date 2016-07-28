/*
 * TriviarModel provides basic methods to iterate
 * over a collection of questions
 */
var TriviaModel = {
  
   /* Collection of available questions */
   collection : questions, 
  
   /* Start the iteration over the collection of questions.
      It sets the first element as the current question */    
   init : function() {
   },
  
   /* Set the next element as the current question. 
      Returns true if it moved successfully to the next,
              false if there were no more elements */
   next : function(){
   },
  
   /* Returns the current question 
    *         null if the collection was not initiated
    */
   getCurrentQuestion: function () { 
   },
  
   /* Checks if the answer provided is correct. The comparison
      is case-insensitive (Answer = ANSWER = aNswEr)
      Returns true if the answer is correct
              false if not
    */
   isAnswerCorrect : function (answer){
   }  
           
};