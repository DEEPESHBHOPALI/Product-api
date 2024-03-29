import express from 'express';
import Product from './Schema/Product';

const app = express();

const searchFieldsHandle = (searchFields) => {
    let obj = {}
    searchFields.map(e => {
        if (!obj[e]) {
            obj[{ e: 1 }]
        }
    })
    return obj
}

app.get('/get-products', (req, res) => {
    const { currentPage = 1, pageSize = 10, orderBy = 'createdAt', orderDir = -1, searchBy = '', searchFields = [] } = req.body

    let query = {}
    let sortQuery

    if (searchBy && searchFields.length) {
        query.$or = { productName: searchBy, description: searchBy }
        query.$or = searchFieldsHandle(searchFields)
    }
    else if (searchBy) {
        query.$or = { productName: searchBy, description: searchBy }
    }
    else if (searchFields.length) {
        query.$or = searchFieldsHandle(searchFields)
    }

    if (orderBy) {
        sortQuery = { [orderBy]: orderDir }
    } else if (orderDir) {
        sortQuery = orderDir
    } else {
        sortQuery = -1
    }

    const pagination = (currentPage - 1) * pageSize

    const [prod, count] = Promise.all([
        Product.find(query).skip(pagination).limit(pageSize).sort(sortQuery),
        Product.find(query).skip(pagination).limit(pageSize)
    ])

    if (!prod) throw new Error("Cannot find the product with provided details")

    const data = {
        "currentPage": currentPage,
        "pageSize": pageSize,
        "totalPages": 1,
        "totalCount": count,
        "data": prod
    }

    return res.status(200).json({ data })
})




