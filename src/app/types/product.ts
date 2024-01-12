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
        __v: number;
    };
    createdAt: string;
    updatedAt: string;
    __v: number;
};

export { IProduct };
