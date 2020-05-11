package com.bravo.store_managemt_system.model;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "ShoppingCart")
public class ShoppingCart {

    @Id
    private int cartId;
    private int productId;
    private String productName;
    private double productPrice;
    private double productDiscount;
}
