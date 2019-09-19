import CadastroWos from './views/Cadastro/Wos/CadastroWos/CadastroWos.js';
import AssociarUsuarios from "./views/Cadastro/Usuarios/CadastroUsuarios/CadastroUsuarios.js";
import AssociarMateriais from "./views/Cadastro/Materiais/AssociarMateriais/AssociarMateriais.js";
import CadastroProdutos from "./views/Cadastro/Produtos/CadastroProdutos/CadastroProdutos.js";

import CadastroUsuarios from "./views/Cadastro/Usuarios/CadastroUsuarios/CadastroUsuarios.js";
import AlterarUsuario from "./views/Cadastro/Usuarios/AlterarUsuario/AlterarUsuario.js";
import CadastroMateriais from "./views/Cadastro/Materiais/CadastroMateriais/CadastroMateriais.js";
import ErrorPage from "./views/Errors/ErrorPage.js";

import Linha01 from "./views/Monitoramento/Linha01.js"

import Home from './views/Home/Home.js'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/CadastroWos', name: 'CadastroWos', component: CadastroWos },
  { path: '/AssociarMateriais', name: 'AssociarMateriais', component: AssociarMateriais },
  { path: '/AssociarUsuarios', name: 'AssociarUsuarios', component: AssociarUsuarios },
  
  { path: '/Usuarios/CadastroUsuarios', name: 'CadastroUsuarios', component: CadastroUsuarios },
  { path: '/Usuarios/AlterarUsuario/:_id', name: 'AlterarUsuario', component: AlterarUsuario },
  
  { path: '/CadastroProdutos', name: 'CadastroProdutos', component: CadastroProdutos },
  { path: '/CadastroMateriais', name: 'CadastroMateriais', component: CadastroMateriais },
  { path: '/Linha01', name: 'Linha01', component: Linha01 },
  { path: '/Error', name: 'Error', component: ErrorPage },
];

export default routes;
