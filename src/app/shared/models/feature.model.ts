
export enum Features {
  CUSTOMER = 1,
  PRESCRIPTION = 2
}

export class Feature {
  Title:string;
  Icon:string;
  Color:string;
  Route:string;
  constructor(t:string, i:string){
    this.Title = t;
    this.Icon = i;
  }
}

export class NavigationStyleSetting{
    SectionTitle:string;
    Color:string;
    Features:Feature[];
}
