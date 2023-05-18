using System.Threading.Tasks;
using Eventos.Domain;

namespace Eventos.Persistence.Contratos
{
    public interface ILotePersist
    {
        //Lote
       /// <summary>
       /// Método get que retornara uma lista de lotes por eventoId
       /// </summary>
       /// <param name="eventoId">Códido chave da tabela evento</param>
       /// <returns>Array de Lotes</returns>
        Task<Lote[]> GetLotesByEventoIdAsync(int eventoId);
        /// <summary>
        /// Método get que retornara apenas 1 lote
        /// </summary>
        /// <param name="eventoId">Códido chave da tabela evento</param>
        /// <param name="id">Códido chave da tabela lote</param>
        /// <returns>Apenas 1 lote</returns>
        Task<Lote> GetLoteByIdsAsync(int eventoId, int id);
    }
}