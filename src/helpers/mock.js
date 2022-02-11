import productJson from './product.json';
import blogJson from './blog.json';
/**

*/
function generateMockProductData(count, tag) {
    return productJson;
    //const x = JSON.parse(jsonData);
    // console.log(x);
}

function generateMockBlogData() {
    return blogJson;
}
  
export {
    generateMockProductData,
    generateMockBlogData,
};
  