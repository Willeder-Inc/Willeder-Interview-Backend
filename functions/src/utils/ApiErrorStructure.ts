export function ERROR(message:string,code:number,status:number) {
  return {
    message: message,
    code: code,
    status: status
  };
}