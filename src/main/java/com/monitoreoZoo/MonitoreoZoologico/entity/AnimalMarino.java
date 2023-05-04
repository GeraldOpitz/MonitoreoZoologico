package com.monitoreoZoo.MonitoreoZoologico.entity;

import lombok.experimental.SuperBuilder;

@SuperBuilder
public class AnimalMarino extends Animal {

    public AnimalMarino(String tipoAnimal, String especie, String nombre, int edadAnios, String sexo, String salud) {
        super(tipoAnimal, especie, nombre, edadAnios, sexo, salud); 
      }

}
