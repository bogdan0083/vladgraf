(function(){
	
	    $(".popup__form form").submit(function(e) { //устанавливаем событие отправки для формы с id=form

	    		var numberElem = $(this).find($("[name='phone']"));
	    		var numberValue = numberElem.val();

	    		var emailElem = $(this).find($("[name='email']"));
	    		var emailValue = emailElem.val();

	    		if (emailValue) {
	    			emailElem.css({border: '1px solid #dadada'});
	    		}

	    		if (numberValue) {
	    			console.log(numberValue);
	    			numberElem.css({border: '1px solid #dadada'});
	    		}

	    		if (!emailValue && !numberValue) {
	    			emailElem.css({border: '1px solid red'});
	    			numberElem.css({border: '1px solid red'});
	    			return false;
	    		}

	    		if (!emailValue) {
	    			emailElem.css({border: '1px solid red'});
	    			return false;
	    		}

	    		if (!numberValue) {
	    			numberElem.css({border: '1px solid red'});
	    			return false;
	    		}

	    		var slideParent = document.querySelector("#owl-demo");
	            var form_data = $(this).serialize(); //собераем все данные из формы
	            form_data += '&number=' + ($('.owl-item').index($('.active')) + 1);
	            console.log(form_data);
	            $.ajax({
	            type: "POST", //Метод отправки
	            url: "send.php", //путь до php фаила отправителя
	            data: form_data,
	            success: function() {
	                   //код в этом блоке выполняется при успешной отправке сообщения
	                   alert("Ваше сообщение отпрвлено!");
	               }
	            });

	            e.preventDefault();
	    });
	})();    