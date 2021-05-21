package br.com.bytebank.banco.teste;

import br.com.bytebank.banco.modelo.ContaPoupanca;

public class tt {

	public static void main(String[] args) {
		ContaPoupanca[] contas = new ContaPoupanca[10];
	ContaPoupanca cp1 = new ContaPoupanca(11,22);
	ContaPoupanca cp2 = new ContaPoupanca(33,44);

	contas[0] = cp1;
	contas[4] = cp2;

	System.out.println(contas[1].getNumero());
	}
	
}
