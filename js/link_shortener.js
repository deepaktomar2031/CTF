$(function () { 
  loadLinks();
  
  $("#link_shortener .linkInput").keydown(function (e) { 
    if(e.keyCode == 13) 
      $("#link_shortener .sendBtn").click();
  });
  
  $("#link_shortener .sendBtn").click(function () { 
    var message = $("#link_shortener .linkInput").val();
    
    $("#link_shortener .linkInput").val("");
    
    shortenLink(message);
  });
  
  
  function loadLinks () { 
    $.get("/ajax/shorten.php", null, null, "text")
      .done(handleResponse)
      .fail(error.bind(null, null));
  }
  
  function shortenLink (link) { 
    $.get("/ajax/shorten.php", { 
      "link": link
    }, null, "text")
      .done(handleResponse)
      .fail(error.bind(null, null));
  }
  
  function handleResponse (resp) { 
    if(!resp) 
      return error();
    
    var data = resp;
    
	if(typeof data == "string") { 
      try { 
        data = JSON.parse(resp);
      } catch(e) { 
        return error(resp);
      }
	}
    
    for(var i = 0; i < data.links.length; i++) { 
	  var link = data.links[i];
	  
	  addLink(link);
	}
  }
  
  function error (errMessage) { 
    if(errMessage) { 
      alert(errMessage);
    } else { 
      alert("An unknown eror occured!");
    }
  }
  
  function addLink (link) {
    $("#link_shortener .links").prepend("<div class=\"link\" id=\"link_" + link.id + "\"><p><a class=\"short_link\" target=\"_blank\"/></p><p>is the short link of: </p><input type=\"text\"/ class=\"long_link\" disabled></div>");
	
	$("#link_shortener .links #link_" + link.id + " .short_link").attr("href", link.short_link);
	$("#link_shortener .links #link_" + link.id + " .short_link").text(link.short_link);
	$("#link_shortener .links #link_" + link.id + " .long_link").val(link.long_link);
  }
});