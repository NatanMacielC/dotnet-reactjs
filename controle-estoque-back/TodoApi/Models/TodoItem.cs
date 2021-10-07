using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TodoApi.Models
{
    public class TodoItem
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public string Preco { get; set; }
        public string Fornecedor { get; set; }
        public string Marca { get; set; }
        public DateTime DataCadastro { get; set; }
     
    }
}
