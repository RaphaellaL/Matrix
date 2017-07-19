 new Vue({
 el: '#app',
 data: {
     email:"",
  nome: "",
  sexo:"",
      sexos: [
            {text:"",value:""},
            {text: "Masculino", value: "masculino"},
            {text: "Feminino", value:"feminino"}
        ],
  curso:"",
        cursos:[
            {text:"",value:""},
            {text:"Técnico em Informatica",value:"informatica"},
            {text:"Técnico em Alimentos",value:"alimento"},
            {text:"Técnico  em Agropecuária",value:"agropecuária"},
        ],
  endereco:"",
  complemento:"",
  cep:"",
  municipio:"",
  uf:"",
  ufs:[
      {text:"",value:""},
      {text:"AC",value:"AC"},
      {text:"AL",value:"AL"},
      {text:"AM",value:"AM"},
      {text:"AP",value:"AP"},
      {text:"BA",value:"BA"},
      {text:"CE",value:"CE"},
      {text:"DF",value:"DF"},
      {text:"ES",value:"ES"},
      {text:"GO",value:"GO"},
      {text:"MA",value:"MA"},
      {text:"MG",value:"MG"},
      {text:"MS",value:"MS"},
      {text:"MT",value:"MT"},
      {text:"PA",value:"PA"},
      {text:"PB",value:"PB"},
      {text:"PE",value:"PE"},
      {text:"PI",value:"PI"},
      {text:"PR",value:"PR"},
      {text:"RJ",value:"RJ"},
      {text:"RN",value:"RN"},
      {text:"RS",value:"RS"},
      {text:"RO",value:"RO"},
      {text:"RR",value:"RR"},
      {text:"SC",value:"SC"},
      {text:"SE",value:"SE"},
      {text:"SP",value:"SP"},
      {text:"TO",value:"TO"},					
  ]
 },
 

 
 methods: {
  salvar: function(){
   obj = {
    email: this.email,
    nome: this.nome,
    sexo:  this.sexo,
    curso: this.curso,
    endereco: this.endereco,
    complemento: this.complemento,
    cep: this.cep,
    municipio: this.municipio,
    uf: this.uf
   };
   localStorage.setItem("cadastro",JSON.stringify(obj));
   }
  },
 
 mounted: function(){
  if(localStorage.getItem("cadastro") !== null){  //se o cadastro estiver completo faça 
   var dadosCadastro = JSON.parse(localStorage.getItem("cadastro")); 
   this.email = dadosCadastro.email;
   this.nome = dadosCadastro.nome;
   this.sexo = dadosCadastro.sexo;
   this.curso = dadosCadastro.curso;
   this.endereco = dadosCadastro.endereco;
   this.complemento = dadosCadastro.complemento;
   this.cep = dadosCadastro.cep;
   this.municipio = dadosCadastro.municipio;
   this.uf = dadosCadastro.uf;
  }
 }
});