import { LightningElement, wire } from 'lwc';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
export default class GetObjectInfoDemo extends LightningElement {
    //defaultRecordTypeId1
    @wire(getObjectInfo,{objectApiName:ACCOUNT_OBJECT})
    getObjectDetails
}