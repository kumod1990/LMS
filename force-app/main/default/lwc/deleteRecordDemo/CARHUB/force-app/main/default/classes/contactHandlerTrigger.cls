public with sharing class contactHandlerTrigger {
    public contactHandlerTrigger() {

    }
    public static void associateAccount(List<Contact> conList){
        for(Contact con : conList){
            if(con.AccountId==null){
                con.AccountId.addError('Plzz associate account with contact record');
            }
        }
    }
}