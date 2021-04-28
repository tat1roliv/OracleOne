//bytenank-encapsulado
public class Conta {
	//atributos
	private double saldo; 
	private int agencia;
	private int numero;
	private Cliente titular;
	private static int total;
	
	//construtor (rotina de execucao)
	public Conta(int agencia, int numero) {
		Conta.total++;
		System.out.println("total de contas: "+ Conta.total);
		this.agencia = agencia;
		this.numero = numero;
		System.out.println("criando conta n. :"+ this.numero);
	}
		
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
	
	//getters and setters
	public double getSaldo() {
		return this.saldo; //para acessar a info private
	}

	public int getNumero() {
		return this.numero;
	}
	
	
	public void setNumero(int numero) {
		if(numero <= 0) {
			System.out.println("Valor incorreto para numero");
			return;
		}
		this.numero = numero;
	}
	
	public int getAgencia() {
		return this.agencia;
	}
	
	public void setAgencia(int agencia) {
		if(agencia <= 0) {
			System.out.println("Valor incorreto para agencia");
			return;
		}
		this.agencia = agencia;
	}
	
	public void setTitular(Cliente titular) {
		this.titular = titular;
	}
	
	public Cliente getTitular() {
		return titular;
	}
	
	public static int getTotal() {
		return Conta.total;
	}
	
}
