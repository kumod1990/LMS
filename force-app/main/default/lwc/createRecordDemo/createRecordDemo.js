import { LightningElement } from 'lwc';
import {createRecord} from 'lightning/uiRecordApi'
import CONTACT_OBJECT from '@salesforce/schema/Contact'
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
export default class CreateRecordDemo extends LightningElement {
    formFields={}
    changeHandler(event){
        console.log('we are in changeHandler')
        const {name,value}=event.target
        this.formFields[name]=value

    }
    createContact(){
        console.log('we are in create Contact')
        const recordInput={apiName:CONTACT_OBJECT.objectApiName,fields:this.formFields}
        createRecord(recordInput).then(result=>{
            console.log('we are in console record() method')
            this.showToast('success!!','contact created successfully',)
            this.template.querySelector('form.createForm').reset()
            this.formFields={}
        }).catch(error=>{
            this.showToast('error creating record',error.body.message,'error')
        })
    }
    showToast(title,message,variant){
        this.dispatchEvent(new ShowToastEvent({
            title,
            message,
            variant:variant ||'success'
        }))
    }
}