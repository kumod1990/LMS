public with sharing class accountTriggerHandler {

    public static void validateTypeAccount(List<Account> accList){
        for(Account accObj:accList){
        if(accObj.Rating=='Hot'&& accObj.Type==null){
            accObj.addError('When rating is hot then type field is mandatory');
        }
    }
    }
    public static void createContact(List<Account> accList){
        List<Contact> conList=new List<Contact>();
        for(Account accObj:accList){
            Contact con=new Contact();
			con.accountId=accObj.Id;
			con.LastName=accObj.Name;
			conList.add(con);
        }
        if(conList.size()>0){
            insert conList;
        }
    }
    public static void preventionDeleteActiveAccount(List<Account> accList){
        for(Account accObj:accList){
            if(accObj.Active__c!=null && accObj.Active__c=='Yes'){
                accObj.addError('You are not authorise to delete the active account record');
            }
        }
    }
}