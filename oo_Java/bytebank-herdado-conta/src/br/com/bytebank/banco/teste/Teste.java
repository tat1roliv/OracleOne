package br.com.bytebank.banco.teste;

public class Teste {
	
	public static void main(String[] args) {
	
		int[] idades = new int[50];//atribui valor padrao = 0 a todos os indices
		
//		idades[0] = 29;
//		idades[1] = 39;
//		idades[2] = 49;
//		idades[3] = 59;
//		idades[4] = 69;
//		
//		int idade1 = idades[4];
//		
//		int idade49 = idades[49];
//
//		System.out.println(idade1);
//		System.out.println(idade49);
//		System.out.println(idades.length);
		
		for (int i=0; i<idades.length; i++) {
			idades[i] = i *i;
		}
		
		for (int i=0; i<idades.length; i++) {
			System.out.println(idades[i]);
		}
			
	}
	
	
	
}
