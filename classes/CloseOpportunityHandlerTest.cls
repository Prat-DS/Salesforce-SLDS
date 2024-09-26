@isTest
public class CloseOpportunityHandlerTest {
    
    @isTest
    public static void method1(){
        List<Account> accList = new List<Account>();
        Map<Id, Account> accMap = new Map<Id, Account>();
        List<Opportunity> oppList = new List<Opportunity>();
        
        for(Integer i=1; i<=5; i++){
            Account ac = new Account(Name='Test Account '+i);
            accMap.put(ac.Id, ac);
        }
        insert accMap.values();
        
        for(Account ac : [SELECT Id FROM Account]){
            for(Integer i=1; i<=4;i++){
                Opportunity opp = new Opportunity(Name='Test Opp '+i, CloseDate=Date.Today(), StageName='Prospecting', AccountId=ac.Id);
                oppList.add(opp);
            }
        }
        insert oppList;
        
        for(Account ac1: [SELECT Id FROM Account]){
            Account ac = new Account();
            ac.Id = ac1.Id;
            ac.CloseAllOpps__c = true;
            accList.add(ac);
        }
        update accList;
        
        test.startTest();
        CloseOpportunityHandler.closeOpportunity(accList, accMap);
        test.stopTest();
        
        List<Account> accList1 = [SELECT Id, CloseAllOpps__c, (SELECT Id, StageName FROM Opportunities WHERE StageName='Closed Won') FROM Account LIMIT 1];
        system.assertEquals(accList1[0].CloseAllOpps__c, true);
        system.assertEquals(accList1[0].Opportunities[0].StageName, 'Closed Won');
    }
}