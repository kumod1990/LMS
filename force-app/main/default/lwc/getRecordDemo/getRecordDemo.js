import { LightningElement, wire,api} from 'lwc';
import { getRecord,getFieldValue,getFieldDisplayValue } from 'lightning/uiRecordApi';
import ACCOUNT_NAME from '@salesforce/schema/Account.Name';
import Account_OWNER_NAME from '@salesforce/schema/Account.Owner.Name'
import ACCOUNT_ANNUALREVENUE from '@salesforce/schema/Account.AnnualRevenue'
export default class GetRecordDemo extends LightningElement {
    name
    owner 
    annualrevenue
    @api recordId
@wire(getRecord,{recordId:'$recordId',
                fields:[ACCOUNT_NAME,Account_OWNER_NAME,ACCOUNT_ANNUALREVENUE]})
//@wire(getRecord,{recordId:'$recordId',layoutTypes:['Full'],modes:['View']})
accountHandler({data,error}){
    if(data){
        console.log(data)
        this.name=getFieldValue(data,ACCOUNT_NAME)
        this.annualrevenue=getFieldDisplayValue(data,ACCOUNT_ANNUALREVENUE)
        this.owner=getFieldValue(data,Account_OWNER_NAME)
    }
    if(error){
        console.log(error)
    }
}
}