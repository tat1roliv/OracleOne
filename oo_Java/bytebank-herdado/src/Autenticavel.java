//interface (nao pode ter nada concreto -> todos os metodos abstratos)
	//contrato Autenticavel (quem assina o contrato precisa implentar:
	//metodo setsenha
	//metodo autentica

public abstract interface Autenticavel{
	
	public abstract void setSenha(int senha);
	
	public abstract boolean autentica(int senha);
	
}
