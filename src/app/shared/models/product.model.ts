export class ProductModel {
    Id: string;
    Code: string;
    Name: string;
    DCI1: string;
    Dosage: string;
    UnitDosage: Unit;
    Form: string;
    Presentation: string;
    PPV: Number;
    PH: Number;
    BRPrice: Number;
    Type: Princeps_Generic;
    Barcode: string;
    Comment: string;
    ProductionDate: Date;
    ExpirationDate: Date;

    constructor(code: string, nom: string, desc: string, 
        dsg: string, unit: Unit, form: string, bc: string,
        pres: string, ppv: Number, ph: Number, prdDate: Date, expDate: Date,
        br:Number, type:Princeps_Generic, cmt: string){
            this.Code = code;
            this.Name = name;
            this.DCI1 = desc;
            this.Dosage = dsg;
            this.UnitDosage = unit;
            this.Form= form;
            this.Presentation = pres;
            this.Type = type;
            this.PPV = ppv;
            this.PH = ph;
            this.BRPrice = br;
            //this.Barcode = bc;
            this.Comment = cmt;
            // this.ProductionDate = prdDate;
            // this.ExpirationDate = expDate;
        }
}

export interface Unit{
    Label: string;
    Unit: string;
}

export enum Princeps_Generic {
    p = 1,
    G = 2
}