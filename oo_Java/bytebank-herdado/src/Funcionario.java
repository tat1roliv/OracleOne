//bytebank-herdado

public class Funcionario {

	private String nome;
	private String cpf;
	private double salario;
	
	//construtor (mesmo nome da classe, nao tem return -> e)
	

	//bonificacao
	public double getBonificacao() {
		return this.salario * 0.1;
	}
	
	//getters setters
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public String getCpf() {
		return cpf;
	}
	public void setCpf(String cpf) {
		this.cpf = cpf;
	}
	public double getSalario() {
		return salario;
	}
	public void setSalario(double salario) {
		this.salario = salario;
	}
	
	
	
	
}
