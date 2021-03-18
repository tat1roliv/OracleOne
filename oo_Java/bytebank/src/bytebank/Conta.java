package bytebank;

public class Conta {
	//atributos
	double saldo;
	int agencia;//=42 (pode ser atribuido um preenchimento padrao)
	int numero;
	String titular;
	
	//metodos
	public void deposita(double valor) {
		this.saldo = saldo + valor;
	}
	
	public boolean saca(double valor) {
		if (this.saldo >= valor) {
			this.saldo -= valor;//this.saldo = this.saldo - valor;
			return true;
		}
		else {
			return false;
		}
	}
	
	public boolean transfere(double valor, Conta destino) {
		if(this.saldo >= valor) {
			this.saldo -= valor;
			destino.deposita(valor);
			return true;
		}
		return false;
	}

}
