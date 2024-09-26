import { LightningElement, track, wire } from 'lwc';
import fetchData from '@salesforce/apex/ObjectRecordDataTable.fetchObjectData';
export default class Custom_DataTable extends LightningElement {

    accounts;
    @track error;

    // connectedCallback(){
    //     this.handleClick();
    // }
    // async handleClick(){
    //     // fetchData()
    //     //     .then(result=>{
    //     //         this.accounts = result;
    //     //         this.error = undefined;
    //     //         console.log('Acc:', this.accounts);
    //     //     })
    //     //     .catch(error=>{
    //     //         this.error = error;
    //     //         this.accounts = undefined;
    //     //     });
    //     try {
    //         const result = await fetchData();
    //         console.log('Accounts:', result);
    //         this.accounts = result;
    //     } catch(error){
    //         console.error(error);
    //         this.error = error;
    //     }
    // }
    handleClick(){
        fetchData()
            .then(result=>{
                this.accounts = result;
                this.error = undefined;
                console.log('Acc:', this.accounts);
            })
            .catch(error=>{
                this.error = error;
                this.accounts = undefined;
            });
    }

    // @track accounts;
    // @track error;

    // @wire(fetchData)
    // wiredAccounts({ error, data }) {
    //     if (data) {
    //         this.accounts = data;
    //         console.log('OUTPUT : ', this.accounts);
    //         this.error = undefined;
    //     } else if (error) {
    //         this.error = error;
    //         this.accounts = undefined;
    //     }
    // }
}