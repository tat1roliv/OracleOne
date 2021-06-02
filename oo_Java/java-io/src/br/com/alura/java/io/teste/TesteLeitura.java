package br.com.alura.java.io.teste;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.OutputStreamWriter;
import java.io.Reader;
import java.io.Writer;

public class TesteLeitura {

		public static void main(String[] args) throws IOException {
			
			//padrao decorator -> um objeto decora o anterior
			//fluxo de entrada com Arquivo	
			InputStream fis = new FileInputStream("lorem.txt");//file //string
			Reader isr = new InputStreamReader(fis);//bytes em caracteres
			BufferedReader br = new BufferedReader(isr);//juntar caracteres
			
			//ex pdf -> stream x reader (txt)
			
			String linha = br.readLine();
			
			while (linha != null) {
				System.out.println(linha);
				linha = br.readLine();
			}
			
			
			br.close();
		
	}

}
