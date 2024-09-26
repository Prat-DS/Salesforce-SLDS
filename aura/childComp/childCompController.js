({
	handleClick : function(component, event, helper) {
        var inputText = component.get("v.inputText");
        console.log("inputText:", inputText);
		var compEvent = component.getEvent("compCommunication");
        compEvent.setParams({
            "value" : component.get("v.inputText")
        })
        compEvent.fire();
	}
})