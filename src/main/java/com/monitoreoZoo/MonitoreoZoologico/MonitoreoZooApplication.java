package com.monitoreoZoo.MonitoreoZoologico;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class MonitoreoZooApplication{

	public static void main(String[] args) {
		System.setProperty("java.awt.headless", "false");
		SpringApplication.run(MonitoreoZooApplication.class, args);
	}
}
