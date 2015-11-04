'use strict';

var $ = require('jquery');
var form = $('form');
var input = $('.input');
var error = $('.error');
var numbers = 0;
var letters = 0;
var special = 0;

form.submit(function(e){
	e.preventDefault();
	if (input.val().length<8){
		error.text('password is weak sauce');
	}
	else{
		for(var i=0; i<input.val().length;i++){
			if(input.val().charCodeAt(i)>=48 && input.val().charCodeAt(i)<=57){
				numbers=numbers+1
			}
			if(input.val().charCodeAt(i)>=65 && input.val().charCodeAt(i)<=122){
				letters=letters+1
			}
			if(input.val().charCodeAt(i)>=33 && input.val().charCodeAt(i)<=47){
				special=special+1
			}
		}
		if (letters==0 || numbers==0){
			error.text('weak password!');
		}
		if (letters>0 && numbers>0){
			error.text('strong password!');
		}
		if (special>0 && letters>0 && numbers>0){
			error.text('very strong password!');
		}

	}
})