export default {
  items: [
    {
      title: true,
      name: "OPERAÇÃO"
    },
    {
      name: "Monitoramento",
      url: "/Monitoramento",
      icon: "cui-chart",
      children: [
        {
          name: "Linha01",
          url: "/App/Linha01",
          icon: "cui-user"
        }]
    },
    {
      title: true,
      name: "GERENCIAMENTO"
    },
    {
      name: "Cadastro",
      url: "/App",
      icon: "cui-note",
      children: [
        {
          name: "Associar Usuários",
          url: "/AssociarUsuarios",
          icon: "cui-user"
        },
        {
          name: "Associar Materiais",
          url: "/AssociarMateriais",
          icon: "cui-tags"
        },
        {
          name: "Cadastro de Usuários",
          url: "/Usuarios/CadastroUsuarios",
          icon: "cui-people"
        },
        {
          name: "Cadastro de WO's",
          url: "/CadastroWos",
          icon: "cui-pencil"
        },
        {
          name: "Cadastro de Produtos",
          url: "/CadastroProdutos",
          icon: "cui-map"
        },
        {
          name: "Cadastro de Materiais",
          url: "/CadastroMateriais",
          icon: "cui-wrench"
        }
      ]
    },
    {
      name: "Relatórios",
      url: "/App/l1",
      icon: "cui-task",
      children: [{}]
    }
  ]
};
