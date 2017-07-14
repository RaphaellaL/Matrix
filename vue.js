 var coisa={
         mail:"",
        nome: "",
        sexo:"",
        curso:"",
        endereco:"",
        complemento:"",
         cep:"",
        municipio:"",
         uf:"",
};




new Vue({
    el:"#app",
    data: function(){
    return  coisa ;

    },
			methods: {
                        salvar: function(){
                            localStorage.setItem("cadastro",JSON.stringify(coisa));
                               
                        }
            },
            created: function(){
                if(localStorage.coisa){
        var dadosCadastro = JSON.parse(localStorage.getItem("cadastro")); 
        this.email = dadosCadastro['email'];
        this.nome = dadosCadastro['nome'];
        this.sexo = dadosCadastro['sexo'];
        this.curso = dadosCadastro['curso'];
        this.endereco = dadosCadastro['endereco'];
        this.complemento = dadosCadastro['complemento'];
        this.cep = dadosCadastro['cep'];
        this.municipio = dadosCadastro['municipio'];
        this.uf = dadosCadastro['uf'];

                }
                 
         }
            
                    		            
});