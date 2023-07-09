public class fetchAccount {
    public static void accountList(){  
List<Account> accList=[select Id,Name,Rating,Industry from Account];
    if(! accList.isEmpty()){
        for(Account acc:accList){
            System.debug('Account Id'+acc.Id);
            System.debug('Account Name'+acc.Name);
            System.debug('Account Rating'+acc.Rating);
            System.debug('Account Industry'+acc.Industry);
        }
    }
    }
}