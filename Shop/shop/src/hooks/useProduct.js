import { Services } from "../Services/Services";
import { User } from "../schemas/User";
import Product from "../schemas/Product";
import {useDispatch , useSelector} from 'react-redux';
import {useEffect, useState} from 'react';

export const useProduct = () => {
    
        const [products, setProducts] = useState([]);
    
        useEffect(() => {
            Services.Product.getAll()
                .then((response) => {
                    const products = response.map(Product.fromJson);
                    if (!products) return;
                    setProducts(products);
                })
                .catch(() => {
                    console.log('error');
                });
        }, []);
    
        const addProduct = async (product) => {
            const newProduct = await Services.Product.add(product);
            return !!newProduct;
        }
    
        const deleteProduct = async (id) => {
            const response = await Services.Product.delete(id);
            return !!response;
        }
    
        return {products, addProduct, deleteProduct};
    }