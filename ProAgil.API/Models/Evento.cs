namespace ProAgil.API.Models
{
    public class Evento
    {
        public int Eventoid {get; set;}

        public string Local { get; set; }

        public string DataEvento { get; set; }

        public string Tema { get; set; }

        public int QtdPessoas { get; set; }

        public string Lote { get; set; }
    }
}