using System.Collections.Generic;
using System.Threading.Tasks;
using Eventos.Domain;
using Eventos.Domain.Identity;

namespace Eventos.Persistence.Contratos
{
    public interface IUserPersist : IGeralPersist
    {
        //Usuários
        Task<IEnumerable<User>> GetUsersAsync();
        Task<User> GetUserByIdAsync(int id);
        Task<User> GetUserByUserNameAsync(string userName);
    }
}