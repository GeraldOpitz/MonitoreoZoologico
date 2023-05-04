package com.monitoreoZoo.MonitoreoZoologico.view;

import javax.swing.*;
import java.awt.event.*;
import java.awt.*;


public class Bienvenida extends JFrame implements ActionListener{
	private static final long serialVersionUID = 1L;
	private JButton botonAcceder;
	  private JLabel label1;
	  private InterfazPrincipal interfazPrincipal;

	  public Bienvenida() {
	    JPanel panel = new JPanel(new BorderLayout());
	    
	    // Titulo de la ventana
	    setTitle("Bienvenida");
	    
	    // Icono que se muestra en la parte superior del programa
	    setIconImage(new ImageIcon(getClass().getClassLoader().getResource("images/icono.png")).getImage());

	    // Imagen de bienvenida al programa
	    ImageIcon imagen = new ImageIcon(
	    		new ImageIcon(getClass().getClassLoader().getResource("images/bienvenido.png")).getImage().getScaledInstance(700, 300, Image.SCALE_DEFAULT));
	    label1 = new JLabel(imagen);
	    label1.setHorizontalAlignment(SwingConstants.CENTER);
	    panel.add(label1, BorderLayout.CENTER);

	    // botón de acceso a la siguiente ventana
	    botonAcceder = new JButton("Ingresar");
	    botonAcceder.setFont(new Font("Arial", Font.PLAIN, 40));
	    botonAcceder.addActionListener(this);
	    panel.add(botonAcceder, BorderLayout.SOUTH);

	    //agregar el panel al JFrame
	    add(panel);

	    //creación de instancia InterfazPrincipal
	    interfazPrincipal = new InterfazPrincipal();
	    interfazPrincipal.pack();
	    interfazPrincipal.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
	    interfazPrincipal.setLocationRelativeTo(null);

	  }

	  // metodo para pasar a la siguiente pantalla
	  public void actionPerformed(ActionEvent e) {
	    if (e.getSource() == botonAcceder) {
	      interfazPrincipal.setVisible(true);
	      dispose();
	    }
	  }

	  // Metodo main
	  public static void main(String args[]) {
	    Bienvenida ventanaBienvenida = new Bienvenida();
	    ventanaBienvenida.pack();
	    ventanaBienvenida.setDefaultCloseOperation(EXIT_ON_CLOSE);
	    ventanaBienvenida.setLocationRelativeTo(null);
	    ventanaBienvenida.setVisible(true);
	  }
}
