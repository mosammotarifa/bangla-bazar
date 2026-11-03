export const headerContent = async () => {
  const res = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/categories",
  );
  if (!res.ok) {
    throw new Error("failed to fetched to  headers component");
  }
  const data = await res.json();
  return data;
};
export const marqureeContent = async () => {
  const res = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/products",
  );
  if (!res.ok) {
    throw new Error("faild to fetched to  marqureeContent");
  }
  const data = await res.json();
  return data;
};
 export const AllCatagoriesProductsData = async (category) => {
  const res = await fetch(
    `https://api.api-store.workers.dev/api/bazardor/products?category=${category}`,
  );
  if (!res.ok) {
    throw new Error("faild to fetched to  Allrice");
  }
  const data = await res.json();
  return data;
};
 export const DetailsProductData =async(id)=>{
  const res =await fetch(`https://api.api-store.workers.dev/api/bazardor/products/${id}`)
  if(!res.ok){
    throw new Error("failed to fetched to details productData")

  }
  const data = await res.json()
  return data;
}
