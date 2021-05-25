package br.com.bytebank.banco.teste;

import br.com.bytebank.banco.modelo.Conta;
import br.com.bytebank.banco.modelo.ContaCorrente;
import br.com.bytebank.banco.modelo.ContaPoupanca;

public class TesteArrayReferencias {
	
	public static void main(String[] args) {
		
		Conta[] contas = new Conta[5];
		
		//Object[] referencias = new Object[5];
		

		ContaCorrente cc1 = new ContaCorrente(111, 110);
		contas[0] = cc1;
		
		ContaPoupanca cc2 = new ContaPoupanca(222, 220);
		contas[1] = cc2;
		
		ContaPoupanca ref = (ContaPoupanca) contas[1];//type cast
		
		
		System.out.println(cc1.getAgencia());
		System.out.println(cc1.getNumero());
		
		System.out.println(contas[0].getNumero());
		System.out.println(contas[1].getNumero());
		
		
		
	}

}
