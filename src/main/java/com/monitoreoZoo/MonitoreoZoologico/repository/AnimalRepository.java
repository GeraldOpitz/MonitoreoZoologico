package com.monitoreoZoo.MonitoreoZoologico.repository;

import com.monitoreoZoo.MonitoreoZoologico.documentos.Animales;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface AnimalRepository extends MongoRepository<Animales, Integer>{

}
