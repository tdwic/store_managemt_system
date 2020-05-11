package com.bravo.store_managemt_system.service;

import com.bravo.store_managemt_system.model.DATABASE_SEQUENCE;
import com.bravo.store_managemt_system.repository.DATABASE_SEQUENCE_REPOSITORY;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DATABASE_SEQUENCE_SERVICE {

    @Autowired
    DATABASE_SEQUENCE_REPOSITORY database_sequence_repository;

    public int getTableCurrentNumber(String table_name){
        return 1;
    }

    public void setTableCurrentNumber(String tableName){
        DATABASE_SEQUENCE database_sequence = new DATABASE_SEQUENCE();

        //database_sequence = database_sequence_repository.findById("1");

        database_sequence.setTableId(1);
        database_sequence.setTableName(tableName);
        database_sequence.setTableSequenceNumber(1);

        database_sequence_repository.save(database_sequence);
    }

}
