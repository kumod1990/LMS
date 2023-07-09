import { LightningElement, api } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
import NAME_FIELD from '@salesforce/schema/account.Name'
import Type_FIELD from '@salesforce/schema/Account.Type'
import Industry_FIELD from '@salesforce/schema/account.Industry'
import AnnualRevenue_FIELD from '@salesforce/schema/Account.AnnualRevenue'

export default class LightningRecordFormDemo extends LightningElement {
    @api recordId
    @api objectApiName
    objectName=ACCOUNT_OBJECT
    listFields=[NAME_FIELD,Industry_FIELD,Type_FIELD,AnnualRevenue_FIELD]
    successHandler(event){
        console.log(event.detail.id)
        const toastEvent=new ShowToastEvent({
            title:"Account Created",
            message:"Record Id:"+event.detail.id,
            variant:"success"
        })
        this.dispatchEvent(toastEvent)
    }
}