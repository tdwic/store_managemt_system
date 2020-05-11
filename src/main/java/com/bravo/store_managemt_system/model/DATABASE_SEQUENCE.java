package com.bravo.store_managemt_system.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "DATABASE_SEQUENCE")
public class DATABASE_SEQUENCE {
    @Id
    private int tableId;
    private String tableName;
    private int tableSequenceNumber;

    public int getTableId() {
        return tableId;
    }

    public void setTableId(int tableId) {
        this.tableId = tableId;
    }

    public String getTableName() {
        return tableName;
    }

    public void setTableName(String tableName) {
        this.tableName = tableName;
    }

    public int getTableSequenceNumber() {
        return tableSequenceNumber;
    }

    public void setTableSequenceNumber(int tableSequenceNumber) {
        this.tableSequenceNumber = tableSequenceNumber;
    }
}
