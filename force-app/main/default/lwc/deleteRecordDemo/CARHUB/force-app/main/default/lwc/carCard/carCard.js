import { LightningElement } from 'lwc';
import CAR_OBJECT from '@salesforce/schema/Car__c'
import NAME_FIELD from '@salesforce/schema/Car__c.name'
import PICTURE_URL_FIELD from '@salesforce/schema/Car__c.Picture_URL__c'
import CATEGORY_FIELD from '@salesforce/schema/Car__c.Category__c'
import MAKE_FIELD from '@salesforce/schema/Car__c.Make__c'
import MSRP_FIELD from '@salesforce/schema/Car__c.MSRP__c'
import FUEL_TYPE_FIELD from '@salesforce/schema/Car__c.Fuel_Type__c'
import SEATS_FIELD from '@salesforce/schema/Car__c.Number_of_Seats__c'
import CONTROL_FIELD from '@salesforce/schema/Car__c.Control__c'
import { getFieldValue } from 'lightning/uiRecordApi';
export default class CarCard extends LightningElement {
    //exposing fields to make them available in the template
    categoryField=CATEGORY_FIELD
    makeField=MAKE_FIELD 
    msrpField=MSRP_FIELD
    fuelField=FUEL_TYPE_FIELD
    seatsField=SEATS_FIELD
    controlField=CONTROL_FIELD

    recordId='a0B5g000019jFZYEA2'
    carName
    carPictureUrl
    handleRecordLoaded(event){
        const{records}=event.detail 
        const recordData=records[this.recordId]
        this.carName=getFieldValue(recordData,NAME_FIELD)
        this.carPictureUrl=getFieldValue(recordData,PICTURE_URL_FIELD)

    }
}