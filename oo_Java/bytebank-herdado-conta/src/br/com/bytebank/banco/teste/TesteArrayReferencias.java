package br.com.bytebank.banco.teste;

import br.com.bytebank.banco.modelo.ContaCorrente;

public class TesteArrayReferencias {
	
	public static void main(String[] args) {
		
		ContaCorrente[] contas = new ContaCorrente[5];

		ContaCorrente cc1 = new ContaCorrente(111, 110);
		contas[0] = cc1;
		
		ContaCorrente cc2 = new ContaCorrente(222, 220);
		contas[1] = cc2;
		
		ContaCorrente ref = contas[1];
		
		
		System.out.println(cc1.getAgencia());
		System.out.println(cc1.getNumero());
		
		System.out.println(contas[0].getNumero());
		System.out.println(contas[1].getNumero());
		
		
		
	}

}
