package bytebank;

public class CriaConta {

	public static void main(String[] args) {
		Conta primeiraConta = new Conta();
		primeiraConta.saldo = 200;
		System.out.println("Saldo $: " + primeiraConta.saldo);
		
		primeiraConta.saldo +=100;
		System.out.println("Saldo $: " + primeiraConta.saldo);
		
		Conta segundaConta = new Conta();
		segundaConta.saldo = 50;
		System.out.println("Saldo $: " + segundaConta.saldo);
		
		//primeiraConta.agencia = 146;	
		System.out.println("Ag: " + primeiraConta.agencia); //atribuido ao que nao estiver preenchido (0/false)
		segundaConta.agencia = 146;		
		System.out.println("Ag: " + segundaConta.agencia);
		
		if(primeiraConta == segundaConta) {//referencia
			System.out.println("mesma conta");
		}else {
			System.out.println("contas diferentes");
		}
		
		System.out.println(primeiraConta);
		System.out.println(segundaConta);
	}

}
