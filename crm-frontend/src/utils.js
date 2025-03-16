import { toast } from 'react-toastify'

export const handelSuccess = (msg)=>{
    toast.success(msg, {
        position: 'top-right'
    })
}

export const handelError = (msg)=>{
    toast.error(msg, {
        position: 'top-right'
    })
}

export const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    }).replace(",", " at");
  };
  
  export const capitalizedWord = (str) => {
    return str
        .split(" ") 
        .map(word => word.charAt(0).toUpperCase() + word.slice(1)) 
        .join(" ");
  }