public with sharing class OpportunityLineItemTriggerHandler {
    public static void preventOLIinsertonOpp(List<OpportunityLineItem> oliList){
        Set<Id> oppIdSet = new Set<Id>();
        Map<Id,Integer> oppIdolicountMap=new Map<Id,Integer>();
        for(OpportunityLineItem oliObj : oliList){
            oppIdSet.add(oliObj.OpportunityId);
        }
    }
}