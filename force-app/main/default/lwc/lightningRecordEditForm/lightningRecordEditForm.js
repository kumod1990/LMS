import { LightningElement } from 'lwc';
import CONTACT_OBJECT from '@salesforce/schema/Contact'
import FIRSTNAME_FIELD from '@salesforce/schema/Contact.FirstName'
import LASTNAME_FIELD from '@salesforce/schema/Contact.LastName'
import EMAIL_FIELD from '@salesforce/schema/Contact.Email'
import PHONE_FIELD from '@salesforce/schema/Contact.Phone'
import ACCOUNTID_FIELD from '@salesforce/schema/Contact.AccountId'
export default class LightningRecordEditForm extends LightningElement {
    objectName=CONTACT_OBJECT
    fields={
        fName:FIRSTNAME_FIELD,
        lName:LASTNAME_FIELD,
        email:EMAIL_FIELD,
        phone:PHONE_FIELD,
        accoundId:ACCOUNTID_FIELD
    }
}