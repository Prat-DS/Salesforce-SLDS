trigger CloseOppAccount on Account (after update) {
    if(Trigger.isAfter && Trigger.isUpdate){
        CloseOpportunityHandler.closeOpportunity(Trigger.new, Trigger.oldMap);
    }
}