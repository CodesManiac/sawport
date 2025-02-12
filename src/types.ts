export interface EmailTemplateType{
    recipientName:string,
    emailImage:string,
    body:string[],
}
export interface ButtonType{
    text:string,
    onReshedule:()=>void,
}