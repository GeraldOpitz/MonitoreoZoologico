package com.monitoreoZoo.MonitoreoZoologico.documentos;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Animales")
public class Animales {
	// Definición de variables
    @Id
    private int id;
    private String tipoAnimal;
    private String especie;
    private String nombre;
    private int edadAnios;
    private int edadMeses;
    private int edadDias;
    private String sexo;
    private String salud;

    //Constructor, getters y setters

    public Animales() {}

    public Animales(int id, String tipoAnimal, String especie, String nombre, int edadAnios, int edadMeses, int edadDias, String sexo, String salud) {
        this.id = id;
        this.tipoAnimal = tipoAnimal;
        this.especie = especie;
        this.nombre = nombre;
        this.edadAnios = edadAnios;
        this.edadMeses = edadMeses;
        this.edadDias = edadDias;
        this.sexo = sexo;
        this.salud = salud;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTipoAnimal() {
        return tipoAnimal;
    }

    public void setTipoAnimal(String tipoAnimal) {
        this.tipoAnimal = tipoAnimal;
    }

    public String getEspecie() {
        return especie;
    }

    public void setEspecie(String especie) {
        this.especie = especie;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public int getEdadAnios() {
        return edadAnios;
    }

    public void setEdadAnios(int edadAnios) {
        this.edadAnios = edadAnios;
    }

    public int getEdadMeses() {
        return edadMeses;
    }

    public void setEdadMeses(int edadMeses) {
        this.edadMeses = edadMeses;
    }

    public int getEdadDias() {
        return edadDias;
    }

    public void setEdadDias(int edadDias) {
        this.edadDias = edadDias;
    }

    public String getSexo() {
        return sexo;
    }

    public void setSexo(String sexo) {
        this.sexo = sexo;
    }

    public String getSalud() {
        return salud;
    }

    public void setSalud(String salud) {
        this.salud = salud;
    }
}