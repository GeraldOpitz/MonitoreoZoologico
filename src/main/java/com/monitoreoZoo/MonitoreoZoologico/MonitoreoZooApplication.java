package com.monitoreoZoo.MonitoreoZoologico;

import javax.swing.JFrame;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.monitoreoZoo.MonitoreoZoologico.view.InterfazPrincipal;
import com.monitoreoZoo.MonitoreoZoologico.view.Bienvenida;

@SpringBootApplication
public class MonitoreoZooApplication{

	public static void main(String[] args) {
		System.setProperty("java.awt.headless", "false");
		SpringApplication.run(MonitoreoZooApplication.class, args);
		
		Bienvenida bienvenida = new Bienvenida();
		bienvenida.pack();
		bienvenida.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		bienvenida.setLocationRelativeTo(null);
		bienvenida.setVisible(true);
	}
}
