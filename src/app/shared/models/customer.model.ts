
export class CustomerModel
{
    Id: string;
    FirstName: string;
    LastName: string;
    Age: Number;

    constructor(id: string, first: string, last: string, age){
        this.Id = id;
        this.FirstName = first;
        this.LastName = last;
        this.Age = age;
    }
}