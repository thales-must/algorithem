export const saveFileUtil = (response: any, file='file.xlsx') => {
  if (!response.headers?.['content-disposition']) {
    response.headers = {};
    response.headers['content-disposition'] = `attachment;filename=${file}`;
  }
  const filename =
    response.headers['content-disposition'].match(/filename=(.*)/)[1];
  const blob = new Blob([response.data], {
    type: response.headers['content-type']
  });

  // 创建新的URL并指向File对象或者Blob对象的地址
  const blobURL = window.URL.createObjectURL(blob);
  // 创建a标签，用于跳转至下载链接
  const tempLink = document.createElement('a');
  tempLink.style.display = 'none';
  tempLink.href = blobURL;
  tempLink.setAttribute('download', decodeURI(filename));
  // 兼容：某些浏览器不支持HTML5的download属性
  if (typeof tempLink.download === 'undefined') {
    tempLink.setAttribute('target', '_blank');
  }
  // 挂载a标签
  document.body.appendChild(tempLink);
  tempLink.click();
  document.body.removeChild(tempLink);
  // 释放blob URL地址
  window.URL.revokeObjectURL(blobURL);
};