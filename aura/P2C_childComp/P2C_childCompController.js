({
	doAction : function(component, event, helper) {
		var inputText = event.getParam("arguments");
        if(inputText){
            console.log("Input Params:", inputText);
            var param1 = inputText.param1;
            console.log("P1:", param1);
            component.set("v.firstName", param1);
            component.set("v.showChild", true);
        }
	}
})