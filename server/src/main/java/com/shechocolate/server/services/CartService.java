package com.shechocolate.server.services;

import java.util.List;

import com.shechocolate.server.model.Cart;

public interface CartService {
    
    public Cart getProduct(int id, int count);

    public Cart casualGetProduct(int id, int count);

    public Cart jacketGetProduct(int id, int count);

    public Cart jilbabGetProduct(int id, int count);

    public List<Cart> getAllProduct();

    public Cart deleteCartItem(int id);

    public Cart increaseQty(int id, int qty);

    public Cart decreaseQty(int id, int qty);

}