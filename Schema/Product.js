import mongoose from "mongoose";


const Product = mongoose.Schema({
    productId: { type: String, required: true },
    productName: { type: String },
    productImageName: { type: String },
    productImageURL: { type: String },
    brandName: { type: String },
    description: { type: String },
    itemCode: { type: String },
    itemType: { type: String },
    currency: { type: String },
    currencyCode: { type: String },
    saleAmount: { type: String },
    brochureFileName: { type: String },
    brochureFileURL: { type: String },
    vendors: { type: String },
    status: { type: String },
    createdBy: { type: String },
    created: { type: String },
    updated: { type: String },
    subCategoryId: { type: String },
    categoryId: { type: String },
    uomId: { type: String },
    shippingMethodId: { type: String },
    shippingTermsId: { type: String },
    paymentTermsId: { type: String },
    categoryName: { type: String },
    subCategoryName: { type: String },
    uomCode: { type: String },
    uomDescription: { type: String },
    organisationName: { type: String },
    organisationId: { type: String },
    vendorInfo: { type: String },
})

export default Product