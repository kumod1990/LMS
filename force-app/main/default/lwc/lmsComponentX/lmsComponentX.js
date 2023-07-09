import { LightningElement, wire } from 'lwc';
import SAMPLEMC from '@salesforce/messageChannel/SampleMessageChannel__c'
import {MessageContext,publish,subscribe,APPLICATION_SCOPE, unsubscribe} from 'lightning/messageService'
export default class LmsComponentX extends LightningElement {
    inputValue
   @wire(MessageContext)
    context
    inputHandler(event){
        this.inputValue=event.target.value
        
    }
    
    publishMessage(){
        const message={
            lmsData:{
                value:this.inputValue
            }
        }
        publish(this.context,SAMPLEMC,message)
    }
    subscribeHandler(){
        //subscribe(messageContext,messageChannel,listener,subscriberOptions)
        subscribe(this.context,SAMPLEMC,(message)=>{this.handleMessage(message)},{scope:APPLICATION_SCOPE})
    }
    recievedmsg
    handleMessage(message){
        this.recievedmsg=message.lmsDatax.value?message.lmsDatax.value:'No Message Recieved'
    }
}