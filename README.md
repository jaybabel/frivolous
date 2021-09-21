# frivolous
SEI Project 1 - Trivia game

frivolous is a web-based trivia game.  The selects random questions from three different categories (music, movies, and authors).  The questions are drawn from arrays defined in the Javascript.  The index for the selected question is placed in an array stack. The corresponding answer is randomly placed in one of four elements in an answer array.  The remaining three elements are populated with random answers from the same question category (i.e. music questions only have music answers).

As of this writing, the Leader Board is only partially implemented.  There is a bug updating scores for players after the first player.  Scores for the first player accumulate with each round and the entry on the board is updated accordingly.  Scores for subsequent players do not accumulate.  Instead, an additional entry with the player score from the latest round is added to the board.

The game has been deployed via app.netify.com.  The url to play the game is -  
https://ecstatic-bell-1867af.netlify.app/


__The Bronze Plan__

  _Implemented_
  
      * Enter player name
      * 4 multiple-choice questions
      * Score questions as they are completed and advise player
      * Post total number correct and number incorrect when done
      * Restart game button


__The Silver Plan__

  _Implemented_
  
      * Draw 10 random questions from a pool of X
      * Add categories option

  _Not implemented_ 
  
      * Add time-based option
      * Use local(browser) storage to track scores across games


__The Gold Plan__

  _Partially implemented_
  
      * Add a board to track top 5 scores
      * Enhanced graphics
      
  _Not implemented_
  
      * Use trivia APIs to add more categories/questions
      
__Link to frivolous on-line__

https://ecstatic-bell-1867af.netlify.app/

