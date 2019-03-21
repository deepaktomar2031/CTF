$(function () { 
  const UPDATE_INTERVAL = 1000;
  
  var lastId = 0;
  
  var updateInterval = setInterval(updateChat, UPDATE_INTERVAL);
  
  updateChat();
  
  $("#chat .messageInput").keydown(function (e) { 
    if(e.keyCode == 13) 
      $("#chat .sendBtn").click();
  });
  
  $("#chat .sendBtn").click(function () { 
    var message = $("#chat .messageInput").val();
    
    $("#chat .messageInput").val("");
    
    sendMessage(message);
  });
  
  
  function sendMessage (message) { 
    return updateChat(message);
  }
  
  function updateChat (message) { 
    $.post("/ajax/update.php?lastId=" + lastId, { 
      "msg": message
    })
      .done(handleResponse)
      .fail(handleResponse.bind(null));
  }
  
  function handleResponse (resp) { 
    if(!resp) 
      return error();
    
    var data = null;
    
    try { 
      data = JSON.parse(resp);
    } catch(e) { 
      return error(resp);
    }
    
    for(var i = 0; i < data.messages.length; i++) { 
      var message = data.messages[i];
      
      $("#chat ul").append("<li id=\"message" + message.id + "\"></li>");
	  
	  var messageElement = $("#chat ul li#message" + message.id);
      
	  var textNode = document.createTextNode("[" + formatTime(message.time) + "] " + message.username + ": ");
      messageElement.append(textNode);
      
      
	  // You can use [IFRAME "XXX.php"] in your message to load a hidden iframe on this domain!
	  
      var index = 0;
      
      message.message.replace(/\[IFRAME \"(.*?)\"\]/g, function (match, src, offset) { 
        var textNode = document.createTextNode(message.message.substring(index, index + offset));
		messageElement.append(textNode);
        
		var iframe = $("<iframe />").attr("src", "//" + location.host + "/" + src).hide();
        messageElement.append(iframe);
        
        index = offset + match.length;
      });
      
	  var textNode = document.createTextNode(message.message.substring(index, message.message.length));
      messageElement.append(textNode);
      
      lastId = message.id;
    }
	
	if(data.messages.length > 0) 
	  $("#chat ul").animate({
        scrollTop: $("#chat ul").prop("scrollHeight")
      }, 1000);
  }
  
  function error (errMessage) { 
    if(errMessage) { 
      alert(errMessage);
    } else { 
      alert("An unknown eror occured!");
      clearInterval(updateInterval);
    }
  }
  
  function formatTime (time) { 
    time = new Date(time);
    
    return appendZeroes(time.getHours(), 2) + ":" + 
      appendZeroes(time.getMinutes(), 2) + ":" + 
      appendZeroes(time.getSeconds(), 2);
  }
            
  function appendZeroes(number, digits) { 
    number = Math.floor(number);
    
    var numberStr = number.toString();
    
    if(numberStr.length < digits) { 
      var newStr = "";
    
      var digitsToAdd = digits - numberStr.length;
      
      for(var i = 0; i < digitsToAdd; i++) { 
        newStr += "0";
      }
      
      newStr += numberStr;
      
      numberStr = newStr;
    }
    
    return numberStr;
  }
});