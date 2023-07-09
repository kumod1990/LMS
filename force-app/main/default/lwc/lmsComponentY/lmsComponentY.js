import { LightningElement, wire } from 'lwc';
import SAMPLEMC from '@salesforce/messageChannel/SampleMessageChannel__c'
import {MessageContext,subscribe,APPLICATION_SCOPE, unsubscribe,publish} from 'lightning/messageService'
export default class LmsComponentY extends LightningElement {
    recievedmessage
    subscription
    @wire(MessageContext)
    context
    connectedCallback(){
        this.handleSubscriber()
    }
    handleSubscriber(){
        //subscribe(messageContext,messageChannel,listener,subscriberOptions)
    this.subscription=subscribe(this.context,SAMPLEMC,(message)=>{this.handleMessage(message)},{scope:APPLICATION_SCOPE})

    }
    
    handleMessage(message){
        this.recievedmessage=message.lmsData.value?message.lmsData.value:'No Message Published'
    }
    unsubscribeHandler(){
        unsubscribe(this.subscription)
        this.subscription=null
    }
    msg
    inputHandler(event){
        this.msg=event.target.value
    }
    publishMessage(){
            const message={
                lmsData:{
                    value:this.msg
                }
            }
            publish(this.context,SAMPLEMC,message)
    }
    
}