import AllCategoryProduct from "@/component/AllCategoryProduct";
import SortedProducted from "@/component/SortedProducted";
import { AllCatagoriesProductsData } from "@/lib/data";

const ProductCategory = async ({ params }) => {
  const { category } = await params;
  const categorydata = await AllCatagoriesProductsData(category);
  console.log(" where isthe data", categorydata, category);

  return (
    <div className="bg-gray-100">
     
      <div className="container mx-auto">
        <div className="flex  flex-wrap items-center justify-between gap-3 rounded-2xl border border-green-100 bg-white p-5 mt-5">
          <div className="flex items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl  text-3xl shadow-sm">
              {categorydata[0]?.categoryIcon}
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900">
                {categorydata[0]?.categoryNameBn}
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                {categorydata.length}টি পণ্যের আজকের দাম ও পরিবর্তন
              </p>
            </div>
          </div>
          {/* Data Sorting */}
        </div>
        <div>
          <SortedProducted categorydata={categorydata} />
        </div>
      </div>
    </div>
  );
};

export default ProductCategory;
