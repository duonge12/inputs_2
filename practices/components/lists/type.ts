import { IInput } from "../inputs/type";
export enum EState
{
    DEFAULT='Default',
    ACTIVE='Active',
    LOADING='Loading',
    DISABLE='Disable',
    SUCCESS='Success',
    ERROR='Error',
}
export interface IData {
    name?:string
    value?:string
}
export interface ISearchDrop extends IInput {
    data?:IData[]
   
}