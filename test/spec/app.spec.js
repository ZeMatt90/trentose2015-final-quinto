/* Remember that blanket will only work with brackets live preview */
/* Try to maximise the coverage of the ParlaModel object */

describe("Trivia", function() {
    it("test the not init inizialization", function() { 
        TriviaModel.reset();
      expect( TriviaModel.getCurrentQuestion()).toBeNull;

  });   

  it("test all the game", function() {  
        TriviaModel.init();
        TriviaModel.isAnswerCorrect("Athens");
        TriviaModel.next();
        TriviaModel.isAnswerCorrect("1896");
      TriviaModel.next();
        TriviaModel.isAnswerCorrect("Michael Phelps");
      TriviaModel.next();
      expect( TriviaModel.isAnswerCorrect("Nadia Comaneci")).toBeTruthy;

  });  
    it("test the end of game", function() {  
        TriviaModel.init();
        TriviaModel.isAnswerCorrect("Athens");
        TriviaModel.next();
        TriviaModel.isAnswerCorrect("1896");
        TriviaModel.next();
        TriviaModel.isAnswerCorrect("Michael Phelps");
        TriviaModel.next();
        TriviaModel.isAnswerCorrect("Nadia Comaneci");
        expect(TriviaModel.next()).toBeFalsy;
  }); 
    it("test the uncorrect answer", function() {  
        TriviaModel.init();
        expect(TriviaModel.isAnswerCorrect("asdfasddf")).toBeFalsy;
        
  });  
    it("test the the first answer ", function() {  
        TriviaModel.init();
        expect(TriviaModel.getCurrentQuestion().answer).toBe("Athens");
        
  }); 
    
 
});
