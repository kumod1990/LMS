import { LightningElement, wire } from 'lwc';
import { getObjectInfo,getPicklistValues } from 'lightning/uiObjectInfoApi';
import CAR_OBJECT from '@salesforce/schema/Car__c'
import CATEGORY_FIELD from '@salesforce/schema/Car__c.Category__c'
import MAKE_FIELD from '@salesforce/schema/Car__c.Make__c'
const CATEGORY_ERROR="Error Loading Category"
const MALE_ERROR="Error Loading Make"
export default class CarFilter extends LightningElement {
    filters={
        searchKey:'',
        maxPrice:'999999'
    }
    categoryError=CATEGORY_ERROR
    makeError=MALE_ERROR
//*** Fetching Category Picklist Values */

    @wire(getObjectInfo,{objectApiName:CAR_OBJECT})
        carObjectInfo
    @wire(getPicklistValues,{
        recordTypeId:'$carObjectInfo.data.defaultRecordTypeId',
        fieldApiName:CATEGORY_FIELD

    })
    categories
    //Fetching Make Picklist Values
    @wire(getPicklistValues,{
        recordTypeId:'$carObjectInfo.data.defaultRecordTypeId',
        fieldApiName:MAKE_FIELD

    })
    makeType

    /***Search Key Handler**** */
    handleSearchKeyChange(event){
        console.log(event.target.value)
        this.filters={...this.filters,"searchKey":event.target.value}

    }
    /***Max Price Handler**** */
    handleMaxPriceChange(event){
        console.log(event.target.value)
        this.filters={...this.filters,"maxPrice":event.target.value}
    }
    handleCheckbox(event){
        const {name,value}=event.target.dataset
        console.log("name", name)
        console.log("value", value)

    }
   
}