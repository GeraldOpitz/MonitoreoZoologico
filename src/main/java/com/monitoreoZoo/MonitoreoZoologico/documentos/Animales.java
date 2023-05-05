package com.monitoreoZoo.MonitoreoZoologico.documentos;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Animales")
public class Animales {
	// Definición de variables
	@Id
	protected int id;
	protected String tipoAnimal;
	protected String especie;
	protected String nombre;
	protected int edadAnios;
	protected String sexo;
	protected String salud;

	// constructor del objeto
	public Animales(int id, String tipoAnimal, String especie, String nombre, int edadAnios, String sexo, String salud) {
		super();
		this.id = id;
		this.tipoAnimal = tipoAnimal;
		this.especie = especie;
		this.nombre = nombre;
		this.edadAnios = edadAnios;
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

	@Override
	public String toString() {
		return "Animales [id=" + id + ", tipoAnimal=" + tipoAnimal + ", especie=" + especie + ", nombre=" + nombre
				+ ", edadAnios=" + edadAnios + ", sexo=" + sexo + ", salud=" + salud + "]";
	}	
	
	
}
