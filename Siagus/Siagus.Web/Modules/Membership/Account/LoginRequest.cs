using Serenity.ComponentModel;
using Serenity.Services;

namespace Siagus.Membership
{
    [FormScript("Membership.Login")]
    [BasedOnRow(typeof(Administration.Entities.UserRow), CheckNames = true)]
    public class LoginRequest : ServiceRequest
    {
        [Placeholder("masukkan Username anda di sini")]
        public string Username { get; set; }
        [PasswordEditor, Placeholder("masukkan Password anda di sini"), Required(true)]
        public string Password { get; set; }
    }
}