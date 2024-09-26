import { LightningElement, api, wire } from 'lwc';
import GETLISTVIEW from '@salesforce/apex/ListViewData.getListView';
export default class OP_CustomListView extends LightningElement {

    objectName = 'Account';
    iconName = 'standard:'+ this.objectName.toLowerCase();
    accountListView;
    selectedValue;
    objectIconUpdate = 'slds-icon-standard-'+this.objectName.toLowerCase();
    renderedCallback(){
            // let dataId = event.target.dataset.targetId;
            const list = this.template.querySelector('span[data-id="objectIcon"]');
            // console.log('ClassList:', this.template.querySelector('span[data-id="objectIcon"]'));
            if (list) {
                // Access the data-id value
                const dataIdValue = list.dataset.id;
                // console.log('Data-id:', dataIdValue);
                
                // Add a custom class (if needed)
                list.classList.add(this.objectIconUpdate);
            } else {
                console.error('Element with data-id="objectIcon" not found');
            }
            // console.log('NewIcon:', this.objectIconUpdate);
    }

    get spanClass() {
        return `slds-icon_container slds-icon-standard-${this.objectName}`;
    }
    @wire(GETLISTVIEW, { objectName: '$objectName'})
    getListView({ error, data }) {
        if (data) {
            this.accountListView = data;   
            // console.log('AccountLV::', this.accountListView);
        }
        else if (error) {
            console.log(error);
        }
    }

    handleChange(event){
        this.selectedValue = event.target.value;
        console.log('SelectedValue::', this.selectedValue);
    }
}