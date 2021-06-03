package br.com.alura.java.io.teste;

import java.io.UnsupportedEncodingException;
import java.nio.charset.StandardCharsets;

public class Teste {

	public static void main(String[] args) throws UnsupportedEncodingException {

		String s = "Ç";
		
		int codePoint = s.codePointAt(0);
		System.out.println("Unicode CodePoint: " + codePoint);
		
		String[] encodings = {"windows-1252", "UTF-8", "UTF-16", 
				StandardCharsets.ISO_8859_1.displayName()};

		for (String encoding : encodings) {
			byte[] bytes = s.getBytes(encoding);
			System.out.println(bytes.length + " bytes, " + encoding + ", " + new String(bytes, encoding));
		}
	}
}