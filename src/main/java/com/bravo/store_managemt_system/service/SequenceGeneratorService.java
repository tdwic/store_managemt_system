package com.bravo.store_managemt_system.service;

import com.bravo.store_managemt_system.model.ShoppingCartSequence;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.data.mongodb.core.MongoOperations;

import static org.springframework.data.mongodb.core.FindAndModifyOptions.options;
import static org.springframework.data.mongodb.core.query.Criteria.where;
import static org.springframework.data.mongodb.core.query.Query.query;

import java.util.Objects;

public class SequenceGeneratorService {


    @Autowired
    private MongoOperations mongoOperations;


    public long generateSequence(String seqName) {
        ShoppingCartSequence counter = mongoOperations.findAndModify(query(where("id").is(seqName)),
                new Update().inc("currentSqNo",1), options().returnNew(true).upsert(true),
                ShoppingCartSequence.class);
        return !Objects.isNull(counter) ? counter.getCurrentSqNo() : 1;
    }

}
