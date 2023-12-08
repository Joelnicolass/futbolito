export const putStatus = (error?: string, value?: string | number) =>{
    console.log(error, value);

    if (!error && !value){
      return 'basic';
    }
    if (!error && value){
      return 'success';
    }
    return 'danger';
  };