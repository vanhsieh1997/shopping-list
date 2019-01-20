
$(function(){
  $('#js-shopping-list-form').submit(function(event){
    event.preventDefault();
  const newItem=$(this).find('#shopping-list-entry').val();

   $(".shopping-list").append('<li><span class="shopping-item">'+newItem+'</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>')
  })

  
$('.shopping-list').on('click','button:first-child',function(event){
  $(this).parent().siblings('span').toggleClass('shopping-item__checked')
})

$('.shopping-list').on('click','button:nth-child(2)',function(event){
  $(this).parent().parent().remove()
})

  })
