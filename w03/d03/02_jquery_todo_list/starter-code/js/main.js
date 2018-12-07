// 1)  when user clicks submit button, check if the field is empty
// 2)  if empty, tell user to write in the input box
// 3)  if not empty, get the text from input box and store in var newItem
// 4)  clear input field after getting text from it
// 5)  add newItem to list
// 6) 
// 7)
// 8)
// 9)
// 10)
console.log("JS loaded");
var $newItem = $("#todo");
var $li = $('.list');
console.log($newItem);
var $newListItem;
$(".btn").click(function(evt){
    evt.preventDefault(); 
    if($newItem.val() === ""){
        alert("please enter a task");
    }
    else{
        $li.prepend(`
            <p>
          <input type="checkbox">
          <i class="glyphicon glyphicon-star"></i>
          <span>${$newItem.val()}</span>
          <i class="glyphicon glyphicon-remove"></i>
        </p>`
        );
    }
});

