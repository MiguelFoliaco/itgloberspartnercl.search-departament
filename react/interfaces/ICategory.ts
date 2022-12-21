export interface ICategory{
  id:number;
  href:string;
  slug:string;
  children:{
    id:number;
    href:string;
    slug:string;
  }[]
}
