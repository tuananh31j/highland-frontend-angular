type IProduct = {
    _id: string;
    name: string;
    price: string;
    sale: number;
    des: string;
    view: number;
    img: string;
    category_id: {
        _id: string;
        name: string;
        createdAt: string;
        updatedAt: string;
        __v: 0;
    };
    createdAt: string;
    updatedAt: string;
    __v: 0;
};

export { IProduct };
