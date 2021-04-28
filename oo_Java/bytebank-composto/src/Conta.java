
//bytenank-composto
public class Conta {
	//atributos
	private double saldo; //privado (nao pode ser modificado e nem lido externamente => encapsulamento )
	int agencia;//=42 (pode ser atribuido um preenchimento padrao)
	int numero;
	Cliente titular; //new Cliente();
		
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
	
	public double getSaldo() {
		return this.saldo; //para acessar a info private
	}


}
