import { LightningElement, wire } from 'lwc';
import { getListUi } from 'lightning/uiListApi';
import CONTACT_OBJECT from '@salesforce/schema/Contact'

export default class GetUiDemoLWC extends LightningElement {
    contacts=[]
    @wire(getListUi,
        {
            objectApiName:CONTACT_OBJECT,
            listViewApiName:'AllContacts',
            pageSize:10
        })
        contactHandler({data,error}){
            if(data){
                console.log(data)
                this.contacts=data.records.records
            }
            if(error){
                console.error(error)
            }
        }
}