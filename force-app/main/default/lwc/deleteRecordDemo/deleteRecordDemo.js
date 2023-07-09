import { LightningElement } from 'lwc';
import { deleteRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class DeleteRecordDemo extends LightningElement {
recordId
    onchangeHandler(event){
        this.recordId=event.target.value
    }
    deleteHandler(){
        deleteRecord(this.recordId).then(()=>{
            console.log("Deleted Successfully") 
            this.showToast("Success!!","Record Deleted Successfully",'success')
        }).catch(error=>{
            console.error(error)
            this.showToast("Error",error.body.message,'error')
        })
        
    }
    showToast(title,message,variant){
        this.dispatchEvent(new ShowToastEvent({
            title,
            message,
            variant
        }))
    }
}