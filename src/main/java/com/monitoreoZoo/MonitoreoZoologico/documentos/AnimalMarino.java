package com.monitoreoZoo.MonitoreoZoologico.documentos;

import org.bson.types.ObjectId;

public class AnimalMarino extends Animales {

    public AnimalMarino(ObjectId _id, String tipoAnimal, String especie, String nombre, int edadAnios, String sexo, String salud) {
        super(_id, tipoAnimal, especie, nombre, edadAnios, sexo, salud); 
      }

}
