({
    doInit: function(component, event, helper){
        
        var action = component.get("c.getListView");
        action.setParams({ "objectName": component.get("v.objectInfo")});
        
        action.setCallback(this, function(response){
            var state = response.getState();
            if(state == "SUCCESS"){
                var objListView = response.getReturnValue();
                if(objListView.length > 0){
                    component.set("v.listViewData", objListView);
                    console.log("LV Data:", objListView);
                    component.set("v.currentListViewName", objListView.developerName);
                }
            } else if(state == "ERROR"){
                var errors = response.getError();
                if(errors){
                    if(errors[0] && errors[0].message){
                        console.log("Error message: "+ errors[0].message);
                    }
                }
                else {
                    console.log("Unknown error occured!!");
                }
            }
        });
        
        $A.enqueueAction(action);
    },
    
    onPicklistChange: function(component, event, helper){
        var listViewDName = event.getSource().get("v.value");
        component.set("v.currentListViewName", listViewDName);
        console.log("ChangedLVName::", listViewDName);
    }
})