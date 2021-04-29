//bytebank-herdado

public class Gerente extends Funcionario{//herda do func(classe)
	
	private int senha;
	
	public boolean autentica(int senha) {
		if(this.senha == senha) {
			return true;
		}else {
			return false;
		}
	}

	
	//bonificacao
	/*
	public double getBonificacao() {
		return this.salario;
	}
	*/
	
	//setters and getters
	public int getSenha() {
		return senha;
	}

	public void setSenha(int senha) {
		this.senha = senha;
	}
	
	
	
	
}
