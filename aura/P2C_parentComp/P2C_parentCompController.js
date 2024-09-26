({
	handleClick : function(component, event, helper) {
		var message = component.find("child");
        var inputMessage = component.get("v.input");
        console.log("inputMessage", inputMessage);
        message.handleParentCom(inputMessage);
	}
})