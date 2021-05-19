package br.com.bytebank.banco.teste;


/**
 * methods:
 * 	replace;
 * 	upperCase;
 * 	lowerCase;
 * 	indexOf;
 * 	charAt;
 * 	length;
 * 	isEmpty;
 * 	contains;
 * 	trim;
 * 	split;
 * 
 * System.out.println -> o que é, visibilidade, acesso, pacote
 * System (classe, java.lang, public)
 * out(atributo, publico, referencia, static)
 * println()(metodo, public, nao static, sobrecarga, nao checked)
 * 
 * 
 *  * @author tatio
 *
 */


public class TesteString {

	public static void main(String[] args) {
		
		
		String vazio = " ";
		String outroVazio = vazio.trim();
		
		
		System.out.println(vazio.isEmpty());
		System.out.println(outroVazio.isEmpty());
		
	
		String nome = "Ada";//objeto literal
		//String outroNome = new String("ada2");

		System.out.println(nome.contains("da"));
		
		char c = 'o';
		
		String ParaTrocarNaString = nome.replace("A", "a");
		
		char d = nome.charAt(1);
		
		System.out.println(ParaTrocarNaString);
		System.out.println(c);
		System.out.println(d);
		
	}
	
}
