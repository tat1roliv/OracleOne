package bytebank;

public class TestaMetodo {

	public static void main(String[] args) {
		Conta contaUser = new Conta();
		contaUser.saldo = 100;
		
		//deposita
		contaUser.deposita(50);
		System.out.println(contaUser.saldo);
		
		//saca
		boolean conseguiuRetirar = contaUser.saca(20);
		System.out.println(contaUser.saldo);
		System.out.println(conseguiuRetirar);
		
		//nova conta
		Conta contaUser2 = new Conta();
		contaUser2.deposita(1000);
		
		//transferir
		boolean sucessoTransferencia = contaUser2.transfere(300, contaUser);
		if(sucessoTransferencia) {
			System.out.println("Transferência feita com sucesso.");
		} else {
			System.out.println("Saldo insuficiente");
		}
		System.out.println(contaUser.saldo);
		System.out.println(contaUser2.saldo);
		
		
		/*
		 //chamando metodo
Conta contaDoPaulo = new Conta();
contaDoPaulo.deposita(30.0);
		 */

	}

}
