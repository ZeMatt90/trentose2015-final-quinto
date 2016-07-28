/*
 * TriviarModel provides basic methods to iterate
 * over a collection of questions
 */
var TriviaModel = {
  
   /* Collection of available questions */
   collection : questions, 
   currentQuestion:-1,
   /* Start the iteration over the collection of questions.
      It sets the first element as the current question */    
   init : function() {
       this.currentQuestion=0;
       $("#question").text(this.collection[0].question);
   },
  
   /* Set the next element as the current question. 
      Returns true if it moved successfully to the next,
              false if there were no more elements */
   next : function(){
       if(this.currentQuestion<this.collection.length-1)
       {
           this.currentQuestion++;
           return true;
       }
       else
       {
           return false;
       }
   },
  
   /* Returns the current question 
    *         null if the collection was not initiated
    */
   getCurrentQuestion: function () { 
       if(this.currentQuestion==-1)
       {
           return null;
       }
       else
           return this.collection[this.currentQuestion];
   },
  
   /* Checks if the answer provided is correct. The comparison
      is case-insensitive (Answer = ANSWER = aNswEr)
      Returns true if the answer is correct
              false if not
    */
   isAnswerCorrect : function (answer){
       if(this.collection[this.currentQuestion].answer==answer)
       {
           return true;
       }
       else 
           return false;
   }  
           
};



$(document).ready(function(){
    
    TriviaModel.init();
    
    $('button').click(function(){
        var testo = $('input').val();
        var result = TriviaModel.isAnswerCorrect(testo);
        
        
        if (result)
        {
            alert("correct!");
            if( TriviaModel.next())
            {
                $("#question").text(TriviaModel.getCurrentQuestion().question);
            }
            else
            {
                alert("No more question");
            }
        }
        else
        {
            alert("incorrect!");
        }
        
           
        
        
        //var language = ParlaModel.detectLanguage(testo);
        
        //$("#question").text(language);
        
       
    });
});