public with sharing class accountController {
    public accountController() {

    }
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountList(){
        List<Account> accList= [select Id,Name,Type,Industry from Account where Type='Customer - Direct'limit 5];
        return accList;
    }
    @AuraEnabled(cacheable=true)
    public static List<Account> getfilteredAccountList(String type){
        List<Account> accList= [select Id,Name,Type from Account where Type=:type limit 5];
        return accList;
    }
}