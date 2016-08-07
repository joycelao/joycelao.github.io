function askQuestions() {

var firstName = prompt('What is your first name?');
var lastName = prompt('What is your last name?');

var fullName = firstName + ' ' + lastName;
console.log('User is called ' + fullName);

var age = prompt('How old are you?');
age = parseInt(age);

if (age >= 18) {
	console.log('User is an adult');
} else if (age >=13) {
	console.log('User is a teenager');
}
else {
	console.log('User is a child');
}
var faveColor = prompt ('WHat is your favourite color?');
faveColor = faveColor.toLowerCase();

if (faveColor == 'red' ||
	faveColor == 'blue' ||
	faveColor == 'green'||
	faveColor == 'yellow') {
	$('h1').css('color',faveColor);

}





}


/*when the page loads */
//when the page loads
$(function(){

$('img').on('click', askQuestions);
	//when the user clicks an h3
	$('h3').on('click', function(){

		//toggle the next eleement 
		$(this)
		.toggleClass('open')
		.next().slideToggle(500);	
			//every brack has to have a matching bracket. must close curly bracket before round bracket. so ({}) not ({)}
	});
	

});

