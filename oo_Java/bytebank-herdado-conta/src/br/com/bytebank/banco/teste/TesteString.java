package br.com.bytebank.banco.teste;

public class TesteString {

	public static void main(String[] args) {
		
		String nome = "Ada";//objeto literal
		//String outroNome = new String("ada2");
		
		char c = 'o';
		
		String ParaTrocarNaString = nome.replace("A", "a");
		
		char d = nome.charAt(1);
		
		System.out.println(ParaTrocarNaString);
		System.out.println(c);
		System.out.println(d);
		
	}
	
}
