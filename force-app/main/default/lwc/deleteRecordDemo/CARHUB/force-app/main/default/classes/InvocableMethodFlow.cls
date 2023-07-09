public class InvocableMethodFlow {
    @InvocableMethod(label='Delete Related Opportunity Records' 
                     description='Delete all the opportunity record whos account status changed ' 
                     category='Opportunity')
    public static void deleteRecord(List<String> Ids){
        List<Opportunity> listOpp=[select Id from Opportunity where accountId =: Ids and StageName='Closed Won'];
        delete listOpp;
    }
}