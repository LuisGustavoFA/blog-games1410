export const format = (text) =>{
  return text == null ? '' : text.replace(/,/g, "").replace(/ /g, "-").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}