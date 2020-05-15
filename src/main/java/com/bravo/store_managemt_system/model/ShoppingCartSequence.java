package com.bravo.store_managemt_system.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "ShoppingCartSequence")
public class ShoppingCartSequence {
    @Id
    private String id;
    private long currentSqNo;

    public long getCurrentSqNo() {
        return currentSqNo;
    }

    public void setCurrentSqNo(int currentSqNo) {
        this.currentSqNo = currentSqNo;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }
}
