/* eslint-disable no-undef */
/* eslint-disable strict */

/*
1. #js-shopping-list-form (text field)
1. SUBMIT #shopping-list-entry value 
2. ADD #shopping-list-entry value to .shopping-list<ul><li> 
    (creates HTML item box with 'Check' & 'Delete')
3. RESET #js-shopping-list-form (text field)

4A. TOGGLE CHECK ON button triggers .shopping-item shopping-item__checked (CSS STYLE ON)
4B. TOGGLE CHECK OFF button triggers .shopping-item shopping-item__checked (CSS STYLE OFF)
5. TOGGLE DELETE button REMOVES .shopping-list<ul><li> 
    (REMOVES HTML item box with 'Check' & 'Delete')
*/


$(function(){

    //function that is called when USER SUBMITS text in the "Add an item" FORM
  $('#js-shopping-list-form').submit(function(event) {
    event.preventDefault();

    //temopraily assigns the "Add an item" text to a variable
    let listItem = $('#shopping-list-entry').val();
  
    //calls the variable containing the text, places it within the HTML elements that are printed to the page at the end of the list
    $('.shopping-list').append(
      `<li>
          <span class="shopping-item">${listItem}</span>
          <div class="shopping-item-controls">
            <button class="shopping-item-toggle">
              <span class="button-label">check</span>
            </button>
            <button class="shopping-item-delete">
              <span class="button-label">delete</span>
            </button>
          </div>
        </li>`);
  });
  
    //when DELETE button is clicked, it's associated LIST ITEM is REMOVED, removing it's HTML
  $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
    $(this).closest('li').remove();
  });
  
  //when CHECK button is clicked, the CSS STYLE that creates a strikethrough effect is added to the associated HTML of the LIST ITEM
  $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
    $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
  });
});