package com.monitoreoZoo.MonitoreoZoologico.documentos;


import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Animales")
public class Animales {
	// Definición de variables
    @Id
    private ObjectId _id;
    private String tipoAnimal;
    private String especie;
    private String nombre;
    private int edadAnios;
    private String sexo;
    private String salud;

    //Constructor, getters y setters

    public Animales() {}

    public Animales(ObjectId _id, String tipoAnimal, String especie, String nombre, int edadAnios, String sexo, String salud) {
        this._id = _id;
        this.tipoAnimal = tipoAnimal;
        this.especie = especie;
        this.nombre = nombre;
        this.edadAnios = edadAnios;
        this.sexo = sexo;
        this.salud = salud;
    }

    public ObjectId get_id() {
        return _id;
    }

    public void set_id(ObjectId _id) {
        this._id = _id;
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