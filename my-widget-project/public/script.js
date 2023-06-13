// (function a() {

    console.log('initailscript');
    var body = document.getElementsByTagName("body")[0];
    
    var iframe = document.createElement("iframe");
    
    iframe.src = "http://localhost:3000";
    
    iframe.width = "100%";
    
    // iframe.height = "100%";
    
    iframe.setAttribute("style", "border-width:0;background-color:transparent;position:sticky;bottom:0;height:70vh;left:0;overflow: hidden;");
    
    console.log("body",body)
    
    body.appendChild(iframe);
    
    // })();