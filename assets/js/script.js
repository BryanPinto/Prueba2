$(document).ready(function(){
			$(".body__post").on('submit', function(event){
				var text = $("#texto").val();
				event.preventDefault();
				$(".body__posteos2").append('<div class="body__posteos2">'+
					'<div class="row__post">'+
					'<div class="img__profile-post2">'+
					'<img class="img__profile" src="./assets/images/profile.png" alt="">' +
					'</div>' +
					'<div class="content__post">' +	
					'<div class="content__text">' +		
					text +
					'</div>'+
					'<div class="content__likes">' +
					'<a class="likes" href="#"><i class="fas fa-heart fa-2x"></i></a>'+					
					'<span id="counter">0</span>' +	
					'</div>' +
					'</div>' +
					'<div class="delete__post">' +
					'<i class="fas fa-trash-alt fa-2x"></i>' +
					'</div>' +
					'</div>' +
					'</div>')
				$("#texto").val("");
			});

//borrar tweets
$(".body__posteos2").on("click", ".delete__post", function(event){
	event.stopPropagation();
	$(this).parent().parent().fadeOut(500);
});

$(".likes").on("click", function(){
	$(this).addClass("likes__red").removeAttr("href");
});

$(".likes").on("click", function(){
	 counter = $("#counter").text();
	 counter = parseInt(counter);
	 $("#counter").text(counter + 1);
	});

});