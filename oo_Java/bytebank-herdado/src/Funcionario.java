//bytebank-herdado

public abstract class Funcionario {

	private String nome;
	private String cpf;
	private double salario;
	
	//protected double salario;
	//protected -> acessado apenas pelos filhos da super class(classe mae)

	//construtor (mesmo nome da classe, nao tem return -> e)
	
	//bonificacao
	//metodo sem corpo
	public abstract double getBonificacao();
	
	
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
	
	public void setSalario (double salario) {
		this.salario = salario;
	}
	
}
