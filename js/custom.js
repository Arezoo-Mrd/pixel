$(document).ready(function () {
  // filters
  $("#filters").click(function (e) {
    $(".filter-box ").slideToggle();
  });

$('.job-checkbox').change(function (e) { 

  let jobList = []

  $('#filterBox input:checked').each(function () { 
     let jobTitle = $(this).val()
     jobList.push(jobTitle)
  });
  if(jobList.length == 0){
    $(this).fadeIn();
  }else{
  $('.photographer-list').each(function () { 
    let item =$(this).attr("data-tag")
    if(jQuery.inArray(item,jobList) > -1)
      $(this).fadeIn('slow');
    else
      $(this).hide();
    
  });
}
});

  $("#search").on("keyup", function () {
    let value = $(this).val().toLowerCase();
    $(".photographer-list").filter(function () {
      console.log($(this));
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
});
