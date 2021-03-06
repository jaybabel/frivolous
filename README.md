# frivolous
__SEI Project 1 - Trivia game__
![Screen Shot 2021-09-21 at 9 57 50 AM](https://user-images.githubusercontent.com/8105789/134195932-ca2c7cc2-3180-4fce-b4f0-37bc389d25a1.png)

frivolous is a web-based trivia game.  Written in HTML, CSS and Javascript, frivolous selects random questions from three different categories (music, movies, and authors).  The questions are drawn from arrays defined in the Javascript.  The index for the selected question is placed in an array stack. The corresponding answer is randomly placed in one of four elements in an answer array.  The remaining three elements are populated with random answers from the same question category (i.e. music questions only have music answers).

__Why not use an API?__ While I had hoped to implement a trivia API as an extra option in the gold plan, I was unable to get to that.  My first goal was to create a framework where I could control the questions and answers.  By having my own verbiage, I can use much of the code for future applications that might require dialog (e.g. a study guide for my daughter, dialog in a role playing game).

__Quirks__
* If the game is set to choose a random category to begin, the category menu is not updated to reflect that.  It always shows the first item on the list, Music. As a workaround, default category is set to Music.
* The game needs additional visual to indicate when all questions have been answered in the current game.
* If the category is changed after a new game has been initialized and the first question is presented, the category change is not effective until subsequent questions are presented.
* Player name in the dropdown window is not updated to reflect current player when a new player is added.


__The Leader Board__

The Leader Board has been particularly difficult to implement.  The first problem encountered was with adding the results from each round.  The Leader Board array is an array of arrays.  Each element in the leader board array (leaderBoardArray) holds a player name, the number of questions answered correctly, and the number of questions attempted.  Here are the array declarations from the code:

```
// leaderBoardArray of arrays [playerName, correct answers, total questions]
const leaderBoardArray = []
const currentPlayer = ["", "", ""]
```

When a round is started, the currentPlayer array is initialized with the player name in the first element and zeros in the second and third.  When the round is completed the currentPlayer array contains the scoring as outline above.  The leader board function is called and the leaderBoardArray is updated with information from the currentPlayer array. If the player name is already in the leader board array, the new scores are be added to the existing scores. If the player is not in the leader board array, the player is added. 


Initially, whenever I attempted to add a second element, it would overwrite the first.  To successfully add arrays as elements to another array, I had to use _Spread syntax(...)_ as shown below.

```
        let addToLeaderboard = [...currentPlayer];
```
The bugs from initial implementation of the Leader Board have been resolved.  It still needs some work to include percentage of questions correctly entered.  Once that is added, the leader board should be sorted from high percentage to low and saved in local storage.


# frivolous Online

The game has been deployed via app.netify.com.  The url to play the game is -  
https://ecstatic-bell-1867af.netlify.app/


# Game Requirements

The requirements for the game are outlined below.  The bronze plan outlines the minimal viable product.  Features of the silver and gold plans have been implemented to varying degrees as noted.


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

 _Implemented_
  
        * Add a board to track top 5 scores
        
 _Partially implemented_
  
      * Enhanced graphics
      
  _Not implemented_
  
      * Use trivia APIs to add more categories/questions


__Background Images__

Background images were pulled from the following web urls:

"https://images.all-free-download.com/images/graphicthumb/blue_abstract_background_310971.jpg"

"https://c4.wallpaperflare.com/wallpaper/231/644/932/abstract-red-texture-hd-wallpaper-preview.jpg"




__Link to frivolous on-line__

https://ecstatic-bell-1867af.netlify.app/

