function getProperties(obj) {
   let res = [];

   if(Object.prototype.toString.call(obj) === '[object Object]') {
     Object.keys(obj).forEach((key) => {
         if (typeof(obj[key]) === 'object') {
             let tmp = getProperties(obj[key]);
             tmp.length === 0 ? res.push(key) : res = res.concat(tmp.map(k => `${key}.${k}`));
         } else {
             res.push(key);
         }
     });
 }

 return res;
}

module.exports = {getProperties};
