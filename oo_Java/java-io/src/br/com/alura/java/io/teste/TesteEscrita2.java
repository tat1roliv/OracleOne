package br.com.alura.java.io.teste;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.OutputStreamWriter;
import java.io.PrintStream;
import java.io.PrintWriter;
import java.io.Writer;


	public class TesteEscrita2 {

	        public static void main(String[] args) throws IOException {

	                //Fluxo de Entrada com Arquivo
	            	//OutputStream fos = new FileOutputStream("lorem2.txt");
	            	//Writer osw = new OutputStreamWriter(fos);
	            	//Buff3eredWriter bw = new BufferedWriter(osw);

	            	//BufferedWriter bw = new BufferedWriter(new FileWriter("lorem2.txt"));
	                //PrintStream ps = new PrintStream(new File("lorem2.txt"));
	        		PrintWriter ps = new PrintWriter("lorem");
	        		
	        		
	        		ps.println("holaaaaaaaaa");
	        		ps.println();
	        		ps.println("tall");

	                ps.close();
	        }
	        
	}
	

