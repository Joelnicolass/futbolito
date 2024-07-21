export const putStatus = (error?: string, value?: string | number) =>{

    if (!error && !value){
      return 'basic';
    }
    if (!error && value){
      return 'success';
    }
    return 'danger';
  };