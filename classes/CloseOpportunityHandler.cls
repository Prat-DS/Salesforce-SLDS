public class CloseOpportunityHandler {
    public static void closeOpportunity(List<Account> accList, Map<Id, Account> oldMap){
        Set<Id> accIds = new Set<Id>();
        if(!accList.isEmpty()){
            for(Account ac: accList){
                if(ac.CloseAllOpps__c == true && oldMap.containsKey(ac.Id) && oldMap.get(ac.Id).CloseAllOpps__c == false){
                    accIds.add(ac.Id);
                }
            }
        }
        
        if(!accIds.isEmpty()){
            List<Opportunity> oppList = [SELECT Id, AccountId, Name, Probability, StageName FROM Opportunity
                                        WHERE AccountId IN :accIds AND StageName !='Closed Won'];  //AND Probability >= 70
            List<Opportunity> listToUpdate = new List<Opportunity>();
            if(!oppList.isEmpty()){
                for(Opportunity opp: oppList){
                    opp.StageName = 'Closed Won';
                    opp.CloseDate = Date.Today();
                    listToUpdate.add(opp);
                }
            }
            
            if(!listToUpdate.isEmpty()){
                update listToUpdate;
            }
        }
    }
}