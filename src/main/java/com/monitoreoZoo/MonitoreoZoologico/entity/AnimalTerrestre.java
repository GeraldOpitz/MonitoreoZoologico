package com.monitoreoZoo.MonitoreoZoologico.entity;

import lombok.experimental.SuperBuilder;

@SuperBuilder
public class AnimalTerrestre extends Animal {

    public AnimalTerrestre(String tipoAnimal, String especie, String nombre, int edadAnios, String sexo, String salud) {
        super(tipoAnimal, especie, nombre, edadAnios, sexo, salud); 
      }
}