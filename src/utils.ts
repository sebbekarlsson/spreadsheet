export const range = (n: number) => [...Array.from(Array(n).keys())];

export const downloadFile = (filename: string, data: string, type: string) => {
  var blob = new Blob([data], { type });
  if (!!window.navigator.msSaveOrOpenBlob) {
    window.navigator.msSaveBlob(blob, filename);
  } else {
    var elem = window.document.createElement("a");
    elem.href = window.URL.createObjectURL(blob);
    elem.download = filename;
    document.body.appendChild(elem);
    elem.click();
    document.body.removeChild(elem);
  }
};
