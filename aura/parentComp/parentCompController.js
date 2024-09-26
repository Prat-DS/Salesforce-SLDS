({
	handleCompEvent : function(component, event, helper) {
		var fetchedValue = event.getParam("value");
        console.log("fetchedValue:", fetchedValue);
        component.set("v.fetchedText", fetchedValue);
        component.set("v.showValue", true);
	}
})