$(document).ready(function(){
			$(".body__post").on('submit', function(event){
				var text = $("#texto").val();
				event.preventDefault();
				$(".body__posteos2").append('<div class="row__post">'+
					'<div class="img__profile-post2">'+
					'</div>' +
					'<div class="content__post">' +
					'<h1>Likes</h1>' +
					'<span id="counter">0</span>' +
					'</div>' +
					text +
					'<a class="likes" href="#"><i class="fas fa-heart fa-2x"></i></a>'+
					'<div class="delete__post">' +
					'<i class="fas fa-trash-alt fa-2x"></i>' +
					'</div>' +
					'</div>')
				$("#texto").val("");
			});

//borrar tweets
$(".body__posteos2").on("click", ".delete__post", function(event){
	event.stopPropagation();
	$(this).parent().fadeOut(500);
});

$(".likes").on("click", function(){
	 counter = $("#counter").text();
	 counter = parseInt(counter);
	 console.log(counter + 1);
	 $("#counter").text(counter + 1);
	});

});