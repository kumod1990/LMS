public with sharing class caseTriggerHandler {
    public caseTriggerHandler() {

    }
    public static void associateAccContact(List<Case> caseList){
        for(Case cs : caseList){
            if(cs.AccountId==null){
                cs.AccountId.addError('Plzzz Associate case record with Account');
            }
            else if(cs.ContactId==null){
                cs.ContactId.addError('Plzz associate case record with Contact');
            }
        }
    }
}