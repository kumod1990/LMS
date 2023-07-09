public with sharing class leadTriggerHandler {
    public leadTriggerHandler() {

    }
    /* Create a Trigger on Lead Object, to Auto Populate the Annual Revenue based on the Industry Name as below.

Industry Name			AnnualRevenue
				----------------------------------------
					Banking					90,00,000
					Finance					76,00,000
					Insurance				45,00,000
					Manufacturing			84,00,000
					Education				74,00,000
					Consulting				32,00,000
					Energy					94,00,000
                    */
    public static void updateLeadRecord(List<Lead> ldList){
        for(Lead ld : ldList){
            if(ld.Industry=='Banking'){
                ld.AnnualRevenue=9000000;
            }
            else if(ld.Industry=='Finance'){
                ld.AnnualRevenue=7600000;
            }
            else if(ld.Industry=='Insurance'){
                ld.AnnualRevenue=4500000;
            }
            else if(ld.Industry=='Manufacturing'){
                ld.AnnualRevenue=8400000;
            }
            else if(ld.Industry=='Education'){
                ld.AnnualRevenue=7400000;
            }
            else if(ld.Industry=='Consulting'){
                ld.AnnualRevenue=3200000;
            }
            else if(ld.Industry=='Energy'){
                ld.AnnualRevenue=9400000;
            }
            
        }
        
    }
    //Create a Trigger on the Lead object, to MakeSure the Lead Address should be Mandatory.
    // (i.e. Street, City, State, PostalCode, Country)
    public static void leadAddressMandatory(List<Lead> ldList){
        for(Lead ld : ldList){
            if(ld.Street==''||ld.Street==null){
                ld.Street.addError('Plzz insert Street field');
            }
            else if(ld.City==''|| ld.City==null){
                ld.City.addError('Plzz insert City field');
            }
            else if(ld.State==''|| ld.State==null){
                ld.State.addError('Plzz insert State field');
            }
            else if(ld.PostalCode==''|| ld.PostalCode==null){
                ld.PostalCode.addError('Plzz insert State field');
            }
            else if(ld.Country==''|| ld.Country==null){
                ld.Country.addError('Plzz insert State field');
            }
        }
    }
}