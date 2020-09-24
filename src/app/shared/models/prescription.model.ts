import { CustomerModel } from './customer.model';
import { ProductModel } from './product.model';

export class PrescriptionModel {
    Customer: CustomerModel;
    Products: ProductModel[];
    Id: string;
    Date: Date;
    Description: string;
}